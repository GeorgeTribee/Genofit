import { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Linkedin, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { EmailModal } from '@/components/ui/email-modal';
import { createCheckoutSession } from '@/lib/api';

const CourseDetails = () => {
    const { id: courseId } = useParams<{ id: string }>();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleBuyClick = () => {
        setIsModalOpen(true);
        setError(null);
    };

    const handleEmailSubmit = async (email: string, firstName: string, lastName: string, phone: string, amount: number) => {
        setIsProcessing(true);
        setError(null);

        try {
            // Create checkout session
            const { url } = await createCheckoutSession({
                courseId: courseId || '1',
                courseName: course.title,
                courseDescription: course.description,
                customerEmail: email,
                customerFirstName: firstName,
                customerLastName: lastName,
                customerPhone: phone,
                customAmount: amount,
            });

            // Redirect to Stripe Checkout
            window.location.href = url;
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Something went wrong');
            setIsProcessing(false);
        }
    };

    // Course data
    const course = {
        title: "QA Manual Pro",
        description: "Take your manual testing skills to the professional level. Learn advanced testing techniques, test management, and leadership skills. This comprehensive course is designed to transform you into a confident QA professional ready to tackle real-world challenges.",

        lecturers: [
            {
                name: "Mari Zakaidze",
                role: "QA Lead & Mentor",
                linkedinUrl: "https://www.linkedin.com/in/mari-zakaidze/"
            },
            {
                name: "Vakhtang Muskhelishvili",
                role: "Senior QA Engineer",
                linkedinUrl: "https://www.linkedin.com/in/vakhtang-muskhelishvili/"
            },
            {
                name: "Elene Danelia",
                role: "Software Engineer",
                linkedinUrl: "https://www.linkedin.com/in/elene-danelia-a6aa7219b/"
            },
            {
                name: "Demetre Chaligava",
                role: "QA Automation Engineer",
                linkedinUrl: "https://www.linkedin.com/in/demetre-chaligava-5995a5180/"
            }
        ],

        curriculum: [
            "Advanced Test Techniques & Methodologies",
            "Test Management Tools & Best Practices",
            "Performance Testing Fundamentals",
            "Security Testing Basics",
            "Test Strategy Development",
            "QA Leadership & Team Management",
            "Bug Tracking & Reporting",
            "Agile & Scrum Testing Practices",
            "API Testing Fundamentals",
            "Mobile Application Testing",
            "Cross-Browser Testing Strategies",
            "Test Documentation & Reporting"
        ],

        benefits: [
            "Professional Certificate of Completion",
            "Lifetime Access to Course Materials",
            "Live Weekly Q&A Sessions with Lecturers",
            "Real-World Project Experience",
            "Career Guidance & Job Interview Preparation",
            "Access to Private Community Forum",
            "Resume Review & LinkedIn Profile Optimization",
            "Industry-Recognized Certification Preparation",
            "Hands-on Practice with Testing Tools",
            "Mentorship from 4 Industry Experts"
        ]
    };

    return (
        <div className="bg-[#0A1825] min-h-screen text-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-[#0033ff]/20 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] bg-[#0088ff]/15 rounded-full blur-[100px]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link to="/#courses" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>
                    </motion.div>

                    {/* Two Column Layout: Course Info & Mentors */}
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Left Side - Course Title & Description */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                {course.title}
                            </h1>
                            <p className="text-lg text-white/70 leading-relaxed mb-8">
                                {course.description}
                            </p>

                            {/* Buy Button */}
                            <Button
                                onClick={handleBuyClick}
                                className="bg-[#0033ff] hover:bg-[#0044ff] text-white font-semibold px-10 py-6 rounded-lg text-lg shadow-lg shadow-[#0033ff]/25 hover:shadow-[#0033ff]/40 transition-all duration-300 hover:scale-105 flex items-center gap-3"
                            >
                                <ShoppingCart className="w-5 h-5" />
                                Buy Course Now
                            </Button>
                        </motion.div>

                        {/* Right Side - Lecturers */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                <span className="text-white">Meet Your </span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0033ff] to-[#0088ff]">Lecturers</span>
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {course.lecturers.map((lecturer, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                        className="bg-[#1a2332] border border-white/10 rounded-xl p-4 hover:border-[#0033ff]/50 transition-all duration-300"
                                    >
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-base font-bold text-white mb-1 truncate">{lecturer.name}</h3>
                                                <p className="text-[#0088ff] text-xs">{lecturer.role}</p>
                                            </div>
                                            <a
                                                href={lecturer.linkedinUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-shrink-0 w-9 h-9 rounded-full bg-[#0033ff] hover:bg-[#0044ff] flex items-center justify-center transition-colors duration-300"
                                            >
                                                <Linkedin className="w-4 h-4 text-white" />
                                            </a>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Curriculum and Benefits Section - Two Columns */}
            <section className="py-20 border-t border-white/10">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Left Side - Course Curriculum */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold mb-8">
                                <span className="text-white">Course </span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0033ff] to-[#0088ff]">Curriculum</span>
                            </h2>

                            <div className="space-y-3">
                                {course.curriculum.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                        className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-[#0033ff]/30 transition-colors"
                                    >
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[#0033ff] to-[#0088ff] flex items-center justify-center text-sm font-bold">
                                            {index + 1}
                                        </div>
                                        <span className="text-white/80 leading-relaxed">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Side - What You Get */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-3xl font-bold mb-8">
                                <span className="text-white">What You </span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0033ff] to-[#0088ff]">Get</span>
                            </h2>

                            <div className="space-y-3">
                                {course.benefits.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                        className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-[#0033ff]/30 transition-colors"
                                    >
                                        <CheckCircle className="flex-shrink-0 w-6 h-6 text-[#0088ff]" />
                                        <span className="text-white/80 leading-relaxed">{benefit}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Bottom Buy Button Section */}
            <section className="py-20 border-t border-white/10">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Start Your QA Journey?
                        </h2>
                        <p className="text-white/70 text-lg leading-relaxed mb-10">
                            Join hundreds of successful students and transform your career with our comprehensive QA Manual Pro course.
                        </p>
                        <Button
                            onClick={handleBuyClick}
                            className="bg-[#0033ff] hover:bg-[#0044ff] text-white font-semibold px-12 py-6 rounded-lg text-lg shadow-lg shadow-[#0033ff]/25 hover:shadow-[#0033ff]/40 transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto"
                        >
                            <ShoppingCart className="w-5 h-5" />
                            Buy Course Now
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Email Modal */}
            <EmailModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleEmailSubmit}
                isLoading={isProcessing}
                courseName={course.title}
            />

            {/* Error Display */}
            {error && (
                <div className="fixed bottom-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
                    {error}
                </div>
            )}
        </div>
    );
};

export default CourseDetails;
