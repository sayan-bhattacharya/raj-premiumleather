import { motion, useScroll, useTransform } from 'framer-motion'

const smoothEase = [0.22, 1, 0.36, 1] as const

const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: smoothEase },
  },
}

const details = [
  {
    label: 'Material',
    value: 'Full-grain finishes and warm brass accents',
  },
  {
    label: 'Mood',
    value: 'Quiet luxury with cinematic texture',
  },
  {
    label: 'Availability',
    value: 'Private preview for wholesale and custom orders',
  },
]

const highlights = [
  'Structured silhouettes for gifting, travel, and everyday statement wear.',
  'Rich walnut tones, tactile grain, and elevated detailing in close view.',
  'A video-led first impression designed to feel premium on mobile and desktop.',
]

export default function App() {
  const { scrollYProgress } = useScroll()
  const heroScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.08])
  const heroOverlay = useTransform(scrollYProgress, [0, 0.35], [0.42, 0.72])

  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand-lockup" href="#top" aria-label="Raj Premium Leather home">
          <span className="brand-mark">RP</span>
          <span className="brand-name">Raj Premium Leather</span>
        </a>
        <nav className="topnav" aria-label="Primary">
          <a href="#story">Story</a>
          <a href="#craft">Craft</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <motion.video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            poster="/landing-film-poster.jpg"
            src="/landing-film.mp4"
            style={{ scale: heroScale }}
          />
          <motion.div className="hero-overlay" style={{ opacity: heroOverlay }} />

          <div className="hero-inner">
            <motion.div
              className="hero-copy"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            >
              <motion.p className="hero-kicker" variants={reveal}>
                Premium handbag collections
              </motion.p>
              <motion.h1 variants={reveal}>Luxury leather, seen in motion.</motion.h1>
              <motion.p className="hero-summary" variants={reveal}>
                Raj Premium Leather presents a refined landing experience built around material,
                detail, and the tactile beauty of the handbag itself.
              </motion.p>
              <motion.div className="hero-actions" variants={reveal}>
                <a className="button button-primary" href="#story">
                  Explore the collection
                </a>
                <a className="button button-secondary" href="#contact">
                  Request a callback
                </a>
              </motion.div>
            </motion.div>

            <motion.aside
              className="hero-note"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: smoothEase }}
            >
              <span>Featured film</span>
              <p>10-second macro study showcasing grain, stitching, and polished hardware.</p>
            </motion.aside>
          </div>
        </section>

        <section className="intro" id="story">
          <motion.div
            className="intro-copy"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75 }}
          >
            <p className="section-label">Brand story</p>
            <h2>Crafted to feel collected, confident, and unmistakably premium.</h2>
            <p>
              The page keeps the focus on material richness and silhouette. Copy stays restrained
              so the film and the textures do the heavy lifting.
            </p>
          </motion.div>

          <motion.div
            className="detail-list"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, delay: 0.1 }}
          >
            {details.map((detail) => (
              <article key={detail.label}>
                <span>{detail.label}</span>
                <p>{detail.value}</p>
              </article>
            ))}
          </motion.div>
        </section>

        <section className="craft" id="craft">
          <motion.div
            className="craft-panel"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label">Why this layout works</p>
            <h2>A full-bleed opening, then space to let the brand breathe.</h2>
          </motion.div>

          <motion.ul
            className="highlight-list"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, delay: 0.08 }}
          >
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </motion.ul>
        </section>

        <motion.section
          className="cta-section"
          id="contact"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label">Next step</p>
          <h2>Hosting is ready for preview on the server IP until a domain is added.</h2>
          <a className="button button-primary" href="mailto:hello@rajpremiumleather.com">
            hello@rajpremiumleather.com
          </a>
        </motion.section>
      </main>
    </div>
  )
}
