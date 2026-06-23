import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'

function Visitors() {
  const [count, setCount] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', feedback_type: 'General', message: '' })
  const [status, setStatus] = useState('')

  useEffect(() => {
    fetch('https://api.countapi.xyz/hit/arin-portfolio/visits')
      .then(res => res.json())
      .then(data => setCount(data.value))
      .catch(() => setCount('???'))
  }, [])

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) { setStatus('Fill in all fields!'); return }
    setStatus('Sending...')
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { ...form, time: new Date().toLocaleString() },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus('Delivered by seagull! 🕊️')
      setForm({ name: '', email: '', feedback_type: 'General', message: '' })
    } catch {
      setStatus('Seagull got lost. Try again.')
    }
  }

  return (
    <section className="visitors-section">
      <div className="visitors-bg" />

      {/* Decorative seagulls */}
      <svg className="v-seagulls" viewBox="0 0 300 80" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,40 Q12,28 24,40" stroke="rgba(26,26,46,0.2)" strokeWidth="2" fill="none"/>
        <path d="M32,28 Q44,16 56,28" stroke="rgba(26,26,46,0.18)" strokeWidth="2" fill="none"/>
        <path d="M70,44 Q80,34 90,44" stroke="rgba(26,26,46,0.15)" strokeWidth="1.8" fill="none"/>
        <path d="M180,20 Q192,8 204,20" stroke="rgba(26,26,46,0.2)" strokeWidth="2" fill="none"/>
        <path d="M215,32 Q225,22 235,32" stroke="rgba(26,26,46,0.15)" strokeWidth="1.8" fill="none"/>
        <path d="M250,15 Q260,6 270,15" stroke="rgba(26,26,46,0.12)" strokeWidth="1.5" fill="none"/>
      </svg>

      <div className="visitors-content">

        {/* Left — counter */}
        <div className="visitors-left">
          <div className="v-newspaper">
            <div className="v-newspaper-header">
              <div className="v-newspaper-title">THE GRAND LINE GAZETTE</div>
              <div className="v-newspaper-sub">Est. 2026 • Pirates Welcome</div>
              <div className="v-divider" />
            </div>
            <div className="v-headline">PIRATES WHO<br/>DOCKED HERE</div>
            <div className="v-count">{count !== null ? count.toLocaleString() : '...'}</div>
            <div className="v-count-sub">and the sea keeps calling 🏴‍☠️</div>
            <div className="v-divider" />
          </div>
        </div>

        {/* Right — form */}
        <div className="visitors-right">
          <div className="v-letter">
            {/* Den Den Mushi header */}
            <div className="v-snail-header">
              <div className="v-snail">🐌</div>
              <div>
                <div className="v-letter-title">SEND A MESSAGE</div>
                <div className="v-letter-sub">via Den Den Mushi</div>
              </div>
            </div>

            <div className="v-divider" />

            <input
              className="v-input"
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
            />
            <input
              className="v-input"
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
            />
            <select
              className="v-input"
              name="feedback_type"
              value={form.feedback_type}
              onChange={handleChange}
            >
              <option>General</option>
              <option>Collab idea</option>
              <option>Bug report</option>
              <option>Just vibing</option>
            </select>
            <textarea
              className="v-input v-textarea"
              name="message"
              placeholder="Your message..."
              value={form.message}
              onChange={handleChange}
            />
            <button className="v-btn" onClick={handleSubmit}>
              {status || '🐌 Transmit via Den Den Mushi'}
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Visitors