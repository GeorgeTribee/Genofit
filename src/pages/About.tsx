import { motion } from "framer-motion";

const BG = '#0A0F1E';
const CARD_BG = '#111827';
const TEXT_SECONDARY = '#94A3B8';
const TEXT_MUTED = '#8896A8';
const TEAL = '#14B8A6';
const BORDER = 'rgba(255,255,255,0.08)';

const serif: React.CSSProperties = { fontFamily: '"Playfair Display", serif' };
const mono: React.CSSProperties = { fontFamily: '"JetBrains Mono", monospace' };
const sansLight: React.CSSProperties = { fontFamily: '"Inter", sans-serif', fontWeight: 300 };
const sansRegular: React.CSSProperties = { fontFamily: '"Inter", sans-serif', fontWeight: 400 };

const paragraphs = [
  "GenofIT is a New York–based QA academy preparing engineers for international work.",
  "The academy is run and taught by working QA engineers — people who lead teams, build automation frameworks, and ship products in their day jobs. Programs are designed around how QA is practiced in international product companies, not how it's described in textbooks.",
  "We run four programs: a four-month flagship for career-switchers and complete beginners, a web automation track for working QA engineers, a mobile QA specialization for engineers moving into iOS and Android, and an English communication course for graduates preparing for global roles.",
  "Cohorts stay small. Lectures are delivered in Georgian, while technical terminology and documentation are taught in English — the same environment students will encounter while working with international teams.",
  "Top-performing students are introduced to partner companies for internship opportunities, including in the U.S.",
];

const About = () => {
  return (
    <div style={{ backgroundColor: BG, minHeight: '100vh', color: '#FFFFFF' }}>
      {/* ── Hero ── */}
      <section
        style={{
          paddingTop: '140px',
          paddingBottom: '80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at top, rgba(20,184,166,0.06) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />

        <div className="container mx-auto px-6 relative z-10 max-w-3xl">
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
            GenofIT · About
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            style={{
              ...serif,
              fontSize: 'clamp(32px, 4.5vw, 52px)',
              fontWeight: 700,
              lineHeight: 1.2,
              color: '#FFFFFF',
            }}
          >
            About GenofIT
          </motion.h1>
        </div>
      </section>

      {/* ── Body ── */}
      <section style={{ paddingBottom: '120px' }}>
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{
              backgroundColor: CARD_BG,
              border: `1px solid ${BORDER}`,
              borderRadius: '16px',
              padding: 'clamp(32px, 5vw, 56px)',
            }}
          >
            {paragraphs.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                style={{
                  ...(i === 0 ? sansRegular : sansLight),
                  fontSize: i === 0 ? '18px' : '16px',
                  lineHeight: 1.8,
                  color: i === 0 ? '#FFFFFF' : TEXT_SECONDARY,
                  marginBottom: i < paragraphs.length - 1 ? '24px' : 0,
                  fontWeight: i === 0 ? 500 : undefined,
                }}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>

          {/* Divider line */}
          <div
            style={{
              height: '1px',
              background: 'linear-gradient(to right, transparent, rgba(20,184,166,0.3), transparent)',
              margin: '64px 0',
            }}
          />

          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            {['New York–based', 'Georgian-language instruction', 'International QA standards'].map((tag) => (
              <span
                key={tag}
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
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
