import { ExternalLink } from "lucide-react";

const Partners = () => {
    const partners = [
        {
            id: 1,
            name: "Awork",
            logo: "/partners/awork.jpg",
            bgColor: "bg-[#234591]",
            description: "European Work Initiative",
            website: "#"
        },
        {
            id: 2,
            name: "Bitanica",
            logo: "/partners/b-logo.jpg",
            bgColor: "bg-[#1a1a2e]",
            description: "Digital Innovation Partner",
            website: "#"
        },
        {
            id: 3,
            name: "Croco Squad",
            logo: "/partners/croco-squad.jpg",
            bgColor: "bg-[#1a2035]",
            description: "Tech Development Team",
            website: "#"
        },
        {
            id: 4,
            name: "DataArt",
            logo: "/partners/tangram.jpg",
            bgColor: "bg-gradient-to-br from-[#F05A26] via-[#3e5ba9] to-[#2bcbba]",
            description: "Creative Solutions",
            website: "#"
        },
        {
            id: 5,
            name: "Hot Card",
            logo: "/partners/handshake.jpg",
            bgColor: "bg-[#F05A26]",
            description: "HR & Recruitment Platform",
            website: "#"
        },
        {
            id: 6,
            name: "DressUp.ge",
            logo: "/partners/dressup.jpg",
            bgColor: "bg-[#f8f4f1]",
            description: "Fashion E-commerce",
            website: "#"
        },
        {
            id: 7,
            name: "GetBotAI",
            logo: "/partners/cb-logo.jpg",
            bgColor: "bg-white",
            description: "Creative Design Agency",
            website: "#"
        },
        {
            id: 8,
            name: "iPlus",
            logo: "/partners/iplus.jpg",
            bgColor: "bg-white",
            description: "Tech Solutions Provider",
            website: "#"
        },
        {
            id: 9,
            name: "HR Thoth",
            logo: "/partners/thoth.jpg",
            bgColor: "bg-white",
            description: "AI & Innovation Lab",
            website: "#"
        },
        {
            id: 10,
            name: "SMSQULA",
            logo: "/partners/smsqula.jpg",
            bgColor: "bg-white",
            description: "Education Technology",
            website: "#"
        },
        {
            id: 11,
            name: "Stori AI",
            logo: "/partners/s-logo.jpg",
            bgColor: "bg-gradient-to-br from-[#7c3aed] to-[#2dd4bf]",
            description: "Digital Services",
            website: "#"
        },
        {
            id: 12,
            name: "MyTask",
            logo: "/partners/mytask.jpg",
            bgColor: "bg-[#5bebe9]",
            description: "Freelance Platform",
            website: "#"
        },
        {
            id: 13,
            name: "Team Up",
            logo: "/partners/teamup.jpg",
            bgColor: "bg-[#4f46e5]",
            description: "Team Collaboration by Gegidze",
            website: "#"
        },
        {
            id: 14,
            name: "Ride Gudauri",
            logo: "/partners/ridegudauri.jpg",
            bgColor: "bg-white",
            description: "Mountain Resort Services",
            website: "#"
        },
        {
            id: 15,
            name: "WiFisher",
            logo: "/partners/wifisher.png",
            bgColor: "bg-[#2d2d2d]",
            description: "Network Solutions",
            website: "#"
        },
        {
            id: 16,
            name: "ირაო",
            logo: "/partners/iremo.jpg",
            bgColor: "bg-white",
            description: "Insurance Group",
            website: "#"
        },
        {
            id: 17,
            name: "Translive",
            logo: "/partners/swift.jpg",
            bgColor: "bg-[#F05A26]",
            description: "Delivery & Logistics",
            website: "#"
        },
    ];

    return (
        <div className="bg-[#0F2E4A] min-h-screen text-white overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/10">
                {/* Background Effects */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-[#3B7DBF]/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] bg-[#3FC4E2]/10 rounded-full blur-[100px]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#3B7DBF]/5 rounded-full blur-[150px]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Badge */}
                        <div
                            className="mb-6"
                        >
                            <span className="text-sm md:text-base tracking-[0.3em] uppercase text-[#3FC4E2] font-semibold">
                                Our Network
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1
                            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                        >
                            <span className="text-white">Our </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3FC4E2] to-[#3B7DBF]">Partners</span>
                        </h1>

                        {/* Description */}
                        <p
                            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
                        >
                            Partner companies and world-leading enterprises that lead the academy to success!
                        </p>
                    </div>
                </div>
            </section>

            {/* Partners Grid Section */}
            <section className="container mx-auto px-6 py-20">
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {partners.map((partner) => (
                        <a
                            key={partner.id}
                            href={partner.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`
                                group relative overflow-hidden rounded-2xl
                                aspect-square cursor-pointer
                                transition-all duration-500 ease-out
                                border border-white/10 hover:border-[#3B7DBF]/50
                                shadow-xl hover:shadow-2xl hover:shadow-[#3B7DBF]/20
                            `}
                        >
                            {/* Partner Logo/Image */}
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Gradient Overlay on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-xl font-bold text-white mb-1">{partner.name}</h3>
                                    <p className="text-white/70 text-sm mb-3">{partner.description}</p>
                                    <div className="flex items-center gap-2 text-[#3FC4E2] text-sm font-medium">
                                        <span>Visit Website</span>
                                        <ExternalLink className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>

                            {/* Subtle Border Glow */}
                            <div className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-transparent group-hover:border-[#3B7DBF]/30 transition-all duration-500" />
                        </a>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Partners;
