import { useState } from 'react'
import { projects } from '../../data/data'
import './Projects.css'

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(2); // Center project

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <span className="badge center">FEATURED PROJECTS</span>
        <h2 className="section-title">Some of My Recent Work</h2>

        <div className="carousel-container">
          {projects.map((p, i) => {
            const N = projects.length;
            // Infinite loop wrapping logic
            let offset = (i - activeIndex) % N;
            if (offset > Math.floor(N / 2)) offset -= N;
            if (offset < -Math.floor(N / 2)) offset += N;
            
            const abs = Math.abs(offset);
            const isHidden = (N % 2 === 0 && abs === N / 2) || abs > 2;
            
            return (
              <div 
                className={`project-card ${abs === 0 ? 'active' : 'inactive'}`} 
                key={p.num}
                onClick={() => { if(abs !== 0 && !isHidden) setActiveIndex(i); }}
                style={{
                  transform: `translateX(calc(${offset * 75}%)) scale(${1 - abs * 0.15})`,
                  zIndex: 10 - abs,
                  filter: abs === 0 ? 'none' : 'brightness(0.6)',
                  opacity: isHidden ? 0 : 1,
                  pointerEvents: isHidden ? 'none' : 'auto'
                }}
              >
                <div className={`proj-img${p.image ? '' : ' mockup-bg'}`} style={{ background: p.image ? 'transparent' : `linear-gradient(135deg, ${p.color}22, ${p.color}44)` }}>
                  {p.image ? (
                    <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div className="proj-mockup" style={{ borderColor: p.color }}>
                      <div className="mockup-bar" style={{ background: p.color }} />
                      <div className="mockup-line" />
                      <div className="mockup-line short" />
                    </div>
                  )}
                </div>

                <div className="proj-info">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto', paddingTop: '1rem' }}>
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer" className="proj-link" style={{ color: p.color, pointerEvents: abs === 0 ? 'auto' : 'none' }}>
                        View Project &gt;&gt;
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="carousel-controls">
          <button className="carousel-btn" onClick={handlePrev} aria-label="Previous Project">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="11 17 6 12 11 7"/><polyline points="18 17 13 12 18 7"/></svg>
          </button>
          
          <div className="proj-dots">
            {projects.map((_, i) => (
              <span 
                key={i} 
                className={`dot-indicator ${i === activeIndex ? ' active' : ''}`} 
                onClick={() => setActiveIndex(i)}
                style={{ cursor: 'pointer' }}
              />
            ))}
          </div>

          <button className="carousel-btn" onClick={handleNext} aria-label="Next Project">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
