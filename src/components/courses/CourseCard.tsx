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
        <div
            className={`group relative bg-white rounded-none overflow-hidden transition-all duration-500 ease-out border border-gray-200 ${
                isEnded
                    ? 'opacity-60 cursor-not-allowed'
                    : 'hover:shadow-2xl hover:shadow-[#3B7DBF]/20 hover:-translate-y-1.5 hover:border-[#3B7DBF] cursor-pointer'
            }`}
        >
            {/* Top accent bar — slides in from left on hover */}
            {!isEnded && (
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#3B7DBF] to-[#3FC4E2] group-hover:w-full transition-all duration-500 ease-out" />
            )}

            <div className="relative p-8 min-h-[400px] flex flex-col">
                {/* Logo */}
                <div className="flex items-start justify-between mb-8">
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className="h-8 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                    {isEnded && (
                        <span className="bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full">
                            It's already ended
                        </span>
                    )}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 leading-tight uppercase transition-colors duration-300 group-hover:text-[#3B7DBF]">
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
                        <div className="flex items-center gap-2 text-black font-medium transition-colors duration-300 group-hover:text-[#3B7DBF]">
                            <span>Learn More</span>
                            <span className="text-xl inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                        </div>
                    )}
                </div>

                {/* Large Index Number */}
                <div className="absolute bottom-8 left-8 text-[120px] font-black text-gray-100 leading-none select-none pointer-events-none font-mono transition-all duration-500 group-hover:text-[#3B7DBF]/15 group-hover:scale-110 origin-bottom-left">
                    {index}
                </div>
            </div>
        </div>
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
