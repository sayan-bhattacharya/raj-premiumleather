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
    copy: 'Hand-painted edges seal the profile cleanly, giving each piece the kind of finish expected in a serious leather atelier.',
  },
  {
    name: 'Hardware tone',
    copy: 'Muted brass is used with restraint, so the hardware supports the silhouette instead of competing with it.',
  },
  {
    name: 'Carry profile',
    copy: 'The carry profile stays structured and compact, with enough internal volume for everyday essentials without losing shape.',
  },
]

export function Experience() {
  const [activePanel, setActivePanel] = useState(detailPanels[0].name)
  const mediaBase = import.meta.env.BASE_URL
  const filmSrc = `${mediaBase}media/Handbag_macro_detail_film_202607271431.mp4`
  const posterSrc = `${mediaBase}media/handbag-film-poster.jpg`

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
          <p className="section-kicker">House launch | Autumn leather edit</p>
          <h1>Leather goods shaped with restraint, weight, and polish.</h1>
          <p className="hero-summary">
            Raj Premium Leather is presented like a real boutique label: full-grain surfaces,
            measured brass hardware, disciplined construction, and a quieter expression of modern
            luxury for everyday carry.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#film">
              View the leather study
            </a>
            <Link className="secondary-button" to="/prompt/">
              Open brand brief
            </Link>
          </div>
        </div>

        <div className="hero-spec">
          <span className="section-kicker">Collection note</span>
          <p>
            Designed to read like a premium leather house launch, with the product shown through
            material honesty rather than trend-heavy styling.
          </p>
        </div>
      </section>

      <section className="film-track" id="film">
        <div className="film-stage">
          <ScrollVideo
            poster={posterSrc}
            src={filmSrc}
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
          <p className="section-kicker">Leather specification</p>
          <h2>Every premium signal should feel earned under close inspection.</h2>
          <p>
            The brand language is grounded in the same cues buyers use in person: the neatness of
            the edge paint, the calm finish of the hardware, and the way the bag holds its form in
            hand.
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
        <p className="section-kicker">Private preview</p>
        <h2>A more realistic leather-brand presentation, with the film rendered correctly at the center.</h2>
        <p>
          The experience now behaves like a real product microsite: the video asset resolves from
          the correct Pages path, the storytelling stays commercial, and the visual language feels
          closer to a premium accessories label.
        </p>
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
