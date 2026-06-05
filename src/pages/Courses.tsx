import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { courseCards, accentGradients, accentBaseColors, type CourseCardData } from "@/data/coursesData";

// ─── Design tokens ────────────────────────────────────────────────────────────

const BG = '#0A0F1E';
const CARD_BG = '#111827';
const TEXT_SECONDARY = '#94A3B8';
const TEXT_MUTED = '#64748B';
const TEAL = '#14B8A6';
const TEAL_DARK = '#0F9488';
const BORDER_CARD = 'rgba(255,255,255,0.12)';

const serif: React.CSSProperties = { fontFamily: '"Playfair Display", serif' };
const mono: React.CSSProperties = { fontFamily: '"JetBrains Mono", monospace' };
const sansLight: React.CSSProperties = { fontFamily: '"Inter", sans-serif', fontWeight: 300 };
const sansSemi: React.CSSProperties = { fontFamily: '"Inter", sans-serif', fontWeight: 600 };

// ─── Academy Course Card ──────────────────────────────────────────────────────

const AcademyCourseCard = ({ course }: { course: CourseCardData }) => {
  const gradient = accentGradients[course.accent];
  const accentColor = accentBaseColors[course.accent];

  const inner = (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      whileHover={{ y: -2 }}
      style={{
        backgroundColor: CARD_BG,
        border: `1px solid ${BORDER_CARD}`,
        borderRadius: '16px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
        padding: '32px',
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
        cursor: course.comingSoon ? 'default' : 'pointer',
      }}
      onMouseEnter={(e) => {
        if (course.comingSoon) return;
        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.25)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 40px rgba(0,0,0,0.5)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = BORDER_CARD;
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)';
      }}
    >
      {/* Gradient top border */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: gradient,
          borderRadius: '16px 16px 0 0',
        }}
      />

      {/* Accent dot */}
      <div className="flex items-center gap-2 mb-5">
        <span style={{ color: accentColor, fontSize: '8px' }}>●</span>
        <span
          style={{
            ...mono,
            fontSize: '11px',
            letterSpacing: '0.12em',
            color: accentColor,
            textTransform: 'uppercase',
          }}
        >
          {course.comingSoon ? 'Coming soon' : 'Now enrolling'}
        </span>
      </div>

      {/* Title */}
      <h3
        style={{
          ...serif,
          fontSize: '22px',
          fontWeight: 600,
          color: '#FFFFFF',
          marginBottom: '12px',
          lineHeight: 1.3,
        }}
      >
        {course.title}
      </h3>

      {/* Description */}
      <p
        style={{
          ...sansLight,
          fontSize: '15px',
          color: TEXT_SECONDARY,
          lineHeight: 1.65,
          flex: 1,
          marginBottom: '24px',
        }}
      >
        {course.description}
      </p>

      {/* CTA */}
      {course.comingSoon ? (
        <span
          style={{
            ...{ fontFamily: '"Inter", sans-serif', fontWeight: 600 },
            fontSize: '14px',
            color: TEXT_MUTED,
          }}
        >
          Details announced soon
        </span>
      ) : (
        <span
          style={{
            ...sansSemi,
            fontSize: '14px',
            color: TEAL,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          View Course →
        </span>
      )}
    </motion.div>
  );

  if (course.comingSoon) return inner;
  return <Link to={`/courses/${course.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>{inner}</Link>;
};

// ─── Page ─────────────────────────────────────────────────────────────────────

const badges = [
  'Small live cohorts',
  'Operator-led training',
  'U.S. internship track',
  'Working-engineer lecturers',
];

const Courses = () => {
  return (
    <div style={{ backgroundColor: BG, minHeight: '100vh', color: '#FFFFFF' }}>

      {/* ── Hero ── */}
      <section
        style={{
          paddingTop: '140px',
          paddingBottom: '100px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at top, rgba(20,184,166,0.07) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              ...mono,
              fontSize: '12px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: TEAL,
              marginBottom: '24px',
            }}
          >
            GenofIT Academy · Programs
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            style={{
              ...serif,
              fontSize: 'clamp(32px, 5.5vw, 56px)',
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: '28px',
              color: '#FFFFFF',
            }}
          >
            QA training for international careers.
            <br />
            <span style={{ color: TEXT_SECONDARY, fontWeight: 400, fontStyle: 'italic' }}>
              Taught by engineers who do the work.
            </span>
          </motion.h1>

          {/* Badge pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-0"
          >
            {badges.map((badge) => (
              <span
                key={badge}
                style={{
                  ...mono,
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  color: TEXT_MUTED,
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '4px',
                  padding: '6px 14px',
                  textTransform: 'uppercase',
                }}
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Course Cards Grid ── */}
      <section style={{ paddingBottom: '100px' }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courseCards.map((course) => (
              <AcademyCourseCard key={course.slug} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section
        style={{
          paddingTop: '80px',
          paddingBottom: '100px',
          borderTop: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-xl mx-auto"
          >
            <h2
              style={{
                ...serif,
                fontSize: 'clamp(24px, 3vw, 36px)',
                fontWeight: 600,
                color: '#FFFFFF',
                marginBottom: '16px',
              }}
            >
              Before you apply.
            </h2>
            <p
              style={{
                ...sansLight,
                fontSize: '16px',
                color: TEXT_SECONDARY,
                marginBottom: '32px',
                lineHeight: 1.7,
              }}
            >
              Tell us where you are now and where you want to be. We'll either recommend a program or
              tell you which prerequisites to handle first.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              {/* Primary: WhatsApp */}
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
                  padding: '14px 32px',
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
                <WhatsAppIcon />
                WhatsApp →
              </a>
            </div>

            {/* Secondary link */}
            <p style={{ ...sansLight, fontSize: '14px', color: TEXT_MUTED }}>
              Prefer a call?{' '}
              <a
                href="https://wa.me/[number]"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: TEAL, textDecoration: 'none' }}
              >
                Book a consultation →
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default Courses;
