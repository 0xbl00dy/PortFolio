export const skills = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2l7 4v5c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z"/>
      <path d="M9 12l2 2 4-4"/>
    </svg>`,
    title: "Cybersecurity & Threat Research",
    description:
      "Offensive and defensive security experience through real-world assessments, vulnerability discovery, and adversarial threat modeling.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <path d="M7 7h3v3H7zM14 7h3v3h-3zM7 14h3v3H7zM14 14h3v3h-3z"/>
    </svg>`,
    title: "Enterprise Security",
    description:
      "Hands-on work with Active Directory, endpoints, patching, IAM, and enterprise security control assessments.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="3 12 7 12 10 4 14 20 17 12 21 12"/>
    </svg>`,
    title: "SIEM & Incident Monitoring",
    description:
      "Security event analysis and incident support using Splunk, log correlation, and network traffic analysis.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8 3a4 4 0 00-4 4v1a3 3 0 000 6v1a4 4 0 004 4"/>
      <path d="M16 3a4 4 0 014 4v1a3 3 0 010 6v1a4 4 0 01-4 4"/>
      <path d="M12 3v18"/>
    </svg>`,
    title: "AI & LLM Security",
    description:
      "Research on LLM prompt-injection attacks, including offensive testing and mitigation using ML-based defenses.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="9"/>
      <line x1="12" y1="3" x2="12" y2="7"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
      <line x1="3" y1="12" x2="7" y2="12"/>
      <line x1="17" y1="12" x2="21" y2="12"/>
    </svg>`,
    title: "Offensive Security & CTFs",
    description:
      "Strong red and blue teaming skills with 200+ solved labs and global rankings in competitive CTFs.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="4" width="7" height="6"/>
      <rect x="14" y="4" width="7" height="6"/>
      <rect x="9" y="14" width="6" height="6"/>
      <path d="M10 7h4M12 10v4"/>
    </svg>`,
    title: "Systems & Network Security",
    description:
      "Practical security testing across Linux, Windows, and networked systems with strong fundamentals.",
  },
];

export type Skill = (typeof skills)[number];
