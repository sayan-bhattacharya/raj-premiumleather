import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ScrollVideo } from '../components/ScrollVideo'

const chapters = [
  {
    id: '01',
    label: 'Material reveal',
    title: 'Grain that reads like topography.',
    body:
      'The macro film lets the leather surface lead. Every pore, edge stain, and soft shift in light builds the perception of depth before a single product claim appears.',
  },
  {
    id: '02',
    label: 'Form and silhouette',
    title: 'Structure held in quiet proportion.',
    body:
      'The silhouette stays deliberate and compact. It feels composed rather than decorative, with enough firmness to register as premium the moment it enters frame.',
  },
  {
    id: '03',
    label: 'Function and carry',
    title: 'Built for repeated, elegant use.',
    body:
      'Closures, carry points, and internal organization are framed as daily luxuries. The experience moves from admiration into ownership without becoming loud.',
  },
  {
    id: '04',
    label: 'Craft and durability',
    title: 'Hardware, stitch, and finish in sync.',
    body:
      'Warm brass notes, measured seams, and clean folded edges signal longevity. The product promise is shown through construction detail rather than sales-heavy language.',
  },
  {
    id: '05',
    label: 'Commercial close',
    title: 'A premium handbag line ready for private preview.',
    body:
      'The final section turns the film into a product proposition: modern Indian luxury, editorial restraint, and a polished launch story ready to show a client.',
  },
]

const detailPanels = [
  {
    name: 'Edge finish',
    copy: 'Hand-painted edging that keeps the line clean and the profile disciplined in close view.',
  },
  {
    name: 'Hardware tone',
    copy: 'Muted brass accents used sparingly, so the metal reads as confidence rather than decoration.',
  },
  {
    name: 'Carry profile',
    copy: 'Structured volume designed to feel compact in hand while remaining practical through the day.',
  },
]

export function Experience() {
  const [activePanel, setActivePanel] = useState(detailPanels[0].name)

  const activeCopy = useMemo(
    () => detailPanels.find((item) => item.name === activePanel)?.copy ?? detailPanels[0].copy,
    [activePanel],
  )

  return (
    <main className="experience-page" id="top">
      <header className="site-header">
        <a className="site-brand" href="#top">
          <span className="site-brand__mark">RP</span>
          <span className="site-brand__name">Raj Premium Leather</span>
        </a>
        <nav className="site-nav" aria-label="Primary">
          <a href="#film">Film</a>
          <a href="#details">Details</a>
          <a href="#finale">Finale</a>
          <Link to="/prompt/">Prompt</Link>
        </nav>
      </header>

      <section className="hero-panel">
        <div className="hero-copy">
          <p className="section-kicker">Premium handbag collection</p>
          <h1>The film belongs in the center of the story.</h1>
          <p className="hero-summary">
            A scroll-led microsite built around the real handbag macro film, with the product held
            at the center and the narrative wrapped around material, structure, and finish.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#film">
              Enter the film
            </a>
            <Link className="secondary-button" to="/prompt/">
              View brief archive
            </Link>
          </div>
        </div>

        <div className="hero-spec">
          <span className="section-kicker">Collection note</span>
          <p>Quiet luxury informed by leather inspection, boutique display language, and tactile close-up motion.</p>
        </div>
      </section>

      <section className="film-track" id="film">
        <div className="film-stage">
          <ScrollVideo
            poster="/media/handbag-film-poster.jpg"
            src="/media/Handbag_macro_detail_film_202607271431.mp4"
            triggerSelector="#film"
          />

          <div className="film-annotations" aria-hidden="true">
            <span className="annotation annotation--top-left">Full-grain view</span>
            <span className="annotation annotation--top-right">Macro leather film</span>
            <span className="annotation annotation--bottom-left">Measured silhouette</span>
            <span className="annotation annotation--bottom-right">Brass + stitch study</span>
          </div>

          <svg className="measurement-svg" viewBox="0 0 100 100" aria-hidden="true">
            <path d="M15 18 H85" />
            <path d="M15 82 H85" />
            <path d="M18 15 V85" />
            <path d="M82 15 V85" />
            <circle cx="50" cy="50" r="34" />
          </svg>
        </div>

        <div className="chapter-stack">
          {chapters.map((chapter, index) => (
            <article
              className={`chapter-card ${index % 2 === 0 ? 'chapter-card--left' : 'chapter-card--right'}`}
              key={chapter.id}
            >
              <span className="chapter-id">{chapter.id}</span>
              <p className="section-kicker">{chapter.label}</p>
              <h2>{chapter.title}</h2>
              <p>{chapter.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="detail-section" id="details">
        <div className="detail-section__copy">
          <p className="section-kicker">Interactive detail reveal</p>
          <h2>Inspect the collection language one decision at a time.</h2>
          <p>
            The interface stays restrained, but it still needs one tactile moment. These detail
            switches let the page talk like a real luxury product presentation instead of a generic
            template.
          </p>
        </div>

        <div className="detail-section__panel">
          <div className="detail-switches" role="tablist" aria-label="Collection details">
            {detailPanels.map((panel) => (
              <button
                key={panel.name}
                className={panel.name === activePanel ? 'detail-switch is-active' : 'detail-switch'}
                type="button"
                role="tab"
                aria-selected={panel.name === activePanel}
                onClick={() => setActivePanel(panel.name)}
              >
                {panel.name}
              </button>
            ))}
          </div>
          <p className="detail-section__active-copy">{activeCopy}</p>
        </div>
      </section>

      <section className="finale-section" id="finale">
        <p className="section-kicker">Commercial close</p>
        <h2>Ready for client review, now with the film visibly centered and the story shaped around it.</h2>
        <div className="finale-actions">
          <a className="primary-button" href="https://sayan-bhattacharya.github.io/raj-premiumleather/">
            Open live preview
          </a>
          <a className="secondary-button" href="#top">
            Back to top
          </a>
        </div>
      </section>
    </main>
  )
}
