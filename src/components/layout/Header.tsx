import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useT } from "@/i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { t } = useT();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('/#') && location.pathname === '/') {
            e.preventDefault();
            const id = href.substring(2);
            const element = document.getElementById(id);
            if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const navLinks = [
        { key: 'nav.courses', href: '/#courses' },
        { key: 'nav.services', href: '/services' },
        { key: 'nav.qa_manual_pro', href: '/qa-honors-program' },
        { key: 'nav.about', href: '/#about' },
        { key: 'nav.contact', href: '/get-in-touch' },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-[#00263E]/85 backdrop-blur-xl border-b border-white/10"
                    : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    <Link to="/" className="flex items-center gap-2">
                        <img src="/genofit-logo.png" alt="GenofIT" className="h-12 w-auto object-contain" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.key}
                                to={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="relative text-sm font-medium text-white/75 hover:text-white transition-colors"
                            >
                                {t(link.key)}
                            </Link>
                        ))}
                    </nav>

                    {/* Right side: Language + CTA */}
                    <div className="hidden lg:flex items-center gap-4">
                        <LanguageSwitcher />
                        <Link to="/get-in-touch">
                            <Button className="bg-[#3B7DBF] hover:bg-[#2D6090] text-white font-medium px-5 py-2 rounded-md transition-colors">
                                {t('nav.cta')}
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu */}
                    <div className="lg:hidden flex items-center gap-3">
                        <LanguageSwitcher />
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                                    <Menu className="w-6 h-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="bg-[#00263E] border-l border-white/10 text-white w-full max-w-sm">
                                <div className="flex flex-col gap-2 mt-12">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.key}
                                            to={link.href}
                                            onClick={(e) => handleNavClick(e, link.href)}
                                            className="block py-3 px-4 text-lg font-medium hover:bg-white/5 rounded-lg transition-colors"
                                        >
                                            {t(link.key)}
                                        </Link>
                                    ))}
                                    <div className="mt-6 px-4">
                                        <Link to="/get-in-touch">
                                            <Button className="w-full bg-[#3B7DBF] hover:bg-[#2D6090] text-white font-medium py-5 rounded-md">
                                                {t('nav.cta')}
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
