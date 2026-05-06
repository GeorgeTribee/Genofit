import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, CheckCircle2, Wrench, Globe, GraduationCap, Code, Smartphone, Accessibility, ChevronLeft, ChevronRight, Camera, Linkedin } from "lucide-react";
import CourseCard from "@/components/courses/CourseCard";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useT } from "@/i18n/LanguageContext";

// Section eyebrow — colored pill with pulsing accent dot.
const Eyebrow = ({ children, color = '#3FC4E2' }: { children: React.ReactNode; color?: string }) => {
    const isHex = color.startsWith('#');
    const rgba = (alpha: number) => {
        if (!isHex) return color;
        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    return (
        <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-[11px] font-semibold tracking-[0.08em] uppercase mb-5"
            style={{
                borderColor: rgba(0.3),
                backgroundColor: rgba(0.1),
                color,
            }}
        >
            <span className="relative flex w-1.5 h-1.5">
                <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                    style={{ backgroundColor: color }}
                />
                <span
                    className="relative inline-flex w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: color }}
                />
            </span>
            {children}
        </div>
    );
};

const Home = () => {
    const location = useLocation();
    const { t, locale } = useT();
    const [heroVisible, setHeroVisible] = useState(false);
    const graduatesScrollRef = useRef<HTMLDivElement>(null);
    const [graduatesPaused, setGraduatesPaused] = useState(false);
    const lecturersScrollRef = useRef<HTMLDivElement>(null);
    const [lecturersPaused, setLecturersPaused] = useState(false);
    const partnersScrollRef = useRef<HTMLDivElement>(null);
    const [partnersPaused, setPartnersPaused] = useState(false);
    const [partnershipsPaused, setPartnershipsPaused] = useState(false);
    const communityScrollRef = useRef<HTMLDivElement>(null);
    const [communityPaused, setCommunityPaused] = useState(false);

    useEffect(() => {
        const id = requestAnimationFrame(() => setHeroVisible(true));
        return () => cancelAnimationFrame(id);
    }, []);

    const useMarqueeScroll = (
        ref: React.RefObject<HTMLDivElement | null>,
        paused: boolean,
        speed = 35,
    ) => {
        useEffect(() => {
            const el = ref.current;
            if (!el) return;
            let rafId: number;
            let last = 0;
            const tick = (t: number) => {
                if (!paused && last) {
                    const dt = t - last;
                    el.scrollLeft += (speed * dt) / 1000;
                    const half = el.scrollWidth / 2;
                    if (half > 0 && el.scrollLeft >= half) el.scrollLeft -= half;
                }
                last = t;
                rafId = requestAnimationFrame(tick);
            };
            rafId = requestAnimationFrame(tick);
            return () => cancelAnimationFrame(rafId);
        }, [ref, paused, speed]);
    };

    useMarqueeScroll(graduatesScrollRef, graduatesPaused);
    useMarqueeScroll(lecturersScrollRef, lecturersPaused);
    useMarqueeScroll(partnersScrollRef, partnersPaused, 30);
    useMarqueeScroll(communityScrollRef, communityPaused, 25);

    const scrollByAmount = (ref: React.RefObject<HTMLDivElement | null>, dir: 1 | -1, amount = 280) => {
        ref.current?.scrollBy({ left: dir * amount, behavior: 'smooth' });
    };
    const scrollGraduates = (dir: 1 | -1) => scrollByAmount(graduatesScrollRef, dir);
    const scrollLecturers = (dir: 1 | -1) => scrollByAmount(lecturersScrollRef, dir);
    const scrollPartners = (dir: 1 | -1) => scrollByAmount(partnersScrollRef, dir, 240);
    const scrollCommunity = (dir: 1 | -1) => scrollByAmount(communityScrollRef, dir, 280);

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.substring(1);
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => element.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
            }
        }
    }, [location]);

    const qaManualProCohort = {
        image: '/cohorts/qa-manual-pro-jul27.jpg',
        kind: locale === 'ka' ? 'ახალი ჯგუფი · რეგისტრაცია ღიაა' : 'New cohort · Registration open',
        headline: locale === 'ka'
            ? 'რეგისტრაცია დაიწყო — QA Manual Pro | ახალი ჯგუფი'
            : 'Registration is open — QA Manual Pro | new cohort',
        details: locale === 'ka' ? [
            { label: 'ხანგრძლივობა', value: '4 თვე' },
            { label: 'სტარტი', value: '27 ივლისი' },
            { label: 'ფორმატი', value: 'ონლაინ' },
            { label: 'სიხშირე', value: 'კვირაში 2-ჯერ' },
        ] : [
            { label: 'Duration', value: '4 months' },
            { label: 'Start', value: 'July 27' },
            { label: 'Format', value: 'Online' },
            { label: 'Frequency', value: '2× per week' },
        ],
        body: locale === 'ka' ? [
            'IT სფეროში კარიერის დასაწყებად პროგრამირების ცოდნა ყოველთვის აუცილებელი არ არის. ერთ-ერთი ყველაზე რეალური და მოთხოვნადი მიმართულება, საიდანაც შესაძლებელია კარიერის დაწყება, არის Software Testing / QA.',
            'QA Manual Pro არის GenofIT-ის 4-თვიანი პროგრამა, რომელიც შექმნილია მათთვის, ვისაც სურს ნულიდან მიიღოს პრაქტიკული ცოდნა და მოემზადოს რეალური სამუშაო გარემოსთვის.',
            'პროგრამა აგებულია პრაქტიკაზე და მოიცავს იმ უნარებსა და სამუშაო მიდგომებს, რომლებიც აუცილებელია დამწყები QA სპეციალისტისთვის, რათა შეძლოს რეალურ ამოცანებზე მუშაობა და კონკურენტუნარიანი გახდეს დასაქმებისთვის.',
        ] : [
            'You don\'t always need programming skills to start a career in IT. One of the most realistic and in-demand entry points is Software Testing / QA.',
            'QA Manual Pro is GenofIT\'s 4-month program built for those who want to gain practical knowledge from scratch and prepare for a real-world working environment.',
            'The program is practice-led and covers the skills a junior QA needs to handle real tasks and become competitive on the job market.',
        ],
        perks: locale === 'ka' ? [
            'სტაჟირება GenofIT-ში — რეალურ პროექტებზე მუშაობით',
            'პრაქტიკული გამოცდილება ამერიკული კომპანიის QA პროცესებსა და სტანდარტებში',
            'ოფიციალური სერტიფიკატი GenofIT-ისგან (U.S.-based company)',
            'ბონუსი: IT ინგლისურის კურსი',
        ] : [
            'Internship at GenofIT — working on real projects',
            'Hands-on experience with the QA processes and standards of a U.S.-based company',
            'Official certificate from GenofIT (U.S.-based company)',
            'Bonus: IT English course',
        ],
    };

    const courses = [
        {
            id: "1",
            title: "QA Manual Pro",
            index: ".01",
            category: "QA",
            description: locale === 'ka'
                ? "მანუალური QA: ტესტ გეგმები, ბაგ რეპორტები, რეგრესია, Jira."
                : "Manual QA: test plans, bug reports, regression, and Jira workflow.",
            instructor: { name: "", role: "", image: "" },
        },
        {
            id: "2",
            title: "QA Automation",
            index: ".02",
            category: "QA",
            description: locale === 'ka'
                ? "ავტომატური ტესტ სუიტები, ჩარჩოები და CI/CD ინტეგრაცია."
                : "Automated test suites, frameworks, and CI/CD integration.",
            instructor: { name: "", role: "", image: "" },
            isEnded: true,
        },
        {
            id: "3",
            title: "Software Testing Fundamentals",
            index: ".03",
            category: "QA",
            description: locale === 'ka'
                ? "ტესტირების ლექსიკონი, მეთოდოლოგიები, თეორიის საფუძვლები."
                : "Testing vocabulary, methodologies, and core foundations.",
            instructor: { name: "", role: "", image: "" },
        },
    ];

    const whyUs = [
        { icon: CheckCircle2, key: "f1" },
        { icon: Wrench, key: "f2" },
        { icon: Globe, key: "f3" },
        { icon: GraduationCap, key: "f4" },
    ];

    const b2bServices = [
        { icon: Code, key: "s1" },
        { icon: Smartphone, key: "s2" },
        { icon: Accessibility, key: "s3" },
    ];

    const graduates = [
        {
            id: 'bagrat-injgia',
            name: locale === 'ka' ? 'ბაგრატ ინჯგია' : 'Bagrat Injgia',
            role: 'Manual Tester · Nugios Technology',
            photo: '/graduates/bagrat-injgia.jpg',
            headline: locale === 'ka'
                ? 'GenofIT-ის კურსდამთავრებული — დასაქმდა Nugios Technology-ში'
                : 'GenofIT graduate — hired at Nugios Technology',
            bio: locale === 'ka' ? [
                'ბაგრატი GenofIT-ის სასწავლო პროგრამის კიდევ ერთი ხელშესახები შედეგია — წარმატებით შეუერთდა Nugios Technology-ის გუნდს QA როლზე.',
                'სასწავლო პროცესში მან აჩვენა მაღალი პასუხისმგებლობა, ანალიტიკური აზროვნება და ძლიერი პროცეს-ორიენტირებული მიდგომა. მან გამოიჩინა თანაბრად მყარი შედეგი როგორც QA-ს ფუნდამენტების გააზრებაში, ისე პრაქტიკულ სამუშაოში — რეალური პროექტებით, რეალური მოთხოვნებითა და რეალური პასუხისმგებლობით.',
                'დეტალებისადმი ყურადღება და სტრუქტურირებული მუშაობის სტილი ნათლად გამოხატავდა მზადყოფნას იმ გარემოსთვის, სადაც ხარისხი და სიზუსტე გადამწყვეტია.',
                'ვულოცავთ Nugios Technology-ს გუნდის გაძლიერებას — ბაგრატ ინჯგიას კი წარმატებულ პროფესიულ ზრდასა და შედეგებზე ორიენტირებულ კარიერას ვუსურვებთ.',
            ] : [
                'Bagrat is another tangible result from GenofIT\'s training program — successfully joining the Nugios Technology team in a QA role.',
                'Throughout the training process, he demonstrated a high level of responsibility, analytical thinking, and a strong process-oriented mindset. He delivered equally solid results in understanding QA fundamentals and in hands-on practice — working with real projects, real requirements, and real accountability.',
                'His attention to detail and structured working style clearly showed readiness for an environment where quality and precision are critical.',
                'Congratulations to Nugios Technology on strengthening their team — and to Bagrat, we wish continued professional growth and a results-driven career path.',
            ],
            highlights: locale === 'ka' ? [
                'მაღალი პასუხისმგებლობა და ანალიტიკური აზროვნება',
                'პროცეს-ორიენტირებული მიდგომა',
                'QA-ს ფუნდამენტების ძლიერი გააზრება',
                'პრაქტიკული მუშაობა რეალურ პროექტებზე',
                'დეტალებისადმი მაღალი ყურადღება',
            ] : [
                'High responsibility and analytical thinking',
                'Process-oriented mindset',
                'Strong grasp of QA fundamentals',
                'Hands-on work on real-world projects',
                'Strong attention to detail',
            ],
        },
        {
            id: 'natia-mishvelidze',
            name: locale === 'ka' ? 'ნათია მიშველიძე' : 'Natia Mishvelidze',
            role: 'Manual Tester · HR Thoth',
            photo: '/graduates/natia-mishvelidze.jpg',
            headline: locale === 'ka'
                ? 'QA Manual Pro-ს კურსდამთავრებული — დასაქმდა HR Thoth-ში'
                : 'QA Manual Pro graduate — hired at HR Thoth',
            bio: locale === 'ka' ? [
                'ნათია GenofIT-ის QA Manual Pro კურსის წარმატებული კურსდამთავრებულია — დღეს ის ქართულ ტექნოლოგიურ კომპანია HR Thoth-ში Manual Tester-ის პოზიციაზე მუშაობს.',
                'სასწავლო პროცესში ნათიამ აჩვენა მაღალი პასუხისმგებლობა, პრაქტიკულ დავალებებზე კონცენტრაცია და სტაბილური პროგრესი — სწორედ ის ფაქტორები, რომლებიც რეალურ სამუშაო გარემოში შედეგს იძლევა.',
                'ვულოცავთ HR Thoth-ს ახალი გუნდის წევრის შეძენას, ხოლო ნათიას ვუსურვებთ დიდ წარმატებას პროფესიულ განვითარებაში.',
            ] : [
                'Natia is a successful graduate of GenofIT\'s QA Manual Pro course — now working as a Manual Tester at the Georgian technology company HR Thoth.',
                'Throughout the program, Natia showed strong responsibility, focus on practical assignments, and steady progress — the very factors that translate into results in a real working environment.',
                'Congratulations to HR Thoth on the new team member. We wish Natia continued success and professional growth.',
            ],
            highlights: locale === 'ka' ? [
                'მაღალი პასუხისმგებლობა',
                'პრაქტიკულ დავალებებზე კონცენტრაცია',
                'სტაბილური პროგრესი კურსის განმავლობაში',
                'რეალურ სამუშაო გარემოში შედეგზე ორიენტაცია',
                'Manual Testing-ის ძლიერი ფუნდამენტი',
            ] : [
                'High responsibility',
                'Focus on hands-on assignments',
                'Steady progress throughout the course',
                'Results-oriented in real-world settings',
                'Strong Manual Testing foundation',
            ],
        },
        {
            id: 'ketevan-nanuashvili',
            name: locale === 'ka' ? 'ქეთევან ნანუაშვილი' : 'Ketevan Nanuashvili',
            role: 'QA Engineer · Asterbit',
            photo: '/graduates/ketevan-nanuashvili.jpg',
            headline: locale === 'ka'
                ? 'Automation Testing-ის კურსდამთავრებული — დასაქმდა Asterbit-ში'
                : 'Automation Testing graduate — hired at Asterbit',
            bio: locale === 'ka' ? [
                'ქეთევანი GenofIT-ის Automation Testing კურსის წარმატებული კურსდამთავრებულია. დღეს ის ქართულ ტექნოლოგიურ კომპანია Asterbit-ში QA Engineer-ის პოზიციაზე მუშაობს.',
                'სასწავლო პროცესში ქეთევანმა აჩვენა მაღალი პასუხისმგებლობა, პრაქტიკულ დავალებებზე კონცენტრაცია და სტაბილური პროგრესი. სწორედ ეს თვისებები ეხმარება მას რეალურ სამუშაო გარემოში საუკეთესო შედეგების მიღწევაში.',
                'ვულოცავთ Asterbit-ს ახალი გუნდის წევრის შეძენას, ხოლო ქეთევანს ვუსურვებთ დიდ წარმატებას პროფესიულ განვითარებაში.',
            ] : [
                'Ketevan is a successful graduate of GenofIT\'s Automation Testing course — now working as a QA Engineer at the Georgian technology company Asterbit.',
                'Throughout the program, Ketevan showed strong responsibility, focus on practical assignments, and steady progress — qualities that now power her real-world results on the job.',
                'Congratulations to Asterbit on the new team member. We wish Ketevan continued success and professional growth.',
            ],
            highlights: locale === 'ka' ? [
                'მაღალი პასუხისმგებლობა',
                'პრაქტიკულ დავალებებზე კონცენტრაცია',
                'სტაბილური პროგრესი კურსის განმავლობაში',
                'რეალურ სამუშაო გარემოში შედეგზე ორიენტაცია',
                'Automation Testing-ის ძლიერი ფუნდამენტი',
            ] : [
                'High responsibility',
                'Focus on hands-on assignments',
                'Steady progress throughout the course',
                'Results-oriented in real-world settings',
                'Strong Automation Testing foundation',
            ],
        },
        {
            id: 'levani-tserediani',
            name: locale === 'ka' ? 'ლევან წერედიანი' : 'Levani Tserediani',
            role: 'QA Engineer · Solvd, Inc. (US)',
            photo: '/graduates/levani-tserediani.jpg',
            headline: locale === 'ka'
                ? 'GenofIT-ის კურსდამთავრებული — დასაქმდა ამერიკულ Solvd, Inc.-ში'
                : 'GenofIT graduate — hired at US-based Solvd, Inc.',
            bio: locale === 'ka' ? [
                'ლევანი GenofIT-ის კიდევ ერთი ვარსკვლავია — პრაქტიკაზე დაფუძნებული სწავლის შედეგი, რომელიც პროფესიულ საქმიანობას ამერიკულ ტექნოლოგიურ კომპანია Solvd, Inc.-ში QA Engineer-ის პოზიციაზე იწყებს.',
                'ამერიკულ ტექნოლოგიურ კომპანიაში დასაქმება კიდევ ერთხელ ადასტურებს, რომ პრაქტიკაზე დაფუძნებული სწავლა, რეალური პროცესები და სწორი მიდგომა ქმნის შედეგს, რომელიც კონკურენტულ გარემოშიც ჩანს.',
                'ვუსურვებთ ლევანს პროფესიულ ზრდას და წარმატებას ახალ როლში. Solvd, Inc.-ს კი — წარმატებულ პროექტებსა და განვითარებას.',
            ] : [
                'Levani is another GenofIT star — a clear result of practice-driven learning, beginning his professional career at the US technology company Solvd, Inc. as a QA Engineer.',
                'Joining a US tech company once again confirms that practice-based learning, real-world processes, and the right approach produce results that hold up in a competitive global environment.',
                'We wish Levani professional growth and success in his new role — and Solvd, Inc. continued successful projects and growth.',
            ],
            highlights: locale === 'ka' ? [
                'პრაქტიკაზე დაფუძნებული სწავლის ნათელი შედეგი',
                'რეალურ პროცესებზე გაწაფული მიდგომა',
                'საერთაშორისო ტექ-კომპანიასთან თავსებადობა',
                'კონკურენტულ გარემოში მზადყოფნა',
                'QA Engineer-ის როლისთვის სრულფასოვანი ბაზა',
            ] : [
                'Clear result of practice-based learning',
                'Honed approach to real-world processes',
                'Fit for an international tech company',
                'Ready for a competitive environment',
                'Solid foundation for the QA Engineer role',
            ],
        },
        {
            id: 'data-saginadze',
            name: locale === 'ka' ? 'დათა საგინაძე' : 'Data Saginadze',
            role: 'Manual Tester · GetBotai (US)',
            photo: '/graduates/data-saginadze.jpg',
            headline: locale === 'ka'
                ? 'QA Manual Pro-ს კურსდამთავრებული — დასაქმდა ამერიკულ GetBotai-ში'
                : 'QA Manual Pro graduate — hired at US-based GetBotai',
            bio: locale === 'ka' ? [
                'დათა GenofIT-ის QA Manual Pro კურსის ერთ-ერთი საუკეთესო კურსდამთავრებულია. პროფესიულ გზას ის ამერიკულ კომპანია GetBotai-ში Manual Tester-ის პოზიციაზე იწყებს.',
                'კურსის განმავლობაში დათამ გამოავლინა გამორჩეული შესაძლებლობები და დიდი მონდომება. მისმა ანალიტიკურმა აზროვნებამ და პროფესიულმა მიდგომამ განსაკუთრებული შთაბეჭდილება მოახდინა როგორც GenofIT-ის ინსტრუქტორებზე, ისე GetBotai-ის გუნდზე.',
                'ვულოცავთ GetBotai-ს ნიჭიერი და პერსპექტიული სპეციალისტის გუნდში მიღებას. დათას კი ვუსურვებთ ბრწყინვალე კარიერულ წარმატებას და უწყვეტ პროფესიულ ზრდას საერთაშორისო IT ინდუსტრიაში.',
            ] : [
                'Data is one of the standout graduates of GenofIT\'s QA Manual Pro program — beginning his professional journey as a Manual Tester at the US-based GetBotai.',
                'Throughout the course, Data demonstrated exceptional ability and dedication. His analytical thinking and professional approach left a strong impression on both GenofIT instructors and the GetBotai team.',
                'Congratulations to GetBotai on welcoming such a talented and promising specialist. We wish Data brilliant career success and continuous professional growth in the international IT industry.',
            ],
            highlights: locale === 'ka' ? [
                'გამორჩეული შესაძლებლობები და მონდომება',
                'ძლიერი ანალიტიკური აზროვნება',
                'პროფესიული მიდგომა საქმისადმი',
                'საერთაშორისო IT გარემოსთვის მზადყოფნა',
                'GenofIT-ის ერთ-ერთი საუკეთესო კურსდამთავრებული',
            ] : [
                'Outstanding ability and dedication',
                'Strong analytical thinking',
                'Professional approach to the work',
                'Ready for an international IT environment',
                'One of GenofIT\'s top graduates',
            ],
        },
        {
            id: 'sopho-salamashvili',
            name: locale === 'ka' ? 'სოფო სალამაშვილი' : 'Sopho Salamashvili',
            role: 'QA Tester · Davaleba.com',
            photo: '/graduates/sopho-salamashvili.jpg',
            headline: locale === 'ka'
                ? 'QA Manual Pro-ს კურსდამთავრებული — დასაქმდა Davaleba.com-ში'
                : 'QA Manual Pro graduate — hired at Davaleba.com',
            bio: locale === 'ka' ? [
                'სოფომ GenofIT-ის QA Manual Pro-ს გავლის შემდეგ წარმატებით დაიწყო პროფესიული კარიერა — დღეს ის Davaleba.com-ში QA Tester-ის პოზიციაზე მუშაობს.',
                'სასწავლო პროცესში სოფომ გამოავლინა მაღალი მოტივაცია და პროფესიონალიზმი. მოკლე დროში აითვისა ტესტირების როგორც თეორიული პრინციპები, ისე პრაქტიკული უნარები.',
                'მისი ხარისხზე ორიენტირებული მუშაობით, სოფომ Davaleba.com-ის გუნდის ნდობა დაიმსახურა.',
                'ვულოცავთ Davaleba.com-ის გუნდს ნიჭიერი სპეციალისტის შემატებას. სოფოს კი ვუსურვებთ წარმატებულ კარიერულ დასაწყისს, პროფესიულ ზრდასა და ახალ მიღწევებს.',
            ] : [
                'After completing GenofIT\'s QA Manual Pro, Sopho launched her professional career — she now works as a QA Tester at Davaleba.com.',
                'Throughout the training, Sopho showed high motivation and professionalism, quickly mastering both the theoretical principles and practical skills of testing.',
                'Through her quality-focused work, she earned the trust of the Davaleba.com team.',
                'Congratulations to Davaleba.com on the new addition. We wish Sopho a great career start, continued professional growth, and new achievements.',
            ],
            highlights: locale === 'ka' ? [
                'მაღალი მოტივაცია და პროფესიონალიზმი',
                'სწრაფი დასწავლა — თეორია და პრაქტიკა',
                'ხარისხზე ორიენტირებული მუშაობის სტილი',
                'გუნდთან ნდობის დამსახურება',
                'პრაქტიკული QA უნარების მყარი ბაზა',
            ] : [
                'High motivation and professionalism',
                'Fast learning — theory and practice',
                'Quality-focused working style',
                'Earned trust within the team',
                'Solid practical QA skill base',
            ],
        },
        {
            id: 'mariam-kostava',
            name: locale === 'ka' ? 'მარიამ კოსტავა' : 'Mariam Kostava',
            role: 'Manual Tester · TBC Bank',
            photo: '/graduates/mariam-kostava.jpg',
            headline: locale === 'ka'
                ? 'QA Manual Pro-ს კურსდამთავრებული — დასაქმდა TBC-ში'
                : 'QA Manual Pro graduate — hired at TBC Bank',
            bio: locale === 'ka' ? [
                'მარიამი GenofIT-ის QA Manual Pro პროგრამის კიდევ ერთი წარმატებული კურსდამთავრებულია, რომელიც პროფესიულ კარიერას საქართველოს ერთ-ერთ წამყვან ბანკში — TBC-ში, Manual Tester-ის პოზიციაზე იწყებს.',
                'პროგრამის განმავლობაში მარიამმა გამოავლინა ის მთავარი თვისებები, რაც წარმატებული ტესტერისთვის გადამწყვეტია: ანალიტიკური აზროვნება, მაღალი პასუხისმგებლობა და საქმისადმი პროფესიონალური მიდგომა.',
                'ვულოცავთ მარიამს ამ შესანიშნავ კარიერულ სტარტს და ვუსურვებთ წარმატებებს მის ახალ პროფესიულ ეტაპზე.',
            ] : [
                'Mariam is another successful graduate of GenofIT\'s QA Manual Pro program — starting her professional career at TBC, one of Georgia\'s leading banks, as a Manual Tester.',
                'Throughout the program, she demonstrated the qualities that define a successful tester: analytical thinking, high responsibility, and a professional approach to the work.',
                'Congratulations to Mariam on this excellent career start. We wish her continued success in this new professional chapter.',
            ],
            highlights: locale === 'ka' ? [
                'ანალიტიკური აზროვნება',
                'მაღალი პასუხისმგებლობა',
                'საქმისადმი პროფესიონალური მიდგომა',
                'წამყვან ბანკთან თავსებადი სამუშაო ეთიკა',
                'QA-ს ფუნდამენტების მყარი ცოდნა',
            ] : [
                'Analytical thinking',
                'High responsibility',
                'Professional approach to work',
                'Work ethic suited to a top-tier bank',
                'Strong grasp of QA fundamentals',
            ],
        },
        {
            id: 'mariam-gachechiladze',
            name: locale === 'ka' ? 'მარიამ გაჩეჩილაძე' : 'Mariam Gachechiladze',
            role: 'Manual Tester · GetBotai',
            photo: '/graduates/mariam-gachechiladze.jpg',
            headline: locale === 'ka'
                ? 'QA Manual Pro-ს კურსდამთავრებული — დასაქმდა GetBotai-ში'
                : 'QA Manual Pro graduate — hired at GetBotai',
            bio: locale === 'ka' ? [
                'მარიამმა GenofIT-ის QA Manual Pro კურსის გავლის შემდეგ წარმატებით გადადგა პირველი ნაბიჯი IT კარიერაში — დღეს ის GetBotai-ში Manual Tester-ის პოზიციაზე მუშაობს.',
                'სასწავლო კურსის განმავლობაში მარიამმა გამოავლინა მაღალი პროფესიული პასუხისმგებლობა. ეფექტურად დაეუფლა ტესტირების თანამედროვე მეთოდოლოგიებსა და ინსტრუმენტებს.',
                'ანალიტიკურ უნარებთან ერთად, მისი მიდგომა სრულად პასუხობს GetBotai-ის მაღალ სტანდარტებს.',
                'ვულოცავთ GetBotai-ის გუნდს კვალიფიციური კადრის შემატებას და ვუსურვებთ მარიამს წარმატებას პროფესიულ საქმიანობაში.',
            ] : [
                'After completing GenofIT\'s QA Manual Pro course, Mariam took her first successful step in an IT career — she now works as a Manual Tester at GetBotai.',
                'Throughout the training, Mariam showed strong professional responsibility, effectively mastering modern testing methodologies and tools.',
                'Together with her analytical skills, her approach fully meets GetBotai\'s high standards.',
                'Congratulations to GetBotai on the new addition. We wish Mariam continued success in her professional journey.',
            ],
            highlights: locale === 'ka' ? [
                'მაღალი პროფესიული პასუხისმგებლობა',
                'თანამედროვე ტესტირების მეთოდოლოგიების ცოდნა',
                'ტესტირების ინსტრუმენტებით თავდაჯერებული მუშაობა',
                'მძლავრი ანალიტიკური უნარები',
                'მაღალ სტანდარტებთან თავსებადი მიდგომა',
            ] : [
                'High professional responsibility',
                'Modern testing methodology fluency',
                'Confident hands-on with testing tools',
                'Strong analytical skills',
                'Standards-aligned working approach',
            ],
        },
        {
            id: 'anzhela-zenaishvili',
            name: locale === 'ka' ? 'ანჟელა ზენაიშვილი' : 'Anzhela Zenaishvili',
            role: 'QA Tester · Davaleba.com',
            photo: '/graduates/anzhela-zenaishvili.jpg',
            headline: locale === 'ka'
                ? 'QA Manual Pro-ს კურსდამთავრებული — დასაქმდა Davaleba.com-ში'
                : 'QA Manual Pro graduate — hired at Davaleba.com',
            bio: locale === 'ka' ? [
                'ანჟელა GenofIT-ის QA Manual Pro-ს კიდევ ერთი წარმატებული კურსდამთავრებულია, რომელიც Davaleba.com-ის გუნდს QA Tester-ის პოზიციაზე შეუერთდა.',
                'სასწავლო პროცესში ანჟელამ გამოავლინა მაღალი მოტივაცია, პასუხისმგებლობა და პროფესიული მიდგომა. მან წარმატებით აითვისა როგორც ტესტირების თეორიული საფუძვლები, ისე პრაქტიკული სამუშაო პროცესი.',
                'რეალურ პროექტებზე მუშაობისას აჩვენა დეტალებზე ორიენტირებული და სტრუქტურული აზროვნება, რითაც Davaleba.com-ის გუნდში ღირებული სპეციალისტის სტატუსი დაიმკვიდრა.',
                'ვულოცავთ Davaleba.com-ს ღირებული კადრის შემატებას, ანჟელას კი ვუსურვებთ, რომ ეს ახალი ეტაპი სავსე იყოს საინტერესო გამოწვევებითა და კარიერული წარმატებით.',
            ] : [
                'Anzhela is another successful QA Manual Pro graduate from GenofIT — joining the Davaleba.com team as a QA Tester.',
                'Throughout the training, she demonstrated high motivation, responsibility, and a professional approach. She mastered both the theoretical foundations of testing and the practical workflow.',
                'On real-world projects she showed detail-oriented and structured thinking — earning the status of a valuable specialist in the Davaleba.com team.',
                'Congratulations to Davaleba.com on the new addition. We wish Anzhela continued growth, exciting challenges, and career success.',
            ],
            highlights: locale === 'ka' ? [
                'მაღალი მოტივაცია და პასუხისმგებლობა',
                'პროფესიული მიდგომა და სწავლისადმი დამოკიდებულება',
                'ტესტირების თეორიისა და პრაქტიკის ძლიერი ბალანსი',
                'დეტალებზე ორიენტირებული აზროვნება',
                'სტრუქტურული მუშაობის სტილი',
            ] : [
                'High motivation and responsibility',
                'Professional, learning-driven approach',
                'Strong balance of testing theory and practice',
                'Detail-oriented thinking',
                'Structured working style',
            ],
        },
    ];
    const lecturers = [
        {
            id: 'elene-danelia',
            name: locale === 'ka' ? 'ელენე დანელია' : 'Elene Danelia',
            role: 'Senior QA Engineer',
            photo: '/lecturers/elene-danelia.jpg',
            linkedin: 'https://www.linkedin.com/in/elene-danelia-a6aa7219b/',
            headline: locale === 'ka'
                ? 'QA Manual Pro-ს ერთ-ერთი წამყვანი მენტორი'
                : 'A lead mentor of QA Manual Pro',
            bio: locale === 'ka' ? [
                'ელენე ხარისხის უზრუნველყოფის (QA) სფეროს გამორჩეული პროფესიონალია, რომელსაც Senior QA Engineer-ის პოზიციაზე მუშაობის მრავალმხრივი პრაქტიკული გამოცდილება აქვს.',
                'მისი კარიერული გზა მოიცავს როგორც ვებ, ისე მობილური აპლიკაციების (iOS & Android) სიღრმისეულ ტესტირებას. ელენეს პროფესიული ხედვა ეფუძნება სისტემების გამართული მუშაობისა და მაღალი ხარისხის სტანდარტების დანერგვას.',
                'პროფესიული საქმიანობის პარალელურად, მას აქვს Junior QA სპეციალისტების მენტორობისა და სასწავლო პროცესების მართვის წარმატებული გამოცდილება, რაც სტუდენტებისთვის ცოდნის ეფექტურად გადაცემის გარანტიაა.',
                'ელენეს პროფესიული მიდგომა და ინდუსტრიის თანამედროვე სტანდარტების ცოდნა QA Manual Pro-ს სტუდენტებს დაეხმარება, შეიძინონ ის კრიტიკული უნარები, რაც რეალურ სამუშაო ბაზარზე წარმატებისთვის არის აუცილებელი.',
            ] : [
                'Elene is a distinguished QA professional with extensive hands-on experience as a Senior QA Engineer.',
                'Her career covers in-depth testing of both web and mobile applications (iOS & Android). She is focused on system reliability and the implementation of high-quality standards.',
                'Alongside her professional work, she has successfully mentored Junior QA specialists and managed training processes — ensuring effective knowledge transfer to students.',
                'Elene\'s professional approach and knowledge of modern industry standards will help QA Manual Pro students acquire the critical skills required for success in the real job market.',
            ],
            competencies: locale === 'ka' ? [
                'Frontend & Backend სისტემების ტესტირება',
                'API & მონაცემთა ბაზების (SQL) ტესტირება',
                'UI/UX შეფასება & Cross-device ტესტირება',
                'ტესტირების სტრატეგიების შემუშავება',
                'Manual & Automation ტესტირების ინსტრუმენტები (Postman, Swagger, Jira, Selenide, IntelliJ)',
            ] : [
                'Frontend & Backend system testing',
                'API & database (SQL) testing',
                'UI/UX evaluation & cross-device testing',
                'Test strategy design',
                'Manual & Automation tools (Postman, Swagger, Jira, Selenide, IntelliJ)',
            ],
        },
        {
            id: 'vakhtang-muskhelishvili',
            name: locale === 'ka' ? 'ვახტანგ მუსხელიშვილი' : 'Vakhtang Muskhelishvili',
            role: 'QA Lead · DataArt',
            photo: '/lecturers/vakhtang-muskhelishvili.jpg',
            linkedin: 'https://www.linkedin.com/in/vakhtang-muskhelishvili/',
            headline: locale === 'ka'
                ? 'QA Manual Pro-ს მენტორი — DataArt, EPAM, Exactpro'
                : 'QA Manual Pro mentor — DataArt, EPAM, Exactpro',
            bio: locale === 'ka' ? [
                'ვახტანგი ტესტირების სფეროს პროფესიონალია მრავალწლიანი საერთაშორისო გამოცდილებით. კარიერის განმავლობაში მას წამყვანი პოზიციები ეკავა DataArt-ში (QA Lead), EPAM Systems-ში (Senior QA Engineer) და Exactpro Systems-ში (QA Analyst).',
                'მას აქვს London Stock Exchange-ისა და Turquoise-ის მსგავსი გლობალური სისტემების ტესტირების გამოცდილება. ინფორმაციული ტექნოლოგიების მაგისტრის ხარისხი კი საშუალებას აძლევს, სისტემების არქიტექტურა და ფუნქციონალი სიღრმისეულად გააანალიზოს.',
                'პროფესიული საქმიანობის პარალელურად, ვახტანგი აქტიურად არის ჩართული სტაჟიორების მენტორობასა და ლექტორობაში, სადაც თეორიულ ცოდნას პრაქტიკულ გამოცდილებად გარდაქმნის.',
                'ვახტანგის გამოცდილება QA Manual Pro-ს კურსს განსაკუთრებულად ღირებულს ხდის მათთვის, ვისაც ტესტირების სფეროში ხარისხიანი საწყისი საფუძვლის შექმნა სურს.',
            ] : [
                'Vakhtang is a testing professional with years of international experience. He has held senior positions at DataArt (QA Lead), EPAM Systems (Senior QA Engineer), and Exactpro Systems (QA Analyst).',
                'He has tested global platforms such as the London Stock Exchange and Turquoise. His Master\'s degree in Information Technology gives him deep insight into system architecture and functionality.',
                'Alongside his professional work, Vakhtang is actively engaged in mentoring interns and teaching, turning theoretical knowledge into practical experience.',
                'Vakhtang\'s experience makes the QA Manual Pro course especially valuable for those who want to build a strong foundation in software testing.',
            ],
            competencies: locale === 'ka' ? [
                'Frontend (UI/UX) ტესტირება',
                'Backend (API) ტესტირება',
                'მონაცემთა ბაზები (SQL)',
                'Log Management',
                'ხელმისაწვდომობის ტესტირება (Accessibility Testing)',
            ] : [
                'Frontend (UI/UX) testing',
                'Backend (API) testing',
                'Databases (SQL)',
                'Log management',
                'Accessibility testing',
            ],
        },
    ];
    const communitySlots = Array.from({ length: 10 }, (_, i) => ({ id: i }));
    const partners = ['Storia', 'Awork', 'Biznetix', 'Gorgia', 'Genof_IT', 'International Tech', 'NY Startups', 'EU Partners'];

    const partnerships: Array<{
        id: string;
        name: string;
        kind: string;
        image: string;
        headline: string;
        body: string[];
    }> = [
        {
            id: 'ug-startup-factory',
            name: 'UG StartUp Factory',
            kind: locale === 'ka' ? 'პარტნიორობა · QA Impact 2025' : 'Partnership · QA Impact 2025',
            image: '/news/genofit-x-startup-factory.jpg',
            headline: locale === 'ka'
                ? 'UG StartUp Factory და GenofIT დამეგობრდნენ!'
                : 'UG StartUp Factory and GenofIT are now partners!',
            body: locale === 'ka' ? [
                'ჩვენთან პრე-აქსელერაციის პროგრამის დასრულებისას სტარტაპული თავგადასავალი არ სრულდება! დღეიდან ჩვენი პარტნიორი GenofIT პრე-აქსელერაციის პროგრამის გამარჯვებულებს ტესტირების სერვისს სთავაზობს QA Impact 2025 ინიციატივის ფარგლებში.',
                'GenofIT თანამშრომლობს ამერიკის, ევროპისა და საქართველოს კომპანიებთან, რომლებსაც ეხმარება შექმნან გამართული, უსაფრთხო და მომხმარებელზე ორიენტირებული პროგრამული პროდუქტები.',
                'ტესტირების სერვისებთან ერთად, GenofIT ავითარებს საგანმანათლებლო მიმართულებას, სადაც ყველა სასწავლო კურსი დამყარებულია პრაქტიკაზე.',
                'ჩვენი მეგობრობა კიდევ ერთი მნიშვნელოვანი ნაბიჯია სტარტაპ ეკოსისტემის განვითარებისთვის! ერთად ვქმნით შესაძლებლობას, სადაც ახალგაზრდა მეწარმეებს შეუძლიათ არა მხოლოდ ისწავლონ, არამედ გამოიყენონ თანამედროვე ტექნოლოგიური ინსტრუმენტები და პროფესიული სერვისები საკუთარი სტარტაპების გასავითარებლად.',
            ] : [
                'The startup adventure does not end when our pre-acceleration program does! From today, our partner GenofIT offers testing services to the winners of the pre-acceleration program as part of the QA Impact 2025 initiative.',
                'GenofIT works with companies across the US, Europe, and Georgia, helping them build reliable, secure, and user-focused software products.',
                'Alongside testing services, GenofIT is growing its educational track, where every course is grounded in practice.',
                'This friendship is another important step for the startup ecosystem — together we are creating opportunities where young entrepreneurs can not only learn, but also use modern technological tools and professional services to grow their startups.',
            ],
        },
        {
            id: 'teamup-by-gegidze',
            name: 'Team Up by Gegidze',
            kind: locale === 'ka' ? 'პარტნიორობა · გლობალური კარიერა' : 'Partnership · Global Careers',
            image: '/news/genofit-x-teamup-gegidze.jpg',
            headline: locale === 'ka'
                ? 'GenofIT × Team Up by Gegidze — გზა გლობალური შესაძლებლობებისკენ'
                : 'GenofIT × Team Up by Gegidze — connecting talent with global opportunities',
            body: locale === 'ka' ? [
                'სიამოვნებით ვაანონსებთ ახალ თანამშრომლობას GenofIT-სა და Team Up by Gegidze-ს შორის — პლატფორმას, რომელიც პროფესიონალებს საერთაშორისო კარიერულ შესაძლებლობებსა და რეალურ პროექტებს უკავშირებს.',
                'ეს პარტნიორობა GenofIT-ის კურსდამთავრებულებსა და QA სპეციალისტებს მისცემს წვდომას გლობალურ სტაჟირებებზე, პრაქტიკულ გამოცდილებასა და პროფესიული ზრდის პროგრამებზე — შექმნილზე იმისთვის, რომ პრაქტიკული უნარები გაამყარონ და კარიერული გზები გააფართოვონ.',
                'ერთად ვქმნით მომავალს, სადაც განათლება რეალურ შესაძლებლობად გარდაიქმნება!',
            ] : [
                'We\'re excited to announce a new collaboration between GenofIT and Team Up by Gegidze — a platform that bridges professionals with international career opportunities and real-world projects.',
                'This partnership will enable GenofIT graduates and QA specialists to gain access to global internships, hands-on experience, and professional growth programs designed to strengthen their practical skills and expand their career paths.',
                'Together, we\'re creating a future where education evolves into real opportunity!',
            ],
        },
        {
            id: 'typesprint',
            name: 'TypeSprint',
            kind: locale === 'ka' ? 'პარტნიორობა · სტუდენტთა პრაქტიკა' : 'Partnership · Student Practice',
            image: '/news/genofit-x-typesprint.jpg',
            headline: locale === 'ka'
                ? 'GenofIT × TypeSprint — ბეჭდვის სიჩქარის გაორმაგება, რეალური პროექტის გამოცდილება'
                : 'GenofIT × TypeSprint — double your typing speed, gain real project experience',
            body: locale === 'ka' ? [
                'ვიწყებთ თანამშრომლობას TypeSprint-თან — ინოვაციურ პლატფორმასთან, რომელიც ბეჭდვის პროცესს სრულიად ახალ გამოცდილებად აქცევს!',
                'TypeSprint ერთ-ერთი ყველაზე პერსპექტიული ქართული პლატფორმაა, რომელიც ერთიან სივრცეში აერთიანებს: ბეჭდვის სიჩქარის გაორმაგებას; პროდუქტიულობისა და ეფექტურობის ზრდას; სიზუსტის კონტროლსა და შეცდომების მინიმიზაციას.',
                'ეს პლატფორმა ეხმარება მომხმარებლებს ეფექტურად დაზოგონ დრო, გააუმჯობესონ ციფრული კომუნიკაციის ხარისხი და მინიმუმამდე დაიყვანონ მექანიკური შეცდომები.',
                'ამ თანამშრომლობის ფარგლებში, ჩვენს სტუდენტებს ეძლევათ უნიკალური შესაძლებლობა — პროფესიონალების მეთვალყურეობის ქვეშ ჩაერთონ რეალურ, მასშტაბურ პროექტში და შეიძინონ პრაქტიკული გამოცდილება.',
                'GenofIT და TypeSprint ერთობლივად ქმნიან თანამედროვე ტექნოლოგიურ გარემოს, სადაც ინოვაცია, ხარისხი და პრაქტიკული გამოცდილება ერთიანდება.',
            ] : [
                'We\'re starting a collaboration with TypeSprint — an innovative platform that turns typing into a completely new experience!',
                'TypeSprint is one of the most promising Georgian platforms, bringing together in one space: doubling typing speed; growing productivity and efficiency; precision control and error minimization.',
                'The platform helps users save time, improve the quality of digital communication, and reduce mechanical errors to a minimum.',
                'As part of this collaboration, our students get a unique opportunity — to join a real, large-scale project under the supervision of professionals and gain practical experience.',
                'GenofIT and TypeSprint are jointly building a modern technological environment where innovation, quality, and practical experience come together.',
            ],
        },
        {
            id: 'legalstepy',
            name: 'LegalStepy',
            kind: locale === 'ka' ? 'პარტნიორობა · LegalTech' : 'Partnership · LegalTech',
            image: '/news/genofit-x-legalstepy.jpg',
            headline: locale === 'ka'
                ? 'GenofIT × LegalStepy — AI-ზე დაფუძნებული LegalTech, რეალური პროექტი სტუდენტებისთვის'
                : 'GenofIT × LegalStepy — AI-driven LegalTech, real projects for our students',
            body: locale === 'ka' ? [
                'ვიწყებთ თანამშრომლობას LegalStepy-სთან — ინოვაციურ პლატფორმასთან, რომელიც იურიდიულ პროცესებს სრულიად ახალ გამოცდილებად აქცევს!',
                'LegalStepy ერთ-ერთი ყველაზე პერსპექტიული ქართული პლატფორმაა, რომელიც ერთიან სივრცეში აერთიანებს: ხელშეკრულებების მართვას; AI-ზე დაფუძნებულ რისკების ანალიზს; ავტომატურ შეხსენებებს.',
                'ეს პლატფორმა ეხმარება კომპანიებს ეფექტურად აკონტროლონ კრიტიკული ვადები, გაამარტივონ შიდა პროცესები და მინიმუმამდე დაიყვანონ სამართლებრივი რისკები.',
                'ამ თანამშრომლობის ფარგლებში, ჩვენს სტუდენტებს ეძლევათ უნიკალური შესაძლებლობა — პროფესიონალების მეთვალყურეობის ქვეშ ჩაერთონ რეალურ, მასშტაბურ LegalTech პროექტში და შეიძინონ პრაქტიკული გამოცდილება.',
                'GenofIT და LegalStepy ერთობლივად ქმნიან თანამედროვე ტექნოლოგიურ გარემოს, რომელიც ქართულ ბიზნესს ეხმარება გახდეს უფრო ეფექტური, უსაფრთხო და კონკურენტუნარიანი ციფრულ ეპოქაში.',
            ] : [
                'We\'re starting a collaboration with LegalStepy — an innovative platform that turns legal processes into a completely new experience!',
                'LegalStepy is one of the most promising Georgian platforms, bringing together in one space: contract management; AI-driven risk analysis; automated reminders.',
                'The platform helps companies effectively monitor critical deadlines, simplify internal processes, and reduce legal risks to a minimum.',
                'As part of this collaboration, our students get a unique opportunity — to join a real, large-scale LegalTech project under the supervision of professionals and gain practical experience.',
                'GenofIT and LegalStepy are jointly building a modern technological environment that helps Georgian business become more efficient, secure, and competitive in the digital era.',
            ],
        },
        {
            id: 'virtual-story',
            name: 'Virtual Story',
            kind: locale === 'ka' ? 'პარტნიორობა · EdTech / QA' : 'Partnership · EdTech / QA',
            image: '/news/genofit-x-virtual-story.jpg',
            headline: locale === 'ka'
                ? 'GenofIT × Virtual Story — სრული QA და სტუდენტებისთვის რეალური პროდუქტის გამოცდილება'
                : 'GenofIT × Virtual Story — full QA coverage and real-product experience for our students',
            body: locale === 'ka' ? [
                'GenofIT აცხადებს თანამშრომლობის დაწყებას Virtual Story-სთან — ინოვაციურ პლატფორმასთან, რომელიც სწავლას სრულიად ახალ გამოცდილებად აქცევს!',
                'Virtual Story აერთიანებს ლიტერატურას, კრიტიკულ აზროვნებას, ტექნიკურ და კრეატიულ უნარებს, რათა მომხმარებლები ისტორიის აქტიურ მონაწილეებად აქციოს, რითაც რადიკალურად ცვლის საგანმანათლებლო სტანდარტებს.',
                'ამ პარტნიორობის ფარგლებში, GenofIT-ის პროფესიონალური გუნდი სრულად უზრუნველყოფს Virtual Story-ს პლატფორმის ხარისხის უზრუნველყოფასა და ტექნოლოგიურ სრულყოფას. ჩვენი ექსპერტიზა და მაღალი სტანდარტები გარანტიაა იმისა, რომ პროდუქტი უმაღლესი ხარისხითა და საიმედოობით განვითარდეს.',
                'რაც ყველაზე მნიშვნელოვანია, ეს თანამშრომლობა GenofIT-ის სტუდენტებისთვის ექსკლუზიურ შესაძლებლობას ქმნის. ისინი, პროფესიონალების მეთვალყურეობის ქვეშ, უშუალოდ ერთვებიან რეალურ, მასშტაბურ პროდუქტზე მუშაობის პროცესში, რაც მათ საშუალებას აძლევს მიიღონ ფასდაუდებელი პრაქტიკული გამოცდილება და განავითარონ პროფესიული უნარები ინდუსტრიის წამყვან სპეციალისტებთან ერთად.',
                'ეს თანამშრომლობა აერთიანებს GenofIT-ის ტექნოლოგიურ ექსპერტიზასა და Virtual Story-ს ინოვაციურ ხედვას, რაც საშუალებას გვაძლევს ერთობლივად შევქმნათ მაღალი ღირებულების ციფრული პროდუქტი.',
            ] : [
                'GenofIT is announcing a new collaboration with Virtual Story — an innovative platform that turns learning into a completely new experience!',
                'Virtual Story brings together literature, critical thinking, technical and creative skills, turning users into active participants in the story and radically reshaping educational standards.',
                'As part of this partnership, GenofIT\'s professional team takes full responsibility for QA and technical excellence of the Virtual Story platform. Our expertise and high standards guarantee that the product is built with the highest quality and reliability.',
                'Most importantly, this collaboration creates an exclusive opportunity for GenofIT students. Under the supervision of professionals, they get directly involved in working on a real, large-scale product — gaining invaluable practical experience and developing professional skills alongside leading industry specialists.',
                'This partnership combines GenofIT\'s technical expertise with Virtual Story\'s innovative vision, allowing us to jointly create a high-value digital product.',
            ],
        },
        {
            id: 'piplia',
            name: 'Piplia · ფიფლია',
            kind: locale === 'ka' ? 'სტრატეგიული პარტნიორობა · HR / დასაქმება' : 'Strategic partnership · HR / Employment',
            image: '/news/genofit-x-piplia.jpg',
            headline: locale === 'ka'
                ? 'GenofIT × Piplia · ფიფლია — განათლება → პრაქტიკა → დასაქმება'
                : 'GenofIT × Piplia · ფიფლია — Education → Practice → Employment',
            body: locale === 'ka' ? [
                'GenofIT აცხადებს სტრატეგიულ პარტნიორობას HR კომპანია Piplia · ფიფლია-სთან, რომელიც ჩვენი ნიჭიერი სტუდენტების მდგრადი კარიერის აშენებას უჭერს მხარს.',
                'ეს თანამშრომლობა მიზნად ისახავს: ჩვენი სტუდენტების დაკავშირებას რეალურ დასაქმების შესაძლებლობებთან; განათლებისა და შრომის ბაზრის ხიდის შექმნას; პრაქტიკული უნარების პროფესიულ გამოცდილებად გარდაქმნას; კვალიფიციური კადრების სწორი კომპანიების მოძიებას.',
                'GenofIT-ში ჩვენ ვამზადებთ სპეციალისტებს რეალური პროექტებითა და სტრუქტურირებული სწავლებით. Piplia · ფიფლია მათ შრომის ბაზარზე გადასვლას უწყობს ხელს.',
                'ეს პარტნიორობა შედეგებზეა აგებული: განათლება → პრაქტიკა → დასაქმება.',
                'მადლობას ვუხდით Piplia · ფიფლია-ს ნდობისა და პროფესიული თანამშრომლობისთვის. ერთად ძლიერი შედეგების მოლოდინში ვართ.',
            ] : [
                'GenofIT announces a strategic partnership with HR company Piplia · ფიფლია, focused on supporting our talents in building sustainable careers.',
                'This collaboration aims to: connect our students with real employment opportunities; bridge education and the job market; transform practical skills into professional experience; match qualified talent with the right companies.',
                'At GenofIT, we prepare specialists through real projects and structured training. Piplia · ფიფლია supports their transition into the workforce.',
                'This partnership is built on results: Education → Practice → Employment.',
                'We appreciate Piplia · ფიფლია\'s trust and professional collaboration. Looking forward to strong outcomes together.',
            ],
        },
        {
            id: 'krea-ide',
            name: 'Krea-IDE',
            kind: locale === 'ka' ? 'პარტნიორობა · AI / Web Development' : 'Partnership · AI / Web Development',
            image: '/news/genofit-x-krea-ide.jpg',
            headline: locale === 'ka'
                ? 'GenofIT × Krea-IDE — AI-ზე დაფუძნებული ახალი ვებსაიტი GenofIT-ისთვის'
                : 'GenofIT × Krea-IDE — building GenofIT\'s new website on AI-driven foundations',
            body: locale === 'ka' ? [
                'მოხარულები ვართ, გაგიზიაროთ მნიშვნელოვანი სიახლე! GenofIT პარტნიორობას იწყებს Krea-IDE-სთან, AI-ზე დაფუძნებულ ინოვაციურ პლატფორმასთან, რომელსაც უკვე 1700-ზე მეტი დეველოპერი ენდობა.',
                'რას ვგეგმავთ ერთად? ამ საინტერესო თანამშრომლობის ფარგლებში, სწორედ Krea-IDE შექმნის GenofIT-ის ახალ ვებსაიტს. ეს იქნება პროექტი, რომელიც ეფუძნება თანამედროვე ტექნოლოგიებს, AI-ზე დაფუძნებულ პროცესებსა და პროდუქტის რეალურ ლოგიკაზე აგებულ არქიტექტურას.',
                'რატომ არის ეს პარტნიორობა ჩვენთვის განსაკუთრებული? ეს არ არის უბრალოდ ვებსაიტის შექმნა. ეს არის ხედვების თანხვედრა — ვირჩევთ პარტნიორებს, რომლებიც სტანდარტულ ჩარჩოებს სცდებიან და მომავალზე ფიქრობენ.',
                'ხარისხზე ორიენტირებული მიდგომა — ორივე კომპანიისთვის პრიორიტეტია ინოვაციური, სტაბილური და მაღალი ხარისხის პროდუქტის შექმნა.',
                'ეს კოლაბორაცია ნათელი მაგალითია იმისა, თუ როგორ მუშაობს ხელოვნური ინტელექტი რეალურ პროექტებში. ჩვენ გვჯერა, რომ სწორედ ასეთი გაბედული და ინოვაციური პარტნიორები აშენებენ მომავალს.',
            ] : [
                'We\'re happy to share important news! GenofIT is starting a partnership with Krea-IDE — an innovative AI-driven platform already trusted by more than 1700 developers.',
                'What are we planning together? As part of this exciting collaboration, Krea-IDE will be building GenofIT\'s new website. It\'s a project grounded in modern technologies, AI-driven processes, and an architecture built around real product logic.',
                'Why is this partnership special for us? It\'s not just about building a website. It\'s about alignment of vision — we choose partners who push beyond standard frameworks and think about the future.',
                'Quality-first approach — both companies prioritize building innovative, stable, and high-quality products.',
                'This collaboration is a clear example of how AI works in real projects. We believe that bold and innovative partners like this are the ones who build the future.',
            ],
        },
    ];

    // Split partnerships across three columns; columns reuse the full list as fallback so the wall fills out
    const partnershipsCol1 = partnerships.filter((_, i) => i % 3 === 0);
    const partnershipsCol2 = partnerships.filter((_, i) => i % 3 === 1).length > 0
        ? partnerships.filter((_, i) => i % 3 === 1)
        : partnerships;
    const partnershipsCol3 = partnerships.filter((_, i) => i % 3 === 2).length > 0
        ? partnerships.filter((_, i) => i % 3 === 2)
        : partnerships;

    return (
        <div className="bg-[#00263E] min-h-screen text-white">

            {/* HERO */}
            <section className="relative border-b border-white/[0.06] overflow-hidden bg-[#00263E]">
                <div className="relative w-full">
                    {/* Cover — clean version, handshake + curves only */}
                    <img
                        src="/hero-cover.png"
                        alt="GenofIT"
                        className="w-full max-h-[70vh] object-cover object-center block"
                    />

                    {/* Georgian content placed where the cleared right side now leaves room */}
                    <div className="absolute inset-y-0 right-0 w-3/5 flex flex-col justify-center pl-16 md:pl-24 lg:pl-32 xl:pl-44 pr-8 lg:pr-14 xl:pr-20">
                        <div
                            className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-xs font-medium text-white/70 mb-6 transition-all duration-700 ease-out"
                            style={{
                                opacity: heroVisible ? 1 : 0,
                                transform: heroVisible ? 'translateY(0)' : 'translateY(14px)',
                                transitionDelay: '200ms',
                            }}
                        >
                            <span className="relative flex w-1.5 h-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3FC4E2] opacity-75" />
                                <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-[#3FC4E2]" />
                            </span>
                            {t('hero.badge')}
                        </div>

                        <h1
                            className="text-2xl md:text-3xl lg:text-[34px] xl:text-[38px] font-semibold leading-[1.15] tracking-tight text-white mb-8 lg:whitespace-nowrap transition-all duration-700 ease-out"
                            style={{
                                opacity: heroVisible ? 1 : 0,
                                transform: heroVisible ? 'translateY(0)' : 'translateY(18px)',
                                transitionDelay: '340ms',
                            }}
                        >
                            {t('hero.title')}
                        </h1>

                        <div
                            className="flex flex-col sm:flex-row gap-3 transition-all duration-700 ease-out"
                            style={{
                                opacity: heroVisible ? 1 : 0,
                                transform: heroVisible ? 'translateY(0)' : 'translateY(14px)',
                                transitionDelay: '480ms',
                            }}
                        >
                            <Button
                                onClick={() => {
                                    const el = document.getElementById('courses');
                                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="bg-[#3B7DBF] hover:bg-[#2D6090] text-white font-medium px-7 py-5 rounded-md text-sm transition-colors"
                            >
                                {t('hero.cta_primary')}
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                            <Link to="/services">
                                <Button className="bg-transparent border border-white/20 text-white hover:bg-white/10 font-medium px-7 py-5 rounded-md text-sm transition-colors w-full">
                                    {t('hero.cta_secondary')}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURED COURSES */}
            <section id="courses" className="pt-14 pb-24 lg:pt-20 lg:pb-28 border-b border-white/[0.06]">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mx-auto mb-16 text-center">
                        <Eyebrow>{t('courses.eyebrow')}</Eyebrow>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-4">{t('courses.title')}</h2>
                        {t('courses.subtitle') && <p className="text-white/55 text-base">{t('courses.subtitle')}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {courses.map((c) => {
                            if (c.id === '1') {
                                return (
                                    <Dialog key={c.id}>
                                        <DialogTrigger asChild>
                                            <button type="button" className="group block text-left cursor-pointer h-full">
                                                <div className="bg-white rounded-none overflow-hidden border border-gray-200 group-hover:border-[#3B7DBF] group-hover:shadow-2xl group-hover:shadow-[#3B7DBF]/20 group-hover:-translate-y-1.5 transition-all duration-500 ease-out h-full flex flex-col">
                                                    <div className="relative aspect-[4/3] overflow-hidden bg-[#0B2A45]">
                                                        <img
                                                            src={qaManualProCohort.image}
                                                            alt={c.title}
                                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                        />
                                                        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#3FC4E2] text-[#00263E] text-[10px] font-bold uppercase tracking-wider">
                                                            {locale === 'ka' ? 'ახალი ჯგუფი' : 'New cohort'}
                                                        </span>
                                                    </div>
                                                    <div className="p-6 flex flex-col flex-1">
                                                        <h3 className="text-xl md:text-2xl font-bold text-black mb-2 leading-tight uppercase group-hover:text-[#3B7DBF] transition-colors">
                                                            {c.title}
                                                        </h3>
                                                        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                                            {c.description}
                                                        </p>
                                                        <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[12px] text-gray-700 mb-4">
                                                            {qaManualProCohort.details.map((d) => (
                                                                <span key={d.label}>
                                                                    <span className="text-gray-400">{d.label}:</span>{' '}
                                                                    <span className="text-gray-900 font-semibold">{d.value}</span>
                                                                </span>
                                                            ))}
                                                        </div>
                                                        <div className="mt-auto flex items-center gap-2 text-black font-medium group-hover:text-[#3B7DBF] transition-colors">
                                                            <span>{locale === 'ka' ? 'სრული ინფო' : 'View details'}</span>
                                                            <span className="text-xl inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </button>
                                        </DialogTrigger>

                                        <DialogContent className="max-w-3xl bg-[#0B2A45] border-white/10 text-white p-0 overflow-hidden gap-0">
                                            <div className="grid md:grid-cols-[340px_1fr]">
                                                <div className="bg-[#00263E] aspect-square md:aspect-auto md:h-full overflow-hidden">
                                                    <img src={qaManualProCohort.image} alt={c.title} className="w-full h-full object-cover" />
                                                </div>
                                                <div className="p-6 md:p-7 max-h-[80vh] overflow-y-auto">
                                                    <div className="text-[11px] uppercase tracking-wider font-semibold text-[#3FC4E2]/85 mb-2">{qaManualProCohort.kind}</div>
                                                    <DialogTitle className="text-xl md:text-2xl font-semibold tracking-tight mb-4 leading-snug">{qaManualProCohort.headline}</DialogTitle>

                                                    <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-5 p-4 rounded-lg bg-[#00263E]/60 border border-white/[0.06]">
                                                        {qaManualProCohort.details.map((d) => (
                                                            <div key={d.label}>
                                                                <div className="text-[11px] uppercase tracking-wider text-white/45 mb-0.5">{d.label}</div>
                                                                <div className="text-sm text-white/95 font-semibold">{d.value}</div>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <div className="space-y-3 mb-5">
                                                        {qaManualProCohort.body.map((para, idx) => (
                                                            <p key={idx} className="text-sm text-white/75 leading-relaxed">{para}</p>
                                                        ))}
                                                    </div>

                                                    <div className="text-[11px] uppercase tracking-wider font-semibold text-white/45 mb-2">
                                                        {locale === 'ka' ? 'კურსის ფარგლებში მიიღებთ' : 'What you get'}
                                                    </div>
                                                    <ul className="space-y-2 mb-6">
                                                        {qaManualProCohort.perks.map((p, idx) => (
                                                            <li key={idx} className="flex items-start gap-2.5 text-sm text-white/85">
                                                                <span className="text-[#3FC4E2] mt-1 flex-shrink-0">▸</span>
                                                                <span>{p}</span>
                                                            </li>
                                                        ))}
                                                    </ul>

                                                    <div className="flex flex-wrap gap-3">
                                                        <Link
                                                            to={`/course/${c.id}`}
                                                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3FC4E2] text-[#00263E] font-semibold text-sm hover:bg-[#3FC4E2]/90 transition-colors"
                                                        >
                                                            {locale === 'ka' ? 'კურსის გვერდი' : 'Course page'}
                                                            <ArrowRight className="w-4 h-4" />
                                                        </Link>
                                                        <Link
                                                            to="/get-in-touch"
                                                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white font-semibold text-sm hover:border-[#3FC4E2]/60 hover:text-[#3FC4E2] transition-colors"
                                                        >
                                                            {locale === 'ka' ? 'რეგისტრაცია' : 'Register'}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                );
                            }
                            return <CourseCard key={c.id} {...c} />;
                        })}
                    </div>
                </div>
            </section>

            {/* WHY US */}
            <section className="py-24 lg:py-28 border-b border-white/[0.06]">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mx-auto mb-16 text-center">
                        <Eyebrow>{t('whyus.eyebrow')}</Eyebrow>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-4">{t('whyus.title')}</h2>
                        {t('whyus.subtitle') && <p className="text-white/55 text-base">{t('whyus.subtitle')}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
                        {whyUs.map((f) => {
                            const Icon = f.icon;
                            return (
                                <div key={f.key} className="p-7 rounded-xl border border-white/[0.08] bg-white/[0.015] hover:bg-white/[0.03] transition-colors">
                                    <div className="w-9 h-9 rounded-lg bg-[#3B7DBF]/10 flex items-center justify-center mb-5">
                                        <Icon className="w-4 h-4 text-[#3FC4E2]" strokeWidth={2} />
                                    </div>
                                    <h3 className="text-base font-semibold mb-2 tracking-tight">{t(`whyus.${f.key}.title`)}</h3>
                                    <p className="text-sm text-white/50 leading-relaxed">{t(`whyus.${f.key}.desc`)}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* GRADUATES — real cards with bio modals */}
            <section className="py-24 lg:py-28 border-b border-white/[0.06]">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mx-auto mb-16 text-center">
                        <Eyebrow>{t('graduates.eyebrow')}</Eyebrow>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-4">{t('graduates.title')}</h2>
                        {t('graduates.subtitle') && <p className="text-white/55 text-base">{t('graduates.subtitle')}</p>}
                    </div>

                    <div
                        className="relative max-w-6xl mx-auto"
                        onMouseEnter={() => setGraduatesPaused(true)}
                        onMouseLeave={() => setGraduatesPaused(false)}
                    >
                        {/* Left arrow */}
                        <button
                            type="button"
                            onClick={() => scrollGraduates(-1)}
                            aria-label="Previous"
                            className="absolute left-2 top-[120px] z-20 w-10 h-10 rounded-full bg-[#0B2A45]/95 border border-white/15 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:border-[#3FC4E2]/50 transition-colors -translate-y-1/2"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        {/* Right arrow */}
                        <button
                            type="button"
                            onClick={() => scrollGraduates(1)}
                            aria-label="Next"
                            className="absolute right-2 top-[120px] z-20 w-10 h-10 rounded-full bg-[#0B2A45]/95 border border-white/15 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:border-[#3FC4E2]/50 transition-colors -translate-y-1/2"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>

                        {/* Edge fades */}
                        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#00263E] to-transparent pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#00263E] to-transparent pointer-events-none" />

                        {/* Auto-scrolling strip — content duplicated for seamless loop */}
                        <div
                            ref={graduatesScrollRef}
                            className="flex gap-6 overflow-x-auto pb-4 px-12 [&::-webkit-scrollbar]:hidden"
                            style={{ scrollbarWidth: 'none' }}
                        >
                            {[...graduates, ...graduates].map((grad, i) => (
                                <Dialog key={`${grad.id}-${i}`}>
                                    <DialogTrigger asChild>
                                        <button type="button" className="flex-shrink-0 w-[240px] text-center group block text-left cursor-pointer">
                                            <div className="aspect-square rounded-xl bg-[#0B2A45] border border-white/[0.06] group-hover:border-[#3FC4E2]/40 transition-all overflow-hidden mb-4">
                                                <img
                                                    src={grad.photo}
                                                    alt={grad.name}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                            <div className="space-y-1.5 px-2 text-center">
                                                <div className="text-base font-semibold text-white group-hover:text-[#3FC4E2] transition-colors">
                                                    {grad.name}
                                                </div>
                                                <div className="text-xs text-[#3FC4E2]/85">{grad.role}</div>
                                            </div>
                                            <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-white/40 group-hover:text-[#3FC4E2] transition-colors">
                                                <span>{locale === 'ka' ? 'სრული ისტორია' : 'Read story'}</span>
                                                <ArrowRight className="w-3 h-3" />
                                            </div>
                                        </button>
                                    </DialogTrigger>

                                    <DialogContent className="max-w-2xl bg-[#0B2A45] border-white/10 text-white p-0 overflow-hidden gap-0">
                                        <div className="grid md:grid-cols-[260px_1fr]">
                                            <div className="bg-[#00263E] aspect-square md:aspect-auto md:h-full overflow-hidden">
                                                <img
                                                    src={grad.photo}
                                                    alt={grad.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="p-6 md:p-7 max-h-[80vh] overflow-y-auto">
                                                <DialogTitle className="text-xl md:text-2xl font-semibold tracking-tight mb-1">
                                                    {grad.name}
                                                </DialogTitle>
                                                <div className="text-sm font-medium text-[#3FC4E2] mb-4">
                                                    {grad.role}
                                                </div>
                                                <div className="text-sm text-white/70 italic mb-5">
                                                    {grad.headline}
                                                </div>

                                                <div className="space-y-3 mb-6">
                                                    {grad.bio.map((p, idx) => (
                                                        <p key={idx} className="text-sm text-white/75 leading-relaxed">
                                                            {p}
                                                        </p>
                                                    ))}
                                                </div>

                                                <div>
                                                    <div className="text-[11px] uppercase tracking-wider font-semibold text-white/45 mb-3">
                                                        {locale === 'ka' ? 'რა გამოარჩევდა' : 'What stood out'}
                                                    </div>
                                                    <ul className="space-y-2">
                                                        {grad.highlights.map((h, idx) => (
                                                            <li key={idx} className="flex items-start gap-2.5 text-sm text-white/80">
                                                                <span className="text-[#3FC4E2] mt-1 flex-shrink-0">▸</span>
                                                                <span>{h}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* LECTURERS — empty placeholders */}
            <section className="py-24 lg:py-28 border-b border-white/[0.06]">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mx-auto mb-16 text-center">
                        <Eyebrow>{t('lecturers.eyebrow')}</Eyebrow>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-4">{t('lecturers.title')}</h2>
                        {t('lecturers.subtitle') && <p className="text-white/55 text-base">{t('lecturers.subtitle')}</p>}
                    </div>

                    <div
                        className="relative max-w-6xl mx-auto"
                        onMouseEnter={() => setLecturersPaused(true)}
                        onMouseLeave={() => setLecturersPaused(false)}
                    >
                        <button
                            type="button"
                            onClick={() => scrollLecturers(-1)}
                            aria-label="Previous"
                            className="absolute left-2 top-[120px] z-20 w-10 h-10 rounded-full bg-[#0B2A45]/95 border border-white/15 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:border-[#3FC4E2]/50 transition-colors -translate-y-1/2"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollLecturers(1)}
                            aria-label="Next"
                            className="absolute right-2 top-[120px] z-20 w-10 h-10 rounded-full bg-[#0B2A45]/95 border border-white/15 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:border-[#3FC4E2]/50 transition-colors -translate-y-1/2"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#00263E] to-transparent pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#00263E] to-transparent pointer-events-none" />

                        <div
                            ref={lecturersScrollRef}
                            className="flex gap-6 overflow-x-auto pb-4 px-12 [&::-webkit-scrollbar]:hidden"
                            style={{ scrollbarWidth: 'none' }}
                        >
                            {lecturers.map((lect) => (
                                <div key={lect.id} className="flex-shrink-0 w-[240px]">
                                    <Dialog>
                                <DialogTrigger asChild>
                                    <button type="button" className="text-center group block w-full text-left cursor-pointer">
                                        <div className="aspect-square rounded-xl bg-[#0B2A45] border border-white/[0.06] group-hover:border-[#3FC4E2]/40 transition-all overflow-hidden mb-4">
                                            <img
                                                src={lect.photo}
                                                alt={lect.name}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="space-y-1.5 px-2 text-center">
                                            <div className="text-base font-semibold text-white group-hover:text-[#3FC4E2] transition-colors">
                                                {lect.name}
                                            </div>
                                            <div className="text-xs text-[#3FC4E2]/85">{lect.role}</div>
                                        </div>
                                        <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-white/40 group-hover:text-[#3FC4E2] transition-colors">
                                            <span>{locale === 'ka' ? 'სრული ბიო' : 'Full bio'}</span>
                                            <ArrowRight className="w-3 h-3" />
                                        </div>
                                    </button>
                                </DialogTrigger>

                                <DialogContent className="max-w-2xl bg-[#0B2A45] border-white/10 text-white p-0 overflow-hidden gap-0">
                                    <div className="grid md:grid-cols-[260px_1fr]">
                                        <div className="bg-[#00263E] aspect-square md:aspect-auto md:h-full overflow-hidden">
                                            <img
                                                src={lect.photo}
                                                alt={lect.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="p-6 md:p-7 max-h-[80vh] overflow-y-auto">
                                            <DialogTitle className="text-xl md:text-2xl font-semibold tracking-tight mb-1">
                                                {lect.name}
                                            </DialogTitle>
                                            <div className="text-sm font-medium text-[#3FC4E2] mb-4">
                                                {lect.role}
                                            </div>
                                            <div className="text-sm text-white/70 italic mb-5">
                                                {lect.headline}
                                            </div>

                                            <div className="space-y-3 mb-6">
                                                {lect.bio.map((p, i) => (
                                                    <p key={i} className="text-sm text-white/75 leading-relaxed">
                                                        {p}
                                                    </p>
                                                ))}
                                            </div>

                                            <div className="mb-6">
                                                <div className="text-[11px] uppercase tracking-wider font-semibold text-white/45 mb-3">
                                                    {locale === 'ka' ? 'პრაქტიკული კომპეტენციები' : 'Core competencies'}
                                                </div>
                                                <ul className="space-y-2">
                                                    {lect.competencies.map((c, i) => (
                                                        <li key={i} className="flex items-start gap-2.5 text-sm text-white/80">
                                                            <span className="text-[#3FC4E2] mt-1 flex-shrink-0">▸</span>
                                                            <span>{c}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {lect.linkedin && (
                                                <a
                                                    href={lect.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/15 bg-white/[0.04] hover:bg-[#0A66C2]/15 hover:border-[#0A66C2]/40 hover:text-[#3FC4E2] text-sm text-white/80 transition-colors"
                                                >
                                                    <Linkedin className="w-4 h-4" />
                                                    <span>LinkedIn</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* PARTNERS marquee */}
            <section className="py-20 border-b border-white/[0.06] overflow-hidden">
                <div className="container mx-auto px-6 mb-14">
                    <div className="max-w-2xl mx-auto text-center">
                        <Eyebrow>{t('partners.eyebrow')}</Eyebrow>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-4">{t('partners.title')}</h2>
                        {t('partners.subtitle') && <p className="text-white/55 text-base">{t('partners.subtitle')}</p>}
                    </div>
                </div>

                <div
                    className="relative max-w-6xl mx-auto"
                    onMouseEnter={() => setPartnersPaused(true)}
                    onMouseLeave={() => setPartnersPaused(false)}
                >
                    <button
                        type="button"
                        onClick={() => scrollPartners(-1)}
                        aria-label="Previous"
                        className="absolute left-2 top-1/2 z-20 w-9 h-9 rounded-full bg-[#0B2A45]/95 border border-white/15 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:border-[#3FC4E2]/50 transition-colors -translate-y-1/2"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                        type="button"
                        onClick={() => scrollPartners(1)}
                        aria-label="Next"
                        className="absolute right-2 top-1/2 z-20 w-9 h-9 rounded-full bg-[#0B2A45]/95 border border-white/15 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:border-[#3FC4E2]/50 transition-colors -translate-y-1/2"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                    <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#00263E] to-transparent pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#00263E] to-transparent pointer-events-none" />

                    <div
                        ref={partnersScrollRef}
                        className="flex gap-16 overflow-x-auto py-4 px-12 items-center [&::-webkit-scrollbar]:hidden"
                        style={{ scrollbarWidth: 'none' }}
                    >
                        {[...partners, ...partners].map((name, i) => (
                            <div key={i} className="flex-shrink-0 text-white/30 hover:text-white/60 transition-colors font-medium tracking-wide text-lg whitespace-nowrap">
                                {name}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PARTNERSHIPS — moving photo wall (3 columns, alternating directions) */}
            <section className="py-24 lg:py-28 border-b border-white/[0.06]">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
                        {/* Left: 3-column vertical marquee */}
                        <div
                            className={`relative h-[520px] lg:h-[640px] overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0B2A45]/40 ${partnershipsPaused ? 'marquee-paused' : ''}`}
                            onMouseEnter={() => setPartnershipsPaused(true)}
                            onMouseLeave={() => setPartnershipsPaused(false)}
                        >
                            <div className="grid grid-cols-3 gap-2 h-full p-2">
                                {[
                                    { items: partnershipsCol1, dir: 'up' as const, key: 'col1', offset: '' },
                                    { items: partnershipsCol2, dir: 'down' as const, key: 'col2', offset: 'pt-10' },
                                    { items: partnershipsCol3, dir: 'up' as const, key: 'col3', offset: 'pt-20' },
                                ].map((col) => (
                                    <div key={col.key} className="overflow-hidden">
                                        <div className={`flex flex-col gap-2 ${col.dir === 'up' ? 'animate-marquee-up' : 'animate-marquee-down'} ${col.offset}`}>
                                            {[...col.items, ...col.items].map((p, i) => (
                                                <Dialog key={`${col.key}-${p.id}-${i}`}>
                                                    <DialogTrigger asChild>
                                                        <button type="button" className="aspect-square rounded-lg overflow-hidden border border-white/[0.06] hover:border-[#3FC4E2]/40 transition-all group bg-[#0B2A45] cursor-pointer">
                                                            <img
                                                                src={p.image}
                                                                alt={p.name}
                                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                            />
                                                        </button>
                                                    </DialogTrigger>
                                                    <DialogContent className="max-w-3xl bg-[#0B2A45] border-white/10 text-white p-0 overflow-hidden gap-0">
                                                        <div className="grid md:grid-cols-[320px_1fr]">
                                                            <div className="bg-[#00263E] aspect-square md:aspect-auto md:h-full overflow-hidden">
                                                                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                                                            </div>
                                                            <div className="p-6 md:p-7 max-h-[80vh] overflow-y-auto">
                                                                <div className="text-[11px] uppercase tracking-wider font-semibold text-[#3FC4E2]/85 mb-2">{p.kind}</div>
                                                                <DialogTitle className="text-xl md:text-2xl font-semibold tracking-tight mb-4 leading-snug">{p.headline}</DialogTitle>
                                                                <div className="space-y-3">
                                                                    {p.body.map((para, idx) => (
                                                                        <p key={idx} className="text-sm text-white/75 leading-relaxed">{para}</p>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </DialogContent>
                                                </Dialog>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Edge fades — top & bottom */}
                            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#00263E] to-transparent pointer-events-none z-10" />
                            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#00263E] to-transparent pointer-events-none z-10" />
                        </div>

                        {/* Right: text */}
                        <div>
                            <Eyebrow>{t('partnerships.eyebrow')}</Eyebrow>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-5 leading-tight">
                                {t('partnerships.title')}
                            </h2>
                            <p className="text-white/65 text-base leading-relaxed mb-8">
                                {t('partnerships.subtitle')}
                            </p>
                            <Link
                                to="/get-in-touch"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3FC4E2] text-[#00263E] font-semibold text-sm hover:bg-[#3FC4E2]/90 transition-colors"
                            >
                                {locale === 'ka' ? 'გახდი პარტნიორი' : 'Become a partner'}
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* B2B TEASER */}
            <section className="py-24 lg:py-28 border-b border-white/[0.06]">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#0B2A45] to-[#062138] p-10 lg:p-14">
                        <div className="max-w-2xl mb-10">
                            <Eyebrow>{t('b2b.eyebrow')}</Eyebrow>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-4">
                                {t('b2b.title')}
                            </h2>
                            <p className="text-white/55 text-base">
                                {t('b2b.subtitle')}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                            {b2bServices.map((s) => {
                                const Icon = s.icon;
                                return (
                                    <div key={s.key} className="p-5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                                        <div className="w-8 h-8 rounded-md bg-[#F05A26]/10 flex items-center justify-center mb-4">
                                            <Icon className="w-4 h-4 text-[#F05A26]" strokeWidth={2} />
                                        </div>
                                        <h3 className="font-semibold text-sm mb-1.5 tracking-tight">{t(`b2b.${s.key}.title`)}</h3>
                                        <p className="text-xs text-white/50 leading-relaxed">{t(`b2b.${s.key}.desc`)}</p>
                                    </div>
                                );
                            })}
                        </div>

                        <Link to="/services">
                            <Button className="bg-white text-[#00263E] hover:bg-white/90 font-medium px-6 py-4 rounded-md text-sm transition-colors">
                                {t('b2b.cta')}
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* COMMUNITY PHOTO STRIP — moving photo cards */}
            <section className="py-24 lg:py-28 border-b border-white/[0.06] overflow-hidden">
                <div className="container mx-auto px-6 mb-14">
                    <div className="max-w-2xl mx-auto text-center">
                        <Eyebrow>{t('community.eyebrow')}</Eyebrow>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-4">{t('community.title')}</h2>
                        {t('community.subtitle') && <p className="text-white/55 text-base">{t('community.subtitle')}</p>}
                    </div>
                </div>

                <div
                    className="relative max-w-6xl mx-auto"
                    onMouseEnter={() => setCommunityPaused(true)}
                    onMouseLeave={() => setCommunityPaused(false)}
                >
                    <button
                        type="button"
                        onClick={() => scrollCommunity(-1)}
                        aria-label="Previous"
                        className="absolute left-2 top-[160px] z-20 w-10 h-10 rounded-full bg-[#0B2A45]/95 border border-white/15 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:border-[#3FC4E2]/50 transition-colors -translate-y-1/2"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        type="button"
                        onClick={() => scrollCommunity(1)}
                        aria-label="Next"
                        className="absolute right-2 top-[160px] z-20 w-10 h-10 rounded-full bg-[#0B2A45]/95 border border-white/15 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:border-[#3FC4E2]/50 transition-colors -translate-y-1/2"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                    <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#00263E] to-transparent pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#00263E] to-transparent pointer-events-none" />

                    <div
                        ref={communityScrollRef}
                        className="flex gap-5 overflow-x-auto pb-4 px-12 [&::-webkit-scrollbar]:hidden"
                        style={{ scrollbarWidth: 'none' }}
                    >
                        {[...communitySlots, ...communitySlots].map((_, i) => (
                            <div key={i} className="flex-shrink-0 w-[260px]">
                                <div className="aspect-[4/5] rounded-xl bg-[#0B2A45] border border-white/[0.06] hover:border-white/15 transition-colors flex items-center justify-center mb-3 overflow-hidden">
                                    <Camera className="w-9 h-9 text-white/15" strokeWidth={1.25} />
                                </div>
                                <div className="space-y-1.5 px-1">
                                    <div className="h-2.5 bg-white/[0.04] rounded-sm w-2/3" />
                                    <div className="h-2 bg-white/[0.03] rounded-sm w-1/3" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-28 lg:py-32">
                <div className="container mx-auto px-6">
                    <div className="max-w-xl mx-auto text-center">
                        <Eyebrow>{t('cta.eyebrow')}</Eyebrow>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 leading-[1.15] tracking-tight">
                            {t('cta.title')}
                        </h2>
                        {t('cta.subtitle') && <p className="text-white/55 mb-10 text-base">{t('cta.subtitle')}</p>}
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link to="/qa-honors-program">
                                <Button className="bg-[#3B7DBF] hover:bg-[#2D6090] text-white font-medium px-7 py-5 rounded-md text-sm transition-colors w-full">
                                    {t('cta.primary')}
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                            <Link to="/get-in-touch">
                                <Button className="bg-transparent border border-white/15 text-white hover:bg-white/5 font-medium px-7 py-5 rounded-md text-sm transition-colors w-full">
                                    {t('cta.secondary')}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
