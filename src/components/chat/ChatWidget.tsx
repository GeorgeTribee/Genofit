import { useState, useRef, useEffect } from 'react';
import type { FormEvent } from 'react';
import { MessageCircle, X, Send, User, Bot, Loader2, ArrowRight } from 'lucide-react';
import { useT } from '@/i18n/LanguageContext';

type ChatRole = 'user' | 'assistant';
interface ChatMsg {
    role: ChatRole;
    content: string;
}

type Mode = 'closed' | 'bot' | 'handoff' | 'handoff-sent';

const STORAGE_KEY = 'genofit.chat.history.v1';
const MAX_HISTORY = 30;

const ChatWidget = () => {
    const { locale } = useT();
    const isKa = locale === 'ka';

    const [mode, setMode] = useState<Mode>('closed');
    const [messages, setMessages] = useState<ChatMsg[]>(() => {
        if (typeof window === 'undefined') return [];
        try {
            const raw = window.localStorage.getItem(STORAGE_KEY);
            if (!raw) return [];
            const parsed = JSON.parse(raw);
            return Array.isArray(parsed) ? parsed.slice(-MAX_HISTORY) : [];
        } catch {
            return [];
        }
    });
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Handoff form state
    const [hoName, setHoName] = useState('');
    const [hoContactType, setHoContactType] = useState<'telegram' | 'phone' | 'email' | 'other'>('telegram');
    const [hoContact, setHoContact] = useState('');
    const [hoNote, setHoNote] = useState('');
    const [hoSending, setHoSending] = useState(false);

    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-MAX_HISTORY)));
        } catch {
            // localStorage full / disabled — ignore
        }
    }, [messages]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, mode]);

    const greeting: ChatMsg = {
        role: 'assistant',
        content: isKa
            ? 'გამარჯობა! 👋 GenofIT-ის ასისტენტი ვარ. შემიძლია ვუპასუხო კითხვებს კურსზე, ფასზე, ცხრილზე, რეგისტრაციაზე. რით დაგეხმარო?'
            : "Hi! 👋 I'm GenofIT's assistant. I can answer questions about the course, pricing, schedule, and registration. How can I help?",
    };

    const visibleMessages = messages.length === 0 ? [greeting] : messages;

    const sendMessage = async (e: FormEvent) => {
        e.preventDefault();
        const text = input.trim();
        if (!text || loading) return;

        const newUserMsg: ChatMsg = { role: 'user', content: text };
        const next = [...messages, newUserMsg];
        setMessages(next);
        setInput('');
        setLoading(true);
        setError(null);

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: next.slice(-MAX_HISTORY),
                    locale,
                }),
            });
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data?.error || 'Chat error');
            }
            setMessages([...next, { role: 'assistant', content: data.reply }]);
        } catch (err) {
            const msg = err instanceof Error ? err.message : 'Network error';
            setError(msg);
            setMessages([
                ...next,
                {
                    role: 'assistant',
                    content: isKa
                        ? 'ბოდიში, ვერ გავაგზავნე პასუხი. ცადე ხელახლა, ან დააჭირე "მენეჯერთან გადასვლა".'
                        : 'Sorry, I could not send a reply. Please try again, or tap "Talk to a manager".',
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const submitHandoff = async (e: FormEvent) => {
        e.preventDefault();
        if (!hoContact.trim() || hoSending) return;
        setHoSending(true);
        setError(null);
        try {
            const res = await fetch('/api/handoff', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: hoName.trim() || undefined,
                    contact: hoContact.trim(),
                    contactType: hoContactType,
                    note: hoNote.trim() || undefined,
                    locale,
                    transcript: messages.slice(-10),
                }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data?.error || 'Failed');
            setMode('handoff-sent');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Network error');
        } finally {
            setHoSending(false);
        }
    };

    const resetChat = () => {
        setMessages([]);
        setMode('bot');
        setError(null);
    };

    const contactPlaceholder = (() => {
        if (hoContactType === 'telegram') return isKa ? '@username ან +995...' : '@username or +995...';
        if (hoContactType === 'phone') return '+995 5XX XXX XXX';
        if (hoContactType === 'email') return 'name@example.com';
        return isKa ? 'როგორ დაგიკავშირდეთ' : 'How should we reach you';
    })();

    return (
        <>
            {/* Floating button */}
            {mode === 'closed' && (
                <button
                    type="button"
                    onClick={() => setMode('bot')}
                    aria-label={isKa ? 'ჩატის გახსნა' : 'Open chat'}
                    className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#3FC4E2] hover:bg-[#3FC4E2]/90 text-[#00263E] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                    <MessageCircle className="w-6 h-6" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#F05A26] rounded-full animate-pulse" />
                    <span className="absolute right-full mr-3 px-3 py-1.5 rounded-md bg-[#0B2A45] text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        {isKa ? 'გვკითხე რამე' : 'Ask us anything'}
                    </span>
                </button>
            )}

            {/* Chat panel */}
            {mode !== 'closed' && (
                <div className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] sm:w-[400px] max-w-[400px] h-[600px] max-h-[calc(100vh-3rem)] flex flex-col bg-[#0B2A45] border border-white/10 rounded-2xl shadow-2xl overflow-hidden text-white">
                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#0B2A45] to-[#062138] border-b border-white/10">
                        <div className="flex items-center gap-2.5">
                            <div className="w-9 h-9 rounded-full bg-[#3FC4E2] flex items-center justify-center text-[#00263E]">
                                <Bot className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-sm font-semibold leading-tight">GenofIT</div>
                                <div className="text-[11px] text-white/50 leading-tight">
                                    {mode === 'bot'
                                        ? isKa ? 'ვირტუალური ასისტენტი' : 'Virtual assistant'
                                        : mode === 'handoff'
                                        ? isKa ? 'გადაერთე მენეჯერზე' : 'Switching to a manager'
                                        : isKa ? 'მოთხოვნა გაგზავნილია' : 'Request sent'}
                                </div>
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={() => setMode('closed')}
                            aria-label={isKa ? 'დახურვა' : 'Close'}
                            className="w-8 h-8 rounded-md text-white/60 hover:text-white hover:bg-white/5 flex items-center justify-center transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* === BOT MODE === */}
                    {mode === 'bot' && (
                        <>
                            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
                                {visibleMessages.map((m, i) => (
                                    <div key={i} className={`flex gap-2 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                                        <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${m.role === 'user' ? 'bg-white/10' : 'bg-[#3FC4E2]/20 text-[#3FC4E2]'}`}>
                                            {m.role === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                                        </div>
                                        <div className={`max-w-[78%] px-3.5 py-2.5 rounded-xl text-sm leading-relaxed whitespace-pre-wrap ${m.role === 'user' ? 'bg-[#3FC4E2] text-[#00263E] rounded-tr-sm' : 'bg-white/[0.06] text-white/90 rounded-tl-sm'}`}>
                                            {m.content}
                                        </div>
                                    </div>
                                ))}
                                {loading && (
                                    <div className="flex gap-2">
                                        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#3FC4E2]/20 text-[#3FC4E2] flex items-center justify-center">
                                            <Bot className="w-3.5 h-3.5" />
                                        </div>
                                        <div className="px-3.5 py-2.5 rounded-xl bg-white/[0.06] text-white/60 text-sm">
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                        </div>
                                    </div>
                                )}
                                {error && (
                                    <div className="text-[11px] text-red-300/80 px-2">{error}</div>
                                )}
                            </div>

                            <div className="px-3 pt-2 pb-1 border-t border-white/[0.06] flex items-center gap-2">
                                <button
                                    type="button"
                                    onClick={() => setMode('handoff')}
                                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-[11px] font-medium text-white/70 hover:text-[#3FC4E2] hover:bg-white/[0.04] transition-colors"
                                >
                                    <span>{isKa ? '👤 მენეჯერთან გადასვლა' : '👤 Talk to a manager'}</span>
                                </button>
                                {messages.length > 0 && (
                                    <button
                                        type="button"
                                        onClick={resetChat}
                                        className="px-2 py-2 text-[11px] text-white/40 hover:text-white/70 transition-colors"
                                    >
                                        {isKa ? 'ახალი' : 'New'}
                                    </button>
                                )}
                            </div>

                            <form onSubmit={sendMessage} className="px-3 pb-3 pt-1 border-t border-white/[0.04]">
                                <div className="flex items-end gap-2 bg-white/[0.04] border border-white/10 rounded-xl px-3 py-2 focus-within:border-[#3FC4E2]/40 transition-colors">
                                    <textarea
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' && !e.shiftKey) {
                                                e.preventDefault();
                                                sendMessage(e as unknown as FormEvent);
                                            }
                                        }}
                                        placeholder={isKa ? 'დაწერე შეტყობინება...' : 'Type a message...'}
                                        rows={1}
                                        className="flex-1 resize-none bg-transparent text-sm text-white placeholder-white/30 outline-none max-h-24"
                                        disabled={loading}
                                    />
                                    <button
                                        type="submit"
                                        disabled={loading || !input.trim()}
                                        aria-label="Send"
                                        className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#3FC4E2] text-[#00263E] hover:bg-[#3FC4E2]/90 disabled:bg-white/10 disabled:text-white/30 transition-colors flex items-center justify-center"
                                    >
                                        <Send className="w-4 h-4" />
                                    </button>
                                </div>
                            </form>
                        </>
                    )}

                    {/* === HANDOFF FORM === */}
                    {mode === 'handoff' && (
                        <form onSubmit={submitHandoff} className="flex-1 overflow-y-auto px-5 py-5 space-y-4">
                            <div className="space-y-1.5">
                                <h3 className="text-base font-semibold leading-tight">
                                    {isKa ? 'მენეჯერი დაგიკავშირდება' : 'A manager will contact you'}
                                </h3>
                                <p className="text-xs text-white/55 leading-relaxed">
                                    {isKa
                                        ? 'დატოვე საკონტაქტო ინფორმაცია — მენეჯერი დაგიკავშირდება მოკლე დროში.'
                                        : 'Leave your contact info — a manager will reach out shortly.'}
                                </p>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[11px] uppercase tracking-wider text-white/45 font-semibold">
                                    {isKa ? 'სახელი (ნებაყოფლობითი)' : 'Name (optional)'}
                                </label>
                                <input
                                    value={hoName}
                                    onChange={(e) => setHoName(e.target.value)}
                                    className="w-full bg-white/[0.04] border border-white/10 rounded-md px-3 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-[#3FC4E2]/40 transition-colors"
                                    placeholder={isKa ? 'შენი სახელი' : 'Your name'}
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[11px] uppercase tracking-wider text-white/45 font-semibold">
                                    {isKa ? 'როგორ დაგიკავშირდე?' : 'How should we reach you?'}
                                </label>
                                <div className="grid grid-cols-4 gap-1">
                                    {(['telegram', 'phone', 'email', 'other'] as const).map((t) => (
                                        <button
                                            key={t}
                                            type="button"
                                            onClick={() => setHoContactType(t)}
                                            className={`text-[11px] py-2 rounded-md transition-colors ${hoContactType === t ? 'bg-[#3FC4E2] text-[#00263E] font-semibold' : 'bg-white/[0.04] text-white/60 hover:bg-white/[0.08]'}`}
                                        >
                                            {t === 'telegram' ? 'Telegram' : t === 'phone' ? (isKa ? 'ტელ.' : 'Phone') : t === 'email' ? 'Email' : (isKa ? 'სხვა' : 'Other')}
                                        </button>
                                    ))}
                                </div>
                                <input
                                    value={hoContact}
                                    onChange={(e) => setHoContact(e.target.value)}
                                    required
                                    className="w-full bg-white/[0.04] border border-white/10 rounded-md px-3 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-[#3FC4E2]/40 transition-colors"
                                    placeholder={contactPlaceholder}
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[11px] uppercase tracking-wider text-white/45 font-semibold">
                                    {isKa ? 'შეკითხვა (ნებაყოფლობითი)' : 'Your question (optional)'}
                                </label>
                                <textarea
                                    value={hoNote}
                                    onChange={(e) => setHoNote(e.target.value)}
                                    rows={2}
                                    className="w-full bg-white/[0.04] border border-white/10 rounded-md px-3 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-[#3FC4E2]/40 transition-colors resize-none"
                                    placeholder={isKa ? 'მოკლედ აღწერე რა გაინტერესებს' : 'Briefly describe what you want to ask'}
                                />
                            </div>

                            {error && <div className="text-[11px] text-red-300/80">{error}</div>}

                            <div className="flex gap-2 pt-1">
                                <button
                                    type="button"
                                    onClick={() => setMode('bot')}
                                    className="px-4 py-2.5 rounded-md text-sm text-white/60 hover:text-white hover:bg-white/[0.06] transition-colors"
                                >
                                    {isKa ? 'უკან' : 'Back'}
                                </button>
                                <button
                                    type="submit"
                                    disabled={hoSending || !hoContact.trim()}
                                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold bg-[#3FC4E2] text-[#00263E] hover:bg-[#3FC4E2]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    {hoSending ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowRight className="w-4 h-4" />}
                                    <span>{isKa ? 'გაგზავნა' : 'Send'}</span>
                                </button>
                            </div>
                        </form>
                    )}

                    {/* === HANDOFF SENT === */}
                    {mode === 'handoff-sent' && (
                        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center space-y-4">
                            <div className="w-16 h-16 rounded-full bg-[#3FC4E2]/15 flex items-center justify-center">
                                <Bot className="w-8 h-8 text-[#3FC4E2]" />
                            </div>
                            <div className="space-y-1.5">
                                <h3 className="text-lg font-semibold">
                                    {isKa ? 'მადლობა! 🙌' : 'Thank you! 🙌'}
                                </h3>
                                <p className="text-sm text-white/65 leading-relaxed">
                                    {isKa
                                        ? 'მენეჯერი მოკლე დროში დაგიკავშირდება მითითებულ კონტაქტზე.'
                                        : 'A manager will reach out shortly via the contact you provided.'}
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setMode('bot')}
                                className="text-sm text-[#3FC4E2] hover:text-[#3FC4E2]/80 transition-colors"
                            >
                                {isKa ? '← ჩატში დაბრუნება' : '← Back to chat'}
                            </button>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default ChatWidget;
