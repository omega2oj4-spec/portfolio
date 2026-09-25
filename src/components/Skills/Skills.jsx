import { useRef } from 'react'
import { skills } from '../../data/data'
import { useInView } from '../../hooks/useInView'
import './Skills.css'

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <section className="skills-section" id="skills" ref={ref}>
      <div className="container">
        <span className="badge center">MY SKILLS</span>
        <h2 className="section-title">Technologies I Work With</h2>

        <div className="skills-grid">
          {skills.map(s => (
            <div className="skill-item" key={s.name}>
              <div className="skill-info">
                <div className="skill-name">
                  <img src={s.icon} alt={s.name} />
                  {s.name}
                </div>
                <span>{s.pct}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-fill"
                  style={{ width: inView ? `${s.pct}%` : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
