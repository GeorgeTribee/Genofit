import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "What We Do", href: "/what-we-do" },
        { name: "Services", href: "/services" },
        { name: "Process", href: "/process" },
        { name: "Partners", href: "/partners" },
        { name: "Packages", href: "/packages" },
        { name: "Why Us", href: "/why-us" },
        { name: "Blog", href: "/blog" },
        { name: "Courses", href: "/courses" },
        { name: "About Us", href: "/about" },
    ];

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                scrolled
                    ? "bg-[#10293E]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/20"
                    : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="relative group">
                        <motion.img
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            src="/logo.png"
                            alt="Logo"
                            className="h-6 w-auto object-contain"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center">
                        <div className="flex items-center gap-1 bg-white/5 backdrop-blur-sm rounded-full px-2 py-2 border border-white/10">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        to={link.href}
                                        className="relative px-5 py-2.5 text-sm font-medium text-white/70 hover:text-white transition-all duration-300 rounded-full hover:bg-white/10"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Button
                            className="bg-gradient-to-r from-[#3E7BBF] to-[#41C5E3] hover:from-[#41C5E3] hover:to-[#3E7BBF] text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-[#3E7BBF]/25 hover:shadow-[#41C5E3]/40 hover:scale-105"
                        >
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile Menu */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="lg:hidden text-white hover:bg-white/10 rounded-full"
                            >
                                <Menu className="w-6 h-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="right"
                            className="bg-[#10293E]/95 backdrop-blur-xl border-l border-white/10 text-white w-full max-w-sm"
                        >
                            <div className="flex flex-col gap-2 mt-12">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            to={link.href}
                                            className="block py-4 px-4 text-xl font-medium hover:bg-white/5 rounded-xl transition-all duration-300"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                                <div className="mt-8 px-4">
                                    <Button className="w-full bg-gradient-to-r from-[#3E7BBF] to-[#41C5E3] text-white font-semibold py-6 rounded-xl">
                                        Get Started
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;
