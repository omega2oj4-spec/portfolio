import { blogs } from '../../data/data'
import './Blog.css'

export default function Blog() {
  return (
    <section className="blog-section" id="blog">
      <div className="container">
        <span className="badge center">BLOG</span>
        <h2 className="section-title">Latest Articles</h2>

        <div className="blog-grid">
          {blogs.map(b => (
            <div className="blog-card" key={b.title}>
              <div
                className="blog-img"
                style={{ background: `linear-gradient(135deg, ${b.color}33, ${b.color}66)` }}
              >
                <span className="blog-tag" style={{ background: b.color }}>{b.tag}</span>
              </div>
              <div className="blog-content">
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
                <a href="#" className="proj-link" style={{ color: b.color }}>
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
