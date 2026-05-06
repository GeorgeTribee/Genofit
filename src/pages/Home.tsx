import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Wrench, Globe, GraduationCap, Code, Smartphone, Accessibility, Star, ChevronLeft, ChevronRight } from "lucide-react";
import CourseCard from "@/components/courses/CourseCard";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useT } from "@/i18n/LanguageContext";

const Home = () => {
    const location = useLocation();
    const { t, locale } = useT();
    const [graduateIndex, setGraduateIndex] = useState(0);

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.substring(1);
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => element.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
            }
        }
    }, [location]);

    const courses = [
        {
            id: "1",
            title: "QA Manual Pro",
            index: ".01",
            category: "QA",
            description: locale === 'ka'
                ? "გახდი პროფესიონალი QA ინჟინერი. ისწავლე test plan-ები, bug report-ები, რეგრესია, Jira-ით სამუშაო ნაკადი."
                : "Master manual QA testing — test plans, bug reports, regression, and a Jira-driven workflow that real teams use.",
            instructor: { name: "", role: "", image: "" },
        },
        {
            id: "2",
            title: "QA Automation",
            index: ".02",
            category: "QA",
            description: locale === 'ka'
                ? "ააწყვე ავტომატური ტესტ-სუიტები. ინდუსტრიული ხელსაწყოები, ჩარჩოები და CI/CD ინტეგრაცია."
                : "Build automated test suites with industry-standard tools, frameworks, and CI/CD integration.",
            instructor: { name: "", role: "", image: "" },
            isEnded: true,
        },
        {
            id: "3",
            title: "Software Testing Fundamentals",
            index: ".03",
            category: "QA",
            description: locale === 'ka'
                ? "ტესტირების საფუძვლები. ლექსიკონი, მეთოდოლოგიები, თეორია — ყველაფერი ერთ ადგილას."
                : "Testing fundamentals: vocabulary, methodologies, and core theory — all in one foundation course.",
            instructor: { name: "", role: "", image: "" },
        },
    ];

    const stats = [
        { value: "300+", labelKey: "stats.students" },
        { value: "70%", labelKey: "stats.placement" },
        { value: "20+", labelKey: "stats.partners" },
        { value: "5+", labelKey: "stats.years" },
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

    // Successful graduates — TODO: replace with real photos & stories from user
    const graduates = [
        {
            initial: 'ნ',
            name: locale === 'ka' ? 'ნინო მელაძე' : 'Nino Meladze',
            role: 'QA Engineer · Storia',
            course: 'QA Manual Pro',
            story: locale === 'ka'
                ? '4 თვეში გავიარე QA Manual Pro და უკვე საერთაშორისო კომპანიაში ვმუშაობ. პორტფოლიო-ცენტრული მიდგომა გადამწყვეტი იყო — დასაქმდი არა "ცარიელი CV-ით", არამედ რეალური bug report-ებით და test plan-ებით.'
                : 'I finished QA Manual Pro in 4 months and already work at an international company. The portfolio-first approach was the difference — I got hired not with an empty CV, but with real bug reports and test plans.',
        },
        {
            initial: 'გ',
            name: locale === 'ka' ? 'გიორგი კობახიძე' : 'Giorgi Kobakhidze',
            role: 'QA Lead · Awork',
            course: 'QA Manual Pro + Automation',
            story: locale === 'ka'
                ? 'Genofit-ის გუნდი რეალურ პროექტებზე გვაშუალებდა. ეს არ არის თეორიული კურსი — პირდაპირ live ბაგებზე ვიწყებთ მუშაობას. წელიწადში QA Lead გავხდი.'
                : 'The Genofit team puts you on real projects. This is not a theoretical course — you work with live bugs from day one. I became a QA Lead within a year.',
        },
        {
            initial: 'თ',
            name: locale === 'ka' ? 'თამარ ხატიაშვილი' : 'Tamar Khatiashvili',
            role: 'Manual Tester · Biznetix',
            course: 'QA Manual Pro',
            story: locale === 'ka'
                ? 'ინგლისური + Jira + რეალური bug report-ები — ეს ყველაფერი ერთ პროგრამაში მქონდა. სოც.მედია მენეჯერიდან QA-ზე გადავედი.'
                : 'English + Jira + real bug reports — all in one program. I switched from social media manager to QA professional.',
        },
    ];

    // Lecturers — TODO: replace with real photos & bios from user
    const lecturers = [
        {
            initial: 'A',
            nameKa: 'ალექსანდრე ნ.',
            nameEn: 'Alexander N.',
            role: 'Senior QA · NY Startups',
            specialty: locale === 'ka' ? 'მანუალური + მობილური' : 'Manual + Mobile',
        },
        {
            initial: 'M',
            nameKa: 'მარიამ ლ.',
            nameEn: 'Mariam L.',
            role: 'QA Lead · International Tech',
            specialty: locale === 'ka' ? 'ავტომატიზაცია + CI/CD' : 'Automation + CI/CD',
        },
        {
            initial: 'D',
            nameKa: 'დავით ც.',
            nameEn: 'David Ts.',
            role: 'Accessibility QA · EU Startups',
            specialty: locale === 'ka' ? 'WCAG + Inclusive design' : 'WCAG + Inclusive design',
        },
        {
            initial: 'L',
            nameKa: 'ლევან ბ.',
            nameEn: 'Levan B.',
            role: 'Test Architect · Fortune 500',
            specialty: locale === 'ka' ? 'სტრატეგია + Test Architecture' : 'Strategy + Test Architecture',
        },
    ];

    const partners = ['Storia', 'Awork', 'Biznetix', 'Gorgia', 'Genof_IT', 'International Tech', 'NY Startups', 'EU Partners'];

    const goPrev = () => setGraduateIndex((i) => (i - 1 + graduates.length) % graduates.length);
    const goNext = () => setGraduateIndex((i) => (i + 1) % graduates.length);
    const currentGrad = graduates[graduateIndex];

    return (
        <div className="bg-[#00263E] min-h-screen text-white">

            {/* HERO — cover photo on top, text below */}
            <section className="relative pt-24 pb-16 lg:pt-28 border-b border-white/5 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">

                        {/* Cover image — full-width banner at top */}
                        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40 mb-12">
                            <img
                                src="/hero-cover.jpg"
                                alt="GenofIT — Software Testing · Services · Academy"
                                className="w-full h-auto block"
                            />
                        </div>

                        {/* Text below cover */}
                        <div className="text-center max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs font-medium uppercase tracking-wider text-white/70 mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#3FC4E2]" />
                                {t('hero.badge')}
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-5">
                                {t('hero.title')}
                            </h1>

                            <p className="text-base md:text-lg text-white/65 leading-relaxed mb-8">
                                {t('hero.subtitle')}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Button
                                    onClick={() => {
                                        const el = document.getElementById('courses');
                                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="bg-[#3B7DBF] hover:bg-[#2D6090] text-white font-medium px-7 py-6 rounded-md text-base transition-colors"
                                >
                                    {t('hero.cta_primary')}
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                                <Link to="/services">
                                    <Button className="bg-transparent border border-white/20 text-white hover:bg-white/5 font-medium px-7 py-6 rounded-md text-base transition-colors w-full">
                                        {t('hero.cta_secondary')}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* STATS STRIP */}
            <section className="py-16 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {stats.map((s) => (
                            <div key={s.labelKey} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{s.value}</div>
                                <div className="text-xs md:text-sm text-white/50 uppercase tracking-wider">{t(s.labelKey)}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FEATURED COURSES */}
            <section id="courses" className="py-24 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <div className="text-xs font-medium uppercase tracking-[0.2em] text-[#3FC4E2] mb-3">
                            {t('nav.courses')}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('courses.title')}</h2>
                        <p className="text-white/60">{t('courses.subtitle')}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {courses.map((c) => (
                            <CourseCard key={c.id} {...c} />
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY US */}
            <section className="py-24 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('whyus.title')}</h2>
                        <p className="text-white/60">{t('whyus.subtitle')}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {whyUs.map((f) => {
                            const Icon = f.icon;
                            return (
                                <div key={f.key} className="p-6 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                                    <div className="w-10 h-10 rounded-md bg-[#3B7DBF]/15 flex items-center justify-center mb-5">
                                        <Icon className="w-5 h-5 text-[#3FC4E2]" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{t(`whyus.${f.key}.title`)}</h3>
                                    <p className="text-sm text-white/55 leading-relaxed">{t(`whyus.${f.key}.desc`)}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* GRADUATES SUCCESS STORIES — featured carousel */}
            <section className="py-24 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <div className="text-xs font-medium uppercase tracking-[0.2em] text-[#F05A26] mb-3">
                            {t('graduates.eyebrow')}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('graduates.title')}</h2>
                        <p className="text-white/60">{t('graduates.subtitle')}</p>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-br from-[#0F2E4A] to-[#00263E] border border-white/10 rounded-2xl p-8 lg:p-12">
                            {/* Photo placeholder */}
                            <div className="lg:col-span-4 flex justify-center">
                                <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full bg-gradient-to-br from-[#3B7DBF] to-[#3FC4E2] flex items-center justify-center text-white font-bold text-7xl shadow-2xl shadow-black/30">
                                    {currentGrad.initial}
                                </div>
                            </div>

                            {/* Story */}
                            <div className="lg:col-span-8">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, idx) => (
                                        <Star key={idx} className="w-4 h-4 fill-[#F05A26] text-[#F05A26]" />
                                    ))}
                                </div>
                                <p className="text-base lg:text-lg text-white/80 leading-relaxed mb-6 italic">
                                    "{currentGrad.story}"
                                </p>
                                <div className="border-t border-white/10 pt-5">
                                    <div className="font-bold text-lg">{currentGrad.name}</div>
                                    <div className="text-sm text-white/60 mt-1">{currentGrad.role}</div>
                                    <div className="inline-block mt-2 px-2 py-1 rounded text-xs bg-[#3B7DBF]/15 text-[#3FC4E2]">
                                        {currentGrad.course}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Carousel controls */}
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <button
                                onClick={goPrev}
                                aria-label="Previous graduate"
                                className="w-10 h-10 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition-colors flex items-center justify-center"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <div className="flex gap-2">
                                {graduates.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setGraduateIndex(i)}
                                        aria-label={`Go to graduate ${i + 1}`}
                                        className={`w-2 h-2 rounded-full transition-all ${
                                            i === graduateIndex ? 'bg-[#F05A26] w-6' : 'bg-white/20 hover:bg-white/40'
                                        }`}
                                    />
                                ))}
                            </div>
                            <button
                                onClick={goNext}
                                aria-label="Next graduate"
                                className="w-10 h-10 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition-colors flex items-center justify-center"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* LECTURERS */}
            <section className="py-24 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <div className="text-xs font-medium uppercase tracking-[0.2em] text-[#3FC4E2] mb-3">
                            {t('lecturers.eyebrow')}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('lecturers.title')}</h2>
                        <p className="text-white/60">{t('lecturers.subtitle')}</p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {lecturers.map((l, i) => (
                            <div key={i} className="text-center group">
                                <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#0F2E4A] to-[#00263E] border border-white/10 group-hover:border-[#3FC4E2]/30 transition-colors flex items-center justify-center mb-4 overflow-hidden">
                                    <div className="text-6xl lg:text-7xl font-bold bg-gradient-to-br from-[#3B7DBF] to-[#3FC4E2] bg-clip-text text-transparent">
                                        {l.initial}
                                    </div>
                                </div>
                                <div className="font-semibold text-base">{locale === 'ka' ? l.nameKa : l.nameEn}</div>
                                <div className="text-xs text-white/50 mt-1">{l.role}</div>
                                <div className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] bg-white/5 text-white/60 uppercase tracking-wider">
                                    {l.specialty}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PARTNERS — auto-scrolling marquee */}
            <section className="py-20 border-b border-white/5 overflow-hidden">
                <div className="container mx-auto px-6 mb-10">
                    <div className="text-center max-w-2xl mx-auto">
                        <div className="text-xs font-medium uppercase tracking-[0.2em] text-white/40 mb-3">
                            {t('partners.title')}
                        </div>
                        <p className="text-white/60 text-sm">{t('partners.subtitle')}</p>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#00263E] to-transparent pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#00263E] to-transparent pointer-events-none" />

                    <div className="flex gap-16 animate-marquee-slow w-max items-center">
                        {[...partners, ...partners].map((name, i) => (
                            <div key={i} className="flex-shrink-0 text-white/35 hover:text-white/70 transition-colors font-medium tracking-wider text-xl whitespace-nowrap">
                                {name}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* B2B SERVICES TEASER */}
            <section className="py-24 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto rounded-2xl border border-white/10 bg-gradient-to-br from-[#0F2E4A] to-[#00263E] p-10 lg:p-14">
                        <div className="text-xs font-medium uppercase tracking-[0.2em] text-[#F05A26] mb-3">
                            {t('b2b.eyebrow')}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-2xl">
                            {t('b2b.title')}
                        </h2>
                        <p className="text-white/65 max-w-2xl mb-10">
                            {t('b2b.subtitle')}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                            {b2bServices.map((s) => {
                                const Icon = s.icon;
                                return (
                                    <div key={s.key} className="p-5 rounded-lg bg-white/5 border border-white/10">
                                        <div className="w-9 h-9 rounded-md bg-[#F05A26]/15 flex items-center justify-center mb-4">
                                            <Icon className="w-4 h-4 text-[#F05A26]" />
                                        </div>
                                        <h3 className="font-semibold text-sm mb-1">{t(`b2b.${s.key}.title`)}</h3>
                                        <p className="text-xs text-white/55 leading-relaxed">{t(`b2b.${s.key}.desc`)}</p>
                                    </div>
                                );
                            })}
                        </div>

                        <Link to="/services">
                            <Button className="bg-white text-[#00263E] hover:bg-white/90 font-medium px-6 py-5 rounded-md transition-colors">
                                {t('b2b.cta')}
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-28">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-tight tracking-tight">
                            {t('cta.title')}
                        </h2>
                        <p className="text-white/60 mb-10 text-lg">{t('cta.subtitle')}</p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link to="/qa-honors-program">
                                <Button className="bg-[#3B7DBF] hover:bg-[#2D6090] text-white font-medium px-7 py-6 rounded-md text-base transition-colors w-full">
                                    {t('cta.primary')}
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                            <Link to="/get-in-touch">
                                <Button className="bg-transparent border border-white/20 text-white hover:bg-white/5 font-medium px-7 py-6 rounded-md text-base transition-colors w-full">
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
