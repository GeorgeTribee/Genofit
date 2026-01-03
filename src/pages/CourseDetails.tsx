import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Users, Award, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

// Course data - in a real app, this would come from an API
const coursesData: Record<string, {
    id: string;
    title: string;
    description: string;
    category: string;
    duration: string;
    students: string;
    level: string;
    instructor: {
        name: string;
        role: string;
        image: string;
        bio: string;
    };
    curriculum: string[];
    features: string[];
}> = {
    "1": {
        id: "1",
        title: "IT English Course",
        description: "Master the essential English vocabulary and communication skills needed for a successful career in IT. This course covers technical terminology, professional email writing, meeting participation, and documentation skills.",
        category: "IT",
        duration: "8 weeks",
        students: "500+",
        level: "Intermediate",
        instructor: {
            name: "Alex Johnson",
            role: "English & IT Specialist",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&h=400&auto=format&fit=crop",
            bio: "Alex has 10+ years of experience teaching English to IT professionals worldwide."
        },
        curriculum: [
            "Technical Vocabulary Foundations",
            "Professional Email Communication",
            "Meeting & Presentation Skills",
            "Documentation Writing",
            "Code Review Communication",
            "Interview Preparation"
        ],
        features: ["Live sessions", "Practice exercises", "Certificate included", "Lifetime access"]
    },
    "2": {
        id: "2",
        title: "B1 English Course",
        description: "Achieve B1 level proficiency in English with our comprehensive course designed for business professionals. Develop your speaking, listening, reading, and writing skills.",
        category: "Business",
        duration: "12 weeks",
        students: "800+",
        level: "Pre-Intermediate",
        instructor: {
            name: "Sarah Smith",
            role: "English Language Instructor",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&h=400&auto=format&fit=crop",
            bio: "Sarah is a certified CELTA instructor with expertise in business English."
        },
        curriculum: [
            "Grammar Fundamentals",
            "Business Vocabulary",
            "Conversational Practice",
            "Reading Comprehension",
            "Writing for Business",
            "Listening Skills"
        ],
        features: ["Live sessions", "Weekly assignments", "Certificate included", "Study materials"]
    },
    "3": {
        id: "3",
        title: "Web Test Automation Course – Java & Test Automation Mastery",
        description: "Become a proficient test automation engineer with our comprehensive Java-based course. Learn Selenium, TestNG, and modern automation frameworks.",
        category: "IT",
        duration: "16 weeks",
        students: "1200+",
        level: "Advanced",
        instructor: {
            name: "John Davis",
            role: "Senior QA Engineer",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=400&auto=format&fit=crop",
            bio: "John has 15+ years of experience in test automation at Fortune 500 companies."
        },
        curriculum: [
            "Java Fundamentals for Testing",
            "Selenium WebDriver",
            "TestNG Framework",
            "Page Object Model",
            "API Testing with RestAssured",
            "CI/CD Integration"
        ],
        features: ["Hands-on projects", "Real-world scenarios", "Job assistance", "Certificate included"]
    },
    "4": {
        id: "4",
        title: "SQL Server Course",
        description: "Master SQL Server administration and development. Learn database design, T-SQL programming, performance tuning, and best practices.",
        category: "IT",
        duration: "10 weeks",
        students: "600+",
        level: "Intermediate",
        instructor: {
            name: "Emily Chen",
            role: "Database Administrator",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&h=400&auto=format&fit=crop",
            bio: "Emily is a Microsoft certified database expert with 12 years of experience."
        },
        curriculum: [
            "SQL Server Installation & Configuration",
            "T-SQL Programming",
            "Database Design",
            "Query Optimization",
            "Backup & Recovery",
            "Security & Permissions"
        ],
        features: ["Lab environment", "Practice databases", "Certificate included", "Lifetime access"]
    },
    "5": {
        id: "5",
        title: "Free Manual Testing Course – For 500 Students",
        description: "Start your career in software testing with our comprehensive manual testing course. Learn testing fundamentals, test case design, and bug reporting.",
        category: "IT",
        duration: "6 weeks",
        students: "500",
        level: "Beginner",
        instructor: {
            name: "Michael Brown",
            role: "QA Lead",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&h=400&auto=format&fit=crop",
            bio: "Michael leads a team of 20+ QA engineers and has trained hundreds of testers."
        },
        curriculum: [
            "Software Testing Fundamentals",
            "Test Case Design Techniques",
            "Bug Reporting & Tracking",
            "Test Plan Creation",
            "Agile Testing",
            "Career Guidance"
        ],
        features: ["Free course", "Community support", "Certificate included", "Job resources"]
    },
    "6": {
        id: "6",
        title: "QA Manual Pro",
        description: "Take your manual testing skills to the professional level. Learn advanced testing techniques, test management, and leadership skills.",
        category: "IT",
        duration: "8 weeks",
        students: "400+",
        level: "Advanced",
        instructor: {
            name: "Lisa Anderson",
            role: "Senior QA Specialist",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&h=400&auto=format&fit=crop",
            bio: "Lisa has 10+ years of QA experience and specializes in testing complex enterprise systems."
        },
        curriculum: [
            "Advanced Test Techniques",
            "Test Management Tools",
            "Performance Testing Basics",
            "Security Testing Basics",
            "Test Strategy Development",
            "QA Leadership"
        ],
        features: ["Mentorship", "Real projects", "Certificate included", "Career coaching"]
    }
};

const CourseDetails = () => {
    const { id } = useParams<{ id: string }>();
    const course = id ? coursesData[id] : null;

    if (!course) {
        return (
            <div className="bg-[#10293E] min-h-screen text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
                    <Link to="/">
                        <Button className="bg-gradient-to-r from-[#3E7BBF] to-[#41C5E3]">
                            <ArrowLeft className="mr-2 w-4 h-4" />
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    const categoryColors: Record<string, string> = {
        IT: "from-[#3E7BBF] to-[#41C5E3]",
        Business: "from-[#41C5E3] to-[#61BEB3]",
    };

    return (
        <div className="bg-[#10293E] min-h-screen text-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-[#3E7BBF]/20 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] bg-[#8F66AC]/15 rounded-full blur-[100px]" />
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
                            Back to Courses
                        </Link>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r ${categoryColors[course.category] || categoryColors.IT} mb-6`}>
                                {course.category}
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                {course.title}
                            </h1>
                            <p className="text-lg text-white/60 mb-8 leading-relaxed">
                                {course.description}
                            </p>

                            {/* Course Stats */}
                            <div className="flex flex-wrap gap-6 mb-8">
                                <div className="flex items-center gap-2 text-white/70">
                                    <Clock className="w-5 h-5 text-[#41C5E3]" />
                                    <span>{course.duration}</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/70">
                                    <Users className="w-5 h-5 text-[#41C5E3]" />
                                    <span>{course.students} students</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/70">
                                    <Award className="w-5 h-5 text-[#41C5E3]" />
                                    <span>{course.level}</span>
                                </div>
                            </div>

                            <Button className="bg-gradient-to-r from-[#3E7BBF] to-[#41C5E3] hover:from-[#41C5E3] hover:to-[#3E7BBF] text-white font-semibold px-8 py-6 rounded-full text-lg shadow-lg shadow-[#3E7BBF]/25 hover:shadow-[#41C5E3]/40 transition-all duration-300 hover:scale-105">
                                Enroll Now
                            </Button>
                        </motion.div>

                        {/* Right - Instructor Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="bg-gradient-to-br from-[#0a1a2e] to-[#10293E] rounded-3xl p-8 border border-white/10">
                                <div className="flex items-center gap-6 mb-6">
                                    <img
                                        src={course.instructor.image}
                                        alt={course.instructor.name}
                                        className="w-24 h-24 rounded-2xl object-cover"
                                    />
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{course.instructor.name}</h3>
                                        <p className="text-[#41C5E3]">{course.instructor.role}</p>
                                    </div>
                                </div>
                                <p className="text-white/60">{course.instructor.bio}</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Curriculum Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Curriculum */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold mb-8">
                                <span className="text-white">Course </span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3E7BBF] to-[#41C5E3]">Curriculum</span>
                            </h2>
                            <div className="space-y-4">
                                {course.curriculum.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-[#3E7BBF]/30 transition-colors"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#3E7BBF] to-[#41C5E3] flex items-center justify-center text-sm font-bold">
                                            {index + 1}
                                        </div>
                                        <span className="text-white/80">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Features */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-3xl font-bold mb-8">
                                <span className="text-white">What You </span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8F66AC] to-[#41C5E3]">Get</span>
                            </h2>
                            <div className="space-y-4">
                                {course.features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5"
                                    >
                                        <CheckCircle className="w-6 h-6 text-[#41C5E3]" />
                                        <span className="text-white/80">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CourseDetails;
