import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, Code, ArrowLeftRight, Gauge, Laptop, Paintbrush, Smartphone, Zap, Shield, Globe, CheckCircle, Clock, UserCheck, ArrowRight, Package, Award, Crown, BadgeCheck, DollarSign, Rocket, Headphones } from "lucide-react";
import CourseCard from "@/components/courses/CourseCard";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.substring(1);
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }, [location]);

    const characters = '01QA</>{}[]テストバグコード検証';
    const columns = 50;

    const matrixColumns = Array.from({ length: columns }, (_, i) => ({
        id: i,
        delay: Math.random() * 5,
        duration: 10 + Math.random() * 10,
        chars: Array.from({ length: 20 }, () =>
            characters[Math.floor(Math.random() * characters.length)]
        ),
    }));

    const courses = [
        {
            id: "1",
            title: "QA Manual Pro",
            index: ".01",
            category: "IT",
            description: "Master advanced manual testing techniques and become a professional QA specialist with hands-on experience in test case design and execution.",
            instructor: {
                name: "",
                role: "",
                image: ""
            }
        },
        {
            id: "2",
            title: "QA Automation",
            index: ".02",
            category: "IT",
            description: "Learn to build robust automated test suites using industry-standard tools and frameworks to accelerate your testing workflow.",
            instructor: {
                name: "",
                role: "",
                image: ""
            },
            isEnded: true
        }
    ];

    return (
        <div className="bg-[#0A1825] min-h-screen text-white overflow-x-hidden">
            {/* Hero Section - Banner Style */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
                {/* Subtle Dark Background */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Matrix Rain Animation */}
                <div className="absolute inset-0 overflow-hidden opacity-40">
                    <div className="relative w-full h-full flex justify-around">
                        {matrixColumns.map((column) => (
                            <motion.div
                                key={column.id}
                                className="flex flex-col text-center font-mono text-sm md:text-base"
                                style={{
                                    textShadow: '0 0 8px rgba(0, 136, 255, 0.8)',
                                }}
                                initial={{ y: '-100%' }}
                                animate={{ y: '100%' }}
                                transition={{
                                    duration: column.duration,
                                    repeat: Infinity,
                                    ease: 'linear',
                                    delay: column.delay,
                                }}
                            >
                                {column.chars.map((char, idx) => {
                                    const isLeading = idx === column.chars.length - 1;
                                    const opacity = isLeading ? 1 : Math.max(0.1, 1 - (column.chars.length - idx) * 0.08);

                                    return (
                                        <motion.span
                                            key={idx}
                                            style={{
                                                color: isLeading ? '#0088ff' : '#0033ff',
                                                opacity: opacity,
                                                display: 'block',
                                                lineHeight: '1.5',
                                            }}
                                            animate={{
                                                opacity: [opacity, opacity * 0.5, opacity],
                                            }}
                                            transition={{
                                                duration: 0.5,
                                                repeat: Infinity,
                                                delay: idx * 0.05,
                                            }}
                                        >
                                            {char}
                                        </motion.span>
                                    );
                                })}
                            </motion.div>
                        ))}
                    </div>
                </div>


                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-6xl mx-auto text-center">
                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-12"
                        >
                            Quality Assurance, Education, and Startup Support — In One Ecosystem.
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-sm md:text-base lg:text-lg text-white/60 max-w-3xl mx-auto mb-24 leading-relaxed"
                        >
                            A complete quality ecosystem for tech companies and growing products.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Link to="/services">
                                <Button className="bg-transparent border-2 border-[#0033ff] text-white font-semibold px-8 py-6 rounded-lg text-lg transition-all duration-300 hover:bg-[#0033ff]/20 hover:scale-105">
                                    Services
                                    <Briefcase className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Button
                                onClick={() => {
                                    const coursesSection = document.getElementById('courses');
                                    if (coursesSection) {
                                        coursesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                }}
                                className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 rounded-lg text-lg transition-all duration-300 hover:scale-105"
                            >
                                Courses
                                <GraduationCap className="ml-2 w-5 h-5" />
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <section id="what-we-do" className="bg-[#0A1825] py-20 border-t border-white/10">
                <div className="container mx-auto px-6">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                            What We Do
                        </h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            Comprehensive testing solutions tailored to ensure your software exceeds quality standards
                        </p>
                    </motion.div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                        {/* Functional Testing */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-[#1a2332] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-[#1f2937] transition-all duration-300 hover:border-[#0033ff]/50 flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-[#0033ff]/10 flex items-center justify-center mb-6">
                                <Code className="w-8 h-8 text-[#0088ff]" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-4">Functional Testing</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Functional testing ensures the software behaves according to the documented requirements and specifications
                            </p>
                        </motion.div>

                        {/* API Testing */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-[#1a2332] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-[#1f2937] transition-all duration-300 hover:border-[#0033ff]/50 flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-[#0033ff]/10 flex items-center justify-center mb-6">
                                <ArrowLeftRight className="w-8 h-8 text-[#0088ff]" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-4">API</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                API testing ensures that your application programming interfaces (APIs) work seamlessly and reliably
                            </p>
                        </motion.div>

                        {/* Performance Testing */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-[#1a2332] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-[#1f2937] transition-all duration-300 hover:border-[#0033ff]/50 flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-[#0033ff]/10 flex items-center justify-center mb-6">
                                <Gauge className="w-8 h-8 text-[#0088ff]" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-4">Performance</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Performance testing assesses the software's speed and scalability under varying conditions to ensure optimal user experience
                            </p>
                        </motion.div>

                        {/* Portability Testing */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-[#1a2332] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-[#1f2937] transition-all duration-300 hover:border-[#0033ff]/50 flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-[#0033ff]/10 flex items-center justify-center mb-6">
                                <Laptop className="w-8 h-8 text-[#0088ff]" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-4">Portability</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Portability testing evaluates how easily software can be adapted to different environments, platforms, or devices
                            </p>
                        </motion.div>

                        {/* UI/UX Testing */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="bg-[#1a2332] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-[#1f2937] transition-all duration-300 hover:border-[#0033ff]/50 flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-[#0033ff]/10 flex items-center justify-center mb-6">
                                <Paintbrush className="w-8 h-8 text-[#0088ff]" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-4">UI/UX</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                UI/UX testing ensures that your application's interface is user-friendly, intuitive, and visually appealing
                            </p>
                        </motion.div>

                        {/* Responsive Design Testing */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="bg-[#1a2332] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-[#1f2937] transition-all duration-300 hover:border-[#0033ff]/50 flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-[#0033ff]/10 flex items-center justify-center mb-6">
                                <Smartphone className="w-8 h-8 text-[#0088ff]" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-4">Responsive Design</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Test your application across multiple devices and screen sizes to guarantee consistent functionality and appearance
                            </p>
                        </motion.div>

                        {/* Automation Testing */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="bg-[#1a2332] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-[#1f2937] transition-all duration-300 hover:border-[#0033ff]/50 flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-[#0033ff]/10 flex items-center justify-center mb-6">
                                <Zap className="w-8 h-8 text-[#0088ff]" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-4">Automation</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Implement automated test scripts to accelerate testing cycles and increase coverage while reducing manual effort
                            </p>
                        </motion.div>

                        {/* Security Testing */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="bg-[#1a2332] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-[#1f2937] transition-all duration-300 hover:border-[#0033ff]/50 flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-[#0033ff]/10 flex items-center justify-center mb-6">
                                <Shield className="w-8 h-8 text-[#0088ff]" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-4">Security Testing</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Identify vulnerabilities and protect your application from potential threats with comprehensive security assessments
                            </p>
                        </motion.div>

                        {/* Localization Testing */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="bg-[#1a2332] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-[#1f2937] transition-all duration-300 hover:border-[#0033ff]/50 flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-[#0033ff]/10 flex items-center justify-center mb-6">
                                <Globe className="w-8 h-8 text-[#0088ff]" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-4">Localization</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Verify that your software is properly adapted for different languages, regions, and cultural contexts
                            </p>
                        </motion.div>

                        {/* User Acceptance Testing */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            className="bg-[#1a2332] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-[#1f2937] transition-all duration-300 hover:border-[#0033ff]/50 flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-[#0033ff]/10 flex items-center justify-center mb-6">
                                <CheckCircle className="w-8 h-8 text-[#0088ff]" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-4">User Acceptance</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Validate that your software meets business requirements and is ready for deployment through real-world user testing
                            </p>
                        </motion.div>

                        {/* Change-related Testing */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 1.0 }}
                            className="bg-[#1a2332] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-[#1f2937] transition-all duration-300 hover:border-[#0033ff]/50 flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-[#0033ff]/10 flex items-center justify-center mb-6">
                                <Code className="w-8 h-8 text-[#0088ff]" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-4">Change-related</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Ensure modifications, updates, and fixes don't introduce new defects through comprehensive regression and smoke testing
                            </p>
                        </motion.div>

                        {/* Non-functional Testing */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 1.1 }}
                            className="bg-[#1a2332] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-[#1f2937] transition-all duration-300 hover:border-[#0033ff]/50 flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-[#0033ff]/10 flex items-center justify-center mb-6">
                                <Briefcase className="w-8 h-8 text-[#0088ff]" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-4">Non-functional</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Evaluate system characteristics like performance, reliability, usability, and maintainability to ensure quality beyond basic functionality
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section id="process" className="bg-[#0A1825] py-20 border-t border-white/10">
                <div className="container mx-auto px-6">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                            This is How We Deliver It
                        </h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            Our proven step-by-step process ensures quality delivery from consultation to continuous support
                        </p>
                    </motion.div>

                    {/* Process Steps - Vertical Timeline */}
                    <div className="max-w-4xl mx-auto relative">
                        {/* Vertical Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 transform -translate-x-1/2 hidden md:block"></div>

                        <div className="space-y-12">
                            {/* Step 1 - Left */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="relative flex flex-col md:flex-row items-center gap-8"
                            >
                                <div className="md:w-1/2 md:pr-12 md:text-right">
                                    <div className="bg-[#1a2332] border border-white/10 rounded-2xl p-6 hover:bg-[#1f2937] transition-all duration-300 hover:border-[#0033ff]/50">
                                        <h3 className="text-lg font-bold text-white mb-2">Consultation & Understanding</h3>
                                        <p className="text-white/60 text-sm leading-relaxed">
                                            We begin by understanding your project requirements, goals, and unique challenges to tailor our approach.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0033ff] border-4 border-[#10293E] flex items-center justify-center z-10">
                                    <span className="text-white font-bold text-xl">1</span>
                                </div>
                                <div className="md:w-1/2"></div>
                            </motion.div>

                            {/* Step 2 - Right */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="relative flex flex-col md:flex-row items-center gap-8"
                            >
                                <div className="md:w-1/2"></div>
                                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0033ff] border-4 border-[#10293E] flex items-center justify-center z-10">
                                    <span className="text-white font-bold text-xl">2</span>
                                </div>
                                <div className="md:w-1/2 md:pl-12">
                                    <div className="bg-[#1a2332] border border-white/10 rounded-2xl p-6 hover:bg-[#1f2937] transition-all duration-300 hover:border-[#0033ff]/50">
                                        <h3 className="text-lg font-bold text-white mb-2">Onboarding Process</h3>
                                        <p className="text-white/60 text-sm leading-relaxed">
                                            Seamless integration with your team and systems, ensuring smooth collaboration from day one.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Step 3 - Left */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="relative flex flex-col md:flex-row items-center gap-8"
                            >
                                <div className="md:w-1/2 md:pr-12 md:text-right">
                                    <div className="bg-[#1a2332] border border-white/10 rounded-2xl p-6 hover:bg-[#1f2937] transition-all duration-300 hover:border-[#0033ff]/50">
                                        <h3 className="text-lg font-bold text-white mb-2">Planning & Strategy</h3>
                                        <p className="text-white/60 text-sm leading-relaxed">
                                            Develop a comprehensive testing strategy aligned with your timeline, resources, and quality objectives.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0033ff] border-4 border-[#10293E] flex items-center justify-center z-10">
                                    <span className="text-white font-bold text-xl">3</span>
                                </div>
                                <div className="md:w-1/2"></div>
                            </motion.div>

                            {/* Step 4 - Right */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="relative flex flex-col md:flex-row items-center gap-8"
                            >
                                <div className="md:w-1/2"></div>
                                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0033ff] border-4 border-[#10293E] flex items-center justify-center z-10">
                                    <span className="text-white font-bold text-xl">4</span>
                                </div>
                                <div className="md:w-1/2 md:pl-12">
                                    <div className="bg-[#1a2332] border border-white/10 rounded-2xl p-6 hover:bg-[#1f2937] transition-all duration-300 hover:border-[#0033ff]/50">
                                        <h3 className="text-lg font-bold text-white mb-2">Quality Assurance Testing</h3>
                                        <p className="text-white/60 text-sm leading-relaxed">
                                            Execute comprehensive testing using industry best practices and cutting-edge tools to ensure quality.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Step 5 - Left */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="relative flex flex-col md:flex-row items-center gap-8"
                            >
                                <div className="md:w-1/2 md:pr-12 md:text-right">
                                    <div className="bg-[#1a2332] border border-white/10 rounded-2xl p-6 hover:bg-[#1f2937] transition-all duration-300 hover:border-[#0033ff]/50">
                                        <h3 className="text-lg font-bold text-white mb-2">Reporting & Feedback</h3>
                                        <p className="text-white/60 text-sm leading-relaxed">
                                            Deliver detailed reports with actionable insights and maintain transparent communication throughout.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0033ff] border-4 border-[#10293E] flex items-center justify-center z-10">
                                    <span className="text-white font-bold text-xl">5</span>
                                </div>
                                <div className="md:w-1/2"></div>
                            </motion.div>

                            {/* Step 6 - Right */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="relative flex flex-col md:flex-row items-center gap-8"
                            >
                                <div className="md:w-1/2"></div>
                                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0033ff] border-4 border-[#10293E] flex items-center justify-center z-10">
                                    <span className="text-white font-bold text-xl">6</span>
                                </div>
                                <div className="md:w-1/2 md:pl-12">
                                    <div className="bg-[#1a2332] border border-white/10 rounded-2xl p-6 hover:bg-[#1f2937] transition-all duration-300 hover:border-[#0033ff]/50">
                                        <h3 className="text-lg font-bold text-white mb-2">Continuous Support</h3>
                                        <p className="text-white/60 text-sm leading-relaxed">
                                            Ongoing assistance and maintenance to ensure your software maintains peak performance and quality.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Testing Services Section */}
            <section className="bg-[#0A1825] py-20 border-t border-white/10">
                <div className="container mx-auto px-6">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                            Our Testing Services
                        </h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            Professional testing services available around the clock
                        </p>
                    </motion.div>

                    {/* Services Boxes */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* 24 Hours Testing */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-gradient-to-br from-[#1a2f4d] to-[#0f1a2e] border border-white/10 rounded-3xl p-8 hover:border-[#0033ff]/50 transition-all duration-300"
                        >
                            {/* Header with Icon */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                                    <Clock className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">24 Hour Testing</h3>
                            </div>

                            {/* Divider */}
                            <div className="w-full h-px bg-white/10 mb-6"></div>

                            {/* Description */}
                            <p className="text-white/70 text-sm leading-relaxed mb-8">
                                A preliminary testing phase that verifies the basic functionality of a new build or application to ensure it's stable enough for more in-depth testing. Our expedited testing service provides rapid feedback on critical issues, allowing your team to address problems quickly and maintain development momentum.
                            </p>

                            {/* View Details Button */}
                            <Link to="/services#24-hour-testing">
                                <Button className="bg-[#0033ff] hover:bg-[#0029cc] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2">
                                    View Details
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                            </Link>
                        </motion.div>

                        {/* Closed Beta Testing */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-gradient-to-br from-[#1a2f4d] to-[#0f1a2e] border border-white/10 rounded-3xl p-8 hover:border-[#0033ff]/50 transition-all duration-300"
                        >
                            {/* Header with Icon */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                                    <UserCheck className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Closed Beta Testing</h3>
                            </div>

                            {/* Divider */}
                            <div className="w-full h-px bg-white/10 mb-6"></div>

                            {/* Description */}
                            <p className="text-white/70 text-sm leading-relaxed mb-8">
                                Verifying that the application's features and functionalities work correctly according to the defined requirements. Our closed beta testing involves carefully selected testers who will rigorously evaluate your software in a controlled environment, providing detailed feedback before your product reaches the wider public.
                            </p>

                            {/* View Details Button */}
                            <Link to="/services#closed-beta-testing">
                                <Button className="bg-[#0033ff] hover:bg-[#0029cc] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2">
                                    View Details
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Subscription Packages Section */}
            <section id="packages" className="bg-[#0A1825] py-20 border-t border-white/10">
                <div className="container mx-auto px-6">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                            Subscription Packages
                        </h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            Choose the perfect plan for your testing needs
                        </p>
                    </motion.div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {/* Basic Plan */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-[#1a2332] border border-white/10 rounded-3xl p-8 hover:border-[#0033ff]/50 transition-all duration-300 flex flex-col"
                        >
                            <div className="flex-grow">
                                {/* Icon */}
                                <div className="w-16 h-16 rounded-full bg-[#0033ff]/10 flex items-center justify-center mb-4">
                                    <Package className="w-8 h-8 text-[#0088ff]" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2">Basic</h3>
                                <div className="w-12 h-1 bg-[#0033ff] mb-6"></div>

                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                                        <span className="text-white/80 text-sm">Functional Testing</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                                        <span className="text-white/80 text-sm">Non Functional Testing</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                                        <span className="text-white/80 text-sm">Change-related testing</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                                        <span className="text-white/80 text-sm">Responsive Design</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                                        <span className="text-white/80 text-sm">UI/UX</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                                        <span className="text-white/80 text-sm">Portability</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                                        <span className="text-white/80 text-sm">Localization</span>
                                    </li>
                                </ul>
                            </div>

                            <Link to="/get-in-touch">
                                <Button className="w-full bg-transparent border-2 border-[#0033ff] text-white hover:bg-[#0033ff]/20 py-6 rounded-lg transition-all duration-300 mt-auto flex items-center justify-center gap-2">
                                    Get Started
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                            </Link>
                        </motion.div>

                        {/* Premium Plan */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-[#1a2332] border border-white/10 rounded-3xl p-8 hover:border-[#0033ff]/50 transition-all duration-300 flex flex-col"
                        >
                            <div className="flex-grow">
                                {/* Icon */}
                                <div className="w-16 h-16 rounded-full bg-[#0033ff]/10 flex items-center justify-center mb-4">
                                    <Award className="w-8 h-8 text-[#0088ff]" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
                                <div className="w-12 h-1 bg-[#0033ff] mb-6"></div>

                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                                        <span className="text-white/80 text-sm font-semibold">Everything in Basic</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                                        <span className="text-white/80 text-sm">API</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                                        <span className="text-white/80 text-sm">Performance</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                                        <span className="text-white/80 text-sm">User Acceptance Testing</span>
                                    </li>
                                </ul>
                            </div>

                            <Link to="/get-in-touch">
                                <Button className="w-full bg-transparent border-2 border-[#0033ff] text-white hover:bg-[#0033ff]/20 py-6 rounded-lg transition-all duration-300 mt-auto flex items-center justify-center gap-2">
                                    Get Started
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                            </Link>
                        </motion.div>

                        {/* VIP Plan */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-[#1a2332] border border-white/10 rounded-3xl p-8 hover:border-[#0033ff]/50 transition-all duration-300 flex flex-col"
                        >
                            <div className="flex-grow">
                                {/* Icon */}
                                <div className="w-16 h-16 rounded-full bg-[#0033ff]/10 flex items-center justify-center mb-4">
                                    <Crown className="w-8 h-8 text-[#0088ff]" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2">VIP</h3>
                                <div className="w-12 h-1 bg-[#0033ff] mb-6"></div>

                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                                        <span className="text-white/80 text-sm font-semibold">Everything in Premium</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                                        <span className="text-white/80 text-sm">Automation</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                                        <span className="text-white/80 text-sm">Security Testing</span>
                                    </li>
                                </ul>
                            </div>

                            <Link to="/get-in-touch">
                                <Button className="w-full bg-transparent border-2 border-[#0033ff] text-white hover:bg-[#0033ff]/20 py-6 rounded-lg transition-all duration-300 mt-auto flex items-center justify-center gap-2">
                                    Get Started
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What Sets Us Apart Section */}
            <section id="why-us" className="bg-[#0A1825] py-20 border-t border-white/10">
                <div className="container mx-auto px-6">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                            What Sets Us Apart?
                        </h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            Our commitment to excellence in every aspect of software testing
                        </p>
                    </motion.div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Quality */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-[#1a2332] border border-white/10 rounded-2xl p-8 hover:bg-[#1f2937] transition-all duration-300 hover:border-[#0033ff]/50 text-center"
                        >
                            <div className="w-16 h-16 rounded-full bg-[#0033ff]/10 flex items-center justify-center mx-auto mb-6">
                                <BadgeCheck className="w-8 h-8 text-[#0088ff]" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Quality</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Uncompromising quality standards with rigorous testing methodologies to ensure your software exceeds expectations
                            </p>
                        </motion.div>

                        {/* Pricing */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-[#1a2332] border border-white/10 rounded-2xl p-8 hover:bg-[#1f2937] transition-all duration-300 hover:border-[#0033ff]/50 text-center"
                        >
                            <div className="w-16 h-16 rounded-full bg-[#0033ff]/10 flex items-center justify-center mx-auto mb-6">
                                <DollarSign className="w-8 h-8 text-[#0088ff]" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Pricing</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Competitive and transparent pricing models designed to deliver exceptional value without compromising quality
                            </p>
                        </motion.div>

                        {/* Speed */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-[#1a2332] border border-white/10 rounded-2xl p-8 hover:bg-[#1f2937] transition-all duration-300 hover:border-[#0033ff]/50 text-center"
                        >
                            <div className="w-16 h-16 rounded-full bg-[#0033ff]/10 flex items-center justify-center mx-auto mb-6">
                                <Rocket className="w-8 h-8 text-[#0088ff]" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Speed</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Rapid turnaround times with efficient testing processes that keep your development cycle on track
                            </p>
                        </motion.div>

                        {/* Continuous Support */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-[#1a2332] border border-white/10 rounded-2xl p-8 hover:bg-[#1f2937] transition-all duration-300 hover:border-[#0033ff]/50 text-center"
                        >
                            <div className="w-16 h-16 rounded-full bg-[#0033ff]/10 flex items-center justify-center mx-auto mb-6">
                                <Headphones className="w-8 h-8 text-[#0088ff]" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Continuous Support</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                24/7 dedicated support team ready to assist you at every stage of your testing journey
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Courses Section */}
            <section id="courses" className="bg-[#0A1825] py-20 border-t border-white/10">
                <div className="container mx-auto px-6">
                    {/* Section Header for Courses */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                            Popular Courses
                        </h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            Discover our most popular courses taught by industry experts
                        </p>
                    </motion.div>

                    {/* Course Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {courses.map((course) => (
                            <CourseCard key={course.id} {...course} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Reputation Section */}
            <section className="bg-[#0A1825] py-20 border-t border-white/10">
                <div className="container mx-auto px-6">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                            Our Reputation
                        </h2>
                        <p className="text-white/80 text-xl md:text-2xl max-w-4xl mx-auto font-semibold">
                            The Most Trusted Software Testing Group from Georgia with a Global Reach
                        </p>
                    </motion.div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {/* Year Launched */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-[#1a2332] border border-white/10 rounded-2xl p-8 hover:bg-[#1f2937] transition-all duration-300 hover:border-[#0033ff]/50 text-center"
                        >
                            <h3 className="text-5xl md:text-6xl font-bold text-[#0088ff] mb-4">2024</h3>
                            <p className="text-white/70 text-lg">Launched in</p>
                        </motion.div>

                        {/* Countries */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-[#1a2332] border border-white/10 rounded-2xl p-8 hover:bg-[#1f2937] transition-all duration-300 hover:border-[#0033ff]/50 text-center"
                        >
                            <h3 className="text-5xl md:text-6xl font-bold text-[#0088ff] mb-4">8+</h3>
                            <p className="text-white/70 text-lg">Countries operating in</p>
                        </motion.div>

                        {/* Projects */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-[#1a2332] border border-white/10 rounded-2xl p-8 hover:bg-[#1f2937] transition-all duration-300 hover:border-[#0033ff]/50 text-center"
                        >
                            <h3 className="text-5xl md:text-6xl font-bold text-[#0088ff] mb-4">250+</h3>
                            <p className="text-white/70 text-lg">Projects</p>
                        </motion.div>

                        {/* Client Retention */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-[#1a2332] border border-white/10 rounded-2xl p-8 hover:bg-[#1f2937] transition-all duration-300 hover:border-[#0033ff]/50 text-center"
                        >
                            <h3 className="text-5xl md:text-6xl font-bold text-[#0088ff] mb-4">99+</h3>
                            <p className="text-white/70 text-lg">Client retention rate</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[#0A1825] py-20 border-t border-white/10">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white">
                            Ready to Transform Your Software Quality?
                        </h2>
                        <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
                            Let's discuss how our expert testing services can elevate your software to the next level
                        </p>
                        <Link to="/get-in-touch">
                            <Button className="bg-[#0033ff] hover:bg-[#0029cc] text-white font-semibold px-10 py-6 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center gap-2 mx-auto">
                                Contact Us Now
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Horizontal Divider */}
            <div className="container mx-auto px-6">
                <div className="border-t border-white/10"></div>
            </div>
        </div>
    );
};

export default Home;
