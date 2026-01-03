import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#000B1E] border-t border-white/10 text-gray-400 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Column 1: Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Contact</h4>
                        <div className="flex flex-col gap-3 text-sm">
                            <a href="mailto:info@genofit.com" className="hover:text-sa-blue transition-colors">
                                info@genofit.com
                            </a>
                            <p>New York, NY</p>
                        </div>
                    </div>

                    {/* Column 2: Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Navigation</h4>
                        <div className="flex flex-col gap-3 text-sm">
                            <a href="#" className="hover:text-white transition-colors">About Us</a>
                            <a href="#" className="hover:text-white transition-colors">Terms and Conditions</a>
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        </div>
                    </div>

                    {/* Column 3: Socials */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Follow Us</h4>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-sa-blue hover:text-white transition-all cursor-pointer">
                                <Facebook className="w-5 h-5" />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-sa-purple hover:text-white transition-all cursor-pointer">
                                <Instagram className="w-5 h-5" />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-sa-blue hover:text-white transition-all cursor-pointer">
                                <Linkedin className="w-5 h-5" />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all cursor-pointer">
                                <Youtube className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-center items-center gap-4 text-xs">
                    <p>© 2025 Genofit. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
