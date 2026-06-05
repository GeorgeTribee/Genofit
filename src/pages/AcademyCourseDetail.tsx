import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Linkedin } from 'lucide-react';
import {
  courseDetails,
  accentGradients,
  accentBaseColors,
  type CourseDetailData,
  type TabContent,
  type ApproachTab,
  type OverviewTab,
  type CurriculumTab,
  type MentorsTab,
  type LecturersTab,
  type LecturerTab,
  type OutcomesTab,
  type FAQTab,
  type FAQItem,
  type ScheduleTab,
  type FinalExamTab,
  type CapstoneTab,
  type ExpandableCardItem,
} from '@/data/coursesData';

// ─── Design tokens ────────────────────────────────────────────────────────────

const BG = '#0A0F1E';
const CARD_BG = '#111827';
const CARD_BG2 = '#0F1628';
const TEXT_SECONDARY = '#94A3B8';
const TEXT_MUTED = '#64748B';
const TEAL = '#14B8A6';
const TEAL_DARK = '#0F9488';
const BORDER_SUBTLE = 'rgba(255,255,255,0.08)';
const BORDER_CARD = 'rgba(255,255,255,0.12)';

const serif: React.CSSProperties = { fontFamily: '"Playfair Display", serif' };
const mono: React.CSSProperties = { fontFamily: '"JetBrains Mono", monospace' };
const sansLight: React.CSSProperties = { fontFamily: '"Inter", sans-serif', fontWeight: 300 };
const sansMed: React.CSSProperties = { fontFamily: '"Inter", sans-serif', fontWeight: 500 };
const sansSemi: React.CSSProperties = { fontFamily: '"Inter", sans-serif', fontWeight: 600 };

// ─── Helpers ──────────────────────────────────────────────────────────────────

const GradientText = ({ text, gradient }: { text: string; gradient: string }) => (
  <span
    style={{
      background: gradient,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    }}
  >
    {text}
  </span>
);

const titleWithAccent = (title: string, accentWord: string, gradient: string) => {
  const idx = title.indexOf(accentWord);
  if (idx === -1) return <>{title}</>;
  return (
    <>
      {title.slice(0, idx)}
      <GradientText text={accentWord} gradient={gradient} />
      {title.slice(idx + accentWord.length)}
    </>
  );
};

const paragraphs = (text: string, style?: React.CSSProperties) =>
  text.split('\n\n').map((p, i) => (
    <p
      key={i}
      style={{
        ...sansLight,
        fontSize: '16px',
        color: TEXT_SECONDARY,
        lineHeight: 1.75,
        marginBottom: i < text.split('\n\n').length - 1 ? '16px' : 0,
        ...style,
      }}
    >
      {p}
    </p>
  ));

// ─── CTA Buttons ─────────────────────────────────────────────────────────────

const ApplyNowBtn = ({ large }: { large?: boolean }) => (
  <a
    href="https://wa.me/[number]"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      ...sansSemi,
      fontSize: '15px',
      letterSpacing: '0.02em',
      color: BG,
      backgroundColor: TEAL,
      borderRadius: '8px',
      padding: large ? '16px 40px' : '14px 32px',
      textDecoration: 'none',
      transition: 'background 0.2s ease, transform 0.2s ease',
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = TEAL_DARK;
      (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)';
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = TEAL;
      (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
    }}
  >
    Apply Now →
  </a>
);

const NotifyBtn = () => (
  <a
    href="https://wa.me/[number]"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      ...sansSemi,
      fontSize: '15px',
      color: TEAL,
      border: `1.5px solid ${TEAL}`,
      borderRadius: '8px',
      padding: '14px 32px',
      textDecoration: 'none',
      backgroundColor: 'transparent',
      transition: 'background 0.2s ease',
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(20,184,166,0.1)';
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
    }}
  >
    Notify Me When Enrollment Opens →
  </a>
);

const WhatsAppLink = ({ label }: { label: string }) => (
  <a
    href="https://wa.me/[number]"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: TEAL, textDecoration: 'none' }}
  >
    {label}
  </a>
);

// ─── Reusable card shells ─────────────────────────────────────────────────────

const FeatureCard = ({ title, body }: { title: string; body: string }) => (
  <div
    style={{
      backgroundColor: CARD_BG2,
      border: `1px solid ${BORDER_CARD}`,
      borderRadius: '12px',
      padding: '24px',
    }}
  >
    <h4 style={{ ...sansSemi, fontSize: '15px', color: '#FFFFFF', marginBottom: '8px' }}>{title}</h4>
    <p style={{ ...sansLight, fontSize: '14px', color: TEXT_SECONDARY, lineHeight: 1.65 }}>{body}</p>
  </div>
);

const ModuleCard = ({
  label,
  title,
  body,
  accentColor,
}: {
  label: string;
  title: string;
  body: string;
  accentColor: string;
}) => (
  <div
    style={{
      backgroundColor: CARD_BG,
      border: `1px solid ${BORDER_CARD}`,
      borderRadius: '12px',
      padding: '24px',
    }}
  >
    <span
      style={{
        ...mono,
        fontSize: '11px',
        letterSpacing: '0.15em',
        color: accentColor,
        display: 'block',
        marginBottom: '8px',
        textTransform: 'uppercase',
      }}
    >
      {label}
    </span>
    <h4 style={{ ...sansSemi, fontSize: '15px', color: '#FFFFFF', marginBottom: '8px', lineHeight: 1.4 }}>
      {title}
    </h4>
    <p style={{ ...sansLight, fontSize: '14px', color: TEXT_SECONDARY, lineHeight: 1.65 }}>{body}</p>
  </div>
);

const SkillsBand = ({ skills }: { skills: string[] }) => (
  <div style={{ borderTop: `1px solid ${BORDER_SUBTLE}`, paddingTop: '24px', marginTop: '28px' }}>
    <p
      style={{
        ...mono,
        fontSize: '11px',
        letterSpacing: '0.1em',
        color: TEXT_MUTED,
        textTransform: 'uppercase',
        marginBottom: '12px',
      }}
    >
      Hands-on with:
    </p>
    <div className="flex flex-wrap gap-2">
      {skills.map((s) => (
        <span
          key={s}
          style={{
            ...mono,
            fontSize: '12px',
            color: TEXT_SECONDARY,
            backgroundColor: 'rgba(255,255,255,0.04)',
            border: `1px solid ${BORDER_CARD}`,
            borderRadius: '4px',
            padding: '4px 12px',
          }}
        >
          {s}
        </span>
      ))}
    </div>
  </div>
);

const PersonCard = ({
  name,
  role,
  linkedinUrl,
  bio,
  leadIn,
  featured,
}: {
  name: string;
  role: string;
  linkedinUrl?: string;
  bio?: string;
  leadIn?: string;
  featured?: boolean;
}) => (
  <div
    style={{
      backgroundColor: CARD_BG,
      border: `1px solid ${BORDER_CARD}`,
      borderRadius: '16px',
      padding: featured ? '32px' : '24px',
    }}
  >
    {leadIn && (
      <p style={{ ...sansLight, fontSize: '14px', color: TEXT_MUTED, marginBottom: '20px', fontStyle: 'italic' }}>
        {leadIn}
      </p>
    )}
    <div className="flex items-start gap-4">
      {/* Avatar placeholder */}
      <div
        style={{
          width: featured ? '80px' : '48px',
          height: featured ? '80px' : '48px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.05)',
          border: `1px solid ${BORDER_CARD}`,
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width={featured ? 32 : 20} height={featured ? 32 : 20} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="8" r="4" stroke={TEXT_MUTED} strokeWidth="1.5" />
          <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke={TEXT_MUTED} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      <div className="flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h4 style={{ ...sansSemi, fontSize: featured ? '17px' : '15px', color: '#FFFFFF', marginBottom: '3px' }}>
              {name}
            </h4>
            <p style={{ ...mono, fontSize: '11px', color: TEXT_MUTED, letterSpacing: '0.05em' }}>{role}</p>
          </div>
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} on LinkedIn`}
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255,255,255,0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: TEXT_SECONDARY,
                transition: 'background 0.2s ease',
                flexShrink: 0,
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#0A66C2';
                (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(255,255,255,0.06)';
                (e.currentTarget as HTMLAnchorElement).style.color = TEXT_SECONDARY;
              }}
            >
              <Linkedin size={15} />
            </a>
          )}
        </div>
        {bio && (
          <p style={{ ...sansLight, fontSize: '14px', color: TEXT_SECONDARY, lineHeight: 1.7, marginTop: '12px' }}>
            {bio}
          </p>
        )}
      </div>
    </div>
  </div>
);

// ─── FAQ Accordion ────────────────────────────────────────────────────────────

const FAQAccordion = ({ items }: { items: FAQItem[] }) => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-2">
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            backgroundColor: CARD_BG,
            border: `1px solid ${open === i ? BORDER_CARD : BORDER_SUBTLE}`,
            borderRadius: '12px',
            overflow: 'hidden',
            transition: 'border-color 0.2s ease',
          }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '20px 24px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              gap: '16px',
            }}
          >
            <span style={{ ...sansMed, fontSize: '15px', color: '#FFFFFF' }}>{item.question}</span>
            <span
              style={{
                color: TEAL,
                fontSize: '20px',
                lineHeight: 1,
                flexShrink: 0,
                transform: open === i ? 'rotate(45deg)' : 'rotate(0)',
                transition: 'transform 0.2s ease',
                display: 'block',
              }}
            >
              +
            </span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                style={{ overflow: 'hidden' }}
              >
                <div style={{ padding: '0 24px 20px' }}>
                  <p style={{ ...sansLight, fontSize: '15px', color: TEXT_SECONDARY, lineHeight: 1.7 }}>
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

// ─── Tab content renderers ────────────────────────────────────────────────────

const renderApproach = (t: ApproachTab) => (
  <div>
    <p style={{ ...sansLight, fontSize: '16px', color: TEXT_SECONDARY, lineHeight: 1.75, marginBottom: '24px' }}>
      {t.body}
    </p>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {t.bullets.map((b) => (
        <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
          <span style={{ color: TEAL, marginTop: '3px', flexShrink: 0 }}>→</span>
          <span style={{ ...sansLight, fontSize: '15px', color: TEXT_SECONDARY, lineHeight: 1.65 }}>{b}</span>
        </li>
      ))}
    </ul>
  </div>
);

const renderOverview = (t: OverviewTab) => (
  <div>
    <div className="grid lg:grid-cols-2 gap-10 items-start">
      <div>
        <h2
          style={{
            ...serif,
            fontSize: 'clamp(22px, 2.5vw, 30px)',
            fontWeight: 600,
            color: '#FFFFFF',
            marginBottom: '20px',
            lineHeight: 1.3,
          }}
        >
          {t.heading}
        </h2>
        <div>{paragraphs(t.body)}</div>
      </div>
      <div className="flex flex-col gap-4">
        {t.features.map((f) => (
          <FeatureCard key={f.title} title={f.title} body={f.body} />
        ))}
      </div>
    </div>
  </div>
);

const renderCurriculum = (t: CurriculumTab, accentColor: string) => (
  <div>
    <h2
      style={{
        ...serif,
        fontSize: 'clamp(22px, 2.5vw, 30px)',
        fontWeight: 600,
        color: '#FFFFFF',
        marginBottom: '10px',
        lineHeight: 1.3,
      }}
    >
      {t.heading}
    </h2>
    <p style={{ ...sansLight, fontSize: '16px', color: TEXT_SECONDARY, marginBottom: '28px', lineHeight: 1.7 }}>
      {t.body}
    </p>
    <div className="flex flex-col gap-3">
      {t.modules.map((m) => (
        <ModuleCard key={m.label} label={m.label} title={m.title} body={m.body} accentColor={accentColor} />
      ))}
    </div>
    <SkillsBand skills={t.skills} />
  </div>
);

const renderMentors = (t: MentorsTab) => (
  <div>
    <h2 style={{ ...serif, fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 600, color: '#FFFFFF', marginBottom: '10px' }}>
      {t.heading}
    </h2>
    <p style={{ ...sansLight, fontSize: '16px', color: TEXT_SECONDARY, marginBottom: '28px', lineHeight: 1.7 }}>
      {t.body}
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {t.mentors.map((m) => (
        <PersonCard key={m.name} name={m.name} role={m.role} linkedinUrl={m.linkedinUrl} />
      ))}
    </div>
  </div>
);

const renderLecturers = (t: LecturersTab) => (
  <div>
    <h2 style={{ ...serif, fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 600, color: '#FFFFFF', marginBottom: '10px' }}>
      {t.heading}
    </h2>
    <p style={{ ...sansLight, fontSize: '16px', color: TEXT_SECONDARY, marginBottom: '28px', lineHeight: 1.7 }}>
      {t.body}
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {t.lecturers.map((l) => (
        <PersonCard key={l.name} name={l.name} role={l.role} linkedinUrl={l.linkedinUrl} />
      ))}
    </div>
  </div>
);

const renderLecturer = (t: LecturerTab) => (
  <div>
    <h2 style={{ ...serif, fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 600, color: '#FFFFFF', marginBottom: '28px' }}>
      {t.heading}
    </h2>
    <PersonCard
      name={t.lecturer.name}
      role={t.lecturer.role}
      bio={t.lecturer.bio}
      linkedinUrl={t.lecturer.linkedinUrl}
      leadIn={t.leadIn}
      featured
    />
  </div>
);

const renderOutcomes = (t: OutcomesTab) => (
  <div>
    <h2 style={{ ...serif, fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 600, color: '#FFFFFF', marginBottom: '10px' }}>
      {t.heading}
    </h2>
    {t.body && (
      <p style={{ ...sansLight, fontSize: '16px', color: TEXT_SECONDARY, marginBottom: '28px', lineHeight: 1.7 }}>
        {t.body}
      </p>
    )}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
      {t.cards.map((c) => (
        <div
          key={c.title}
          style={{ backgroundColor: CARD_BG, border: `1px solid ${BORDER_CARD}`, borderRadius: '16px', padding: '28px' }}
        >
          <h4 style={{ ...sansSemi, fontSize: '15px', color: '#FFFFFF', marginBottom: '10px' }}>{c.title}</h4>
          <p style={{ ...sansLight, fontSize: '14px', color: TEXT_SECONDARY, lineHeight: 1.65 }}>{c.body}</p>
        </div>
      ))}
    </div>
    {t.disclaimer && (
      <p style={{ ...mono, fontSize: '12px', letterSpacing: '0.05em', color: TEXT_MUTED, paddingTop: '16px', borderTop: `1px solid ${BORDER_SUBTLE}` }}>
        {t.disclaimer}
      </p>
    )}
    {t.callout && (
      <div
        style={{
          border: `1.5px solid ${TEAL}`,
          borderRadius: '12px',
          padding: '24px',
          backgroundColor: 'rgba(20,184,166,0.04)',
          marginTop: '16px',
        }}
      >
        <h4 style={{ ...sansSemi, fontSize: '15px', color: TEAL, marginBottom: '8px' }}>{t.callout.heading}</h4>
        <p style={{ ...sansLight, fontSize: '14px', color: TEXT_SECONDARY, lineHeight: 1.65 }}>{t.callout.body}</p>
      </div>
    )}
  </div>
);

const renderFAQContent = (t: FAQTab) => (
  <div>
    {t.heading && (
      <h2 style={{ ...serif, fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 600, color: '#FFFFFF', marginBottom: '28px' }}>
        {t.heading}
      </h2>
    )}
    <FAQAccordion items={t.items} />
  </div>
);

const renderSchedule = (t: ScheduleTab) => {
  const rows = [
    ['Start Date', t.cohortDate],
    ['Duration', t.duration],
    t.schedule ? ['Schedule', t.schedule] : null,
    t.time ? ['Time', t.time] : null,
    ['Format', t.format],
    t.sessions ? ['Sessions', t.sessions] : null,
    t.recordings ? ['Recordings', t.recordings] : null,
    t.totalLectures ? ['Lectures', t.totalLectures] : null,
  ].filter(Boolean) as [string, string][];

  return (
    <div className="max-w-2xl">
      <h2 style={{ ...serif, fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 600, color: '#FFFFFF', marginBottom: '24px' }}>
        {t.heading}
      </h2>

      {/* Schedule grid */}
      <div
        style={{
          backgroundColor: CARD_BG,
          border: `1px solid ${BORDER_CARD}`,
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '20px',
        }}
      >
        {rows.map(([label, value], i) => (
          <div
            key={label}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingBottom: i < rows.length - 1 ? '14px' : 0,
              marginBottom: i < rows.length - 1 ? '14px' : 0,
              borderBottom: i < rows.length - 1 ? `1px solid ${BORDER_SUBTLE}` : 'none',
            }}
          >
            <span style={{ ...mono, fontSize: '11px', letterSpacing: '0.1em', color: TEXT_MUTED, textTransform: 'uppercase' }}>
              {label}
            </span>
            <span style={{ ...sansMed, fontSize: '14px', color: '#FFFFFF' }}>{value}</span>
          </div>
        ))}
      </div>

      {/* Pricing block */}
      <div
        style={{
          backgroundColor: CARD_BG,
          border: `1px solid ${BORDER_CARD}`,
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '28px',
        }}
      >
        {t.priceLabel && (
          <p style={{ ...mono, fontSize: '11px', letterSpacing: '0.12em', color: TEXT_MUTED, textTransform: 'uppercase', marginBottom: '10px' }}>
            {t.priceLabel}
          </p>
        )}
        <p
          style={{
            ...serif,
            fontWeight: 700,
            fontSize: '28px',
            background: accentGradients.teal,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: t.priceNote || t.totalAmount ? '12px' : 0,
          }}
        >
          {t.price}
        </p>
        {t.priceNote && (
          <p style={{ ...sansLight, fontSize: '13px', color: TEXT_MUTED, marginBottom: '8px' }}>{t.priceNote}</p>
        )}
        {t.totalAmount && (
          <p style={{ ...sansLight, fontSize: '14px', color: TEXT_SECONDARY, lineHeight: 1.6 }}>{t.totalAmount}</p>
        )}
        {t.priceDetails && (
          <div>
            <div className="flex items-center gap-4 flex-wrap mb-3">
              <span style={{ ...sansLight, fontSize: '13px', color: TEXT_MUTED, textDecoration: 'line-through' }}>
                Full: {t.priceDetails.full}
              </span>
              <span
                style={{
                  ...serif,
                  fontWeight: 700,
                  fontSize: '26px',
                  background: accentGradients.teal,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {t.priceDetails.earlyBird}
              </span>
            </div>
            <p style={{ ...mono, fontSize: '12px', color: TEAL, letterSpacing: '0.05em', marginBottom: '16px' }}>
              Saving: {t.priceDetails.saving}
            </p>
            {t.priceDetails.installments.map((inst, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '10px 0',
                  borderBottom: i < t.priceDetails!.installments.length - 1 ? `1px solid ${BORDER_SUBTLE}` : 'none',
                }}
              >
                <span style={{ ...sansLight, fontSize: '14px', color: TEXT_SECONDARY }}>{inst.label}</span>
                <span style={{ ...sansMed, fontSize: '14px', color: '#FFFFFF' }}>{inst.amount}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col items-start gap-3">
        <ApplyNowBtn />
        <p style={{ ...sansLight, fontSize: '13px', color: TEXT_MUTED }}>
          Prefer to talk first?{' '}
          <WhatsAppLink label="Message us on WhatsApp →" />
        </p>
      </div>
    </div>
  );
};

const renderFinalExam = (t: FinalExamTab, gradient: string) => (
  <div className="max-w-2xl">
    <h2
      style={{
        ...serif,
        fontSize: 'clamp(26px, 3vw, 38px)',
        fontWeight: 700,
        marginBottom: '14px',
        background: gradient,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        display: 'inline-block',
      }}
    >
      {t.heading}
    </h2>
    <p
      style={{
        ...{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic' },
        fontSize: '18px',
        color: TEXT_SECONDARY,
        marginBottom: '24px',
        lineHeight: 1.5,
      }}
    >
      {t.subheading}
    </p>
    <div>{paragraphs(t.body)}</div>
  </div>
);

const renderCapstone = (t: CapstoneTab, gradient: string) => (
  <div>
    <h2
      style={{
        ...serif,
        fontSize: 'clamp(26px, 3vw, 38px)',
        fontWeight: 700,
        marginBottom: t.subheading ? '14px' : '20px',
        background: gradient,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        display: 'inline-block',
      }}
    >
      {t.heading}
    </h2>
    {t.subheading && (
      <p
        style={{
          ...{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic' },
          fontSize: '18px',
          color: TEXT_SECONDARY,
          marginBottom: '20px',
          lineHeight: 1.5,
        }}
      >
        {t.subheading}
      </p>
    )}
    <p style={{ ...sansLight, fontSize: '16px', color: TEXT_SECONDARY, marginBottom: '32px', lineHeight: 1.75 }}>
      {t.body}
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {t.cards.map((c) => (
        <div
          key={c.title}
          style={{
            backgroundColor: CARD_BG,
            border: `1px solid ${BORDER_CARD}`,
            borderRadius: '12px',
            padding: '20px',
          }}
        >
          <h4 style={{ ...sansSemi, fontSize: '14px', color: '#FFFFFF', marginBottom: '7px' }}>{c.title}</h4>
          <p style={{ ...sansLight, fontSize: '13px', color: TEXT_SECONDARY, lineHeight: 1.6 }}>{c.body}</p>
        </div>
      ))}
    </div>
    {t.quote && (
      <p
        style={{
          ...{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic' },
          fontSize: '19px',
          color: '#FFFFFF',
          textAlign: 'center',
          lineHeight: 1.5,
          padding: '32px',
          marginTop: '32px',
          borderTop: `1px solid ${BORDER_SUBTLE}`,
        }}
      >
        {t.quote}
      </p>
    )}
  </div>
);

const renderTabContent = (content: TabContent, course: CourseDetailData) => {
  const gradient = accentGradients[course.accent];
  const accentColor = accentBaseColors[course.accent];

  switch (content.type) {
    case 'approach':   return renderApproach(content as ApproachTab);
    case 'overview':   return renderOverview(content as OverviewTab);
    case 'curriculum': return renderCurriculum(content as CurriculumTab, accentColor);
    case 'mentors':    return renderMentors(content as MentorsTab);
    case 'lecturers':  return renderLecturers(content as LecturersTab);
    case 'lecturer':   return renderLecturer(content as LecturerTab);
    case 'outcomes':   return renderOutcomes(content as OutcomesTab);
    case 'faq':        return renderFAQContent(content as FAQTab);
    case 'schedule':   return renderSchedule(content as ScheduleTab);
    case 'final-exam': return renderFinalExam(content as FinalExamTab, gradient);
    case 'capstone':   return renderCapstone(content as CapstoneTab, gradient);
    default:           return null;
  }
};

// ─── Expandable Cards Section (QA Manual Pro) ─────────────────────────────────

const ExpandableCards = ({
  section,
  course,
}: {
  section: NonNullable<CourseDetailData['expandableSection']>;
  course: CourseDetailData;
}) => {
  const [openId, setOpenId] = useState<string | null>(null);
  const accentColor = accentBaseColors[course.accent];

  return (
    <section style={{ paddingTop: '72px', paddingBottom: '20px' }}>
      <div className="container mx-auto px-6">
        {/* Section heading */}
        <div className="mb-12">
          <p
            style={{
              ...mono,
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: accentColor,
              marginBottom: '10px',
            }}
          >
            {section.eyebrow}
          </p>
          <h2
            style={{
              ...serif,
              fontSize: 'clamp(26px, 3vw, 40px)',
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1.2,
            }}
          >
            {section.heading}
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-4">
          {section.cards.map((card: ExpandableCardItem) => {
            const isOpen = openId === card.id;
            return (
              <div
                key={card.id}
                style={{
                  backgroundColor: CARD_BG,
                  border: `1px solid ${isOpen ? accentColor + '44' : BORDER_CARD}`,
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s ease',
                }}
              >
                {/* Card header — always visible */}
                <button
                  onClick={() => setOpenId(isOpen ? null : card.id)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '28px 32px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: '20px',
                  }}
                >
                  <div>
                    <h3
                      style={{
                        ...serif,
                        fontSize: '20px',
                        fontWeight: 600,
                        color: '#FFFFFF',
                        marginBottom: isOpen ? 0 : '6px',
                        lineHeight: 1.3,
                      }}
                    >
                      {card.frontTitle}
                    </h3>
                    {!isOpen && (
                      <p style={{ ...sansLight, fontSize: '14px', color: TEXT_MUTED }}>{card.frontPreview}</p>
                    )}
                  </div>
                  <span
                    style={{
                      color: accentColor,
                      fontSize: '22px',
                      lineHeight: 1,
                      flexShrink: 0,
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                      transition: 'transform 0.25s ease',
                      display: 'block',
                    }}
                  >
                    +
                  </span>
                </button>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div
                        style={{
                          padding: '0 32px 32px',
                          borderTop: `1px solid ${BORDER_SUBTLE}`,
                          paddingTop: '28px',
                        }}
                      >
                        <h4
                          style={{
                            ...serif,
                            fontSize: '18px',
                            fontWeight: 600,
                            color: '#FFFFFF',
                            marginBottom: '20px',
                          }}
                        >
                          {card.expandedTitle}
                        </h4>
                        {renderTabContent(card.content, course)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ─── FAQ Section (standalone, used by QA Manual Pro + Mobile QA) ──────────────

const FAQSection = ({ faq }: { faq: FAQTab }) => (
  <section
    style={{
      paddingTop: '72px',
      paddingBottom: '72px',
      borderTop: `1px solid ${BORDER_SUBTLE}`,
    }}
  >
    <div className="container mx-auto px-6">
      <h2
        style={{
          ...serif,
          fontSize: 'clamp(24px, 3vw, 36px)',
          fontWeight: 600,
          color: '#FFFFFF',
          marginBottom: '36px',
        }}
      >
        FAQ
      </h2>
      <FAQAccordion items={faq.items} />
    </div>
  </section>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

const AcademyCourseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [activeTab, setActiveTab] = useState(0);

  const course = courseDetails[slug ?? ''];
  if (!course) return <Navigate to="/courses" replace />;

  const gradient = accentGradients[course.accent];
  const accentColor = accentBaseColors[course.accent];

  return (
    <div style={{ backgroundColor: BG, minHeight: '100vh', color: '#FFFFFF' }}>

      {/* ── Hero ── */}
      <section style={{ paddingTop: '140px', paddingBottom: '72px', position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at top, rgba(20,184,166,0.07) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          {/* Back link */}
          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
            <Link
              to="/courses"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                ...sansLight,
                fontSize: '13px',
                color: TEXT_MUTED,
                textDecoration: 'none',
                marginBottom: '40px',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#FFFFFF')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = TEXT_MUTED)}
            >
              <ArrowLeft size={15} />
              All Programs
            </Link>
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            style={{
              ...mono,
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: accentColor,
              marginBottom: '18px',
            }}
          >
            {course.eyebrow}
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            style={{
              ...serif,
              fontSize: 'clamp(36px, 6vw, 64px)',
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: '22px',
            }}
          >
            {titleWithAccent(course.title, course.accentWord, gradient)}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            style={{
              ...sansLight,
              fontSize: 'clamp(15px, 1.8vw, 19px)',
              color: TEXT_SECONDARY,
              maxWidth: '660px',
              marginBottom: '30px',
              lineHeight: 1.7,
            }}
          >
            {course.subheadline}
          </motion.p>

          {/* Info bar */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            style={{
              ...mono,
              fontSize: '12px',
              letterSpacing: '0.12em',
              color: TEXT_MUTED,
              textTransform: 'uppercase',
              marginBottom: '30px',
            }}
          >
            {course.infoBar}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.18 }}
            className="flex flex-col items-start gap-3"
          >
            {course.comingSoon ? <NotifyBtn /> : <ApplyNowBtn />}
            <p style={{ ...sansLight, fontSize: '13px', color: TEXT_MUTED, maxWidth: '480px', lineHeight: 1.5 }}>
              {course.trustLine}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Quick Facts Bar ── */}
      <div style={{ borderTop: `1px solid ${BORDER_SUBTLE}`, borderBottom: `1px solid ${BORDER_SUBTLE}` }}>
        <div className="container mx-auto px-6">
          <div
            className="flex flex-wrap items-center gap-x-5 gap-y-2 py-5 overflow-x-auto"
            style={{ scrollbarWidth: 'none' }}
          >
            {course.quickFacts.map((fact, i) => (
              <span key={fact} style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <span
                  style={{
                    ...mono,
                    fontSize: '11px',
                    letterSpacing: '0.1em',
                    color: TEXT_SECONDARY,
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {fact}
                </span>
                {i < course.quickFacts.length - 1 && (
                  <span style={{ color: TEXT_MUTED, fontSize: '8px' }}>·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Coming Soon Content ── */}
      {course.comingSoon && course.comingSoonContent && (
        <section style={{ paddingTop: '72px', paddingBottom: '80px' }}>
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <h2
                style={{
                  ...serif,
                  fontSize: 'clamp(22px, 3vw, 34px)',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  marginBottom: '16px',
                }}
              >
                {course.comingSoonContent.heading}
              </h2>
              <div>{paragraphs(course.comingSoonContent.body)}</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
              {course.comingSoonContent.cards.map((c) => (
                <div
                  key={c.title}
                  style={{
                    backgroundColor: CARD_BG,
                    border: `1px solid ${BORDER_CARD}`,
                    borderRadius: '16px',
                    padding: '28px',
                  }}
                >
                  <h4 style={{ ...sansSemi, fontSize: '15px', color: '#FFFFFF', marginBottom: '10px' }}>{c.title}</h4>
                  <p style={{ ...sansLight, fontSize: '14px', color: TEXT_SECONDARY, lineHeight: 1.65 }}>{c.body}</p>
                </div>
              ))}
            </div>
            <div style={{ borderTop: `1px solid ${BORDER_SUBTLE}`, paddingTop: '48px', textAlign: 'center' }}>
              <h3 style={{ ...serif, fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 600, color: '#FFFFFF', marginBottom: '12px' }}>
                {course.finalCTA.heading}
              </h3>
              <p style={{ ...sansLight, fontSize: '15px', color: TEXT_SECONDARY, marginBottom: '24px' }}>
                {course.finalCTA.body}
              </p>
              <a
                href="https://wa.me/[number]"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  ...sansSemi,
                  fontSize: '15px',
                  color: TEAL,
                  border: `1.5px solid ${TEAL}`,
                  borderRadius: '8px',
                  padding: '12px 28px',
                  textDecoration: 'none',
                  backgroundColor: 'transparent',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(20,184,166,0.1)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
                }}
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
        </section>
      )}

      {/* ── Expandable Cards (QA Manual Pro layout) ── */}
      {!course.comingSoon && course.expandableSection && (
        <ExpandableCards section={course.expandableSection} course={course} />
      )}

      {/* ── Tabs (Mobile QA, Web Test Automation layout) ── */}
      {!course.comingSoon && course.tabs && course.tabs.length > 0 && (
        <>
          {/* Tab bar */}
          <div
            style={{
              borderBottom: `1px solid ${BORDER_SUBTLE}`,
              position: 'sticky',
              top: '80px',
              backgroundColor: BG,
              zIndex: 30,
            }}
          >
            <div className="container mx-auto px-6">
              <div
                className="flex gap-0 overflow-x-auto"
                role="tablist"
                style={{ scrollbarWidth: 'none' }}
              >
                {course.tabs.map((tab, i) => (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={activeTab === i}
                    aria-controls={`tabpanel-${tab.id}`}
                    id={`tab-${tab.id}`}
                    onClick={() => setActiveTab(i)}
                    style={{
                      ...sansMed,
                      fontSize: '14px',
                      color: activeTab === i ? '#FFFFFF' : TEXT_MUTED,
                      background: 'none',
                      border: 'none',
                      borderBottom: activeTab === i ? `2px solid ${accentColor}` : '2px solid transparent',
                      padding: '16px 20px',
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      transition: 'color 0.2s ease, border-color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (activeTab !== i) (e.currentTarget as HTMLButtonElement).style.color = TEXT_SECONDARY;
                    }}
                    onMouseLeave={(e) => {
                      if (activeTab !== i) (e.currentTarget as HTMLButtonElement).style.color = TEXT_MUTED;
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tab panels */}
          <section style={{ paddingTop: '56px', paddingBottom: '80px' }}>
            <div className="container mx-auto px-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  id={`tabpanel-${course.tabs[activeTab].id}`}
                  role="tabpanel"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  {renderTabContent(course.tabs[activeTab].content, course)}
                </motion.div>
              </AnimatePresence>
            </div>
          </section>
        </>
      )}

      {/* ── FAQ Section (standalone) ── */}
      {!course.comingSoon && course.faqSection && (
        <FAQSection faq={course.faqSection} />
      )}

      {/* ── Final CTA ── */}
      {!course.comingSoon && (
        <section
          style={{
            paddingTop: '80px',
            paddingBottom: '100px',
            borderTop: `1px solid ${BORDER_SUBTLE}`,
            backgroundColor: CARD_BG2,
          }}
        >
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-xl mx-auto"
            >
              {course.finalCTA.eyebrow && (
                <p
                  style={{
                    ...mono,
                    fontSize: '11px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: accentColor,
                    marginBottom: '16px',
                  }}
                >
                  {course.finalCTA.eyebrow}
                </p>
              )}
              <h2
                style={{
                  ...serif,
                  fontSize: 'clamp(26px, 3.5vw, 42px)',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  marginBottom: '14px',
                  lineHeight: 1.2,
                }}
              >
                {course.finalCTA.heading}
              </h2>
              <p
                style={{
                  ...sansLight,
                  fontSize: '15px',
                  color: TEXT_SECONDARY,
                  marginBottom: '32px',
                  lineHeight: 1.7,
                }}
              >
                {course.finalCTA.body}
              </p>
              <div className="flex flex-col items-center gap-3">
                <ApplyNowBtn large />
                <p style={{ ...sansLight, fontSize: '13px', color: TEXT_MUTED }}>
                  Prefer to talk first?{' '}
                  <WhatsAppLink label="Message us on WhatsApp →" />
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
};

export default AcademyCourseDetail;
