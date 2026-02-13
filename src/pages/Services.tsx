import { motion } from "framer-motion";
import { HelpCircle, Clock, Globe, UserCheck, Bug, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const Services = () => {
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
    const columns = 20;

    const matrixColumns = Array.from({ length: columns }, (_, i) => ({
        id: i,
        delay: Math.random() * 5,
        duration: 10 + Math.random() * 10,
        chars: Array.from({ length: 20 }, () =>
            characters[Math.floor(Math.random() * characters.length)]
        ),
    }));

    return (
        <div className="min-h-screen bg-[#0A1825] px-6 pt-32 pb-20">
            <div className="container mx-auto max-w-7xl">
                {/* Centered Header Section */}
                <div className="text-center max-w-4xl mx-auto">
                {/* Premium Services Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6"
                >
                    <p className="text-[#0088ff] text-sm font-semibold tracking-wider uppercase mb-2">
                        Premium Services
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Our Testing Services
                    </h1>
                    <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                        Comprehensive quality assurance solutions designed to ensure your software performs flawlessly in any environment
                    </p>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
                >
                    <button className="px-8 py-4 bg-[#0033ff] text-white font-semibold rounded-lg hover:bg-[#0044ff] transition-all duration-300 hover:scale-105">
                        24-hour testing
                    </button>
                    <button className="px-8 py-4 bg-[#1a2332] text-white font-semibold rounded-lg border border-white/10 hover:bg-[#1f2937] hover:border-[#0033ff]/50 transition-all duration-300 hover:scale-105">
                        closed beta testing
                    </button>
                </motion.div>
                </div>

                {/* Horizontal Divider */}
                <div className="my-16">
                    <div className="border-t border-white/10"></div>
                </div>

                {/* 24 Hour Testing Section - Two Column Layout */}
                <div id="24-hour-testing" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start text-left">
                    {/* Left Column - Content */}
                    <div>
                        {/* 24 Hour Testing Header with Blue Underline */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mb-8"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
                                24 Hour Testing
                            </h2>
                            <div className="w-24 h-1 bg-[#0088ff]"></div>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-white/70 text-lg leading-relaxed mb-8"
                        >
                            Our 24-hour testing service provides comprehensive quality assurance within a true 24-hour window. This efficiency is achieved through our global network of skilled testers, distributed across multiple time zones, ensuring consistent and thorough testing every hour of the day.
                        </motion.p>

                        {/* When Might You Need This Service Box */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="bg-[#1a2332] border border-[#0088ff]/30 rounded-2xl p-8"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <HelpCircle className="w-6 h-6 text-[#0088ff]" />
                                <h3 className="text-xl font-bold text-white">
                                    When Might You Need This Service?
                                </h3>
                            </div>
                            <ul className="space-y-4 text-white/70 text-base leading-relaxed">
                                <li>
                                    To rapidly assess your product's current condition and identify any critical issues.
                                </li>
                                <li>
                                    Before a product release, especially when time is limited.
                                </li>
                                <li>
                                    For urgent fixes that require immediate attention to maintain functionality and user satisfaction.
                                </li>
                            </ul>
                        </motion.div>

                        {/* Key Benefits Heading */}
                        <motion.h3
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                            className="mt-12 mb-6 text-2xl font-bold text-white"
                        >
                            Key Benefits
                        </motion.h3>

                        {/* 4 Key Benefits */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.0 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                        >
                            {/* Quick Results */}
                            <div className="bg-transparent border border-white/10 rounded-xl p-6 hover:border-[#0088ff]/30 transition-all duration-300">
                                <h4 className="text-lg font-bold text-white mb-3">Quick Results</h4>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    Receive a detailed quality report within 24 hours, enabling swift decision-making.
                                </p>
                            </div>

                            {/* Enhanced Stability */}
                            <div className="bg-transparent border border-white/10 rounded-xl p-6 hover:border-[#0088ff]/30 transition-all duration-300">
                                <h4 className="text-lg font-bold text-white mb-3">Enhanced Stability</h4>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    Get an immediate response to emerging issues, minimizing potential downtime.
                                </p>
                            </div>

                            {/* Increased Satisfaction */}
                            <div className="bg-transparent border border-white/10 rounded-xl p-6 hover:border-[#0088ff]/30 transition-all duration-300">
                                <h4 className="text-lg font-bold text-white mb-3">Increased Satisfaction</h4>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    Quick issue resolution builds customer trust and loyalty.
                                </p>
                            </div>

                            {/* 24/7 Critical Support */}
                            <div className="bg-transparent border border-white/10 rounded-xl p-6 hover:border-[#0088ff]/30 transition-all duration-300">
                                <h4 className="text-lg font-bold text-white mb-3">24/7 Critical Support</h4>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    Our continuous testing team ensures uninterrupted quality assurance during critical times.
                                </p>
                            </div>
                        </motion.div>

                        {/* Closing Text */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.1 }}
                            className="mt-8 text-white/70 text-base leading-relaxed"
                        >
                            This service is ideal for organizations that need fast, reliable testing to maintain high standards and keep projects on track.
                        </motion.p>
                    </div>

                    {/* Right Column - Matrix Animation */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="hidden lg:block h-full relative"
                    >
                        <div className="w-full h-full bg-gradient-to-br from-[#1a2332] to-[#0A1825] rounded-2xl relative overflow-hidden">
                            {/* Matrix Rain Animation */}
                            <div className="absolute inset-0 overflow-hidden opacity-50">
                                <div className="relative w-full h-full flex justify-around">
                                    {matrixColumns.map((column) => (
                                        <motion.div
                                            key={column.id}
                                            className="flex flex-col text-center font-mono text-sm"
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
                        </div>
                    </motion.div>
                </div>

                {/* Statistics Boxes - Full Width */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {/* 24 Hour Turnaround */}
                    <div className="bg-[#1a2332] border border-white/10 rounded-2xl p-8 text-center hover:border-[#0088ff]/30 transition-all duration-300">
                        <div className="flex justify-center mb-4">
                            <Clock className="w-12 h-12 text-[#0088ff]" />
                        </div>
                        <div className="text-5xl font-bold text-white mb-3">24</div>
                        <div className="text-white/60 text-sm">Hour Turnaround</div>
                    </div>

                    {/* 8 Global Locations */}
                    <div className="bg-[#1a2332] border border-white/10 rounded-2xl p-8 text-center hover:border-[#0088ff]/30 transition-all duration-300">
                        <div className="flex justify-center mb-4">
                            <Globe className="w-12 h-12 text-[#0088ff]" />
                        </div>
                        <div className="text-5xl font-bold text-white mb-3">8</div>
                        <div className="text-white/60 text-sm">Global Locations</div>
                    </div>

                    {/* 50 QA Experts */}
                    <div className="bg-[#1a2332] border border-white/10 rounded-2xl p-8 text-center hover:border-[#0088ff]/30 transition-all duration-300">
                        <div className="flex justify-center mb-4">
                            <UserCheck className="w-12 h-12 text-[#0088ff]" />
                        </div>
                        <div className="text-5xl font-bold text-white mb-3">50</div>
                        <div className="text-white/60 text-sm">QA Experts</div>
                    </div>

                    {/* 98 Issue Detection Rate */}
                    <div className="bg-[#1a2332] border border-white/10 rounded-2xl p-8 text-center hover:border-[#0088ff]/30 transition-all duration-300">
                        <div className="flex justify-center mb-4">
                            <Bug className="w-12 h-12 text-[#0088ff]" />
                        </div>
                        <div className="text-5xl font-bold text-white mb-3">98</div>
                        <div className="text-white/60 text-sm">Issue Detection Rate</div>
                    </div>
                </motion.div>

                {/* Call to Action Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    className="mt-20 text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Turn Around Critical Issues in Just 24 Hours
                    </h2>
                    <p className="text-white/70 text-lg leading-relaxed mb-8">
                        Our global team of expert testers works around the clock to provide you with comprehensive quality assurance when you need it most.
                    </p>
                    <Link to="/get-in-touch">
                        <button className="px-10 py-4 bg-[#0033ff] text-white font-semibold rounded-lg hover:bg-[#0044ff] transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto">
                            Get Started Today
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </Link>
                </motion.div>

                {/* Horizontal Divider */}
                <div className="my-20">
                    <div className="border-t border-white/10"></div>
                </div>

                {/* Closed Beta Testing Section - Two Column Layout (Reversed) */}
                <div id="closed-beta-testing" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start text-left">
                    {/* Left Column - Matrix Animation */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="hidden lg:block h-full relative"
                    >
                        <div className="w-full h-full bg-gradient-to-br from-[#1a2332] to-[#0A1825] rounded-2xl relative overflow-hidden">
                            {/* Matrix Rain Animation */}
                            <div className="absolute inset-0 overflow-hidden opacity-50">
                                <div className="relative w-full h-full flex justify-around">
                                    {matrixColumns.map((column) => (
                                        <motion.div
                                            key={column.id}
                                            className="flex flex-col text-center font-mono text-sm"
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
                        </div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <div>
                        {/* Closed Beta Testing Header with Blue Underline */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mb-8"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
                                Closed Beta Testing
                            </h2>
                            <div className="w-24 h-1 bg-[#0088ff]"></div>
                        </motion.div>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="text-white/60 text-lg mb-6"
                        >
                            Refine your product with feedback from selected users before official launch.
                        </motion.p>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-white/70 text-lg leading-relaxed mb-6"
                        >
                            Closed Beta Testing engages a select group of users to test the platform and provide valuable feedback. This phase is essential for refining the product, allowing us to optimize functionality, design, and user experience before the official launch.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="text-white/70 text-lg leading-relaxed mb-8"
                        >
                            During this stage, we assess the platform's performance and usability across various devices, browsers, and global markets, ensuring it meets diverse user needs and operates smoothly in different environments.
                        </motion.p>

                        {/* Key Benefits Heading */}
                        <motion.h3
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="mt-12 mb-6 text-2xl font-bold text-white"
                        >
                            Key Benefits
                        </motion.h3>

                        {/* 3 Key Benefits */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8"
                        >
                            {/* User Feedback */}
                            <div className="bg-transparent border border-white/10 rounded-xl p-6 hover:border-[#0088ff]/30 transition-all duration-300">
                                <h4 className="text-lg font-bold text-white mb-3">User Feedback</h4>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    Real insights from users drive meaningful improvements.
                                </p>
                            </div>

                            {/* Functionality & Usability */}
                            <div className="bg-transparent border border-white/10 rounded-xl p-6 hover:border-[#0088ff]/30 transition-all duration-300">
                                <h4 className="text-lg font-bold text-white mb-3">Functionality & Usability</h4>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    Assures smooth performance across multiple devices and browsers.
                                </p>
                            </div>

                            {/* Global Market Testing */}
                            <div className="bg-transparent border border-white/10 rounded-xl p-6 hover:border-[#0088ff]/30 transition-all duration-300">
                                <h4 className="text-lg font-bold text-white mb-3">Global Market Testing</h4>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    Validates compatibility and performance across regions for global readiness.
                                </p>
                            </div>
                        </motion.div>

                        {/* Process Timeline Box */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.0 }}
                            className="bg-[#1a2332] border border-white/10 rounded-2xl p-8"
                        >
                            <h3 className="text-xl font-bold text-white mb-4">Process Timeline</h3>
                            <p className="text-white/70 text-base leading-relaxed">
                                The process typically spans 5-7 business days, providing a quick and efficient turnaround to support a timely release. This approach allows us to address potential issues early and make necessary adjustments for a smooth, high-quality launch.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Beta Testing Process Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="mt-20 text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        The Beta Testing Process
                    </h2>
                    <p className="text-white/70 text-lg leading-relaxed">
                        Our structured approach ensures thorough testing and valuable feedback
                    </p>
                </motion.div>

                {/* Process Steps - Vertical Timeline */}
                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 transform -translate-x-1/2 hidden md:block"></div>

                    <div className="space-y-12">
                        {/* Step 1 - Right */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 1.4 }}
                            className="relative flex flex-col md:flex-row items-center gap-8"
                        >
                            <div className="md:w-1/2"></div>
                            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0033ff] border-4 border-[#0A1825] flex items-center justify-center z-10">
                            </div>
                            <div className="md:w-1/2">
                                <div className="bg-[#1a2332] border border-white/10 rounded-2xl p-6 hover:bg-[#1f2937] transition-all duration-300 hover:border-[#0033ff]/50">
                                    <p className="text-[#0088ff] text-sm font-semibold mb-2">Day 1</p>
                                    <h3 className="text-lg font-bold text-white mb-2">Planning & Setup</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        We define testing objectives, select participants, and set up the testing environment.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Step 2 - Left */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 1.5 }}
                            className="relative flex flex-col md:flex-row items-center gap-8"
                        >
                            <div className="md:w-1/2 md:text-right">
                                <div className="bg-[#1a2332] border border-white/10 rounded-2xl p-6 hover:bg-[#1f2937] transition-all duration-300 hover:border-[#0033ff]/50">
                                    <p className="text-[#0088ff] text-sm font-semibold mb-2">Day 2-3</p>
                                    <h3 className="text-lg font-bold text-white mb-2">User Onboarding</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        Participants are invited and provided access to the platform with clear testing instructions.
                                    </p>
                                </div>
                            </div>
                            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0033ff] border-4 border-[#0A1825] flex items-center justify-center z-10">
                            </div>
                            <div className="md:w-1/2"></div>
                        </motion.div>

                        {/* Step 3 - Right */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 1.6 }}
                            className="relative flex flex-col md:flex-row items-center gap-8"
                        >
                            <div className="md:w-1/2"></div>
                            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0033ff] border-4 border-[#0A1825] flex items-center justify-center z-10">
                            </div>
                            <div className="md:w-1/2">
                                <div className="bg-[#1a2332] border border-white/10 rounded-2xl p-6 hover:bg-[#1f2937] transition-all duration-300 hover:border-[#0033ff]/50">
                                    <p className="text-[#0088ff] text-sm font-semibold mb-2">Day 3-5</p>
                                    <h3 className="text-lg font-bold text-white mb-2">Active Testing</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        Users interact with the platform, performing tasks and providing real-time feedback.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Step 4 - Left */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 1.7 }}
                            className="relative flex flex-col md:flex-row items-center gap-8"
                        >
                            <div className="md:w-1/2 md:text-right">
                                <div className="bg-[#1a2332] border border-white/10 rounded-2xl p-6 hover:bg-[#1f2937] transition-all duration-300 hover:border-[#0033ff]/50">
                                    <p className="text-[#0088ff] text-sm font-semibold mb-2">Day 6</p>
                                    <h3 className="text-lg font-bold text-white mb-2">Data Collection</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        We gather and organize all feedback, bug reports, and performance metrics.
                                    </p>
                                </div>
                            </div>
                            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0033ff] border-4 border-[#0A1825] flex items-center justify-center z-10">
                            </div>
                            <div className="md:w-1/2"></div>
                        </motion.div>

                        {/* Step 5 - Right */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 1.8 }}
                            className="relative flex flex-col md:flex-row items-center gap-8"
                        >
                            <div className="md:w-1/2"></div>
                            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0033ff] border-4 border-[#0A1825] flex items-center justify-center z-10">
                            </div>
                            <div className="md:w-1/2">
                                <div className="bg-[#1a2332] border border-white/10 rounded-2xl p-6 hover:bg-[#1f2937] transition-all duration-300 hover:border-[#0033ff]/50">
                                    <p className="text-[#0088ff] text-sm font-semibold mb-2">Day 7</p>
                                    <h3 className="text-lg font-bold text-white mb-2">Analysis & Reporting</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        A comprehensive report is compiled with insights, recommendations, and action items.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Horizontal Divider */}
                <div className="my-20">
                    <div className="border-t border-white/10"></div>
                </div>

                {/* Final Call to Action Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.9 }}
                    className="mt-12 text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Ensure Your Software Quality?
                    </h2>
                    <p className="text-white/70 text-lg leading-relaxed mb-10">
                        Our expert testing services are designed to help you deliver flawless software experiences to your users, whether you need rapid 24-hour testing or comprehensive closed beta testing.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/get-in-touch">
                            <button className="px-10 py-4 bg-[#0033ff] text-white font-semibold rounded-lg hover:bg-[#0044ff] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                                Contact Us Now
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>
                        <button className="px-10 py-4 bg-[#1a2332] text-white font-semibold rounded-lg border border-white/10 hover:bg-[#1f2937] hover:border-[#0033ff]/50 transition-all duration-300 hover:scale-105">
                            View Package
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Services;
