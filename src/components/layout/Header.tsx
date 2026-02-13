import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        // Only prevent default and scroll if we're already on the home page
        if (href.startsWith('/#') && location.pathname === '/') {
            e.preventDefault();
            const id = href.substring(2);
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
        // If we're on a different page, let the Link navigate normally
    };

    const navLinks = [
        { name: "What We Do", href: "/#what-we-do" },
        {
            name: "Services", href: "/services",
            dropdown: [
                { name: "Process", href: "/#process" },
                { name: "Packages", href: "/#packages" },
            ]
        },
        { name: "Partners", href: "/partners" },
        { name: "Why Us", href: "/#why-us" },
        { name: "Academy", href: "/#courses" },
        { name: "About Us", href: "/#about" },
        { name: "QA Honors Program", href: "/qa-honors-program" },
    ];

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                scrolled
                    ? "bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/20"
                    : "bg-transparent backdrop-blur-sm"
            )}
            style={{ fontFamily: "'Outfit', sans-serif" }}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a href="/" className="relative group">
                        <motion.img
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            src="/logo.png"
                            alt="Logo"
                            className="h-8 w-auto object-contain"
                        />
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                {link.dropdown ? (
                                    <div className="relative group">
                                        <Link
                                            to={link.href}
                                            className="relative text-sm font-medium text-white/80 hover:text-white transition-all duration-300 flex items-center gap-1"
                                        >
                                            {link.name}
                                            <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
                                            <span className="absolute left-1/4 -bottom-1 w-0 h-0.5 bg-[#0033ff] group-hover:w-1/2 transition-all duration-300"></span>
                                        </Link>
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 z-50">
                                            <div className="bg-[#0A1825]/95 backdrop-blur-xl border border-white/10 rounded-lg py-1.5 min-w-[140px] shadow-xl shadow-black/50">
                                                {link.dropdown.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        to={item.href}
                                                        onClick={(e) => handleNavClick(e, item.href)}
                                                        className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        to={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className="relative text-sm font-medium text-white/80 hover:text-white transition-all duration-300 group"
                                    >
                                        {link.name}
                                        <span className="absolute left-1/4 -bottom-1 w-0 h-0.5 bg-[#0033ff] group-hover:w-1/2 transition-all duration-300"></span>
                                    </Link>
                                )}
                            </motion.div>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link to="/get-in-touch">
                            <Button
                                className="bg-[#0033ff] hover:bg-[#0029cc] text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 shadow-lg hover:scale-105"
                            >
                                Get in Touch
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="lg:hidden text-white hover:bg-white/10 rounded-lg"
                            >
                                <Menu className="w-6 h-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="right"
                            className="bg-[#0A1825]/95 backdrop-blur-xl border-l border-white/10 text-white w-full max-w-sm"
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
                                            onClick={(e) => handleNavClick(e, link.href)}
                                            className="block py-3 px-4 text-lg font-medium hover:bg-white/5 rounded-lg transition-all duration-300"
                                        >
                                            {link.name}
                                        </Link>
                                        {link.dropdown && (
                                            <div className="ml-4 flex flex-col gap-1">
                                                {link.dropdown.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        to={item.href}
                                                        onClick={(e) => handleNavClick(e, item.href)}
                                                        className="block py-2 px-4 text-base text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                                <div className="mt-8 px-4">
                                    <Link to="/get-in-touch">
                                        <Button className="w-full bg-[#0033ff] hover:bg-[#0029cc] text-white font-semibold py-6 rounded-lg">
                                            Get in Touch
                                        </Button>
                                    </Link>
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
