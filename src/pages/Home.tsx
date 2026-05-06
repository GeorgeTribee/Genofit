import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Wrench, Globe, GraduationCap, Code, Smartphone, Accessibility, Star } from "lucide-react";
import CourseCard from "@/components/courses/CourseCard";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useT } from "@/i18n/LanguageContext";

const Home = () => {
    const location = useLocation();
    const { t, locale } = useT();

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

    const testimonials = [
        {
            name: "ნინო მ.",
            role: "QA Engineer · Storia",
            quote: locale === 'ka'
                ? "4 თვეში გავიარე QA Manual Pro და უკვე საერთაშორისო კომპანიაში ვმუშაობ. პორტფოლიო-ცენტრული მიდგომა გადამწყვეტი იყო."
                : "I finished QA Manual Pro in 4 months and already work at an international company. The portfolio-first approach made the difference.",
        },
        {
            name: "გიორგი კ.",
            role: "QA Lead · Awork",
            quote: locale === 'ka'
                ? "Genofit-ის გუნდი რეალურ პროექტებზე გვაშუალებდა. ეს არ არის თეორიული კურსი."
                : "The Genofit team puts you on real projects. This is not a theoretical course.",
        },
        {
            name: "თამარ ხ.",
            role: "Manual Tester · Biznetix",
            quote: locale === 'ka'
                ? "ინგლისური + Jira + რეალური bug report-ები — ეს ყველაფერი ერთ პროგრამაში მქონდა."
                : "English + Jira + real bug reports — all of it bundled into one program.",
        },
    ];

    return (
        <div className="bg-[#00263E] min-h-screen text-white">

            {/* HERO */}
            <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs font-medium uppercase tracking-wider text-white/70 mb-8">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#3FC4E2]" />
                            {t('hero.badge')}
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
                            {t('hero.title')}
                        </h1>

                        <p className="text-base md:text-lg text-white/65 max-w-2xl mx-auto leading-relaxed mb-10">
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

            {/* TESTIMONIALS */}
            <section className="py-24 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('testimonials.title')}</h2>
                        <p className="text-white/60">{t('testimonials.subtitle')}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {testimonials.map((tm, i) => (
                            <div key={i} className="p-6 rounded-lg border border-white/10 bg-white/[0.02]">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, idx) => (
                                        <Star key={idx} className="w-4 h-4 fill-[#F05A26] text-[#F05A26]" />
                                    ))}
                                </div>
                                <p className="text-sm text-white/75 leading-relaxed mb-6">"{tm.quote}"</p>
                                <div className="pt-4 border-t border-white/10">
                                    <div className="font-semibold text-sm">{tm.name}</div>
                                    <div className="text-xs text-white/50 mt-1">{tm.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PARTNERS */}
            <section className="py-24 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <div className="text-xs font-medium uppercase tracking-[0.2em] text-white/40 mb-3">
                            {t('partners.title')}
                        </div>
                        <p className="text-white/60 text-sm">{t('partners.subtitle')}</p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60">
                        {['Storia', 'Awork', 'Biznetix', 'Gorgia', 'Genof_IT', 'Partners'].map((name) => (
                            <div key={name} className="text-white/40 font-medium tracking-wider text-lg">
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
