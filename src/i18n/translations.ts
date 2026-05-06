export type Locale = 'en' | 'ka';

export const LOCALES: { code: Locale; label: string; native: string }[] = [
    { code: 'en', label: 'English', native: 'EN' },
    { code: 'ka', label: 'ქართული', native: 'KA' },
];

type Dict = Record<string, string>;

const en: Dict = {
    // Navigation
    'nav.courses': 'Courses',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.blog': 'Blog',
    'nav.qa_manual_pro': 'QA Manual Pro',
    'nav.cta': 'Get in Touch',

    // Hero
    'hero.badge': 'QA · New York',
    'hero.title': 'QA Services and Career Academy.',
    'hero.subtitle': 'A New York studio for software quality. Learn, build a portfolio, get hired.',
    'hero.cta_primary': 'Browse Courses',
    'hero.cta_secondary': 'Services',

    // Featured Courses
    'courses.eyebrow': 'Courses',
    'courses.title': 'Practice‑first programs',
    'courses.subtitle': 'Real tools. Portfolio outcomes. International standards.',

    // Why Us
    'whyus.eyebrow': 'Approach',
    'whyus.title': 'Why GenofIT',
    'whyus.subtitle': 'Built by people who do QA every day.',
    'whyus.f1.title': 'Practice over theory',
    'whyus.f1.desc': 'Real bug reports and test plans from day one.',
    'whyus.f2.title': 'Industry tools',
    'whyus.f2.desc': 'Jira, Postman, SQL, GitHub, Qase.',
    'whyus.f3.title': 'International curriculum',
    'whyus.f3.desc': 'Built around US and EU QA standards.',
    'whyus.f4.title': 'Career support',
    'whyus.f4.desc': 'Portfolio reviews, interview prep, partner intros.',

    // Graduates Section
    'graduates.eyebrow': 'Stories',
    'graduates.title': 'Graduates',
    'graduates.subtitle': 'Real students. Real careers.',
    'graduates.placeholder': 'Story coming soon.',

    // Lecturers Section
    'lecturers.eyebrow': 'Team',
    'lecturers.title': 'Lecturers',
    'lecturers.subtitle': 'QA practitioners from international companies.',
    'lecturers.placeholder_name': 'Profile coming soon.',
    'lecturers.placeholder_role': 'Lecturer',

    // Partners
    'partners.eyebrow': 'Partners',
    'partners.title': 'Companies we work with',
    'partners.subtitle': 'Where our graduates work and our partners ship.',

    // Community Photo Strip
    'community.eyebrow': 'Community',
    'community.title': 'GenofIT in motion',
    'community.subtitle': 'Students, instructors, partner teams.',

    // B2B Teaser
    'b2b.eyebrow': 'For product teams',
    'b2b.title': 'Need QA for your product?',
    'b2b.subtitle': 'Manual, mobile, and accessibility testing for global startups.',
    'b2b.s1.title': 'Manual & regression',
    'b2b.s1.desc': 'Risk mitigation across web and mobile.',
    'b2b.s2.title': 'Mobile / real device',
    'b2b.s2.desc': 'Hardware-specific testing on real devices.',
    'b2b.s3.title': 'Accessibility',
    'b2b.s3.desc': 'WCAG-aligned inclusive product standards.',
    'b2b.cta': 'Explore services',

    // Final CTA
    'cta.eyebrow': 'Start',
    'cta.title': 'Ready to begin?',
    'cta.subtitle': 'Join the next cohort and build a professional portfolio.',
    'cta.primary': 'Apply',
    'cta.secondary': 'Talk to us',

    // Footer
    'footer.tagline': 'Software Quality Operations · New York',
    'footer.description': 'Manual, mobile, and accessibility testing for global startups. Practical career preparation.',
    'footer.quick_links': 'Navigate',
    'footer.our_services': 'Operations',
    'footer.contact_us': 'Contact',
    'footer.location_label': 'Location',
    'footer.location_value': 'New York, USA',
    'footer.call_label': 'Call',
    'footer.email_label': 'Email',
    'footer.copyright': '© 2026 GenofIT. All rights reserved.',
};

const ka: Dict = {
    // Navigation
    'nav.courses': 'კურსები',
    'nav.services': 'სერვისები',
    'nav.about': 'ჩვენ შესახებ',
    'nav.contact': 'კონტაქტი',
    'nav.blog': 'ბლოგი',
    'nav.qa_manual_pro': 'QA Manual Pro',
    'nav.cta': 'დაგვიკავშირდი',

    // Hero
    'hero.badge': 'QA · ნიუ-იორკი',
    'hero.title': 'QA სერვისები და კარიერული აკადემია.',
    'hero.subtitle': 'ნიუ-იორკული QA სტუდია. ისწავლე, ააწყვე პორტფოლიო, დასაქმდი.',
    'hero.cta_primary': 'კურსების ნახვა',
    'hero.cta_secondary': 'სერვისები',

    // Featured Courses
    'courses.eyebrow': 'კურსები',
    'courses.title': 'პრაქტიკული პროგრამები',
    'courses.subtitle': 'რეალური ხელსაწყოები. პორტფოლიო შედეგად.',

    // Why Us
    'whyus.eyebrow': 'მიდგომა',
    'whyus.title': 'რატომ GenofIT',
    'whyus.subtitle': 'შექმნილი იმათ მიერ, ვინც ყოველდღე აკეთებს QA-ს.',
    'whyus.f1.title': 'პრაქტიკა, არა თეორია',
    'whyus.f1.desc': 'რეალური ბაგ რეპორტები და ტესტ გეგმები პირველივე დღიდან.',
    'whyus.f2.title': 'ინდუსტრიული ხელსაწყოები',
    'whyus.f2.desc': 'Jira, Postman, SQL, GitHub, Qase.',
    'whyus.f3.title': 'საერთაშორისო კურიკულუმი',
    'whyus.f3.desc': 'აშშ-ისა და ევროპის QA სტანდარტებზე.',
    'whyus.f4.title': 'კარიერული მხარდაჭერა',
    'whyus.f4.desc': 'პორტფოლიოს განხილვა, ინტერვიუს მომზადება, პარტნიორული კავშირი.',

    // Graduates Section
    'graduates.eyebrow': 'ისტორიები',
    'graduates.title': 'კურსდამთავრებულები',
    'graduates.subtitle': 'რეალური სტუდენტები. რეალური კარიერები.',
    'graduates.placeholder': 'ისტორია მალე დაემატება.',

    // Lecturers Section
    'lecturers.eyebrow': 'გუნდი',
    'lecturers.title': 'ლექტორები',
    'lecturers.subtitle': 'QA პრაქტიკოსები საერთაშორისო კომპანიებიდან.',
    'lecturers.placeholder_name': 'პროფილი მალე დაემატება.',
    'lecturers.placeholder_role': 'ლექტორი',

    // Partners
    'partners.eyebrow': 'პარტნიორები',
    'partners.title': 'კომპანიები ჩვენთან',
    'partners.subtitle': 'სადაც ჩვენი კურსდამთავრებულები მუშაობენ.',

    // Community Photo Strip
    'community.eyebrow': 'საზოგადოება',
    'community.title': 'GenofIT მოძრაობაში',
    'community.subtitle': 'სტუდენტები, ლექტორები, პარტნიორი გუნდები.',

    // B2B Teaser
    'b2b.eyebrow': 'პროდუქტის გუნდებისთვის',
    'b2b.title': 'შენს პროდუქტს QA სჭირდება?',
    'b2b.subtitle': 'მანუალური, მობილური და accessibility ტესტირება გლობალური სტარტაპებისთვის.',
    'b2b.s1.title': 'მანუალური და რეგრესიული',
    'b2b.s1.desc': 'რისკის შემცირება ვებსა და მობილურზე.',
    'b2b.s2.title': 'მობილური და რეალური მოწყობილობა',
    'b2b.s2.desc': 'ჰარდვერ-სპეციფიკური ტესტირება.',
    'b2b.s3.title': 'Accessibility',
    'b2b.s3.desc': 'WCAG სტანდარტები ინკლუზიური პროდუქტისთვის.',
    'b2b.cta': 'სერვისების ნახვა',

    // Final CTA
    'cta.eyebrow': 'დაწყება',
    'cta.title': 'მზად ხარ დაიწყო?',
    'cta.subtitle': 'შემოუერთდი შემდეგ ნაკადს და ააწყვე პროფესიული პორტფოლიო.',
    'cta.primary': 'რეგისტრაცია',
    'cta.secondary': 'კონსულტაცია',

    // Footer
    'footer.tagline': 'Software Quality Operations · ნიუ-იორკი',
    'footer.description': 'მანუალური, მობილური და accessibility ტესტირება გლობალური სტარტაპებისთვის. პრაქტიკული მომზადება.',
    'footer.quick_links': 'ნავიგაცია',
    'footer.our_services': 'ოპერაციები',
    'footer.contact_us': 'კონტაქტი',
    'footer.location_label': 'მდებარეობა',
    'footer.location_value': 'ნიუ-იორკი, აშშ',
    'footer.call_label': 'ზარი',
    'footer.email_label': 'იმეილი',
    'footer.copyright': '© 2026 GenofIT. ყველა უფლება დაცულია.',
};

export const TRANSLATIONS: Record<Locale, Dict> = { en, ka };
