const skills = [
  'Python', 'Javascript', 'React', 'Kotlin', 'C++', 'Bash',
  'Linux', 'Arch + HyprLand', 'Kali Linux', 'Nmap', 'Burp Suite',
  'Frida', 'Jetpack Compose', 'FastAPI', 'Git', 'Chrome Extensions', 'Wireshark'
]

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-bg" />
      <div className="skills-inner">
        <div className="skills-grid">
          {skills.map(s => (
            <div className="skill-pill" key={s}>{s}</div>
          ))}
        </div>
        <div className="skills-header">
          <div className="skills-eyebrow">Weapons of choice</div>
          <div className="skills-title">THE <span className="skills-accent">STACK</span></div>
        </div>
      </div>
    </section>
  )
}

export default Skills