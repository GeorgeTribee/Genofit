import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCardProps {
    id: string;
    title: string;
    instructor: {
        name: string;
        role: string;
        image: string;
    };
    category: string;
    index: string;
}

const CourseCard = ({ id, title, instructor, index, category }: CourseCardProps) => {
    const categoryColors: Record<string, string> = {
        IT: "from-[#3E7BBF] to-[#41C5E3]",
        Design: "from-[#8F66AC] to-[#41C5E3]",
        Management: "from-[#61BEB3] to-[#3E7BBF]",
        Marketing: "from-[#f97316] to-[#8F66AC]",
        Business: "from-[#41C5E3] to-[#61BEB3]",
    };

    return (
        <Link to={`/course/${id}`}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-[#10293E] to-[#0a1a2e] rounded-2xl overflow-hidden border border-white/5 hover:border-[#3E7BBF]/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[#3E7BBF]/10 cursor-pointer"
            >
                {/* Gradient Accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${categoryColors[category] || categoryColors.IT} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Background Glow */}
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#3E7BBF]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

                <div className="relative p-8 h-[380px] flex flex-col justify-between">
                    {/* Header */}
                    <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                            <img src="/logo.png" alt="Logo" className="w-8 h-8 rounded-lg object-contain bg-white/5 p-1.5 backdrop-blur-sm" />
                            <span className="text-xs text-white/40 uppercase tracking-wider font-medium">{category}</span>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => e.preventDefault()}
                            className="text-white/30 hover:text-red-400 transition-colors duration-300"
                        >
                            <Heart className="w-5 h-5" />
                        </motion.button>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 flex items-center py-6">
                        <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#41C5E3] transition-all duration-500">
                            {title}
                        </h3>
                    </div>

                    {/* Instructor Image */}
                    <motion.div
                        initial={{ opacity: 0.6, x: 20 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-40 h-56 opacity-60 group-hover:opacity-90 transition-all duration-700"
                    >
                        <div className="relative w-full h-full">
                            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#10293E]/50 to-[#10293E] z-10" />
                            <img
                                src={instructor.image}
                                alt={instructor.name}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 rounded-l-2xl"
                            />
                        </div>
                    </motion.div>

                    {/* Footer */}
                    <div className="flex justify-between items-end pt-6 border-t border-white/5">
                        <div>
                            <p className="text-lg font-semibold text-white">{instructor.name}</p>
                            <p className="text-sm text-white/40">{instructor.role}</p>
                        </div>

                        <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-2 group/btn"
                        >
                            <span className="text-sm font-semibold text-white/60 group-hover:text-[#41C5E3] transition-colors">
                                View Details
                            </span>
                            <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-[#41C5E3] transition-colors" />
                        </motion.div>
                    </div>

                    {/* Decorative Index */}
                    <div className="absolute -left-4 top-16 text-[100px] font-black text-white/[0.02] select-none pointer-events-none font-mono">
                        {index}
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

export default CourseCard;
