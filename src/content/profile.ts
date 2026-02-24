// ──────────────────────────────────────────────
// PROFILE DATA — Edit this file to update your site
// All demos read from this single source of truth.
// ──────────────────────────────────────────────

export interface Project {
  title: string;
  role: string;
  period: string;
  stack: string[];
  description: string;
  impact: string[];
  links: { label: string; url: string }[];
  featured: boolean;
  slug: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  details: string[];
  gpa?: string;
}

export interface Experience {
  org: string;
  title: string;
  period: string;
  bullets: string[];
}

export interface Award {
  title: string;
  org: string;
  year: string;
  description?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Highlight {
  label: string;
  emoji: string;
  description: string;
}

export interface Profile {
  // Identity
  name: string;
  pronouns?: string;
  location: string;
  headline: string;
  shortBio: string;
  longBio?: string;

  // Contact
  contact: {
    email: string;
    github?: string;
    linkedin?: string;
    blog?: string;
    twitter?: string;
    other?: { label: string; url: string }[];
  };

  // Site config
  siteUrl: string;
  resumeFile: string;

  // Sections
  highlights: Highlight[];
  projects: Project[];
  education: Education[];
  experience: Experience[];
  skills: SkillGroup[];
  awards: Award[];

  // Optional "Now" section
  now?: {
    updated: string;
    items: string[];
  };
}

// ──────────────────────────────────────────────
// YOUR DATA — Edit below
// ──────────────────────────────────────────────

export const profile: Profile = {
  name: "Alex Chen",
  pronouns: "they/them",
  location: "San Francisco, CA",
  headline: "CS Student & Builder",
  shortBio:
    "Computer Science student at UC Berkeley passionate about systems design, open-source, and building tools that make developers' lives easier.",
  longBio:
    "I'm a junior studying Computer Science at UC Berkeley with a focus on systems programming and developer tools. I believe great software comes from understanding both the technical foundations and the human experience. When I'm not coding, you'll find me contributing to open-source projects, writing about what I learn on my blog, or exploring the Bay Area's hiking trails.",

  contact: {
    email: "alex@example.com",
    github: "https://github.com/alexchen",
    linkedin: "https://linkedin.com/in/alexchen",
    blog: "https://blog.alexchen.dev",
    twitter: "https://twitter.com/alexchen",
  },

  siteUrl: "https://alexchen.dev",
  resumeFile: "/resume.pdf",

  highlights: [
    {
      label: "Systems",
      emoji: "⚙️",
      description: "Distributed systems & infrastructure",
    },
    {
      label: "Open Source",
      emoji: "🌍",
      description: "Active contributor & maintainer",
    },
    {
      label: "Dev Tools",
      emoji: "🛠",
      description: "Building better developer experiences",
    },
    {
      label: "Teaching",
      emoji: "📚",
      description: "CS 61B Teaching Assistant",
    },
    {
      label: "Writing",
      emoji: "✍️",
      description: "Technical blog & documentation",
    },
    {
      label: "Research",
      emoji: "🔬",
      description: "PL & compiler optimization",
    },
  ],

  projects: [
    {
      title: "Flux",
      role: "Creator & Lead Developer",
      period: "2025 — Present",
      stack: ["Rust", "WebAssembly", "TypeScript"],
      description:
        "A next-generation build tool for monorepos that achieves 10x faster incremental builds through intelligent dependency graph analysis and granular caching.",
      impact: [
        "Reduced CI build times by 73% in a 200-package monorepo",
        "400+ GitHub stars in first month",
        "Featured in Rust Weekly newsletter",
      ],
      links: [
        { label: "GitHub", url: "https://github.com/alexchen/flux" },
        { label: "Docs", url: "https://flux.dev" },
      ],
      featured: true,
      slug: "flux",
    },
    {
      title: "Lattice",
      role: "Co-creator",
      period: "2024 — Present",
      stack: ["Go", "gRPC", "React", "PostgreSQL"],
      description:
        "A lightweight service mesh dashboard that visualizes microservice communication patterns and helps teams debug distributed system issues.",
      impact: [
        "Used by 3 campus engineering teams",
        "Reduced debugging time for distributed tracing by 60%",
        "Won Best Developer Tool at CalHacks 2024",
      ],
      links: [
        { label: "GitHub", url: "https://github.com/alexchen/lattice" },
        { label: "Demo", url: "https://lattice-demo.vercel.app" },
      ],
      featured: true,
      slug: "lattice",
    },
    {
      title: "Ink",
      role: "Solo Developer",
      period: "2024",
      stack: ["TypeScript", "Next.js", "MDX", "Tailwind"],
      description:
        "A minimal, performance-focused blogging engine with built-in analytics, RSS, and full-text search — designed for developers who write.",
      impact: [
        "Powers my personal blog with 50+ articles",
        "Sub-second page loads with 100 Lighthouse score",
        "Open-sourced with 12 community contributors",
      ],
      links: [
        { label: "GitHub", url: "https://github.com/alexchen/ink" },
        { label: "Live", url: "https://blog.alexchen.dev" },
      ],
      featured: true,
      slug: "ink",
    },
    {
      title: "TinyML Compiler",
      role: "Research Project",
      period: "2024",
      stack: ["OCaml", "LLVM", "C"],
      description:
        "A compiler for a small ML-family language targeting LLVM IR, built as part of undergraduate research in programming languages.",
      impact: [
        "Implements type inference, pattern matching, and closures",
        "Generates optimized native code via LLVM",
        "Used as reference implementation in CS 164",
      ],
      links: [{ label: "Report", url: "/papers/tinyml-report.pdf" }],
      featured: false,
      slug: "tinyml",
    },
    {
      title: "Campus Transit Tracker",
      role: "Full-Stack Developer",
      period: "2023",
      stack: ["Python", "FastAPI", "React Native", "Redis"],
      description:
        "Real-time transit tracking app for UC Berkeley campus shuttles with live GPS data, predicted arrival times, and push notifications.",
      impact: [
        "2,000+ active student users",
        "Real-time GPS tracking with <2s latency",
        "Reduced average student wait times by 40%",
      ],
      links: [{ label: "GitHub", url: "https://github.com/alexchen/transit" }],
      featured: false,
      slug: "transit",
    },
  ],

  education: [
    {
      school: "University of California, Berkeley",
      degree: "B.S. Computer Science",
      period: "2022 — 2026 (Expected)",
      details: [
        "Relevant coursework: Operating Systems, Compilers, Distributed Systems, Machine Learning, Algorithms",
        "Teaching Assistant for CS 61B (Data Structures) — 3 semesters",
        "Member of Computer Science Honors Society (UPE)",
      ],
      gpa: "3.87 / 4.0",
    },
  ],

  experience: [
    {
      org: "Stripe",
      title: "Software Engineering Intern",
      period: "Summer 2025",
      bullets: [
        "Built internal tool for payment flow visualization used by 200+ engineers",
        "Reduced API latency by 15% through query optimization in billing service",
        "Contributed to Stripe's open-source SDK documentation",
      ],
    },
    {
      org: "UC Berkeley EECS",
      title: "Undergraduate Researcher",
      period: "2024 — Present",
      bullets: [
        "Researching compiler optimizations for functional languages under Prof. Smith",
        "Developed novel approach to closure conversion reducing runtime overhead by 22%",
        "Co-authored paper submitted to PLDI 2026",
      ],
    },
    {
      org: "Open Source Collective",
      title: "Maintainer",
      period: "2023 — Present",
      bullets: [
        "Core maintainer of 3 developer tool libraries with 2K+ combined GitHub stars",
        "Review 10+ PRs weekly, mentor new contributors",
        "Organized 2 community hackathons with 100+ participants",
      ],
    },
  ],

  skills: [
    {
      category: "Languages",
      items: ["Rust", "TypeScript", "Go", "Python", "OCaml", "C/C++", "Java"],
    },
    {
      category: "Systems & Infra",
      items: ["Linux", "Docker", "Kubernetes", "AWS", "gRPC", "PostgreSQL", "Redis"],
    },
    {
      category: "Web & Mobile",
      items: ["React", "Next.js", "Node.js", "React Native", "Tailwind CSS"],
    },
    {
      category: "Tools & Practices",
      items: ["Git", "CI/CD", "Testing", "Agile", "Technical Writing"],
    },
  ],

  awards: [
    {
      title: "Best Developer Tool",
      org: "CalHacks 2024",
      year: "2024",
      description: "Won for Lattice — a service mesh visualization dashboard",
    },
    {
      title: "Dean's Honor List",
      org: "UC Berkeley",
      year: "2022 — 2025",
      description: "All semesters",
    },
    {
      title: "Outstanding Teaching Assistant",
      org: "UC Berkeley EECS",
      year: "2024",
      description: "Selected from 200+ TAs across the department",
    },
    {
      title: "National Merit Scholar",
      org: "National Merit Scholarship Program",
      year: "2022",
    },
  ],

  now: {
    updated: "January 2026",
    items: [
      "Finishing my junior year at Berkeley",
      "Working on Flux — making monorepo builds fast",
      "Preparing grad school applications (systems/PL)",
      "Reading: 'Designing Data-Intensive Applications'",
    ],
  },
};
