import { useT } from '@/i18n/LanguageContext';
import { LOCALES } from '@/i18n/translations';
import type { Locale } from '@/i18n/translations';

const LanguageSwitcher = () => {
    const { locale, setLocale } = useT();

    return (
        <div className="inline-flex items-center rounded-md border border-white/15 bg-white/5 p-0.5 text-xs">
            {LOCALES.map((l) => {
                const active = l.code === locale;
                return (
                    <button
                        key={l.code}
                        onClick={() => setLocale(l.code as Locale)}
                        aria-label={`Switch to ${l.label}`}
                        className={`px-2.5 py-1 rounded-[5px] font-medium tracking-wide transition-colors ${
                            active
                                ? 'bg-white text-[#00263E]'
                                : 'text-white/60 hover:text-white'
                        }`}
                    >
                        {l.native}
                    </button>
                );
            })}
        </div>
    );
};

export default LanguageSwitcher;
