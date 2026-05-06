import { MapPin, Phone, Mail } from "lucide-react";

const GetInTouch = () => {
    return (
        <div className="bg-[#0F2E4A] min-h-screen text-white overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-[#3B7DBF]/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] bg-[#3FC4E2]/10 rounded-full blur-[100px]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Main Heading */}
                        <h1
                            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
                        >
                            <span className="text-white">Get in </span>
                            <span className="text-[#3FC4E2]">touch</span>
                        </h1>

                        {/* Subtitle */}
                        <h2
                            className="text-2xl md:text-3xl font-semibold text-white mb-6"
                        >
                            Let's Connect
                        </h2>

                        {/* Description */}
                        <p
                            className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed mb-12"
                        >
                            Reach out to us for any inquiries about our services or to start your journey towards flawless software quality.
                        </p>

                        {/* Horizontal Line */}
                        <div
                            className="w-full h-px bg-white/10 mb-16"
                        />

                        {/* Contact Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Our Location */}
                            <div
                                className="bg-[#1a2332] border border-white/10 rounded-2xl p-8 hover:border-[#3B7DBF]/50 transition-all duration-300"
                            >
                                <div className="w-16 h-16 rounded-full bg-[#3B7DBF]/10 flex items-center justify-center mx-auto mb-6">
                                    <MapPin className="w-8 h-8 text-[#3FC4E2]" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">Our Location</h3>
                                <p className="text-white/70 text-lg">New York, USA</p>
                            </div>

                            {/* Call Us */}
                            <div
                                className="bg-[#1a2332] border border-white/10 rounded-2xl p-8 hover:border-[#3B7DBF]/50 transition-all duration-300"
                            >
                                <div className="w-16 h-16 rounded-full bg-[#3B7DBF]/10 flex items-center justify-center mx-auto mb-6">
                                    <Phone className="w-8 h-8 text-[#3FC4E2]" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">Call Us</h3>
                                <a href="tel:+17177199797" className="text-white/70 text-lg hover:text-white transition-colors">
                                    +1 717 719 9797
                                </a>
                            </div>

                            {/* Email Us */}
                            <div
                                className="bg-[#1a2332] border border-white/10 rounded-2xl p-8 hover:border-[#3B7DBF]/50 transition-all duration-300"
                            >
                                <div className="w-16 h-16 rounded-full bg-[#3B7DBF]/10 flex items-center justify-center mx-auto mb-6">
                                    <Mail className="w-8 h-8 text-[#3FC4E2]" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">Email Us</h3>
                                <a href="mailto:info@genofit.tech" className="text-white/70 text-lg hover:text-white transition-colors">
                                    info@genofit.tech
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GetInTouch;
