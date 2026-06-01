// ============================================================================
//  Joshua Pearre — Personal Site · CONTENT MODEL
//  Single source of truth for all site copy. Edit here; it propagates.
//  Sourced from the original site (verbatim where noted) + the resume.
//  Brand: "No Joshing around" — resilience, tenacity, perseverance.
//  Dual identity: Computer Science graduate  ×  NCAA basketball player.
// ============================================================================

export const profile = {
  name: "Joshua Pearre",
  first: "Josh",
  role: "AI Solutions Developer · CS Graduate",
  location: "Dallas, TX",
  email: "joshpearre@gmail.com",
  phone: "972-658-2149",
  phoneHref: "tel:+19726582149",
  resume: "Joshua Pearre Resume.pdf", // lives in each project's /resume
  siteUrl: "https://joshpearre.github.io/Personal-Website/",
  motto: "No Joshing around",
  values: "Resilience, tenacity, and perseverance.",
  copyrightYear: 2026,
  eyebrow: "COMPUTER SCIENCE · NCAA BASKETBALL · DALLAS, TX",
};

export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/joshpearre/", icon: "insta-logo.png" },
  { label: "X", href: "https://x.com/joshpearre", icon: "x-logo.png" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/josh-pearre/", icon: "linkedin-logo.png" },
];

// Bare filenames — each tier resolves its own base path (vanilla: images/… ,
// Vite: import.meta.env.BASE_URL + 'images/…').
export const images = {
  logo: "jp-nojoshin-logo.svg",
  logoAlt: "newbrand-logo.png",
  umhb: "umhb-basketball.jpg",
  regis: "regis-basketball.jpg",
  team: "3guys-umhb.jpg",
  brothers: "3-brothers.jpg",
  greece: "greece.jpg",
  gradHS: "hs-graduation.jpg",
  gradCollege: "grad-1.jpg",   // cap & gown, "Scholar-Athlete" stole, UMHB stadium
  gradStadium: "grad-2.jpg",   // shirt & tie + stole on the field
  gradPortrait: "grad-3.jpg",  // reflective profile portrait
};

export const hero = {
  // Verbatim from the live site — the brand voice. Keep the emojis.
  greeting:
    "Hi, I'm Josh. I'm a computer science graduate 💻 and NCAA basketball player 🏀 from the University of Mary Hardin-Baylor. 🎓",
  // New subhead distilled from the resume.
  subhead:
    "NCAA basketball player turned AI solutions developer — I bring the same discipline to shipping code that I bring to the court.",
  subheadShort: "Building software with an athlete's discipline.",
  ctas: [
    { label: "See what I've built", href: "#projects", primary: true },
    { label: "Read my story", href: "#story", primary: false },
  ],
  // Fast facts — the "quick stats" line (used prominently in Tier 1 + as counters in Tier 3).
  stats: [
    { value: "3.862", label: "College GPA", suffix: "/4.0" },
    { value: "4", label: "Years NCAA basketball", suffix: "yrs" },
    { value: "6", label: "Projects shipped", suffix: "+" },
    { value: "4.2", label: "High-school GPA", suffix: "" },
  ],
};

export const story = {
  heading: "Who is this guy? 🤷🏾‍♂️",
  pullQuote: "The court taught me to trust the process. Software is where I get to build it.",
  chapters: [
    {
      id: "foundation",
      eyebrow: "01 — THE FOUNDATION",
      title: "The Foundation",
      image: "gradHS",
      imageAlt: "Josh at his high-school graduation",
      body:
        "My academic journey has always been important to me, culminating in a 4.2 GPA when I graduated high school. Growing up, I was deeply involved in sports, proudly playing both football and basketball. Though I have fond memories of my time on the field, as I got older my true athletic passion settled with basketball — a sport I continue to dedicate myself to.",
    },
    {
      id: "commitment",
      eyebrow: "02 — THE COMMITMENT",
      title: "The Commitment",
      image: "greece",
      imageAlt: "A coastline from Josh's trip to Greece",
      body:
        "Out of high school I was thrilled to commit to Regis University to play basketball, an exciting step in my athletic journey. At the same time, my lifelong love for technology drove me to pursue a degree in computer science — a field I find genuinely engaging and want to build a career in. One of my fondest memories from this chapter is traveling to Greece, an experience that gave me a deep appreciation for travel, a hobby I look forward to pursuing for years to come.",
    },
    {
      id: "process",
      eyebrow: "03 — THE PROCESS",
      title: "The Process",
      image: "team",
      imageAlt: "Josh with his UMHB teammates",
      body:
        "My athletic journey, especially in basketball, has been a profound teacher — it introduced me to invaluable lessons in patience, perseverance, and resilience. Navigating injuries, conflicting schedules, and even moments when others' intentions weren't aligned with my own forged a deeper understanding of those qualities. Through it all, I've learned — and continue to learn — the importance of having faith and trusting the process, both on and off the court.",
    },
    {
      id: "turn",
      eyebrow: "04 — THE TURN",
      title: "The Turn",
      image: "brothers",
      imageAlt: "Josh with his brothers",
      body:
        "Trusting the process taught me how to build — quietly, consistently, rep after rep — long before I saw the payoff. I carried that same patience into computer science at UMHB, balancing roughly 30 hours a week of NCAA basketball with a full course load and still earning a 3.862 GPA, the Provost Honors Roll, and the Dean's List. Off the court, I started turning that discipline into real systems: troubleshooting hardware and networks as an IT Assistant, building my first web apps as a development intern, and shipping relational databases and CRUD tools from the ground up. Now, as Lead AI Solutions Developer at Dakar Projects, I help small businesses put AI to work — I've built an AI receptionist, an operations dashboard, and automated document workflows using Python, Flask, Docker, and local LLM agents. The court taught me to trust the process; software is where I get to build it. No Joshing around.",
    },
    {
      id: "graduation",
      eyebrow: "05 — THE WALK",
      title: "The Walk",
      image: "gradCollege",
      imageAlt:
        "Josh in his cap and gown wearing a 'Scholar-Athlete' stole at UMHB's stadium on graduation day, May 2026",
      body:
        "In May 2026 I walked across the stage at the University of Mary Hardin-Baylor and turned the tassel — a B.S. in Computer Science, and the proof that the process works. I crossed that field in a 'Scholar-Athlete' stole, which is really the whole story in two words: four years of balancing a college basketball career with a full course load, and finishing with a 3.862 GPA, the Provost Honors Roll, and the Dean's List to show for it. Standing in an empty stadium in my cap and gown, it hit me that every early rep, every late night, and every 'trust the process' had been building to this moment. Graduation closed the student-athlete chapter and opened the next one — building AI systems full-time at Dakar Projects. It's the most recent milestone in the story, and the one that ties all the others together. No Joshing around.",
    },
  ],
};

export const projects = {
  eyebrow: "02 — WHAT I BUILD",
  heading: "What I build",
  sub: "Real things I've shipped — for clients and in the classroom. No Joshing.",
  items: [
    {
      id: "ai-receptionist",
      title: "AI Receptionist",
      featured: true,
      pillar: "AI & Automation",
      description:
        "An AI-powered receptionist for small businesses — it handles inbound interactions automatically so owners can focus on their work instead of the phone. Built at Dakar Projects with secure API integrations and LLM agents.",
      tags: ["Python", "Flask", "OpenAI API", "Local LLMs", "Docker"],
    },
    {
      id: "ops-dashboard",
      title: "Operations Dashboard",
      featured: true,
      pillar: "Full-stack",
      description:
        "A custom operations dashboard that centralizes a business's day-to-day data into one clear, real-time view — replacing scattered spreadsheets with a single source of truth.",
      tags: ["Python", "Flask", "JavaScript", "REST APIs", "Cloud"],
    },
    {
      id: "major-finder",
      title: "Major Finder",
      featured: true,
      pillar: "Full-stack",
      description:
        "A web app that recommends academic majors from a student's answers, driven by a structured JSON dataset and a matching algorithm. Built during my web development internship.",
      tags: ["JavaScript", "HTML/CSS", "JSON", "VS Code"],
    },
    {
      id: "pdf-workflows",
      title: "PDF Rendering Workflows",
      featured: false,
      pillar: "AI & Automation",
      description:
        "Automated document-generation pipelines that render clean, on-demand PDFs as part of client operations — turning a manual, repetitive task into a one-click workflow.",
      tags: ["Python", "Automation", "Docker"],
    },
    {
      id: "crud-db",
      title: "Database CRUD App",
      featured: false,
      pillar: "Data / Backend",
      description:
        "A full create-read-update-delete web application over a relational database: a student database designed in MS Access, rebuilt in MySQL, and deployed and tested in a virtual machine.",
      tags: ["PHP", "MySQL", "Apache", "PuTTY", "VirtualBox"],
    },
    {
      id: "this-site",
      title: "This Website",
      featured: false,
      pillar: "Design / Front-end",
      description:
        "My personal brand site — designed and built from scratch and iterated across multiple design directions. The thing you're looking at right now.",
      tags: ["HTML/CSS", "JavaScript", "Git/GitHub"],
    },
  ],
};

export const skills = {
  eyebrow: "03 — THE TOOLKIT",
  heading: "Skills & tech",
  sub: "The tools I actually reach for.",
  groups: [
    {
      label: "Languages",
      caption: "",
      items: ["Java", "Python", "C / C++", "JavaScript", "PHP", "HTML / CSS", "SQL", "Prolog"],
    },
    {
      label: "AI & Machine Learning",
      caption: "Building and shipping AI, not just using it.",
      items: [
        "OpenAI API", "Local LLMs", "AI Coding Agents", "Prompt Engineering",
        "Workflow Automation", "Scikit-Learn", "TensorFlow", "Claude", "ChatGPT",
        "Gemini", "GitHub Copilot", "Codex",
      ],
    },
    {
      label: "Tools & Infrastructure",
      caption: "",
      items: [
        "Docker", "Git / GitHub", "VS Code", "REST APIs", "MySQL", "MS Access",
        "VirtualBox", "Wireshark", "PuTTY", "WinSCP", "Apache",
      ],
    },
  ],
  certifications: [
    { title: "Machine Learning with Python", issuer: "Anaconda" },
    { title: "AI Test Automation Professional", issuer: "TestMu" },
    { title: "Career Essentials in GitHub", issuer: "GitHub" },
  ],
  coursework: [
    "Artificial Intelligence", "Computer Security", "Database Theory & Applications",
    "Telecommunications & Networking", "Computer Organization & Architecture",
    "Operating Systems", "Data Structures", "Algorithms & Analysis", "Web Design",
    "Scientific Writing",
  ],
};

export const timeline = {
  eyebrow: "04 — THE TIMELINE",
  heading: "Where I've been",
  sub: "Two tracks, one process — run in parallel.",
  professional: [
    {
      dates: "2026 – present",
      role: "Lead AI Solutions Developer & Consultant",
      org: "Dakar Projects",
      summary:
        "AI integration and automation consulting for small businesses — building AI apps, dashboards, and internal tools end-to-end.",
    },
    {
      dates: "Aug 2025 – May 2026",
      role: "IT Assistant",
      org: "UMHB",
      summary:
        "Installed, configured, and maintained hardware, networks, and software; diagnosed login, system, and device issues across campus.",
    },
    {
      dates: "Dec 2024 – May 2025",
      role: "Web Development Intern",
      org: "UMHB",
      summary:
        "Built a personal brand website and the Major Finder web app from a JSON-driven recommendation engine.",
    },
    {
      dates: "Dec 2024 – May 2025",
      role: "Database Systems Project",
      org: "UMHB",
      summary:
        "Designed a student database in MS Access, rebuilt it in MySQL, and shipped a PHP + MySQL CRUD app deployed in a VM.",
    },
    {
      dates: "Summer 2023 & 2024",
      role: "Summer Camp Counselor",
      org: "Life Time — Allen, TX",
      summary:
        "Led campers ages 4–10 through games, swimming, climbing, and field trips while promoting safety and nutrition.",
    },
  ],
  athletic: [
    {
      dates: "Aug 2022 – May 2026",
      role: "NCAA Men's Basketball Student-Athlete",
      org: "UMHB",
      summary:
        "A four-year college basketball career — ~30 hrs/week of training and competition alongside a full-time CS course load.",
    },
    {
      dates: "Aug 2022 – May 2026",
      role: "B.S. Computer Science — Graduated",
      org: "UMHB",
      summary: "Graduated May 2026 · GPA 3.862/4.0 · Provost Honors Roll (2 sem) · Dean's List (4 sem).",
    },
    {
      dates: "2022",
      role: "Committed to play basketball",
      org: "Regis University",
      summary: "The first college commitment of the journey — the start of Chapter 2.",
    },
  ],
};

export const connect = {
  eyebrow: "05 — LET'S TALK",
  heading: "Get in touch with me!",
  sub: "No Joshing — I actually reply.",
  formNote:
    "Whether it's a project, a role, or just to talk shop — drop me a line. I read every message.",
  jotformId: "251204732639152",
};

export const content = {
  profile, socials, images, hero, story, projects, skills, timeline, connect,
};

export default content;
