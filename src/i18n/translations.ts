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
    'hero.badge': 'QA & IT Academy · NY',
    'hero.title': 'Software Quality Operations + Practical QA Career Training.',
    'hero.subtitle': 'New York-based QA firm and academy. Learn manual, mobile, and accessibility testing — and build a portfolio that gets you hired.',
    'hero.cta_primary': 'Browse Courses',
    'hero.cta_secondary': 'B2B Services',

    // Stats
    'stats.title': 'Built on Operational Practice',
    'stats.students': 'Students Trained',
    'stats.placement': 'Job Placement Rate',
    'stats.partners': 'Partner Companies',
    'stats.years': 'Years of Operations',

    // Featured Courses
    'courses.title': 'Featured Courses',
    'courses.subtitle': 'Practice-first programs. Real tooling. Portfolio-grade outputs.',
    'courses.duration': 'Duration',
    'courses.format': 'Format',
    'courses.price': 'Price',
    'courses.online': 'Online',
    'courses.view': 'View course',
    'courses.ended': 'Cohort ended',

    // Why Us
    'whyus.title': 'Why Genofit',
    'whyus.subtitle': 'A QA training program built by people who do QA every day.',
    'whyus.f1.title': 'Practice over Theory',
    'whyus.f1.desc': 'Real bug reports, real test plans, real Jira tickets — from day one.',
    'whyus.f2.title': 'Industry-Standard Tools',
    'whyus.f2.desc': 'Jira, Postman, SQL, GitHub, Qase. The same stack your future employer uses.',
    'whyus.f3.title': 'International Curriculum',
    'whyus.f3.desc': 'Built around US/EU QA standards. English-ready career path.',
    'whyus.f4.title': 'Career Support',
    'whyus.f4.desc': 'Portfolio reviews, interview prep, and direct intros to our partner companies.',

    // Bundles
    'bundles.title': 'Choose a Career Track',
    'bundles.subtitle': 'Save more by combining courses into a complete career path.',
    'bundles.popular': 'Most Popular',
    'bundles.from': 'from',
    'bundles.includes': 'Includes',

    // Testimonials
    'testimonials.title': 'Graduates Working Globally',
    'testimonials.subtitle': '70% of our graduates work at leading tech companies.',

    // Partners
    'partners.title': 'Trusted by Teams Worldwide',
    'partners.subtitle': 'Companies our graduates work for and we partner with.',

    // B2B Teaser
    'b2b.eyebrow': 'For Product Teams',
    'b2b.title': 'Need QA for Your Product? We Do That Too.',
    'b2b.subtitle': 'Manual, mobile, and accessibility testing for global startups. Distributed coverage US/EU/GE.',
    'b2b.s1.title': 'Manual & Regression',
    'b2b.s1.desc': 'Risk mitigation across web and mobile.',
    'b2b.s2.title': 'Mobile / Real-Device',
    'b2b.s2.desc': 'Hardware-specific testing on real devices.',
    'b2b.s3.title': 'Accessibility',
    'b2b.s3.desc': 'WCAG-aligned inclusive product standards.',
    'b2b.cta': 'Explore Services',

    // Final CTA
    'cta.title': 'Ready to Start Your QA Career?',
    'cta.subtitle': 'Join the next cohort and build your professional portfolio in under 4 months.',
    'cta.primary': 'Apply Now',
    'cta.secondary': 'Talk to an Advisor',

    // Footer
    'footer.tagline': 'Software Quality Operations · New York',
    'footer.description': 'Manual, mobile, and accessibility testing for global startups. Practical career preparation through QA Manual Pro.',
    'footer.quick_links': 'Quick Links',
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
    'hero.badge': 'QA & IT აკადემია · ნიუ-იორკი',
    'hero.title': 'პროგრამული უზრუნველყოფის ხარისხი + პრაქტიკული QA კარიერული მომზადება.',
    'hero.subtitle': 'ნიუ-იორკში დაფუძნებული QA კომპანია და აკადემია. ისწავლე მანუალური, მობილური და accessibility ტესტირება — და ააწყვე პორტფოლიო, რომელიც სამსახურს მოგიტანს.',
    'hero.cta_primary': 'კურსების ნახვა',
    'hero.cta_secondary': 'B2B სერვისები',

    // Stats
    'stats.title': 'აშენებულია ოპერაციულ პრაქტიკაზე',
    'stats.students': 'მომზადებული სტუდენტი',
    'stats.placement': 'დასაქმების მაჩვენებელი',
    'stats.partners': 'პარტნიორი კომპანია',
    'stats.years': 'წელი ოპერაციებში',

    // Featured Courses
    'courses.title': 'რჩეული კურსები',
    'courses.subtitle': 'პრაქტიკაზე ორიენტირებული პროგრამები. რეალური ხელსაწყოები. პორტფოლიო-დონის შედეგები.',
    'courses.duration': 'ხანგრძლივობა',
    'courses.format': 'ფორმატი',
    'courses.price': 'ფასი',
    'courses.online': 'ონლაინ',
    'courses.view': 'კურსის ნახვა',
    'courses.ended': 'ნაკადი დასრულდა',

    // Why Us
    'whyus.title': 'რატომ Genofit',
    'whyus.subtitle': 'QA ტრენინგ-პროგრამა, რომელიც აშენდა იმ ადამიანების მიერ, რომლებიც ყოველდღე QA-ს აკეთებენ.',
    'whyus.f1.title': 'პრაქტიკა — ნაცვლად თეორიისა',
    'whyus.f1.desc': 'რეალური bug report-ები, ტესტ-გეგმები და Jira ticket-ები — პირველივე დღიდან.',
    'whyus.f2.title': 'ინდუსტრიული ხელსაწყოები',
    'whyus.f2.desc': 'Jira, Postman, SQL, GitHub, Qase — იგივე stack, რომელიც შენს მომავალ დამსაქმებელს აქვს.',
    'whyus.f3.title': 'საერთაშორისო კურიკულუმი',
    'whyus.f3.desc': 'აშენებულია აშშ/ევროპის QA სტანდარტებზე. ინგლისური-ready კარიერა.',
    'whyus.f4.title': 'კარიერული მხარდაჭერა',
    'whyus.f4.desc': 'პორტფოლიოს განხილვა, ინტერვიუს მომზადება, პირდაპირი კავშირები პარტნიორ კომპანიებთან.',

    // Bundles
    'bundles.title': 'აირჩიე კარიერული ტრეკი',
    'bundles.subtitle': 'დაზოგე მეტი — გააერთიანე კურსები სრულ კარიერულ გზად.',
    'bundles.popular': 'ყველაზე პოპულარული',
    'bundles.from': '-დან',
    'bundles.includes': 'შეიცავს',

    // Testimonials
    'testimonials.title': 'კურსდამთავრებულები გლობალურად მუშაობენ',
    'testimonials.subtitle': 'ჩვენი კურსდამთავრებულების 70% წამყვან ტექნოლოგიურ კომპანიებში მუშაობს.',

    // Partners
    'partners.title': 'გვენდობიან მსოფლიოს გუნდები',
    'partners.subtitle': 'კომპანიები, სადაც ჩვენი კურსდამთავრებულები მუშაობენ და ვისთანაც ვთანამშრომლობთ.',

    // B2B Teaser
    'b2b.eyebrow': 'პროდუქტის გუნდებისთვის',
    'b2b.title': 'შენს პროდუქტს QA სჭირდება? ჩვენ ამასაც ვაკეთებთ.',
    'b2b.subtitle': 'მანუალური, მობილური და accessibility ტესტირება გლობალური სტარტაპებისთვის. დისტრიბუცია აშშ/ევროპა/საქართველო.',
    'b2b.s1.title': 'მანუალური და რეგრესიული',
    'b2b.s1.desc': 'რისკის შემცირება ვებსა და მობილურზე.',
    'b2b.s2.title': 'მობილური / რეალური მოწყობილობა',
    'b2b.s2.desc': 'ჰარდვერ-სპეციფიკური ტესტირება რეალურ მოწყობილობებზე.',
    'b2b.s3.title': 'Accessibility',
    'b2b.s3.desc': 'WCAG-ის სტანდარტები ინკლუზიური პროდუქტისთვის.',
    'b2b.cta': 'სერვისების ნახვა',

    // Final CTA
    'cta.title': 'მზად ხარ შენი QA კარიერა დაიწყო?',
    'cta.subtitle': 'შემოუერთდი შემდეგ ნაკადს და ააწყვე პროფესიული პორტფოლიო 4 თვეში.',
    'cta.primary': 'რეგისტრაცია',
    'cta.secondary': 'კონსულტაცია',

    // Footer
    'footer.tagline': 'Software Quality Operations · ნიუ-იორკი',
    'footer.description': 'მანუალური, მობილური და accessibility ტესტირება გლობალური სტარტაპებისთვის. პროფესიული მომზადება QA Manual Pro-ით.',
    'footer.quick_links': 'სწრაფი ლინკები',
    'footer.our_services': 'ოპერაციები',
    'footer.contact_us': 'კონტაქტი',
    'footer.location_label': 'მდებარეობა',
    'footer.location_value': 'ნიუ-იორკი, აშშ',
    'footer.call_label': 'ზარი',
    'footer.email_label': 'იმეილი',
    'footer.copyright': '© 2026 GenofIT. ყველა უფლება დაცულია.',
};

export const TRANSLATIONS: Record<Locale, Dict> = { en, ka };
