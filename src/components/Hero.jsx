import { useEffect, useRef, useState } from 'react'

function Hero() {
  const canvasRef = useRef(null)
  const [typed, setTyped] = useState('')
  const words = ['builder.', 'hacker.', 'pirate.', 'dev.']

  useEffect(() => {
    let i = 0, c = 0, del = false
    const tick = () => {
      const w = words[i]
      if (!del) {
        setTyped(w.slice(0, c + 1))
        c++
        if (c === w.length) { del = true; setTimeout(tick, 1400); return }
      } else {
        setTyped(w.slice(0, c - 1))
        c--
        if (c === 0) { del = false; i = (i + 1) % words.length }
      }
      setTimeout(tick, del ? 55 : 100)
    }
    tick()
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const WATER_Y = () => canvas.height * 0.54

    const fishDefs = [
      { color: '#2A9D8F', fin: '#1A7A6E', size: 1.0, startX: 0.28, delay: 0 },
      { color: '#E76F51', fin: '#c45a3d', size: 0.85, startX: 0.52, delay: 3500 },
      { color: '#F4A623', fin: '#c88000', size: 0.75, startX: 0.70, delay: 1500 },
      { color: '#9B59B6', fin: '#7a3fa0', size: 0.9, startX: 0.40, delay: 6000 },
      { color: '#E8472A', fin: '#a02a10', size: 0.7, startX: 0.62, delay: 4500 },
    ]

    class Fish {
      constructor(def) {
        this.def = { ...def }
        this.waiting = true
        this.timer = def.delay + Math.random() * 2000
        this.t = 0
        this.duration = 1800 + Math.random() * 600
        this.dir = Math.random() > 0.5 ? 1 : -1
        this.arcHeight = 80 + Math.random() * 60
        this.arcWidth = 60 + Math.random() * 40
        this.x = canvas.width * def.startX
        this.y = WATER_Y()
        this.startX = this.x
        this.angle = 0
      }

      reset() {
        this.waiting = true
        this.timer = 4000 + Math.random() * 5000
        this.t = 0
        this.duration = 1800 + Math.random() * 600
        this.dir = Math.random() > 0.5 ? 1 : -1
        this.arcHeight = 80 + Math.random() * 60
        this.arcWidth = 60 + Math.random() * 40
        this.startX = canvas.width * this.def.startX + (Math.random() - 0.5) * 80
        this.x = this.startX
        this.y = WATER_Y()
      }

      update(dt) {
        if (this.waiting) {
          this.timer -= dt
          if (this.timer <= 0) this.waiting = false
          return
        }
        this.t += dt
        const prog = this.t / this.duration
        if (prog >= 1) { this.reset(); return }
        const ease = Math.sin(prog * Math.PI)
        this.x = this.startX + this.dir * this.arcWidth * prog
        this.y = WATER_Y() - ease * this.arcHeight
        const dydt = -this.arcHeight * Math.PI * Math.cos(prog * Math.PI)
        const dxdt = this.dir * this.arcWidth
        this.angle = Math.atan2(dydt, dxdt)
      }

      draw() {
  if (this.waiting) return
  const prog = this.t / this.duration
  const fadeEdge = 0.12
  let alpha = 1
  if (prog < fadeEdge) alpha = prog / fadeEdge
  else if (prog > 1 - fadeEdge) alpha = (1 - prog) / fadeEdge
  ctx.globalAlpha = alpha

  const s = this.def.size * 22
  ctx.save()
  ctx.translate(this.x, this.y)
  ctx.rotate(this.angle)
  if (this.dir === 1) ctx.scale(-1, 1)

  // body
  ctx.beginPath()
  ctx.ellipse(0, 0, s, s * 0.45, 0, 0, Math.PI * 2)
  ctx.fillStyle = this.def.color
  ctx.fill()
  // tail
  ctx.beginPath()
  ctx.moveTo(s * 0.85, 0)
  ctx.lineTo(s * 1.5, -s * 0.5)
  ctx.lineTo(s * 1.5, s * 0.5)
  ctx.closePath()
  ctx.fillStyle = this.def.fin
  ctx.fill()
  // eye
  ctx.beginPath()
  ctx.arc(-s * 0.5, -s * 0.1, s * 0.18, 0, Math.PI * 2)
  ctx.fillStyle = '#fff'
  ctx.fill()
  ctx.beginPath()
  ctx.arc(-s * 0.5, -s * 0.1, s * 0.1, 0, Math.PI * 2)
  ctx.fillStyle = '#1A1A2E'
  ctx.fill()
  // fin
  ctx.beginPath()
  ctx.moveTo(-s * 0.1, -s * 0.42)
  ctx.quadraticCurveTo(s * 0.1, -s * 0.85, s * 0.35, -s * 0.42)
  ctx.fillStyle = this.def.fin
  ctx.fill()

  ctx.restore()
  ctx.globalAlpha = 1
}
    }

    class Splash {
      constructor(x, y) {
        this.x = x; this.y = y; this.t = 0; this.dur = 400
        this.drops = Array.from({ length: 6 }, (_, i) => ({
          angle: -Math.PI / 2 + (i - 2.5) * 0.35,
          speed: 60 + Math.random() * 40,
        }))
      }
      update(dt) {
  if (this.waiting) {
    this.timer -= dt
    if (this.timer <= 0) this.waiting = false
    return
  }
  this.t += dt
  const prog = this.t / this.duration
  if (prog >= 1) { this.reset(); return }
  const ease = Math.sin(prog * Math.PI)
  this.x = this.startX + this.dir * this.arcWidth * prog
  this.y = WATER_Y() - ease * this.arcHeight

  // velocity components
  const dydt = -this.arcHeight * Math.PI * Math.cos(prog * Math.PI)
  const dxdt = this.arcWidth // always positive

  // angle always computed as if moving left, flip handles the rest
  this.angle = Math.atan2(dydt, dxdt) * this.dir
}
    }
    const fishes = fishDefs.map(d => new Fish(d))
    const splashes = []
    let lastTime = null
    let animId

    const loop = (ts) => {
      if (!lastTime) lastTime = ts
      const dt = ts - lastTime
      lastTime = ts
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      fishes.forEach(f => {
        const wasAbove = !f.waiting && f.y < WATER_Y() - 5
        f.update(dt)
        if (wasAbove && (f.waiting || f.y >= WATER_Y() - 5)) {
          splashes.push(new Splash(f.x, WATER_Y()))
        }
        f.draw()
      })

      splashes.forEach(s => { s.update(dt); s.draw() })
      for (let i = splashes.length - 1; i >= 0; i--) {
        if (splashes[i].done()) splashes.splice(i, 1)
      }
      animId = requestAnimationFrame(loop)
    }
    animId = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section className="hero">
      {/* Sky */}
      <div className="hero-sky" />

      {/* Sun */}
      <div className="sun-container">
        <div className="sun-ray3" />
        <div className="sun-ray2" />
        <div className="sun-ray" />
        <div className="sun" />
      </div>

      {/* Sun reflection */}
      <svg className="sun-reflection" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="30" cy="8" rx="18" ry="5" fill="rgba(244,166,35,0.35)" />
        <ellipse cx="30" cy="18" rx="12" ry="3" fill="rgba(244,166,35,0.2)" />
        <ellipse cx="30" cy="26" rx="7" ry="2" fill="rgba(244,166,35,0.12)" />
      </svg>

      {/* Clouds */}
      <div className="clouds-layer">
        <div className="cloud cloud-big" style={{ top: '8%' }}>
          <svg viewBox="0 0 280 90" width="280" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="140" cy="65" rx="128" ry="28" fill="rgba(255,255,255,0.92)" />
            <ellipse cx="95" cy="44" rx="72" ry="38" fill="rgba(255,255,255,0.95)" />
            <ellipse cx="170" cy="38" rx="68" ry="36" fill="rgba(255,255,255,0.9)" />
            <ellipse cx="220" cy="52" rx="50" ry="28" fill="rgba(255,255,255,0.88)" />
            <ellipse cx="55" cy="56" rx="42" ry="24" fill="rgba(255,255,255,0.85)" />
          </svg>
        </div>
        <div className="cloud cloud-med">
          <svg viewBox="0 0 200 65" width="200" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="100" cy="48" rx="90" ry="20" fill="rgba(255,255,255,0.8)" />
            <ellipse cx="68" cy="32" rx="52" ry="28" fill="rgba(255,255,255,0.85)" />
            <ellipse cx="138" cy="28" rx="48" ry="26" fill="rgba(255,255,255,0.8)" />
          </svg>
        </div>
        <div className="cloud cloud-small">
          <svg viewBox="0 0 160 52" width="160" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="80" cy="38" rx="72" ry="16" fill="rgba(255,255,255,0.65)" />
            <ellipse cx="55" cy="26" rx="42" ry="22" fill="rgba(255,255,255,0.7)" />
            <ellipse cx="112" cy="22" rx="38" ry="20" fill="rgba(255,255,255,0.65)" />
          </svg>
        </div>
      </div>

      {/* Jolly Roger */}
      <div className="jolly-roger">
        <div className="flag-pole" />
        <div className="flag-rope" />
        <div className="flag-wrap">
          <svg className="flag-svg" viewBox="0 0 80 52" width="80" xmlns="http://www.w3.org/2000/svg">
            <rect width="80" height="52" fill="#1A1A2E" />
            <circle cx="40" cy="20" r="12" fill="#FFFBF0" />
            <ellipse cx="35" cy="18" rx="3.5" ry="4" fill="#1A1A2E" />
            <ellipse cx="45" cy="18" rx="3.5" ry="4" fill="#1A1A2E" />
            <path d="M39,23 L41,23 L40,25 Z" fill="#1A1A2E" />
            <rect x="34" y="27" width="3" height="4" rx="1" fill="#FFFBF0" stroke="#1A1A2E" strokeWidth="0.5" />
            <rect x="38" y="27" width="3" height="4" rx="1" fill="#FFFBF0" stroke="#1A1A2E" strokeWidth="0.5" />
            <rect x="42" y="27" width="3" height="4" rx="1" fill="#FFFBF0" stroke="#1A1A2E" strokeWidth="0.5" />
            <line x1="18" y1="38" x2="62" y2="48" stroke="#FFFBF0" strokeWidth="4" strokeLinecap="round" />
            <line x1="18" y1="48" x2="62" y2="38" stroke="#FFFBF0" strokeWidth="4" strokeLinecap="round" />
            <circle cx="18" cy="38" r="4" fill="#FFFBF0" /><circle cx="62" cy="38" r="4" fill="#FFFBF0" />
            <circle cx="18" cy="48" r="4" fill="#FFFBF0" /><circle cx="62" cy="48" r="4" fill="#FFFBF0" />
            <line x1="0" y1="0" x2="80" y2="0" stroke="#E8472A" strokeWidth="2" />
            <line x1="0" y1="52" x2="80" y2="52" stroke="#E8472A" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Birds */}
      <div className="birds-container bird-group1">
        <svg viewBox="0 0 90 35" width="90" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,18 Q9,6 18,18" stroke="#1A1A2E" strokeWidth="2.2" fill="none" opacity="0.7" />
          <path d="M24,12 Q33,2 42,12" stroke="#1A1A2E" strokeWidth="2" fill="none" opacity="0.6" />
          <path d="M50,20 Q57,12 64,20" stroke="#1A1A2E" strokeWidth="1.8" fill="none" opacity="0.5" />
          <path d="M70,14 Q76,8 82,14" stroke="#1A1A2E" strokeWidth="1.5" fill="none" opacity="0.4" />
        </svg>
      </div>
      <div className="birds-container bird-group2">
        <svg viewBox="0 0 60 25" width="60" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,14 Q8,5 16,14" stroke="#1A1A2E" strokeWidth="1.8" fill="none" opacity="0.5" />
          <path d="M22,8 Q29,1 36,8" stroke="#1A1A2E" strokeWidth="1.5" fill="none" opacity="0.4" />
          <path d="M44,16 Q50,10 56,16" stroke="#1A1A2E" strokeWidth="1.4" fill="none" opacity="0.35" />
        </svg>
      </div>

      {/* Ocean */}
      <div className="ocean">
        <div className="ocean-shimmer" />
      </div>

      {/* Bubbles */}
      {[
        { w: 8, l: '14%', b: '8%', dur: '4s', delay: '0s' },
        { w: 5, l: '16%', b: '6%', dur: '5s', delay: '1s' },
        { w: 10, l: '13%', b: '10%', dur: '6s', delay: '2s' },
        { w: 6, l: '57%', b: '7%', dur: '5.5s', delay: '3s' },
        { w: 4, l: '55%', b: '5%', dur: '3.8s', delay: '1.5s' },
      ].map((b, i) => (
        <div key={i} className="bubble" style={{
          width: b.w, height: b.w, left: b.l, bottom: b.b,
          animationDuration: b.dur, animationDelay: b.delay
        }} />
      ))}

      {/* Ship */}
      <div className="ship">
        <svg viewBox="0 0 160 95" width="160" xmlns="http://www.w3.org/2000/svg">
          <path d="M10,55 Q80,75 150,55 L140,72 Q80,88 20,72 Z" fill="#6B2D0A" />
          <path d="M20,55 Q80,68 140,55 L135,65 Q80,76 25,65 Z" fill="#8B3A10" />
          <rect x="25" y="44" width="110" height="14" rx="3" fill="#A04515" />
          <line x1="65" y1="8" x2="65" y2="50" stroke="#4a2008" strokeWidth="3.5" />
          <line x1="100" y1="14" x2="100" y2="50" stroke="#4a2008" strokeWidth="3" />
          <path d="M65,10 L65,44 L100,38 L100,16 Z" fill="#FFFBF0" stroke="#ddd" strokeWidth="0.5" />
          <path d="M65,10 L65,30 L42,22 Z" fill="#E8472A" />
          <path d="M100,15 L100,40 L122,35 L122,20 Z" fill="#FFFBF0" stroke="#ddd" strokeWidth="0.5" />
          <rect x="65" y="4" width="22" height="14" rx="1" fill="#1A1A2E" />
          <circle cx="74" cy="9" r="3.5" fill="#FFFBF0" />
          <ellipse cx="72" cy="8" rx="1" ry="1.5" fill="#1A1A2E" />
          <ellipse cx="76" cy="8" rx="1" ry="1.5" fill="#1A1A2E" />
          <line x1="68" y1="13" x2="80" y2="16" stroke="#FFFBF0" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="68" y1="16" x2="80" y2="13" stroke="#FFFBF0" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="105" y="36" width="22" height="14" rx="2" fill="#6B2D0A" />
          <rect x="108" y="38" width="6" height="5" rx="1" fill="rgba(135,206,235,0.6)" />
        </svg>
      </div>

{/* Dolphin pod */}
<div className="dolphin-pod">
  <div className="dolphin" style={{ left: 0, top: 0 }}>
    <svg viewBox="0 0 55 32" width="55" xmlns="http://www.w3.org/2000/svg" style={{transform:'scaleX(-1)'}}>
      <path d="M5,18 Q18,5 35,14 Q42,17 50,12 Q44,22 35,20 Q18,26 5,18 Z" fill="#2A7FD4" />
      <path d="M35,14 Q42,17 50,12 L52,18 L44,20 Z" fill="#1a5fa0" />
      <path d="M18,8 Q22,2 26,8" fill="#2A7FD4" />
      <circle cx="9" cy="17" r="2.5" fill="#FFFBF0" />
      <circle cx="9" cy="17" r="1.2" fill="#1A1A2E" />
    </svg>
  </div>
  <div className="dolphin dolphin2" style={{ left: 65, top: 5 }}>
    <svg viewBox="0 0 48 28" width="48" xmlns="http://www.w3.org/2000/svg" style={{transform:'scaleX(-1)'}}>
      <path d="M4,16 Q15,4 30,12 Q36,15 44,10 Q38,20 30,18 Q15,22 4,16 Z" fill="#3a8fd4" />
      <path d="M30,12 Q36,15 44,10 L46,16 L38,18 Z" fill="#1a5fa0" />
      <circle cx="8" cy="15" r="2" fill="#FFFBF0" />
      <circle cx="8" cy="15" r="1" fill="#1A1A2E" />
    </svg>
  </div>
  <div className="dolphin dolphin3" style={{ left: 30, top: 12 }}>
    <svg viewBox="0 0 42 24" width="42" xmlns="http://www.w3.org/2000/svg" style={{transform:'scaleX(-1)'}}>
      <path d="M3,13 Q12,3 26,10 Q31,13 38,9 Q33,17 26,15 Q12,19 3,13 Z" fill="#4a9fd8" />
      <path d="M26,10 Q31,13 38,9 L40,14 L33,16 Z" fill="#1a5fa0" />
      <circle cx="7" cy="12" r="1.8" fill="#FFFBF0" />
      <circle cx="7" cy="12" r="0.9" fill="#1A1A2E" />
    </svg>
  </div>
</div>
      {/* Island */}
      <div className="island">
        <svg viewBox="0 0 220 160" width="220" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="110" cy="145" rx="100" ry="14" fill="#1A7A6E" />
          <path d="M28,140 Q55,95 85,75 Q103,62 110,40 Q117,62 135,75 Q165,95 192,140 Z" fill="#6DBE45" />
          <path d="M85,75 Q103,62 110,40 L110,140 Q97,140 85,140 Z" fill="#52a82e" />
          <line x1="155" y1="128" x2="155" y2="95" stroke="#5a3010" strokeWidth="3" />
          <path d="M155,95 Q140,80 130,88" stroke="#6DBE45" strokeWidth="3" fill="none" />
          <path d="M155,95 Q158,78 148,82" stroke="#6DBE45" strokeWidth="3" fill="none" />
          <path d="M155,95 Q170,82 168,92" stroke="#6DBE45" strokeWidth="3" fill="none" />
          <line x1="110" y1="25" x2="110" y2="40" stroke="#4a2008" strokeWidth="2" />
          <path d="M110,25 L122,29 L110,33 Z" fill="#E8472A" />
          <rect x="68" y="118" width="20" height="14" rx="2" fill="#c8913a" />
          <path d="M63,118 L78,108 L93,118 Z" fill="#a06020" />
        </svg>
      </div>

      {/* Octopus */}
      <div className="octopus">
        <svg viewBox="0 0 90 75" width="90" xmlns="http://www.w3.org/2000/svg">
          <path d="M20,45 Q10,55 8,68 Q12,72 14,68 Q16,58 24,50" stroke="#9B59B6" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M30,50 Q22,62 20,72 Q25,75 26,70 Q28,60 34,54" stroke="#9B59B6" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M45,52 Q45,65 43,74 Q48,76 50,72 Q50,62 50,54" stroke="#9B59B6" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M60,50 Q65,62 66,72 Q71,73 70,68 Q68,58 62,50" stroke="#9B59B6" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M70,45 Q78,54 80,66 Q85,68 83,63 Q80,53 72,46" stroke="#9B59B6" strokeWidth="5" fill="none" strokeLinecap="round" />
          <ellipse cx="45" cy="35" rx="30" ry="24" fill="#9B59B6" />
          <ellipse cx="45" cy="22" rx="22" ry="18" fill="#B06ACC" />
          <circle cx="36" cy="22" r="7" fill="#FFFBF0" />
          <circle cx="54" cy="22" r="7" fill="#FFFBF0" />
          <circle cx="37" cy="22" r="4" fill="#1A1A2E" />
          <circle cx="55" cy="22" r="4" fill="#1A1A2E" />
          <circle cx="38" cy="21" r="1.5" fill="#FFFBF0" />
          <circle cx="56" cy="21" r="1.5" fill="#FFFBF0" />
        </svg>
      </div>

      {/* Waves SVG */}
      <svg className="hero-waves" viewBox="0 0 1440 110" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path fill="rgba(42,157,143,0.5)">
          <animate attributeName="d" dur="3.5s" repeatCount="indefinite"
            values="M0,50 C120,80 240,20 360,50 C480,80 600,20 720,50 C840,80 960,20 1080,50 C1200,80 1320,20 1440,50 L1440,110 L0,110 Z;M0,30 C120,15 240,65 360,30 C480,15 600,65 720,30 C840,15 960,65 1080,30 C1200,15 1320,65 1440,30 L1440,110 L0,110 Z;M0,50 C120,80 240,20 360,50 C480,80 600,20 720,50 C840,80 960,20 1080,50 C1200,80 1320,20 1440,50 L1440,110 L0,110 Z" />
        </path>
        <path fill="rgba(26,122,110,0.7)">
          <animate attributeName="d" dur="2.8s" repeatCount="indefinite"
            values="M0,70 C160,40 320,90 480,70 C640,40 800,90 960,70 C1100,45 1280,88 1440,70 L1440,110 L0,110 Z;M0,80 C160,100 320,55 480,80 C640,100 800,55 960,80 C1100,100 1280,58 1440,80 L1440,110 L0,110 Z;M0,70 C160,40 320,90 480,70 C640,40 800,90 960,70 C1100,45 1280,88 1440,70 L1440,110 L0,110 Z" />
        </path>
        <path fill="#0D5A52">
          <animate attributeName="d" dur="2s" repeatCount="indefinite"
            values="M0,88 C200,72 400,100 600,88 C800,72 1000,100 1200,88 C1320,80 1400,94 1440,88 L1440,110 L0,110 Z;M0,94 C200,105 400,80 600,94 C800,105 1000,80 1200,94 C1320,102 1400,84 1440,94 L1440,110 L0,110 Z;M0,88 C200,72 400,100 600,88 C800,72 1000,100 1200,88 C1320,80 1400,94 1440,88 L1440,110 L0,110 Z" />
        </path>
      </svg>

      {/* Canvas for fish */}
      <canvas ref={canvasRef} className="hero-canvas" />

      {/* Content */}
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-tag">🏴‍☠️ Pirate who raids</div>
          <div className="hero-name">
            HEY,<br />I'M <span className="gold">ARIN.</span>
          </div>
          <div className="hero-typewriter">{typed}</div>
          <p className="hero-desc">
            I build SaaS, dev tools & cybersec projects that solve real problems. Student. Indie hacker. Open to wild collabs.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn-primary">See the arsenal</a>
            <a href="#collab" className="btn-secondary">Raid together</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="stat-row">
            <div className="stat-card gold"><div className="stat-num">7+</div><div className="stat-label">Projects shipped</div></div>
            <div className="stat-card red"><div className="stat-num">Top<br />4%</div><div className="stat-label">TryHackMe</div></div>
          </div>
          <div className="stat-row">
            <div className="stat-card blue"><div className="stat-num">GSSoC</div><div className="stat-label">Open source</div></div>
            <div className="stat-card teal"><div className="stat-num">∞</div><div className="stat-label">Will to build</div></div>
          </div>
          <div className="current-card">
            <div className="cur-title">🛠️ Building: Lura</div>
            <div className="cur-sub">Android music player</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero