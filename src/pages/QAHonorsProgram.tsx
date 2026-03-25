import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, CheckCircle, GraduationCap, Target, Users } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";

const QAHonorsProgram = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobileNumber: '',
        country: '',
        age: '',
        timeAvailability: '',
        computerAccess: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const handleNotifySubmit = async () => {
        const { fullName, email, mobileNumber, country, age, timeAvailability, computerAccess } = formData;

        // Check if all fields are filled
        if (!fullName || !email || !mobileNumber || !country || !age || !timeAvailability || !computerAccess) {
            setSubmitError('Please fill in all required fields.');
            return;
        }

        // Full Name validation
        const nameWords = fullName.trim().split(/\s+/);
        if (nameWords.length < 2) {
            setSubmitError('Please enter both first name and last name.');
            return;
        }

        // Email validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setSubmitError('Please enter a valid email address.');
            return;
        }

        // Mobile Number validation
        if (!/^\d{9,12}$/.test(mobileNumber)) {
            setSubmitError('Please enter a valid phone number.');
            return;
        }

        // Age validation
        if (!/^\d{2}$/.test(age) || parseInt(age) < 10 || parseInt(age) > 99) {
            setSubmitError('Age must be entered using numbers only.');
            return;
        }

        setIsSubmitting(true);
        setSubmitError('');

        const { error } = await supabase
            .from('qa_honors_applications')
            .insert({
                full_name: fullName,
                email,
                phone_number: mobileNumber,
                country,
                age: parseInt(age),
                time_availability: timeAvailability,
                computer_access: computerAccess === 'yes'
            });

        setIsSubmitting(false);
        if (error) {
            if (error.code === '23505') {
                setSubmitError('This email is already registered.');
            } else {
                setSubmitError('Something went wrong. Please try again.');
            }
        } else {
            setSubmitSuccess(true);
        }
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
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
                        <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>
                    </motion.div>

                    {/* Title Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                            <span className="text-white">QA Honors Program</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-[#0088ff] font-semibold mb-6">
                            Empowering Georgian Youth for Global Tech Careers
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4 text-[#0088ff] font-semibold mb-10">
                            <span>Selection-based</span>
                            <span className="text-white/40">|</span>
                            <span>Fully Funded</span>
                            <span className="text-white/40">|</span>
                            <span>10 Weeks</span>
                            <span className="text-white/40">|</span>
                            <span>International Standards</span>
                            <span className="text-white/40">|</span>
                            <span>Online Program</span>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                onClick={() => scrollToSection('what-is-program')}
                                className="bg-transparent border-2 border-[#0033ff] text-white hover:bg-[#0033ff]/10 font-semibold px-10 py-6 rounded-lg text-lg transition-all duration-300"
                            >
                                Program Overview
                            </Button>
                            <Button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-[#0033ff] hover:bg-[#0044ff] text-white font-semibold px-10 py-6 rounded-lg text-lg shadow-lg shadow-[#0033ff]/25 hover:shadow-[#0033ff]/40 transition-all duration-300 hover:scale-105"
                            >
                                Apply for Selection
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section 2: What is This Program */}
            <section id="what-is-program" className="py-20 border-t border-white/10">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                            What is the <span className="text-[#0088ff]">QA Honors Program</span>
                        </h2>

                        <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                            <p>
                                The GenofIT QA Honors Program is the first selection-based QA initiative designed for Georgian youth aged 17–19, whether living in Georgia or abroad.
                            </p>

                            <p>
                                It is a 10-week intensive, 100% online program that teaches the fundamentals of Manual QA Testing according to international IT industry standards.
                            </p>

                            <p>
                                Our mission is to develop professional thinking in young people, teach real QA fundamentals, and identify talent at an early stage.
                            </p>

                            <p className="text-[#0088ff] font-semibold">
                                This is a selection-based program — we are looking for motivated and committed students who are ready for real effort and responsibility.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section 3: Program Structure */}
            <section className="py-20 border-t border-white/10">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            How the <span className="text-[#0088ff]">Program Works</span>
                        </h2>
                        <p className="text-white/70 text-lg max-w-3xl mx-auto">
                            The program consists of four main stages: selection, intensive training, final project, and graduation. At every stage, participants receive structured guidance and support.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Card 1: Admission Process */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="bg-[#1a2332] border border-white/10 rounded-2xl p-8"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-full bg-[#0033ff] flex items-center justify-center">
                                    <Users className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold">Admission Process</h3>
                            </div>

                            <p className="text-[#0088ff] font-semibold mb-6">
                                3 Stages
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-semibold mb-1">Stage 1 – Initial Application</h4>
                                    <p className="text-white/50 text-sm mb-3">March 20 – March 31</p>
                                    <p className="text-white/70 mb-2">Candidates complete a short online application form including:</p>
                                    <ul className="space-y-2 text-white/70">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                                            <span>Basic personal information</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                                            <span>Technical readiness confirmation</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                                            <span>Availability and commitment assessment</span>
                                        </li>
                                    </ul>
                                    <p className="text-white/50 text-sm mt-3">Applications close on March 31 at 21:00 (UTC+4).</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold mb-2">Stage 2 – Application Review & Qualification</h4>
                                    <p className="text-white/70 mb-2">All submitted applications undergo structured evaluation based on:</p>
                                    <ul className="space-y-2 text-white/70 mb-3">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                                            <span>Readiness</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                                            <span>Availability</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                                            <span>Commitment level</span>
                                        </li>
                                    </ul>
                                    <p className="text-white/70">Every applicant receives an official email notification regarding their status. Shortlisted candidates will receive further instructions to proceed.</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold mb-2">Stage 3 – Final Assessment</h4>
                                    <ul className="space-y-2 text-white/70">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                                            <span>Shortlisted candidates proceed to the final evaluation stage.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                                            <span>This stage is designed to assess overall suitability for the program.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                                            <span>Final admission decisions are made after internal review.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                                            <span>Selected participants receive official confirmation.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2: Training */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="bg-[#1a2332] border border-white/10 rounded-2xl p-8"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-full bg-[#0033ff] flex items-center justify-center">
                                    <Target className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold">Program Structure</h3>
                            </div>

                            <div className="flex gap-4 mb-6">
                                <span className="text-[#0088ff] font-semibold"> Start Date: April 27</span>
                                <span className="text-white/40">|</span>
                                <span className="text-[#0088ff] font-semibold">⏱ Duration: 10 weeks</span>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <p className="mb-3 text-white/80">Intensive QA training built on industry standards:</p>
                                    <ul className="space-y-2 text-white/70">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                                            <span>Software Testing Fundamentals</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                                            <span>Quality Assurance Methodology</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                                            <span>Agile & Scrum Practices</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                                            <span>Industry-standard tools & workflows</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold mb-3">Format</h4>
                                    <ul className="space-y-2 text-white/70">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                                            <span>Live sessions 2–3 times per week (20:00 Georgian time)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                                            <span>Each session: 1.5–2 hours</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                                            <span>Weekly hands-on assignments</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                                            <span>Structured feedback from QA professionals (within 48 hours)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                                            <span>Two major evaluations: Mid-term and Final Project</span>
                                        </li>
                                    </ul>
                                </div>

                                <p className="text-white/50 text-sm italic">
                                    This program is designed to simulate real QA environments and professional expectations.
                                </p>
                            </div>
                        </motion.div>

                        {/* Card 3: Capstone Assessment */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="bg-[#1a2332] border border-white/10 rounded-2xl p-8"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-full bg-[#0033ff] flex items-center justify-center">
                                    <Calendar className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold">Capstone Assessment</h3>
                            </div>

                            <p className="text-[#0088ff] font-semibold mb-6">
                                Weeks 9–10 · Final Practical Assessment
                            </p>

                            <div className="space-y-4 text-white/70 leading-relaxed">
                                <p>
                                    Throughout the program, students continuously work on hands-on assignments and training tasks based on real industry scenarios. They progressively apply the skills learned during the course, including test planning, test case creation, bug reporting, test documentation, and collaboration within an Agile workflow.
                                </p>
                                <p>
                                    Weeks 9–10 represent the Final Project, where students consolidate their knowledge and complete a full testing cycle within a comprehensive practical assignment.
                                </p>
                                <p>
                                    The learning environment is designed to closely reflect professional QA processes, with defined timelines, responsibilities, and evaluation criteria aligned with industry practices.
                                </p>
                                <p>
                                    During the project, students receive regular feedback from QA professionals and follow workflows commonly used in modern development teams.
                                </p>
                            </div>
                        </motion.div>

                        {/* Card 4: Graduation */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            className="bg-[#1a2332] border border-white/10 rounded-2xl p-8"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-full bg-[#0033ff] flex items-center justify-center">
                                    <GraduationCap className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold">Graduation</h3>
                            </div>

                            <p className="text-[#0088ff] font-semibold mb-6">
                                Certificate of Completion & Program Graduation
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-semibold mb-3">Successful graduates will:</h4>
                                    <ul className="space-y-2 text-white/70">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                                            <span>Receive the GenofIT QA Honors Program Certificate of Completion</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                                            <span>Join the GenofIT Alumni Network with ongoing mentorship and career guidance</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold mb-3">Graduation Requirements:</h4>
                                    <ul className="space-y-2 text-white/70">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                                            <span>Minimum 90% attendance</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                                            <span>All assignments completed (75%+ score)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                                            <span>Mid-term assessment passed (75%+)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                                            <span>Final project successfully completed (85%+)</span>
                                        </li>
                                    </ul>
                                </div>

                                <p className="text-white/50 text-sm italic">
                                    After completing the program, students will be able to participate in QA processes, perform testing tasks with mentor or team support, and engage in industry-standard workflows.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 8: Registration */}
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
                            Start Your <span className="text-[#0088ff]">QA Career</span>
                        </h2>

                        <p className="text-xl text-white/80 leading-relaxed mb-8">
                            GenofIT QA Honors Program 2026 – Registration opens soon!
                        </p>

                        <div className="bg-[#1a2332] border border-white/10 rounded-2xl p-8 mb-10">
                            <div className="space-y-2 text-lg">
                                <p className="text-[#0088ff] font-bold"> March 20, 2026</p>
                                <p className="text-white/80">🕐 09:00 AM (UTC+4)</p>
                                <p className="text-white/60">Deadline: March 31, 2026, 21:00</p>
                            </div>
                        </div>

                        <Button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-[#0033ff] hover:bg-[#0044ff] text-white font-semibold px-12 py-6 rounded-lg text-lg shadow-lg shadow-[#0033ff]/25 hover:shadow-[#0033ff]/40 transition-all duration-300 hover:scale-105"
                        >
                            Apply Now
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Application Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setIsModalOpen(false)}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-[#1a2332] border border-white/10 rounded-2xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3 className="text-2xl font-bold mb-6">QA Honors Program – Initial Application</h3>
                        <div className="text-white/70 mb-6 space-y-3">
                            <p>Please answer the questions below.</p>
                            <p>The provided information will be used for the initial evaluation process of the program.</p>
                            <p className="text-[#0088ff] font-semibold">All fields below are mandatory.</p>
                        </div>
                        {submitSuccess ? (
                            <div className="text-center py-4">
                                <div className="w-12 h-12 rounded-full bg-[#0033ff]/20 flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-6 h-6 text-[#0088ff]" />
                                </div>
                                <p className="text-white font-semibold mb-1">Your application has been received.</p>
                                <p className="text-white/60 text-sm mb-6">Further information will be sent to your email.</p>
                                <button
                                    onClick={() => { setIsModalOpen(false); setSubmitSuccess(false); setFormData({ fullName: '', email: '', mobileNumber: '', country: '', age: '', timeAvailability: '', computerAccess: '' }); }}
                                    className="text-white/50 hover:text-white text-sm transition-colors"
                                >
                                    ✕ Close
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="space-y-4 mb-6">
                                    <div>
                                        <label className="block text-sm font-medium text-white/80 mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            value={formData.fullName}
                                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                            placeholder="Your full name"
                                            className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#0033ff] transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-white/80 mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="you@example.com"
                                            className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#0033ff] transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-white/80 mb-2">Mobile Number</label>
                                        <input
                                            type="tel"
                                            value={formData.mobileNumber}
                                            onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                                            placeholder="123456789"
                                            className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#0033ff] transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-white/80 mb-2">Country</label>
                                        <input
                                            type="text"
                                            value={formData.country}
                                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                            placeholder="Your country"
                                            className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#0033ff] transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-white/80 mb-2">How old are you?</label>
                                        <p className="text-white/60 text-sm mb-2">Please enter your age in numbers (for example: 18)</p>
                                        <input
                                            type="text"
                                            value={formData.age}
                                            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                                            placeholder="18"
                                            maxLength={2}
                                            className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#0033ff] transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-white/80 mb-3">On average, how many hours per week can you dedicate to the QA Honors Program (lectures + assignments)?</label>
                                        <div className="space-y-2">
                                            {['3 – 5 hours', '6 – 8 hours', '9 – 11 hours', '12+ hours'].map((option) => (
                                                <label key={option} className="flex items-center space-x-3 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="timeAvailability"
                                                        value={option}
                                                        checked={formData.timeAvailability === option}
                                                        onChange={(e) => setFormData({ ...formData, timeAvailability: e.target.value })}
                                                        className="w-4 h-4 text-[#0033ff] bg-white/5 border-white/20 focus:ring-[#0033ff] focus:ring-2"
                                                    />
                                                    <span className="text-white/80">{option}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-white/80 mb-3">During the learning period, will you have daily access to a personal computer or laptop for at least 2 hours?</label>
                                        <div className="space-y-2">
                                            {['Yes', 'No'].map((option) => (
                                                <label key={option} className="flex items-center space-x-3 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="computerAccess"
                                                        value={option.toLowerCase()}
                                                        checked={formData.computerAccess === option.toLowerCase()}
                                                        onChange={(e) => setFormData({ ...formData, computerAccess: e.target.value })}
                                                        className="w-4 h-4 text-[#0033ff] bg-white/5 border-white/20 focus:ring-[#0033ff] focus:ring-2"
                                                    />
                                                    <span className="text-white/80">{option}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {submitError && (
                                    <p className="text-red-400 text-sm mb-4">{submitError}</p>
                                )}
                                <div className="flex flex-col gap-3">
                                    <Button
                                        onClick={handleNotifySubmit}
                                        disabled={isSubmitting}
                                        className="w-full bg-[#0033ff] hover:bg-[#0044ff] text-white font-semibold py-3 rounded-lg"
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                                    </Button>
                                    <button
                                        onClick={() => setIsModalOpen(false)}
                                        className="text-white/50 hover:text-white text-sm transition-colors py-1"
                                    >
                                        ✕ Close
                                    </button>
                                </div>
                            </>
                        )}
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default QAHonorsProgram;
