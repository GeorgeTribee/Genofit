import { motion } from "framer-motion";
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
    description?: string;
    isEnded?: boolean;
}

const CourseCard = ({ id, title, instructor, index, description, isEnded = false }: CourseCardProps) => {
    const CardContent = (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={!isEnded ? { y: -5 } : {}}
            className={`group relative bg-white rounded-none overflow-hidden transition-all duration-300 border border-gray-200 ${
                isEnded
                    ? 'opacity-60 cursor-not-allowed'
                    : 'hover:shadow-2xl cursor-pointer'
            }`}
        >
            <div className="relative p-8 min-h-[400px] flex flex-col">
                {/* Logo */}
                <div className="flex items-start justify-between mb-8">
                    <img src="/logo.png" alt="Logo" className="h-8 w-auto object-contain" />
                    {isEnded && (
                        <span className="bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full">
                            It's already ended
                        </span>
                    )}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 leading-tight uppercase">
                            {title}
                        </h3>

                        {/* Description */}
                        {description && (
                            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                                {description}
                            </p>
                        )}

                        {/* Instructor Info */}
                        {instructor.name && (
                            <div className="mb-6">
                                <p className="text-sm font-semibold text-black mb-1">{instructor.name}</p>
                                <p className="text-xs text-gray-600">{instructor.role}</p>
                            </div>
                        )}
                    </div>

                    {/* Learn More Link */}
                    {!isEnded && (
                        <div className="flex items-center gap-2 text-black font-medium group-hover:gap-3 transition-all">
                            <span>Learn More</span>
                            <span className="text-xl">→</span>
                        </div>
                    )}
                </div>

                {/* Large Index Number */}
                <div className="absolute bottom-8 left-8 text-[120px] font-black text-gray-100 leading-none select-none pointer-events-none font-mono">
                    {index}
                </div>
            </div>
        </motion.div>
    );

    if (isEnded) {
        return CardContent;
    }

    return (
        <Link to={`/course/${id}`}>
            {CardContent}
        </Link>
    );
};

export default CourseCard;
