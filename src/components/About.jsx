import arinPhoto from '../assets/og-arin.jpeg'

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-bg" />
      <div className="about-particle ap1" />
      <div className="about-particle ap2" />
      <div className="about-particle ap3" />
      <svg className="about-horizon" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0,80 C360,50 720,100 1080,70 C1200,62 1320,75 1440,68 L1440,120 L0,120 Z" fill="rgba(244,166,35,0.12)"/>
        <path d="M0,95 C300,78 600,105 900,92 C1100,83 1280,98 1440,90 L1440,120 L0,120 Z" fill="rgba(232,71,42,0.08)"/>
      </svg>
      <div className="about-content">
        <div className="about-left">
          <div className="about-eyebrow">Who's this pirate?</div>
          <div className="about-title">ABOUT <span className="about-accent">ME</span></div>
          <img src={arinPhoto} alt="Arin" className="about-img" />
        </div>
        <div className="about-right">
          <p className="about-text">
  19. First year CS @ NIAT. I build things that scratch my own itch —
  tools, apps, cybersec projects. Some shipped, some still cooking.<br />
  I work across the stack —
  from Android apps to CLI tools to browser extensions to security research.<br /><br />
  I don't build to get hired. I build because I can't stop.
  Got something wild in mind? I'm probably down. 🏴‍☠️
</p>
          <div className="about-tags">
            <span className="about-tag">🔓 Open Source</span>
            <span className="about-tag">🏆 Top 4% TryHackMe</span>
            <span className="about-tag">🌐 GSSoC 2026 Contributor</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About