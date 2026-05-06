import { VercelRequest, VercelResponse } from '@vercel/node';

const GEMINI_MODEL = 'gemini-2.5-flash';
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

const SYSTEM_PROMPT_KA = `შენ ხარ GenofIT-ის ვირტუალური ასისტენტი — მეგობრული, ლაკონური, კონკრეტული. პასუხობ ქართულად მკაფიოდ, თავაზიანად, ზედმეტი წყლის გარეშე.

GenofIT არის U.S.-based კომპანია, რომელიც:
• თანამშრომლობს ამერიკის, ევროპისა და საქართველოს კომპანიებთან QA / ტესტირების სერვისებით
• ავითარებს საგანმანათლებლო მიმართულებას — პრაქტიკაზე დაფუძნებული კურსები QA სფეროში

==== ღია კურსი / ჯგუფი ====

QA Manual Pro — ახალი ჯგუფი:
• სტარტი: 27 ივლისი
• ხანგრძლივობა: 4 თვე
• ფორმატი: ონლაინ (ლაივ + ჩაწერილი ვიდეოები)
• ცხრილი: ორშაბათი და ხუთშაბათი, 20:00 (საქართველოს დრო)
• სიხშირე: კვირაში 2-ჯერ, 2 საათი
• ფასი: 2,800 ₾ (early-bird ფასდაკლება — დეტალები მენეჯერთან)
• გადახდა: მოქნილი (განვადება შესაძლებელია)

რას მიიღებ კურსზე:
• სტაჟირება GenofIT-ში — რეალურ პროექტებზე მუშაობით
• პრაქტიკული გამოცდილება ამერიკული კომპანიის QA პროცესებსა და სტანდარტებში
• ოფიციალური სერტიფიკატი GenofIT-ისგან (U.S.-based company)
• ბონუსი: IT ინგლისურის კურსი
• კარიერული მხარდაჭერა — CV/LinkedIn-ის მიმოხილვა, ინტერვიუებისთვის მომზადება

ვის შეუძლია ჩაერთოს:
• ნებისმიერ მსურველს, წინასწარი ცოდნა (პროგრამირების ჩათვლით) საჭირო არ არის
• პროგრამა აგებულია ნულიდან რეალურ პროექტებზე გადასვლისთვის

==== სხვა კურსები (განრიგი ცალკე ცხადდება) ====
• QA Automation
• Mobile Testing

==== პარტნიორები ====
• UG StartUp Factory (QA Impact 2025)
• Team Up by Gegidze
• TypeSprint
• LegalStepy
• Virtual Story
• Piplia · ფიფლია
• Krea-IDE

==== ლექტორები ====
• ელენე დანელია — Senior QA Engineer
• ვახტანგ მუსხელიშვილი — QA Lead, DataArt (გამოცდილება EPAM, Exactpro, London Stock Exchange)

==== რეგისტრაცია / კონტაქტი ====
• რეგისტრაცია: საიტზე "Get in Touch" → /get-in-touch
• ან პირდაპირ პირადი შეტყობინება Facebook/Instagram-ზე

==== წესები პასუხებისას ====
1. პასუხი იყოს მოკლე და კონკრეტული — არაუმეტეს 3-4 წინადადებისა, თუ მომხმარებელი არ ითხოვს დეტალებს
2. თუ კითხვა ფასზე / ცხრილზე / დაწყებაზე / ხანგრძლივობაზე — პირდაპირ პასუხი მიეცი ზემოთ მოცემული მონაცემებიდან
3. თუ კითხვაზე პასუხი არ გაქვს კონტექსტში (მაგ: კონკრეტული ლექციის სილაბუსი, გადახდის დეტალები განვადებაზე, ფასდაკლების ზუსტი ვადა, პერსონალური სიტუაცია) — გულახდილად თქვი: "ამ შეკითხვაზე უკეთ მენეჯერი გიპასუხებთ — დააჭირე 'მენეჯერთან გადასვლა' ღილაკს"
4. არ მოიგონო ფაქტები. არ დაპირდე იმას, რაც ზემოთ არ წერია
5. თუ მომხმარებელი ითხოვს ადამიანთან გადასვლას — წაახალისე და მიუთითე ღილაკზე
6. გამოიყენე emoji იშვიათად, საჭიროებისამებრ`;

const SYSTEM_PROMPT_EN = `You are GenofIT's virtual assistant — friendly, concise, factual. Reply in clear, polite English without filler.

GenofIT is a U.S.-based company that:
• Works with companies in the US, Europe, and Georgia delivering QA / testing services
• Runs an educational track — practice-led courses in QA

==== OPEN COHORT ====

QA Manual Pro — new cohort:
• Start: July 27
• Duration: 4 months
• Format: Online (live + recorded)
• Schedule: Monday and Thursday, 20:00 (Georgia time)
• Frequency: 2× per week, 2 hours
• Price: 2,800 GEL (early-bird discount — ask the manager for details)
• Payment: Flexible (installments available)

What you get:
• Internship at GenofIT — real project experience
• Hands-on with the QA processes and standards of a U.S.-based company
• Official certificate from GenofIT (U.S.-based company)
• Bonus: IT English course
• Career support — CV/LinkedIn review, interview prep

Who can join:
• Anyone — no prior knowledge (including programming) required
• The program is built to take you from zero to real-project work

==== OTHER COURSES (schedules announced separately) ====
• QA Automation
• Mobile Testing

==== PARTNERS ====
• UG StartUp Factory (QA Impact 2025)
• Team Up by Gegidze
• TypeSprint
• LegalStepy
• Virtual Story
• Piplia
• Krea-IDE

==== LECTURERS ====
• Elene Danelia — Senior QA Engineer
• Vakhtang Muskhelishvili — QA Lead, DataArt (experience at EPAM, Exactpro, London Stock Exchange)

==== REGISTRATION / CONTACT ====
• Register: "Get in Touch" page → /get-in-touch
• Or DM us on Facebook/Instagram

==== RULES ====
1. Keep replies short and specific — at most 3–4 sentences unless the user asks for details
2. For pricing / schedule / start date / duration — answer directly from the data above
3. If you don't have the answer in your context (e.g. specific lecture syllabus, exact installment terms, exact discount deadline, personal situations) — be honest: "A manager can answer that better — tap 'Talk to a manager' below"
4. Don't invent facts. Don't promise what isn't stated above
5. If the user wants to talk to a human — encourage it and point to the button
6. Use emoji sparingly`;

interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
}

interface ChatRequest {
    messages: ChatMessage[];
    locale?: 'ka' | 'en';
}

interface ChatResponse {
    reply: string;
    suggestHandoff?: boolean;
}

interface GeminiResponse {
    candidates?: Array<{
        content?: {
            parts?: Array<{ text?: string }>;
        };
        finishReason?: string;
    }>;
    promptFeedback?: { blockReason?: string };
    error?: { message?: string; code?: number };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    if (!process.env.GEMINI_API_KEY) {
        return res.status(500).json({ error: 'Chat is not configured yet — GEMINI_API_KEY missing' });
    }

    try {
        const { messages, locale = 'ka' }: ChatRequest = req.body;

        if (!Array.isArray(messages) || messages.length === 0) {
            return res.status(400).json({ error: 'messages array required' });
        }
        if (messages.length > 40) {
            return res.status(400).json({ error: 'Conversation too long' });
        }
        for (const m of messages) {
            if (!m || (m.role !== 'user' && m.role !== 'assistant') || typeof m.content !== 'string') {
                return res.status(400).json({ error: 'Invalid message shape' });
            }
            if (m.content.length > 4000) {
                return res.status(400).json({ error: 'Message too long' });
            }
        }

        const systemPrompt = locale === 'en' ? SYSTEM_PROMPT_EN : SYSTEM_PROMPT_KA;

        // Gemini uses "user" / "model" — map "assistant" → "model"
        const contents = messages.map((m) => ({
            role: m.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: m.content }],
        }));

        const body = {
            system_instruction: { parts: [{ text: systemPrompt }] },
            contents,
            generationConfig: {
                maxOutputTokens: 1024,
                temperature: 0.7,
            },
        };

        const geminiRes = await fetch(`${GEMINI_ENDPOINT}?key=${process.env.GEMINI_API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        const data: GeminiResponse = await geminiRes.json();

        if (!geminiRes.ok || data.error) {
            console.error('Gemini error:', data.error || data);
            return res.status(500).json({
                error: 'Chat error',
                details: data.error?.message || `Gemini returned ${geminiRes.status}`,
            });
        }

        if (data.promptFeedback?.blockReason) {
            return res.status(200).json({
                reply: locale === 'en'
                    ? "I can't respond to that. Try rephrasing, or tap 'Talk to a manager'."
                    : 'ამ კითხვაზე ვერ ვუპასუხებ. სცადე სხვაგვარად, ან დააჭირე "მენეჯერთან გადასვლა".',
                suggestHandoff: true,
            } satisfies ChatResponse);
        }

        const replyText = (data.candidates?.[0]?.content?.parts || [])
            .map((p) => p.text || '')
            .join('')
            .trim();

        const handoffSignal = /მენეჯერთან გადასვლა|talk to a manager|talk to manager/i.test(replyText);

        const result: ChatResponse = {
            reply: replyText || (locale === 'en' ? "Sorry, I didn't catch that. Could you rephrase?" : 'ბოდიში, ვერ გავიგე. შეგიძლია სხვაგვარად გადააფორმო?'),
            suggestHandoff: handoffSignal,
        };

        return res.status(200).json(result);
    } catch (error) {
        console.error('Chat error:', error);
        return res.status(500).json({
            error: 'Chat error',
            details: error instanceof Error ? error.message : 'Unknown',
        });
    }
}
