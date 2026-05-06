import { VercelRequest, VercelResponse } from '@vercel/node';

interface HandoffRequest {
    name?: string;
    contact: string;
    contactType: 'telegram' | 'phone' | 'email' | 'other';
    note?: string;
    locale?: 'ka' | 'en';
    transcript?: { role: 'user' | 'assistant'; content: string }[];
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, contact, contactType, note, locale, transcript }: HandoffRequest = req.body;

        if (!contact || typeof contact !== 'string' || contact.trim().length < 3) {
            return res.status(400).json({ error: 'Contact required' });
        }
        if (!['telegram', 'phone', 'email', 'other'].includes(contactType)) {
            return res.status(400).json({ error: 'Invalid contact type' });
        }

        // TODO: Telegram bot integration — when TELEGRAM_BOT_TOKEN + TELEGRAM_MANAGER_CHAT_ID are set,
        // post the lead + last 10 transcript messages to the manager's Telegram chat.
        const telegramConfigured = !!(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_MANAGER_CHAT_ID);

        if (telegramConfigured) {
            const lines = [
                '🆕 *New live-chat lead*',
                name ? `👤 Name: ${name}` : null,
                `📞 ${contactType}: ${contact}`,
                note ? `📝 Note: ${note}` : null,
                locale ? `🌐 Locale: ${locale}` : null,
                transcript && transcript.length
                    ? '\n*Last messages:*\n' +
                      transcript
                          .slice(-10)
                          .map((m) => `*${m.role}:* ${m.content}`)
                          .join('\n')
                    : null,
            ]
                .filter(Boolean)
                .join('\n');

            try {
                const tgRes = await fetch(
                    `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            chat_id: process.env.TELEGRAM_MANAGER_CHAT_ID,
                            text: lines,
                            parse_mode: 'Markdown',
                        }),
                    },
                );
                if (!tgRes.ok) {
                    console.error('Telegram send failed:', await tgRes.text());
                }
            } catch (tgErr) {
                console.error('Telegram error:', tgErr);
            }
        } else {
            // Until Telegram is wired up, log to function logs so the lead is at least visible
            console.log('[handoff] new lead', {
                name,
                contact,
                contactType,
                note,
                locale,
                transcriptLength: transcript?.length ?? 0,
            });
        }

        return res.status(200).json({ ok: true });
    } catch (error) {
        console.error('Handoff error:', error);
        return res.status(500).json({
            error: 'Handoff failed',
            details: error instanceof Error ? error.message : 'Unknown',
        });
    }
}
