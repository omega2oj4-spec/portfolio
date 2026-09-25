import { useState } from 'react'
import { socials } from '../../data/data'
import './Contact.css'

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('sending')
    
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch('https://formsubmit.co/ajax/omega2oj4@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          _subject: "New Message from your Portfolio!"
        })
      })

      if (response.ok) {
        setFormStatus('success')
        e.target.reset()
        setTimeout(() => setFormStatus('idle'), 5000)
      } else {
        setFormStatus('idle')
        alert('Oops! Something went wrong.')
      }
    } catch (error) {
      setFormStatus('idle')
      alert('Network error. Please try again later.')
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="badge center">GET IN TOUCH</span>
          <h2 className="section-title" style={{ marginBottom: 0 }}>Contact Us</h2>
        </div>

        <div className="contact-inner">

          {/* --- Left Column: Info --- */}
          <div className="contact-left">
            <div className="contact-cta">
              <span className="badge">LET'S WORK TOGETHER</span>
              <h2>Have a project in mind?</h2>
              <p>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Let's create something amazing together!
              </p>
            </div>

            <div className="follow-me" style={{ marginTop: '3rem' }}>
              <h3>FOLLOW ME</h3>
              <div className="social-row">
                {socials.map(s => (
                  <a key={s.label} href={s.href} className="social-btn" title={s.label} target="_blank" rel="noreferrer">
                    {s.icon}
                  </a>
                ))}
              </div>
              <div className="contact-info">
                <div className="contact-item">
                  &#9993; <a href="mailto:omega2oj4@gmail.com">omega2oj4@gmail.com</a>
                </div>
                <div className="contact-item">
                  &#9742; <a href="https://wa.me/2348037664198" target="_blank" rel="noreferrer">+234 803 766 4198</a>
                </div>
              </div>
            </div>
          </div>

          {/* --- Right Column: Contact Form --- */}
          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" placeholder="John Doe" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" placeholder="john@example.com" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows="5" placeholder="How can I help you?" required></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn" disabled={formStatus === 'sending'}>
                {formStatus === 'idle' && 'Send Message \u2192'}
                {formStatus === 'sending' && 'Sending...'}
                {formStatus === 'success' && 'Message Sent! \u2713'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
