import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { TRANSLATIONS } from './translations';
import type { Locale } from './translations';

const STORAGE_KEY = 'genofit.locale';
const DEFAULT_LOCALE: Locale = 'ka';

type LangContextValue = {
    locale: Locale;
    setLocale: (l: Locale) => void;
    t: (key: string) => string;
};

const LanguageContext = createContext<LangContextValue | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [locale, setLocaleState] = useState<Locale>(() => {
        if (typeof window === 'undefined') return DEFAULT_LOCALE;
        const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
        return stored === 'en' || stored === 'ka' ? stored : DEFAULT_LOCALE;
    });

    useEffect(() => {
        window.localStorage.setItem(STORAGE_KEY, locale);
        document.documentElement.lang = locale;
    }, [locale]);

    const setLocale = (l: Locale) => setLocaleState(l);

    const t = (key: string): string => {
        return TRANSLATIONS[locale][key] ?? TRANSLATIONS.en[key] ?? key;
    };

    return (
        <LanguageContext.Provider value={{ locale, setLocale, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useT = () => {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error('useT must be used within LanguageProvider');
    return ctx;
};
