import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  architectureNotes,
  brandBrief,
  reconstructionPrompt,
  sourceConcept,
  videoFilename,
  videoPath,
} from '../promptArchive'

export function PromptPage() {
  const [copied, setCopied] = useState(false)

  const copyPrompt = async () => {
    await navigator.clipboard.writeText(reconstructionPrompt)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="prompt-page">
      <div className="prompt-page__inner">
        <div className="prompt-page__topline">
          <span className="section-kicker">Prompt archive</span>
          <Link className="text-link" to="/">
            Back to experience
          </Link>
        </div>

        <section className="prompt-hero">
          <h1>Reconstruction brief for the ECOTARA microsite.</h1>
          <p>
            This archive preserves the exact concept direction, source asset path, and brand logic
            behind the ECOTARA experience.
          </p>
        </section>

        <section className="prompt-grid">
          <article className="prompt-card">
            <span className="section-kicker">Original video filename</span>
            <p>{videoFilename}</p>
          </article>
          <article className="prompt-card">
            <span className="section-kicker">Source concept</span>
            <p>{sourceConcept}</p>
          </article>
          <article className="prompt-card">
            <span className="section-kicker">Video path</span>
            <p>{videoPath}</p>
          </article>
        </section>

        <section className="prompt-section">
          <span className="section-kicker">Generated brand brief</span>
          <ul className="prompt-list">
            {brandBrief.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="prompt-section">
          <span className="section-kicker">Stack and architecture</span>
          <ul className="prompt-list">
            {architectureNotes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="prompt-section">
          <div className="prompt-actions">
            <span className="section-kicker">Complete reconstruction prompt</span>
            <button className="prompt-button" type="button" onClick={copyPrompt}>
              {copied ? 'Copied' : 'Copy Prompt'}
            </button>
          </div>
          <pre className="prompt-pre">{reconstructionPrompt}</pre>
        </section>
      </div>
    </main>
  )
}
