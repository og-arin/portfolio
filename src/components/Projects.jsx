const projects = [
  {
    title: 'SAM',
    tag: 'Chrome Extension',
    tagColor: '#E8472A',
    accent: '#E8472A',
    story: 'Watching anime at 2am. 3 unskippable ads in a row. Rage-built my own adblocker that weekend. Stop Annoying Me.',
    stack: ['JS', 'Chrome API'],
    link: 'https://chromewebstore.google.com/detail/sam/eihamnobdnjmngnaicblmgbnmmdhjkdm'
  },
  {
    title: 'LURA',
    tag: 'Android App',
    tagColor: '#2A7FD4',
    accent: '#2A7FD4',
    story: 'Spotify wanted ₹119/month. Already had SpotyShell. Thought — why not build the whole player? Spotify\'s nervous.',
    stack: ['Kotlin', 'ExoPlayer', 'Jetpack'],
    link: '#'
  },
  {
    title: 'OMNIRECON',
    tag: 'CLI Tool',
    tagColor: '#6DBE45',
    accent: '#6DBE45',
    story: 'nmap, dnslookup, geolookup — all in different tabs like an idiot. Wrapped everything into one Python CLI.',
    stack: ['Python', 'nmap'],
    link: 'https://github.com/og-arin/omni-recon'
  },
  {
    title: 'SHAPESHIFTER',
    tag: 'CTF Tool',
    tagColor: '#9B59B6',
    accent: '#9B59B6',
    story: 'CTF open. VM on screen. CyberChef on browser. Everything is messed up. Built a cryptology CLI that lives right in the terminal. No more tab hell.',
    stack: ['Python', 'Cryptology'],
    link: 'https://github.com/og-arin/shapeshift'
  },
  {
    title: 'SPOTYSHELL',
    tag: 'Telegram Bot',
    tagColor: '#E9C46A',
    accent: '#E9C46A',
    story: 'Video editor friends needed music. Every downloader was broken or sketchy. Telegram bot. YouTube or Spotify. Still free.',
    stack: ['Python', 'yt-dlp'],
    link: 'https://t.me/SpotyShell_bot'
  },
  {
    title: 'PHISHGUARD',
    tag: 'Hackathon',
    tagColor: '#E76F51',
    accent: '#E76F51',
    story: 'ML isn\'t my fav domain but this one\'s different. OpenCV + Pydantic env for training AI to detect phishing mails.',
    stack: ['Python', 'OpenCV', 'Pydantic'],
    link: 'https://huggingface.co/spaces/Scalar-hackathon/Phishing-env'
  },
]

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-bg" />
      <div className="projects-content">
        <div className="section-eyebrow">The Arsenal</div>
        <div className="section-title">WHAT I'VE <span className="accent">BUILT</span></div>
        <div className="projects-grid">
          {projects.map((p) => (
            <div className="project-card" key={p.title}>
  <div className="card-accent-bar" style={{ background: p.accent }} />
  <div className="card-header">
    <span className="card-tag" style={{ color: p.tagColor, borderColor: p.tagColor }}>
      {p.tag}
    </span>
    <div className="card-title">{p.title}</div>
  </div>
  <p className="card-story">{p.story}</p>
  <div className="card-footer">
    <div className="card-stack">
      {p.stack.map(s => <span className="stack-pill" key={s}>{s}</span>)}
    </div>
    <a href={p.link} className="card-arrow">→</a>
  </div>
</div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects