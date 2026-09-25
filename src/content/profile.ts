export const profile = {
  name: "Pranav C",
  role: "AI/ML engineer",
  location: "Bengaluru, India",
  email: "pranavchandrashekar5@gmail.com",
  github: "https://github.com/pranav6266",
  linkedin: "https://www.linkedin.com/in/pranavchandrashekar",
  intro:
    "I'm a final-year computer science student specializing in AI and machine learning. I build RAG assistants and agents, the Java and Python services behind them, and the interfaces people use. I also write software for real clients, including a billing app that a temple has used every day since 2025.",
  lookingFor: "Open to 2027 full-time roles and internships in AI/ML engineering, GenAI, and full-stack or backend development.",
};

export type Experience = {
  org: string;
  role: string;
  period: string;
  place: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    org: "Indian Institute of Technology, Jammu",
    role: "GenAI Intern, Summer School on LLMs, GenAI, Automation & AI Agents",
    period: "Jun - Aug 2026",
    place: "Jammu",
    points: [
      "Built a multi-agent RAG knowledge manager with the OpenAI Agents SDK, ChromaDB and human approval for sensitive actions.",
      "Built a four-stage expense automation system in n8n that reads receipts with a local vision model.",
      "Coursework on LLMs, LangChain, Hugging Face pipelines and AI agents.",
    ],
  },
  {
    org: "Freelance",
    role: "Software Developer",
    period: "Mar 2025 - present",
    place: "Remote",
    points: [
      "Temple billing and receipt software in daily production use, with thermal printing and 10,000+ records.",
      "A pooja scheduling engine that computes lunar-calendar dates astronomically, shipped as an offline Windows app.",
      "A website for a film dubbing studio, and a CRM for a solar installer (in progress).",
    ],
  },
  {
    org: "E&ICT Academy, IIT Kanpur",
    role: "Summer Training, Full Stack Web Development (MERN)",
    period: "Jun - Aug 2025",
    place: "Hybrid",
    points: [
      "Built MedExpress, a medicine delivery platform with role-based access for customers, delivery agents and admins.",
    ],
  },
];

export const education = {
  school: "Presidency University, Bengaluru",
  degree: "B.Tech, Computer Science and Engineering (AI & ML)",
  period: "2023 - 2027",
  grade: "CGPA 8.29",
};

export type Milestone = {
  date: string;
  event: string;
  result: string;
  project?: string;
  highlight?: boolean;
};

/** Hackathons and competitions, oldest first */
export const hackathons: Milestone[] = [
  {
    date: "2024",
    event: "Innovative Projects using Raspberry Pi (IPR)",
    result: "1st place out of 506 teams",
    project: "sign-language-to-speech",
    highlight: true,
  },
  { date: "Feb 2026", event: "RIFT'26, Pharmacogenomics + Explainable AI track", result: "Built PharmaGuard", project: "pharmaguard" },
  { date: "Mar 2026", event: "SheLeads 2.0, LeadHer track", result: "Built NariConnect AI", project: "nariconnect" },
  { date: "Mar 2026", event: "BWT Hackathon, Future Finance track", result: "Built FinGuard AI", project: "finguard-ai" },
  { date: "Apr 2026", event: "Datathon at Innovatex 4.0, Presidency University", result: "2nd place", highlight: true },
  { date: "2026", event: "Smart India Hackathon (SIH), internal round", result: "Built MarisAI", project: "marisai" },
];

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  badge?: string;
  url?: string;
};

export const certifications: Certification[] = [
  {
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    date: "Jul 2026",
    badge: "/certs/aws-ai-practitioner.png",
    url: "https://aws.amazon.com/verification",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Jul 2026",
    badge: "/certs/aws-cloud-practitioner.png",
    url: "https://aws.amazon.com/verification",
  },
  { name: "Full Stack Web Development with MERN", issuer: "E&ICT Academy, IIT Kanpur", date: "Aug 2025" },
  { name: "Foundation: Introduction to LangChain (Python)", issuer: "LangChain", date: "Aug 2026" },
  { name: "Claude Code in Action", issuer: "Anthropic", date: "Aug 2026" },
  { name: "AI Fluency", issuer: "Anthropic", date: "Aug 2026" },
  { name: "Introduction to Agent Skills and Subagents", issuer: "Anthropic", date: "Aug 2026" },
  { name: "LLM Course and AI Agents Course", issuer: "Hugging Face", date: "2026" },
  { name: "Essentials, Integrations and In Practice (N8N101-103)", issuer: "n8n", date: "Jun 2026", badge: "/certs/n8n.png" },
];

export const skills: Record<string, string[]> = {
  "AI & ML": ["RAG", "AI agents", "LangChain", "OpenAI Agents SDK", "Qdrant", "ChromaDB", "scikit-learn", "PySpark", "ONNX", "Hugging Face"],
  Backend: ["Java", "Spring Boot", "Python", "FastAPI", "Node.js", "Express", "PostgreSQL", "MongoDB"],
  Frontend: ["React", "TypeScript", "Next.js", "Tailwind CSS", "JavaFX"],
  "Cloud & tools": ["AWS", "Docker", "GitHub Actions", "n8n", "Linux"],
};
