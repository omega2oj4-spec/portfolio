import { useState, useEffect, useRef } from 'react'
import { useInView } from '../../hooks/useInView'
import './About.css'

export default function About() {
  const cards = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
      title: "Flexible Development",
      desc: "I offer flexible development options to fit your project needs. Whether you prefer hourly consultation, MVP building, or full-scale application development."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="4"/><line x1="5.5" y1="21" x2="18.5" y2="21"/><line x1="12" y1="11" x2="12" y2="18"/><line x1="12" y1="14" x2="17" y2="16"/><line x1="12" y1="14" x2="7" y2="16"/></svg>,
      title: "Personalized Solutions",
      desc: "I understand that every business is unique. My personalized solutions are tailored specifically to your individual user and business needs."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
      title: "Modern Stack",
      desc: "My toolset features modern and robust technologies dedicated to helping you achieve high-performance, secure, and scalable web applications."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
      title: "Comprehensive Approach",
      desc: "My services go beyond just coding. I offer end-to-end solutions including database architecture, API design, and seamless deployments."
    }
  ]

  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, 0.2, false) // 0.2 threshold, once = false
  
  const fullHeading = "Why Work With Me?"
  const [displayedHeading, setDisplayedHeading] = useState("")
  const [typingDone, setTypingDone] = useState(false)

  useEffect(() => {
    if (!inView) {
      setDisplayedHeading("")
      setTypingDone(false)
      return
    }
    
    let i = 0
    const interval = setInterval(() => {
      if (i < fullHeading.length) {
        setDisplayedHeading(fullHeading.slice(0, i + 1))
        i++
      } else {
        setTypingDone(true)
        clearInterval(interval)
      }
    }, 80) // speed of typing
    return () => clearInterval(interval)
  }, [inView])

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="container">
        
        {/* Header Row */}
        <div className="about-header">
          <div className="about-header-text">
            <h2>
              {displayedHeading}
              {!typingDone && <span className="abt-cursor">|</span>}
            </h2>
            <p>
              I believe great software isn't just about writing lines of code—it's about solving real problems and bringing your vision to life. I take the time to truly understand your goals, so we can build a digital experience that stands out and delivers results you’ll be proud of.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary top-btn">Contact Me</a>
        </div>

        {/* 4 Cards Grid */}
        <div className="benefits-grid">
          {cards.map((card, i) => (
            <div className={`benefit-card ${card.active ? 'active' : ''}`} key={i}>
              <div className="b-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <a href="#contact" className="b-btn">Let's Talk</a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
