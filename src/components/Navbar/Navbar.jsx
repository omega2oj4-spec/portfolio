import { useState, useEffect } from 'react'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import './Navbar.css'

const navItems = [
  { id: 'home',     label: 'HOME' },
  { id: 'about',    label: 'ABOUT US' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'skills',   label: 'SERVICES' },
  { id: 'contact',  label: 'CONTACT US' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen]           = useState(false)

  useEffect(() => {
    const ids = navItems.map(n => n.id)
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) }),
      { threshold: 0.4 }
    )
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  return (
    <header className="nav-wrapper">

      {/* ── Desktop: floating pill ── */}
      <nav className="pill-nav">
        <ul className="pill-links">
          {navItems.map(({ id, label }) => (
            <li key={id} className={`pill-item${activeSection === id ? ' active' : ''}`}>
              <a
                href={`#${id}`}
                className="pill-link"
                onClick={() => setMenuOpen(false)}
              >
                {label}
                {activeSection === id && <span className="glow-bar" />}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── Desktop: theme toggle sits beside pill ── */}
      <div className="toggle-desktop">
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>

      {/* ── Mobile: hamburger ── */}
      <button
        className={`hamburger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(v => !v)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {/* ── Mobile: dropdown (includes toggle at bottom) ── */}
      {menuOpen && (
        <ul className="mobile-menu">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`mobile-link${activeSection === id ? ' active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}

          {/* Toggle inside the dropdown on mobile */}
          <li className="mobile-toggle-row">
            <span className="mobile-toggle-label">
              {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
            </span>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </li>
        </ul>
      )}

    </header>
  )
}
