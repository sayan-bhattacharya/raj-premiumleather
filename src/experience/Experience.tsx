import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ScrollVideo } from '../components/ScrollVideo'

const chapters = [
  {
    id: '01',
    label: 'Material reveal',
    title: 'Full-grain depth that holds the light.',
    body:
      'The macro film opens on surface truth: pores, natural tension, edge stain, and warm tonal shifts that immediately place ECOTARA in the world of real premium leather rather than decorative imitation.',
  },
  {
    id: '02',
    label: 'Form and silhouette',
    title: 'A silhouette disciplined into daily elegance.',
    body:
      'The profile stays composed and architectural. The bag reads as refined in hand, but not fragile, balancing structured luxury with everyday use across Indian city movement.',
  },
  {
    id: '03',
    label: 'Function and carry',
    title: 'Carry logic made for real routines.',
    body:
      'Closures, internal layout, and carry points are framed as quiet conveniences. The language moves from admiration to ownership without slipping into loud, trend-led selling.',
  },
  {
    id: '04',
    label: 'Craft and durability',
    title: 'Stitch, edge, and hardware kept in agreement.',
    body:
      'Muted brass, measured seams, and disciplined fold lines signal long-wear value. The promise is communicated through construction detail, not inflated claims.',
  },
  {
    id: '05',
    label: 'Commercial close',
    title: 'A leather house ready for client and customer preview.',
    body:
      'The final chapter turns the study into a proposition: ECOTARA as a modern Indian premium leather label with enough polish for launch, presentation, and direct-to-consumer storytelling.',
  },
]

const cityNotes = ['Delhi appointments', 'Mumbai evenings', 'Bengaluru workdays', 'Jaipur gifting']

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
          <span className="site-brand__mark">ET</span>
          <span className="site-brand__name">ECOTARA</span>
        </a>
        <nav className="site-nav" aria-label="Primary">
          <a href="#film">Film</a>
          <a href="#ledger">Ledger</a>
          <a href="#details">Details</a>
          <a href="#finale">Finale</a>
          <Link to="/prompt/">Prompt</Link>
        </nav>
      </header>

      <section className="hero-panel">
        <div className="hero-copy">
          <p className="section-kicker">ECOTARA | Premium leather for India</p>
          <h1>Leather goods shaped for Indian city life, finished with calm precision.</h1>
          <p className="hero-summary">
            ECOTARA is positioned as a premium leather label with a quieter point of view: full-grain
            surfaces, measured brass hardware, and structured handbags designed to move from workday
            to evening without losing composure.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#film">
              View the leather study
            </a>
            <Link className="secondary-button" to="/prompt/">
              Open brand brief
            </Link>
          </div>
          <ul className="hero-city-notes" aria-label="Brand setting notes">
            {cityNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>

        <div className="hero-spec">
          <span className="section-kicker">House note</span>
          <p>
            Designed to read like a real leather-house launch, with the product explained through
            material honesty, function, and finish rather than ornamental trend language.
          </p>
        </div>
      </section>

      <section className="film-track" id="film">
        <div className="chapter-rail" aria-label="Film chapters">
          {chapters.map((chapter) => (
            <a key={chapter.id} href={`#chapter-${chapter.id}`} className="chapter-rail__item">
              <span>{chapter.id}</span>
              <small>{chapter.label}</small>
            </a>
          ))}
        </div>
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
              id={`chapter-${chapter.id}`}
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

      <section className="ledger-section" id="ledger">
        <div className="ledger-section__copy">
          <p className="section-kicker">Atelier ledger</p>
          <h2>Premium signals, written like product truth instead of campaign noise.</h2>
        </div>
        <div className="ledger-grid">
          <article>
            <span className="section-kicker">Leather</span>
            <p>Full-grain character, warm walnut depth, and surface variation that feels natural in hand.</p>
          </article>
          <article>
            <span className="section-kicker">Construction</span>
            <p>Disciplined edge paint, measured stitch spacing, and a silhouette designed to keep its shape.</p>
          </article>
          <article>
            <span className="section-kicker">Positioning</span>
            <p>Premium leather for India: polished enough for gifting, practical enough for everyday carry.</p>
          </article>
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
        <h2>ECOTARA now reads like a real leather brand, with the film correctly rendering at the center.</h2>
        <p>
          The experience now behaves like a real product microsite: the video resolves from the
          correct Pages path, the storytelling stays commercial, and the brand language feels closer
          to a premium Indian accessories label.
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
