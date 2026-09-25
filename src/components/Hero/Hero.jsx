import { useState, useEffect } from 'react'
import { techIcons } from '../../data/data'
import { useTypewriter } from '../../hooks/useTypewriter'
import profileImg from '../../assets/profile.jpg'
import './Hero.css'

const FULL_NAME = 'Oladipo Taiwo'

const roles = [
  'Full-Stack Developer',
  'React Developer',
  'Node.js Engineer',
  'UI/UX Enthusiast',
  'Problem Solver',
]

export default function Hero() {
  /* ── One-shot name typewriter ── */
  const [displayName, setDisplayName] = useState('')
  const [nameDone, setNameDone]       = useState(false)

  useEffect(() => {
    if (displayName.length >= FULL_NAME.length) { setNameDone(true); return }
    const t = setTimeout(
      () => setDisplayName(FULL_NAME.slice(0, displayName.length + 1)),
      110
    )
    return () => clearTimeout(t)
  }, [displayName])

  /* ── Cycling role typewriter (starts after name is done) ── */
  const typed = useTypewriter(nameDone ? roles : [], 90, 55, 1800)

  return (
    <section className="hero" id="home">
      <div className="container hero-inner">

        {/* ── Left: Text ── */}
        <div className="hero-text">
          <span className="badge">Full-Stack Developer</span>

          <h1>
            Hi, I'm{' '}
            <span className="name-line">
              <span className="accent">{displayName}</span>
              {!nameDone && <span className="cursor name-cursor">|</span>}
            </span>
            <br />
            I build things for the web.
          </h1>

          {/* Typewriter subtitle */}
          <div className="typewriter-row">
            <span className="typewriter-prefix">I am a&nbsp;</span>
            <span className="typewriter-text">{typed}</span>
            <span className="cursor">|</span>
          </div>

          <p>
            I'm a passionate Full-Stack Developer based in Nigeria, specialising in
            building exceptional, high-performance digital experiences. From crafting
            pixel-perfect UIs with React to architecting robust backends with Node.js —
            I love turning complex problems into clean, elegant solutions that make a
            real impact.
          </p>

          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary">View My Work ↗</a>
            <a href="/cv.html" target="_blank" rel="noreferrer" className="btn btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download CV
            </a>
          </div>

          <div className="tech-stack">
            <p className="tech-label">TECHNOLOGIES I WORK WITH</p>
            <div className="tech-icons">
              {techIcons.map(t => (
                <img key={t.alt} src={t.src} alt={t.alt} title={t.alt} />
              ))}
            </div>
          </div>
        </div>

        {/* ── Right: Profile + Code card ── */}
        <div className="hero-right">
          <div className="profile-circle">
            <img src={profileImg} alt="Oladipo Taiwo" className="profile-avatar" />
          </div>

          <div className="code-card">
            <div className="code-card-header">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
              <span className="code-title">&lt;/&gt; Code</span>
            </div>
            <pre className="code-body">
              <code>
                <span className="kw">const</span> <span className="vr">developer</span>{` = {`}{'\n'}
                {'  '}<span className="ky">name</span>: <span className="st">"Oladipo Taiwo"</span>,{'\n'}
                {'  '}<span className="ky">role</span>: <span className="st">"Full Stack"</span>,{'\n'}
                {'  '}<span className="ky">skills</span>: [<span className="st">"React"</span>,{'\n'}
                {'    '}<span className="st">"Node.js"</span>],{'\n'}
                {'  '}<span className="ky">passion</span>:{'\n'}
                {'    '}<span className="st">"Building things"</span>{'\n'}
                {`};`}
              </code>
            </pre>
          </div>
        </div>

      </div>
    </section>
  )
}
