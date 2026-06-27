function Achievements() {
  return (
    <section className="achievements-section" id="achievements">
      <div className="achievements-bg" />
      <div className="achievements-content">
        <div className="achievements-eyebrow">The grand line journey</div>
        <div className="achievements-title">THE <span className="achievements-accent">CONQUEST MAP</span></div>
        <div className="achievements-map">
          <svg viewBox="0 0 860 900" xmlns="http://www.w3.org/2000/svg" style={{width:'100%', display:'block'}}>

            {/* Ocean bg */}
            <rect width="860" height="900" fill="rgba(42,157,143,0.15)" rx="4"/>
            <path d="M0,860 C200,840 400,865 600,848 C740,836 820,852 860,845 L860,900 L0,900 Z" fill="rgba(26,122,110,0.2)"/>
            <path d="M0,880 C250,868 500,882 750,872 C820,868 850,876 860,872 L860,900 L0,900 Z" fill="rgba(13,90,82,0.25)"/>

            {/* Zigzag path */}
            <path d="M150,80 C350,80 550,210 700,210 C550,210 350,340 150,340 C350,340 550,470 700,470 C550,470 350,600 150,600 C350,600 550,730 700,730 C550,730 350,855 150,855"
              stroke="#8B6914" strokeWidth="2.5" strokeDasharray="9,6" fill="none" opacity="0.75"/>

            {/* Animated ship — no rotate so it stays upright */}
            <g>
              <animateMotion dur="18s" repeatCount="indefinite"
                path="M150,80 C350,80 550,210 700,210 C550,210 350,340 150,340 C350,340 550,470 700,470 C550,470 350,600 150,600 C350,600 550,730 700,730 C550,730 350,855 150,855"/>
              <path d="M-16,5 Q0,13 16,5 L12,13 Q0,17 -12,13 Z" fill="#6B2D0A"/>
              <rect x="-12" y="1" width="24" height="6" rx="1" fill="#A04515"/>
              <line x1="0" y1="-15" x2="0" y2="5" stroke="#4a2008" strokeWidth="1.5"/>
              <path d="M0,-13 L0,2 L11,-4 Z" fill="#FFFBF0" opacity="0.9"/>
              <rect x="0" y="-18" width="8" height="5" rx="0.5" fill="#1A1A2E"/>
              <circle cx="3.5" cy="-15.5" r="1.6" fill="#FFFBF0"/>
              <line x1="1" y1="-13" x2="6" y2="-11" stroke="#FFFBF0" strokeWidth="0.8"/>
              <line x1="1" y1="-11" x2="6" y2="-13" stroke="#FFFBF0" strokeWidth="0.8"/>
            </g>

            {/* ═══ ISLAND 1 — left — Advent of Cyber ═══ */}
            <g transform="translate(150,80)">
              <ellipse cx="0" cy="20" rx="55" ry="13" fill="rgba(42,157,143,0.3)"/>
              <path d="M-48,16 Q-36,-12 -12,-26 Q10,-36 28,-18 Q48,-4 48,16 Q30,26 0,28 Q-30,26 -48,16 Z" fill="#6DBE45"/>
              <path d="M-48,16 Q-36,-2 -12,-14 Q10,-22 28,-7 Q48,4 48,16 Q30,22 0,26 Q-30,22 -48,16 Z" fill="#52a82e"/>
              <ellipse cx="0" cy="18" rx="44" ry="10" fill="#E9C46A" opacity="0.65"/>
              <line x1="-16" y1="6" x2="-16" y2="-16" stroke="#5a3010" strokeWidth="2"/>
              <path d="M-16,-16 Q-26,-20 -22,-11" stroke="#6DBE45" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <path d="M-16,-16 Q-10,-24 -6,-16" stroke="#6DBE45" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <path d="M-16,-16 Q-4,-20 -8,-11" stroke="#6DBE45" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <line x1="12" y1="4" x2="12" y2="-18" stroke="#5a3010" strokeWidth="2"/>
              <path d="M12,-18 Q2,-22 6,-13" stroke="#52a82e" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <path d="M12,-18 Q16,-26 20,-18" stroke="#52a82e" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <line x1="0" y1="-16" x2="0" y2="-30" stroke="#5a3010" strokeWidth="1.5"/>
              <path d="M0,-30 L10,-26 L0,-22 Z" fill="#E8472A"/>
              <text x="0" y="42" textAnchor="middle" fontFamily="Bangers,cursive" fontSize="12" fill="#3D1F00" letterSpacing="1">TryHackMe</text>
              <text x="0" y="54" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="8" fontWeight="700" fill="#5a3a00">Advent of Cyber 2025</text>
              <text x="0" y="64" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="7" fill="#8B1A1A" fontStyle="italic">24/24 challenges • Dec 2025</text>
            </g>

            {/* ═══ ISLAND 2 — right — TechNavya ═══ */}
            <g transform="translate(700,210)">
              <ellipse cx="0" cy="20" rx="55" ry="13" fill="rgba(42,157,143,0.3)"/>
              <path d="M-48,16 Q-36,-12 -10,-26 Q12,-34 28,-16 Q48,-2 48,16 Q30,26 0,28 Q-30,26 -48,16 Z" fill="#9B59B6"/>
              <path d="M-48,16 Q-36,-2 -10,-14 Q12,-20 28,-6 Q48,5 48,16 Q30,22 0,26 Q-30,22 -48,16 Z" fill="#7a3fa0"/>
              <ellipse cx="0" cy="18" rx="44" ry="10" fill="#E9C46A" opacity="0.6"/>
              <path d="M-8,10 L0,-20 L8,10 Z" fill="#5a3a7a"/>
              <path d="M-3,-12 L0,-20 L3,-12 Z" fill="rgba(255,255,255,0.65)"/>
              <line x1="-24" y1="8" x2="-24" y2="-10" stroke="#5a3010" strokeWidth="2"/>
              <path d="M-24,-10 Q-32,-14 -28,-6" stroke="#7a3fa0" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <path d="M-24,-10 Q-18,-17 -14,-10" stroke="#7a3fa0" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <line x1="20" y1="6" x2="20" y2="-10" stroke="#5a3010" strokeWidth="1.5"/>
              <path d="M20,-10 L30,-6 L20,-2 Z" fill="#E8472A"/>
              <text x="0" y="42" textAnchor="middle" fontFamily="Bangers,cursive" fontSize="12" fill="#3D1F00" letterSpacing="1">TechNavya'26</text>
              <text x="0" y="54" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="8" fontWeight="700" fill="#5a3a00">Pentest Showdown CTF</text>
              <text x="0" y="64" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="7" fill="#8B1A1A" fontStyle="italic">GLA University • Jan 2026</text>
            </g>

            {/* ═══ ISLAND 3 — left — ignorant ═══ */}
            <g transform="translate(150,340)">
              <ellipse cx="0" cy="20" rx="52" ry="12" fill="rgba(42,157,143,0.3)"/>
              <path d="M-44,15 Q-32,-10 -10,-22 Q10,-30 26,-14 Q44,-2 44,15 Q28,24 0,26 Q-28,24 -44,15 Z" fill="#2A7FD4"/>
              <path d="M-44,15 Q-32,-1 -10,-12 Q10,-18 26,-5 Q44,4 44,15 Q28,21 0,24 Q-28,21 -44,15 Z" fill="#1a5fa0"/>
              <ellipse cx="0" cy="17" rx="40" ry="9" fill="#E9C46A" opacity="0.6"/>
              <rect x="-4" y="-20" width="8" height="22" rx="1" fill="#FFFBF0"/>
              <rect x="-3" y="-24" width="6" height="6" rx="1" fill="#E8472A"/>
              <ellipse cx="0" cy="-24" rx="5" ry="3" fill="#F4A623" opacity="0.8"/>
              <line x1="-3" y1="-8" x2="3" y2="-8" stroke="#8B1A1A" strokeWidth="1"/>
              <line x1="-3" y1="-13" x2="3" y2="-13" stroke="#8B1A1A" strokeWidth="1"/>
              <line x1="-3" y1="-18" x2="3" y2="-18" stroke="#8B1A1A" strokeWidth="1"/>
              <line x1="20" y1="6" x2="20" y2="-12" stroke="#5a3010" strokeWidth="2"/>
              <path d="M20,-12 Q12,-16 16,-7" stroke="#2A7FD4" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <path d="M20,-12 Q24,-19 28,-12" stroke="#2A7FD4" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <text x="0" y="40" textAnchor="middle" fontFamily="Bangers,cursive" fontSize="12" fill="#3D1F00" letterSpacing="1">ignorant</text>
              <text x="0" y="52" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="8" fontWeight="700" fill="#5a3a00">Open Source OSINT Tool</text>
              <text x="0" y="62" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="7" fill="#8B1A1A" fontStyle="italic">25+ modules merged • 2026</text>
            </g>

            {/* ═══ ISLAND 4 — right — Pre Security ═══ */}
            <g transform="translate(700,470)">
              <ellipse cx="0" cy="20" rx="54" ry="13" fill="rgba(42,157,143,0.3)"/>
              <path d="M-46,15 Q-34,-12 -12,-24 Q10,-32 26,-15 Q46,-2 46,15 Q28,26 0,28 Q-28,26 -46,15 Z" fill="#2A9D8F"/>
              <path d="M-46,15 Q-34,-2 -12,-13 Q10,-19 26,-5 Q46,5 46,15 Q28,22 0,25 Q-28,22 -46,15 Z" fill="#1a7a6e"/>
              <ellipse cx="0" cy="17" rx="42" ry="10" fill="#E9C46A" opacity="0.65"/>
              <rect x="-10" y="-6" width="20" height="16" rx="1" fill="#c8913a"/>
              <path d="M-14,-6 L0,-20 L14,-6 Z" fill="#a06020"/>
              <line x1="-24" y1="8" x2="-24" y2="-12" stroke="#5a3010" strokeWidth="2"/>
              <path d="M-24,-12 Q-32,-16 -28,-7" stroke="#2A9D8F" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <path d="M-24,-12 Q-18,-20 -14,-12" stroke="#2A9D8F" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <path d="M-24,-12 Q-10,-16 -14,-7" stroke="#2A9D8F" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <line x1="20" y1="4" x2="20" y2="-16" stroke="#5a3010" strokeWidth="1.5"/>
              <path d="M20,-16 L30,-12 L20,-8 Z" fill="#E8472A"/>
              <text x="0" y="42" textAnchor="middle" fontFamily="Bangers,cursive" fontSize="12" fill="#3D1F00" letterSpacing="1">TryHackMe</text>
              <text x="0" y="54" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="8" fontWeight="700" fill="#5a3a00">Pre Security Path</text>
              <text x="0" y="64" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="7" fill="#8B1A1A" fontStyle="italic">19 hours • June 2026</text>
            </g>

            {/* ═══ ISLAND 5 — left — Cyber Sec 101 ═══ */}
            <g transform="translate(150,600)">
              <ellipse cx="0" cy="20" rx="56" ry="13" fill="rgba(42,157,143,0.3)"/>
              <path d="M-50,15 Q-38,-14 -14,-28 Q10,-38 28,-18 Q50,-4 50,15 Q32,27 0,30 Q-32,27 -50,15 Z" fill="#E8472A"/>
              <path d="M-50,15 Q-38,-3 -14,-16 Q10,-24 28,-6 Q50,6 50,15 Q32,24 0,27 Q-32,24 -50,15 Z" fill="#c02010"/>
              <ellipse cx="0" cy="18" rx="46" ry="11" fill="#E9C46A" opacity="0.65"/>
              <path d="M-10,12 L0,-24 L10,12 Z" fill="#8B1A1A"/>
              <path d="M-3,-10 L0,-24 L3,-10 Z" fill="#E8472A" opacity="0.8"/>
              <path d="M-2,-8 Q4,-4 2,6" stroke="#F4A623" strokeWidth="2" fill="none" opacity="0.8" strokeLinecap="round"/>
              <line x1="-28" y1="8" x2="-28" y2="-10" stroke="#5a3010" strokeWidth="2"/>
              <path d="M-28,-10 Q-36,-14 -32,-6" stroke="#c02010" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <path d="M-28,-10 Q-22,-18 -18,-10" stroke="#c02010" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <line x1="26" y1="8" x2="26" y2="-10" stroke="#5a3010" strokeWidth="2"/>
              <path d="M26,-10 Q18,-14 22,-6" stroke="#c02010" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <path d="M26,-10 Q30,-18 34,-10" stroke="#c02010" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <line x1="0" y1="-24" x2="0" y2="-38" stroke="#5a3010" strokeWidth="1.5"/>
              <path d="M0,-38 L10,-34 L0,-30 Z" fill="#F4A623"/>
              <text x="0" y="44" textAnchor="middle" fontFamily="Bangers,cursive" fontSize="12" fill="#3D1F00" letterSpacing="1">TryHackMe</text>
              <text x="0" y="56" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="8" fontWeight="700" fill="#5a3a00">Cyber Security 101</text>
              <text x="0" y="66" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="7" fill="#8B1A1A" fontStyle="italic">45 hours • June 2026</text>
            </g>

            {/* ═══ ISLAND 6 — right — Deloitte ═══ */}
            <g transform="translate(700,730)">
              <ellipse cx="0" cy="20" rx="53" ry="12" fill="rgba(42,157,143,0.3)"/>
              <path d="M-46,15 Q-34,-10 -10,-22 Q12,-30 26,-14 Q46,-2 46,15 Q28,24 0,26 Q-28,24 -46,15 Z" fill="#F4A623"/>
              <path d="M-46,15 Q-34,-1 -10,-12 Q12,-18 26,-5 Q46,5 46,15 Q28,21 0,24 Q-28,21 -46,15 Z" fill="#c08010"/>
              <ellipse cx="0" cy="17" rx="42" ry="9" fill="#E9C46A" opacity="0.6"/>
              <rect x="-9" y="-18" width="18" height="26" rx="1" fill="#FFFBF0"/>
              <rect x="-7" y="-16" width="5" height="5" rx="0.5" fill="rgba(42,127,212,0.6)"/>
              <rect x="2" y="-16" width="5" height="5" rx="0.5" fill="rgba(42,127,212,0.6)"/>
              <rect x="-7" y="-7" width="5" height="5" rx="0.5" fill="rgba(42,127,212,0.6)"/>
              <rect x="2" y="-7" width="5" height="5" rx="0.5" fill="rgba(42,127,212,0.6)"/>
              <rect x="-3" y="2" width="6" height="6" rx="0.5" fill="#c08010"/>
              <line x1="-24" y1="8" x2="-24" y2="-8" stroke="#5a3010" strokeWidth="2"/>
              <path d="M-24,-8 Q-31,-12 -27,-4" stroke="#c08010" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <path d="M-24,-8 Q-18,-15 -14,-8" stroke="#c08010" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <line x1="20" y1="4" x2="20" y2="-14" stroke="#5a3010" strokeWidth="1.5"/>
              <path d="M20,-14 L30,-10 L20,-6 Z" fill="#E8472A"/>
              <text x="0" y="40" textAnchor="middle" fontFamily="Bangers,cursive" fontSize="12" fill="#3D1F00" letterSpacing="1">Deloitte × Forage</text>
              <text x="0" y="52" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="8" fontWeight="700" fill="#5a3a00">Cyber Job Simulation</text>
              <text x="0" y="62" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="7" fill="#8B1A1A" fontStyle="italic">Certified • June 2026</text>
            </g>

            {/* ═══ ISLAND 7 — left — GSSoC ═══ */}
            <g transform="translate(150,855)">
              <ellipse cx="0" cy="18" rx="54" ry="12" fill="rgba(42,157,143,0.3)"/>
              <path d="M-46,14 Q-34,-10 -10,-22 Q12,-30 26,-14 Q46,-2 46,14 Q28,22 0,24 Q-28,22 -46,14 Z" fill="#E76F51"/>
              <path d="M-46,14 Q-34,-2 -10,-12 Q12,-18 26,-5 Q46,4 46,14 Q28,20 0,22 Q-28,20 -46,14 Z" fill="#c04a28"/>
              <ellipse cx="0" cy="16" rx="42" ry="9" fill="#E9C46A" opacity="0.65"/>
              <line x1="-20" y1="6" x2="-20" y2="-14" stroke="#5a3010" strokeWidth="2"/>
              <path d="M-20,-14 Q-28,-18 -24,-9" stroke="#c04a28" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <path d="M-20,-14 Q-14,-22 -10,-14" stroke="#c04a28" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <path d="M-20,-14 Q-8,-18 -12,-9" stroke="#c04a28" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <line x1="14" y1="4" x2="14" y2="-16" stroke="#5a3010" strokeWidth="2"/>
              <path d="M14,-16 Q6,-20 10,-11" stroke="#c04a28" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <path d="M14,-16 Q18,-23 22,-16" stroke="#c04a28" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <text x="0" y="-2" textAnchor="middle" fontFamily="Bangers,cursive" fontSize="22" fill="#F4A623" opacity="0.95">✕</text>
              <circle cx="0" cy="-6" r="16" fill="none" stroke="#F4A623" strokeWidth="1.5" opacity="0.4" strokeDasharray="4,3"/>
              <text x="0" y="36" textAnchor="middle" fontFamily="Bangers,cursive" fontSize="12" fill="#3D1F00" letterSpacing="1">GSSoC 2026</text>
              <text x="0" y="48" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="8" fontWeight="700" fill="#5a3a00">InternHack — Active</text>
              <text x="0" y="58" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="7" fill="#8B1A1A" fontStyle="italic">Currently contributing • 2026</text>
            </g>

            {/* Compass */}
            <g transform="translate(50,820)">
              <circle cx="0" cy="0" r="30" fill="rgba(232,213,163,0.45)" stroke="rgba(60,30,0,0.3)" strokeWidth="1.5"/>
              <circle cx="0" cy="0" r="22" fill="none" stroke="rgba(60,30,0,0.2)" strokeWidth="0.5"/>
              <polygon points="0,-22 3,0 0,-5 -3,0" fill="rgba(139,26,26,0.75)"/>
              <polygon points="0,22 3,0 0,5 -3,0" fill="rgba(60,30,0,0.5)"/>
              <polygon points="-22,0 0,-3 -5,0 0,3" fill="rgba(60,30,0,0.5)"/>
              <polygon points="22,0 0,-3 5,0 0,3" fill="rgba(60,30,0,0.5)"/>
              <circle cx="0" cy="0" r="3.5" fill="rgba(60,30,0,0.6)"/>
              <text x="0" y="-25" textAnchor="middle" fontSize="7" fill="rgba(60,30,0,0.75)" fontWeight="bold" fontFamily="Inter,sans-serif">N</text>
              <text x="0" y="33" textAnchor="middle" fontSize="7" fill="rgba(60,30,0,0.5)" fontFamily="Inter,sans-serif">S</text>
              <text x="-26" y="3" textAnchor="middle" fontSize="7" fill="rgba(60,30,0,0.5)" fontFamily="Inter,sans-serif">W</text>
              <text x="26" y="3" textAnchor="middle" fontSize="7" fill="rgba(60,30,0,0.5)" fontFamily="Inter,sans-serif">E</text>
            </g>

          </svg>
        </div>
      </div>
    </section>
  )
}

export default Achievements