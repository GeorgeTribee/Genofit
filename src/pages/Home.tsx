import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CourseCard from "@/components/courses/CourseCard";
import { motion } from "framer-motion";

const Home = () => {

    const courses = [
        {
            id: "1",
            title: "IT English Course",
            index: ".01",
            category: "IT",
            instructor: {
                name: "Alex Johnson",
                role: "English & IT Specialist",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&h=400&auto=format&fit=crop"
            }
        },
        {
            id: "2",
            title: "B1 English Course",
            index: ".02",
            category: "Business",
            instructor: {
                name: "Sarah Smith",
                role: "English Language Instructor",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&h=400&auto=format&fit=crop"
            }
        },
        {
            id: "3",
            title: "Web Test Automation Course – Java & Test Automation Mastery",
            index: ".03",
            category: "IT",
            instructor: {
                name: "John Davis",
                role: "Senior QA Engineer",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=400&auto=format&fit=crop"
            }
        },
        {
            id: "4",
            title: "SQL Server Course",
            index: ".04",
            category: "IT",
            instructor: {
                name: "Emily Chen",
                role: "Database Administrator",
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&h=400&auto=format&fit=crop"
            }
        },
        {
            id: "5",
            title: "Free Manual Testing Course – For 500 Students",
            index: ".05",
            category: "IT",
            instructor: {
                name: "Michael Brown",
                role: "QA Lead",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&h=400&auto=format&fit=crop"
            }
        },
        {
            id: "6",
            title: "QA Manual Pro",
            index: ".06",
            category: "IT",
            instructor: {
                name: "Lisa Anderson",
                role: "Senior QA Specialist",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&h=400&auto=format&fit=crop"
            }
        }
    ];

    return (
        <div className="bg-[#10293E] min-h-screen text-white overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-[#3E7BBF]/20 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] bg-[#8F66AC]/15 rounded-full blur-[100px]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#41C5E3]/10 rounded-full blur-[150px]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-10"
                        >
                            <span className="text-sm md:text-base tracking-[0.3em] uppercase text-[#41C5E3] font-medium">
                                Quality Assurance & Testing
                            </span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
                        >
                            <span className="text-white">Ensuring Unrelieved</span>
                            <br />
                            <span className="text-white">Software </span>
                            <span className="text-[#41C5E3]">Quality and</span>
                            <br />
                            <span className="text-[#41C5E3]">Reliability </span>
                            <span className="text-white">with 24/7</span>
                            <br />
                            <span className="text-white">Service</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
                        >
                            Custom testing solutions for enterprises, software agencies, and tech innovators across the globe.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Button className="bg-gradient-to-r from-[#3E7BBF] to-[#41C5E3] hover:from-[#41C5E3] hover:to-[#3E7BBF] text-white font-semibold px-8 py-6 rounded-full text-lg shadow-lg shadow-[#3E7BBF]/25 hover:shadow-[#41C5E3]/40 transition-all duration-300 hover:scale-105">
                                Start Learning Today
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-full text-lg transition-all duration-300">
                                Browse Courses
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Courses Section */}
            <section className="container mx-auto px-6 py-20">

                {/* Section Header for Courses */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-white">Featured </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8F66AC] to-[#41C5E3]">Courses</span>
                    </h2>
                    <p className="text-white/50 text-lg max-w-xl mx-auto">
                        Industry-leading courses designed by experts
                    </p>
                </motion.div>

                {/* Course Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {courses.map((course) => (
                        <CourseCard key={course.id} {...course} />
                    ))}
                </div>


            </section>
        </div>
    );
};

export default Home;
