import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import ChatWidget from "@/components/chat/ChatWidget";

const Layout = () => {
    const { pathname } = useLocation();
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            <Header />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />

            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 left-8 z-50 w-12 h-12 bg-[#3B7DBF] hover:bg-[#2D6090] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-6 h-6" />
                </button>
            )}

            <ChatWidget />
        </div>
    );
};

export default Layout;
