import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Wrench, Globe, GraduationCap, Code, Smartphone, Accessibility, ChevronLeft, ChevronRight, User, Camera } from "lucide-react";
import CourseCard from "@/components/courses/CourseCard";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useT } from "@/i18n/LanguageContext";

// Refined section eyebrow — small, soft, no UPPERCASE. Designer-style label.
const Eyebrow = ({ children, color = '#3FC4E2' }: { children: React.ReactNode; color?: string }) => (
    <div className="inline-flex items-center gap-2 text-xs font-medium text-white/55 mb-4">
        <span className="w-6 h-px" style={{ backgroundColor: color }} />
        <span style={{ color }}>{children}</span>
    </div>
);

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

    const graduates = [{ empty: true }, { empty: true }, { empty: true }];
    const lecturers = [{ empty: true }, { empty: true }, { empty: true }, { empty: true }];
    const communitySlots = Array.from({ length: 10 }, (_, i) => ({ id: i }));
    const partners = ['Storia', 'Awork', 'Biznetix', 'Gorgia', 'Genof_IT', 'International Tech', 'NY Startups', 'EU Partners'];

    const goPrev = () => setGraduateIndex((i) => (i - 1 + graduates.length) % graduates.length);
    const goNext = () => setGraduateIndex((i) => (i + 1) % graduates.length);

    return (
        <div className="bg-[#00263E] min-h-screen text-white">

            {/* HERO */}
            <section className="relative pt-24 pb-20 lg:pt-28 lg:pb-24 border-b border-white/[0.06] overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">

                        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40 mb-14">
                            <img
                                src="/hero-cover.jpg"
                                alt="GenofIT"
                                className="w-full h-auto block"
                            />
                        </div>

                        <div className="text-center max-w-2xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs font-medium text-white/65 mb-7">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#3FC4E2]" />
                                {t('hero.badge')}
                            </div>

                            <h1 className="text-3xl md:text-[40px] lg:text-5xl font-semibold leading-[1.15] tracking-tight mb-5">
                                {t('hero.title')}
                            </h1>

                            <p className="text-base md:text-lg text-white/55 leading-relaxed mb-10">
                                {t('hero.subtitle')}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
                                    <Button className="bg-transparent border border-white/15 text-white hover:bg-white/5 font-medium px-7 py-5 rounded-md text-sm transition-colors w-full">
                                        {t('hero.cta_secondary')}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURED COURSES */}
            <section id="courses" className="py-24 lg:py-28 border-b border-white/[0.06]">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mx-auto mb-16 text-center">
                        <Eyebrow>{t('courses.eyebrow')}</Eyebrow>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-4">{t('courses.title')}</h2>
                        <p className="text-white/55 text-base">{t('courses.subtitle')}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {courses.map((c) => (
                            <CourseCard key={c.id} {...c} />
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY US */}
            <section className="py-24 lg:py-28 border-b border-white/[0.06]">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mx-auto mb-16 text-center">
                        <Eyebrow>{t('whyus.eyebrow')}</Eyebrow>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-4">{t('whyus.title')}</h2>
                        <p className="text-white/55 text-base">{t('whyus.subtitle')}</p>
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

            {/* GRADUATES — empty placeholder carousel */}
            <section className="py-24 lg:py-28 border-b border-white/[0.06]">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mx-auto mb-16 text-center">
                        <Eyebrow color="#F05A26">{t('graduates.eyebrow')}</Eyebrow>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-4">{t('graduates.title')}</h2>
                        <p className="text-white/55 text-base">{t('graduates.subtitle')}</p>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#0B2A45] border border-white/[0.06] rounded-2xl p-10 lg:p-14 min-h-[340px]">
                            <div className="lg:col-span-4 flex justify-center">
                                <div className="w-44 h-44 lg:w-52 lg:h-52 rounded-full border border-dashed border-white/10 bg-white/[0.015] flex items-center justify-center">
                                    <Camera className="w-10 h-10 text-white/15" strokeWidth={1.25} />
                                </div>
                            </div>

                            <div className="lg:col-span-8">
                                <div className="space-y-3 mb-8">
                                    <div className="h-3 bg-white/[0.04] rounded-sm w-full" />
                                    <div className="h-3 bg-white/[0.04] rounded-sm w-11/12" />
                                    <div className="h-3 bg-white/[0.04] rounded-sm w-3/4" />
                                </div>
                                <div className="text-xs text-white/30">{t('graduates.placeholder')}</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-3 mt-8">
                            <button
                                onClick={goPrev}
                                aria-label="Previous"
                                className="w-9 h-9 rounded-full border border-white/10 hover:border-white/25 hover:bg-white/[0.03] transition-colors flex items-center justify-center text-white/60"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <div className="flex gap-1.5">
                                {graduates.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setGraduateIndex(i)}
                                        aria-label={`${i + 1}`}
                                        className={`h-1.5 rounded-full transition-all ${
                                            i === graduateIndex ? 'bg-[#F05A26] w-6' : 'bg-white/15 hover:bg-white/30 w-1.5'
                                        }`}
                                    />
                                ))}
                            </div>
                            <button
                                onClick={goNext}
                                aria-label="Next"
                                className="w-9 h-9 rounded-full border border-white/10 hover:border-white/25 hover:bg-white/[0.03] transition-colors flex items-center justify-center text-white/60"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
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
                        <p className="text-white/55 text-base">{t('lecturers.subtitle')}</p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {lecturers.map((_, i) => (
                            <div key={i} className="text-center group">
                                <div className="aspect-square rounded-xl bg-[#0B2A45] border border-white/[0.06] group-hover:border-white/15 transition-colors flex items-center justify-center mb-4">
                                    <User className="w-10 h-10 text-white/15" strokeWidth={1.25} />
                                </div>
                                <div className="space-y-2 px-2">
                                    <div className="h-2.5 bg-white/[0.04] rounded-sm w-3/4 mx-auto" />
                                    <div className="h-2 bg-white/[0.03] rounded-sm w-1/2 mx-auto" />
                                </div>
                                <div className="text-[10px] text-white/30 mt-3">{t('lecturers.placeholder_name')}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PARTNERS marquee */}
            <section className="py-20 border-b border-white/[0.06] overflow-hidden">
                <div className="container mx-auto px-6 mb-12">
                    <div className="max-w-2xl mx-auto text-center">
                        <Eyebrow color="rgba(255,255,255,0.4)">{t('partners.eyebrow')}</Eyebrow>
                        <p className="text-white/55 text-sm">{t('partners.subtitle')}</p>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#00263E] to-transparent pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#00263E] to-transparent pointer-events-none" />

                    <div className="flex gap-16 animate-marquee-slow w-max items-center">
                        {[...partners, ...partners].map((name, i) => (
                            <div key={i} className="flex-shrink-0 text-white/30 hover:text-white/60 transition-colors font-medium tracking-wide text-lg whitespace-nowrap">
                                {name}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* B2B TEASER */}
            <section className="py-24 lg:py-28 border-b border-white/[0.06]">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#0B2A45] to-[#062138] p-10 lg:p-14">
                        <div className="max-w-2xl mb-10">
                            <Eyebrow color="#F05A26">{t('b2b.eyebrow')}</Eyebrow>
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
                        <p className="text-white/55 text-base">{t('community.subtitle')}</p>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-40 z-10 bg-gradient-to-r from-[#00263E] to-transparent pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-40 z-10 bg-gradient-to-l from-[#00263E] to-transparent pointer-events-none" />

                    <div className="flex gap-5 animate-marquee w-max">
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
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-5 leading-[1.15] tracking-tight">
                            {t('cta.title')}
                        </h2>
                        <p className="text-white/55 mb-10 text-base">{t('cta.subtitle')}</p>
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
