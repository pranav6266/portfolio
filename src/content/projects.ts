export type ProjectKind = "solo" | "team" | "client" | "internship" | "course";
export type Track = "ai" | "fullstack" | "java" | "mobile" | "devops";

export type Project = {
  slug: string;
  title: string;
  /** Used where space is tight, like the skill graph */
  shortTitle?: string;
  /** One line, shown on cards */
  summary: string;
  kind: ProjectKind;
  /** Where it was built: hackathon, course, internship or client */
  context: string;
  period: string;
  tracks: Track[];
  stack: string[];
  /** Short status label, e.g. "In production" */
  status: string;
  featured?: boolean;
  image?: string;
  links?: { repo?: string; live?: string; repoLabel?: string };
  /** Case-study body */
  problem: string;
  highlights: string[];
  /** For team projects: what Pranav worked on */
  contribution?: string;
  award?: string;
};

export const TRACK_LABELS: Record<Track, string> = {
  ai: "AI & ML",
  fullstack: "Full-stack",
  java: "Java",
  mobile: "Mobile",
  devops: "DevOps",
};

export const KIND_LABELS: Record<ProjectKind, string> = {
  solo: "Personal project",
  team: "Team project",
  client: "Client work",
  internship: "Internship",
  course: "Course project",
};

const VG = "https://github.com/VelvetGradient-26";
const ME = "https://github.com/pranav6266";

export const projects: Project[] = [
  {
    slug: "diabetes-readmission-predictor",
    title: "Diabetes Readmission Predictor",
    shortTitle: "Readmission Predictor",
    summary: "Predicts 30-day hospital readmission for diabetic patients, with the model served straight from Java.",
    kind: "course",
    context: "Big Data Analytics course project, rebuilt in 2026",
    period: "2025 - 2026",
    tracks: ["ai", "java", "fullstack"],
    stack: ["PySpark", "scikit-learn", "ONNX", "Spring Boot", "React", "Docker"],
    status: "Open source",
    featured: true,
    image: "/projects/diabetes.png",
    links: { repo: `${ME}/diabetes-readmission-predictor` },
    problem:
      "Hospitals want to know which diabetic patients are likely to come back within 30 days, so they can plan follow-up care. The UCI dataset has 101,766 encounters from 130 US hospitals, but only 9% of patients are readmitted, and the same patient appears many times.",
    highlights: [
      "PySpark pipeline that removes expired and hospice discharges, keeps one encounter per patient to prevent train/test leakage, and groups ICD-9 codes into clinical categories.",
      "Random Forest with balanced class weights, exported to ONNX. Hold-out ROC AUC 0.661; patients in the top 10% of scores are readmitted at 2.3x the base rate.",
      "Spring Boot API runs the model in-process with ONNX Runtime. A parity test proves the Java feature encoder matches Python exactly on held-out records.",
      "Results reported as risk bands with the readmission rate actually observed in each band, instead of an uncalibrated probability.",
      "React dashboard reads live metrics from the API; the whole stack starts with one docker compose command and is tested in CI.",
    ],
  },
  {
    slug: "enterprise-knowledge-manager",
    title: "Enterprise Knowledge Manager",
    shortTitle: "Knowledge Manager",
    summary: "Multi-agent RAG app: specialist agents answer questions over company documents, and sensitive actions wait for human approval.",
    kind: "internship",
    context: "Capstone, GenAI internship at IIT Jammu",
    period: "Aug 2026",
    tracks: ["ai"],
    stack: ["OpenAI Agents SDK", "ChromaDB", "sentence-transformers", "PyMuPDF", "Streamlit"],
    status: "Open source",
    featured: true,
    links: { repo: `${ME}/AI-Agents-Final-Capstone` },
    problem:
      "Employees waste time hunting through policy PDFs and meeting notes. The capstone asked for an agentic system that answers from an internal knowledge base, stays grounded in the sources, and keeps a human in control of anything destructive.",
    highlights: [
      "An orchestrator agent hands work to specialists built with the OpenAI Agents SDK: policy answers, document summaries, meeting recall, recommendations, document management and memory.",
      "PDFs parsed with PyMuPDF and indexed in ChromaDB with sentence-transformer embeddings for retrieval.",
      "Sensitive actions, such as deleting a document, go to an approval queue and only run after a person approves them.",
      "Streamlit chat with a live trace panel showing agent routing, tool calls and approvals.",
    ],
  },
  {
    slug: "temple-billing-software",
    title: "Temple Billing & Receipt Software",
    shortTitle: "Temple Billing",
    summary: "Offline billing and receipt printing that a temple has used every day since 2025.",
    kind: "client",
    context: "Freelance project for a temple in rural Karnataka",
    period: "2025 - present",
    tracks: ["java"],
    stack: ["Java", "JavaFX", "H2", "HikariCP", "PDFBox", "Apache POI", "ESC/POS"],
    status: "In production",
    featured: true,
    problem:
      "The temple issued seva receipts by hand and kept accounts in registers. It needed software that works without internet, prints receipts on a thermal printer, and is simple enough for volunteers to use.",
    highlights: [
      "Offline JavaFX desktop app with an embedded H2 database and HikariCP connection pooling; 10,000+ records in daily use.",
      "ESC/POS thermal receipt printing, plus PDF and Excel exports of reports for the temple committee.",
      "BCrypt-protected logins, automatic backups, and an update check that points staff to new releases.",
      "Windows installer built by GitHub Actions.",
    ],
  },
  {
    slug: "marisai",
    title: "MarisAI",
    summary: "Marine intelligence platform: live ocean data on a 3D globe, forecasts, and an AI ocean assistant.",
    kind: "team",
    context: "Smart India Hackathon (SIH) internal round, built as a team with @VelvetGradient-26",
    period: "2026",
    tracks: ["ai", "fullstack", "devops"],
    stack: ["FastAPI", "PostGIS", "React", "TypeScript", "MapLibre", "LightGBM", "AWS EC2", "Docker"],
    status: "Open source",
    featured: true,
    links: { repo: `${VG}/MarisAI` },
    problem:
      "Ocean researchers and policymakers work across scattered sources: sea-surface temperature, currents, fisheries and biodiversity data. MarisAI brings them into one place, with forecasting and an assistant that answers questions using real tools rather than guesses.",
    highlights: [
      "Live observation layers (temperature, wind, currents, bathymetry, vessel density) on an interactive map and 3D globe.",
      "FastAPI backend on PostGIS with scheduled data ingestion and machine-learning forecasts.",
      "Tool-grounded ocean assistant that calls data and literature-search tools instead of inventing numbers.",
      "Dockerized stack deployed on AWS EC2.",
    ],
    contribution: "AWS EC2 deployment, the first 3D globe, backend work, and the assistant feature.",
  },
  {
    slug: "nariconnect",
    title: "NariConnect AI",
    summary: "RAG assistant that matches women to the government financial schemes they qualify for.",
    kind: "team",
    context: "SheLeads 2.0 hackathon, built as a team with @VelvetGradient-26",
    period: "Mar 2026",
    tracks: ["ai", "fullstack"],
    stack: ["React", "FastAPI", "Qdrant", "MongoDB", "Ollama", "Clerk"],
    status: "Open source",
    featured: true,
    links: { repo: `${VG}/NariConnect` },
    problem:
      "India has thousands of schemes for women's financial support, but finding the ones you are eligible for means reading dense PDFs. NariConnect turns a plain-language description of someone's situation into a list of matching schemes.",
    highlights: [
      "Converts free-text questions into a structured profile, then retrieves eligible schemes from 3,500+ programs.",
      "Qdrant stores only scheme names for vector search, while full scheme details live in MongoDB, which kept vector search fast.",
      "React frontend with Clerk authentication and a FastAPI backend.",
    ],
    contribution: "MongoDB setup and the Qdrant/MongoDB storage split.",
  },
  {
    slug: "personal-expense-tracker",
    title: "Personal Expense Tracker",
    shortTitle: "Expense Tracker",
    summary: "Full-stack expense tracker with web and desktop clients and a one-command Docker setup.",
    kind: "solo",
    context: "Personal project",
    period: "2025 - 2026",
    tracks: ["fullstack", "java", "devops"],
    stack: ["Spring Boot", "Spring Security", "JWT", "PostgreSQL", "React", "JavaFX", "Docker"],
    status: "Open source",
    featured: true,
    image: "/projects/expense-tracker.png",
    links: { repo: `${ME}/personal-expense-tracker` },
    problem:
      "A learning project that grew into a complete product: one API, two very different clients, and a setup anyone can run in a minute.",
    highlights: [
      "Spring Boot API with stateless JWT auth, BCrypt passwords and per-user data isolation, covered by integration tests.",
      "React web app (monthly summary, spending by category) and a JavaFX desktop client talking to the same API.",
      "Docker Compose stack with Postgres, healthchecks and an nginx reverse proxy; CI builds every part and smoke-tests the running stack.",
    ],
  },
  {
    slug: "sign-language-to-speech",
    title: "Sign Language to Speech on Raspberry Pi",
    summary: "Real-time hand-sign recognition that speaks the result, running on a Raspberry Pi. Won 1st place out of 506 teams.",
    kind: "team",
    context: "Innovative Projects using Raspberry Pi (IPR), team project",
    period: "2024",
    tracks: ["ai"],
    stack: ["MediaPipe", "scikit-learn", "ONNX", "Raspberry Pi", "Qt", "Text-to-speech"],
    status: "1st place",
    award: "1st place out of 506 teams",
    links: { repo: `${ME}/Realtime-Handsign-to-Audio-Converter`, repoLabel: "Early version" },
    problem:
      "People who use sign language often can't be understood by those who don't. The goal was a small, affordable device that reads hand signs from a camera and speaks them aloud.",
    highlights: [
      "Hand landmarks from MediaPipe feed a classifier for alphabet letters and common words.",
      "Model optimized and converted to ONNX so it runs in real time on a Raspberry Pi.",
      "Qt interface that shows the recognized text and speaks it with text-to-speech.",
    ],
    contribution: "Training data collection, the first training runs, optimizing the model for the Raspberry Pi (including ONNX conversion), and the Qt interface with text-to-speech.",
  },
  {
    slug: "pharmaguard",
    title: "PharmaGuard",
    summary: "Predicts how a patient's genes affect drug safety, with explanations clinicians can follow.",
    kind: "team",
    context: "RIFT'26 hackathon (Pharmacogenomics + Explainable AI track), team project",
    period: "Feb 2026",
    tracks: ["ai", "fullstack"],
    stack: ["React", "Clerk", "FastAPI", "Gemini", "VCF parsing", "CPIC guidelines"],
    status: "Live demo",
    image: "/projects/pharmaguard.png",
    links: { repo: `${VG}/PharmaGuard`, live: "https://pharmaguard-frontend-nine.vercel.app" },
    problem:
      "The same drug can be safe for one patient and dangerous for another because of their genes. PharmaGuard reads a patient's genetic variants and flags risky drug-gene combinations.",
    highlights: [
      "Parses VCF genome files and applies CPIC pharmacogenomic guidelines to estimate drug response.",
      "LLM-generated explanations that link each risk back to the gene and guideline behind it.",
      "React frontend with Clerk sign-in, deployed on Vercel.",
    ],
    contribution: "Research, the React frontend, and the explainability layer.",
  },
  {
    slug: "finguard-ai",
    title: "FinGuard AI",
    summary: "Financial safety assistant that reads bills with OCR and explains risky money decisions.",
    kind: "team",
    context: "BWT Hackathon (Future Finance track), team project",
    period: "Mar 2026",
    tracks: ["ai", "fullstack"],
    stack: ["React", "FastAPI", "MongoDB", "Tesseract OCR", "Gemini", "Clerk"],
    status: "Live demo",
    image: "/projects/finguard.png",
    links: { repo: `${VG}/BWT_CodeCorps`, live: "https://bwt-code-corps.vercel.app" },
    problem:
      "Low-income households often sign up for loans and bills they don't fully understand. FinGuard reads the documents and explains the risks in plain language.",
    highlights: [
      "OCR pipeline that turns photographed bills and receipts into structured data.",
      "Explainable AI insights that show why a decision is flagged as risky.",
      "React frontend on Vercel with a FastAPI and MongoDB backend.",
    ],
    contribution: "OCR conversion and AI explainability.",
  },
  {
    slug: "ai-expense-management",
    title: "AI Expense Management System",
    summary: "Employee expense claims from receipt upload to reimbursement, with a local vision model reading the receipts.",
    kind: "internship",
    context: "Summer school project, IIT Jammu",
    period: "Jul 2026",
    tracks: ["ai", "devops"],
    stack: ["n8n", "Ollama", "Gemma Vision", "Google Sheets", "Google Drive", "Gmail"],
    status: "Open source",
    links: { repo: `${ME}/N8N-Expense-Management-System` },
    problem: "Processing employee expense claims by hand means reading every receipt, chasing approvals and tracking payouts in spreadsheets.",
    highlights: [
      "Four n8n workflows: submission and receipt upload, AI receipt processing, manager approval, and reimbursement.",
      "A locally hosted Gemma vision model (via Ollama) reads each receipt and fills in the expense record.",
      "Google Sheets as the expense database, receipts in Google Drive, and Gmail notifications at each step.",
    ],
  },
  {
    slug: "pooja-scheduling-engine",
    title: "Pooja Scheduling Engine",
    summary: "Calculates a year of recurring pooja dates from the Karnataka panchanga, as an offline Windows app.",
    kind: "client",
    context: "Freelance project for a temple",
    period: "2026",
    tracks: ["ai", "fullstack"],
    stack: ["Python", "Skyfield", "JPL ephemerides", "FastAPI", "SQLite", "React", "i18next", "PyInstaller"],
    status: "Delivered",
    problem:
      "Devotees book poojas on a lunar date (tithi and nakshatra), but the temple has to publish them on the regular calendar. Working the dates out by hand every year took days and caused mistakes.",
    highlights: [
      "Astronomical engine using Skyfield and JPL ephemerides to compute tithi and nakshatra, verified against published calendars.",
      "FastAPI service with SQLite and a Kannada/English React interface.",
      "Packaged as an offline Windows installer with PyInstaller and Inno Setup, built by GitHub Actions.",
    ],
  },
  {
    slug: "solar-crm",
    title: "CRM for a Solar Installer",
    summary: "Quotations, GST invoices and installation tracking for a solar company, in one app.",
    kind: "client",
    context: "Freelance project",
    period: "2026",
    tracks: ["fullstack"],
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Recharts"],
    status: "In progress",
    problem: "A solar installation company prepared quotations and invoices by hand in office documents and tracked installations across chats.",
    highlights: [
      "Printable three-page solar quotations with a bill of quantities, and GST tax invoices with per-line tax.",
      "Installation pipeline that tracks each project from quotation to handover.",
      "Admin panel for the product catalogue, kit packages, document numbering and terms templates.",
      "Business overview charts; Supabase auth and a Postgres schema managed through migrations.",
    ],
  },
  {
    slug: "abm-studios-website",
    title: "ABM Studios Website",
    summary: "Marketing website for a film dubbing and sound studio.",
    kind: "client",
    context: "Freelance project",
    period: "2026",
    tracks: ["fullstack"],
    stack: ["React", "Vite", "Tailwind CSS", "Vercel"],
    status: "Live",
    image: "/projects/abm-studios.png",
    links: { live: "https://abm-studios-website.vercel.app" },
    problem: "The studio needed a web presence to show its work and services to film producers.",
    highlights: ["Responsive React site with the studio's portfolio, services and contact details, deployed on Vercel."],
  },
  {
    slug: "voice-assistant",
    title: "Offline Voice Assistant for Linux",
    summary: "Press a key and talk: it opens apps, takes notes and sets reminders, all running locally.",
    kind: "solo",
    context: "Personal project",
    period: "2026",
    tracks: ["ai"],
    stack: ["Python", "faster-whisper", "Laya", "Ollama", "Piper TTS", "systemd"],
    status: "Open source",
    links: { repo: `${ME}/omarchy-agent` },
    problem: "Cloud voice assistants send everything to a server and can't control a Linux desktop. This one runs entirely on the laptop.",
    highlights: [
      "Hotkey-driven sessions handled by a systemd user service that keeps models warm.",
      "faster-whisper for speech-to-text and Piper for speech output.",
      "A typed-decision router (Laya) picks from real candidates (installed apps, note folders, parsed times), so it can't invent actions; low-confidence turns fall back to a chat reply.",
    ],
  },
  {
    slug: "medexpress",
    title: "MedExpress",
    summary: "Medicine delivery platform with separate views for customers, delivery agents and admins.",
    kind: "course",
    context: "Full-stack training, E&ICT Academy, IIT Kanpur",
    period: "Jul 2025",
    tracks: ["fullstack"],
    stack: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    status: "Open source",
    links: { repo: `${ME}/Med-Express` },
    problem: "A capstone for the MERN training: a realistic multi-role web app.",
    highlights: [
      "JWT authentication with role-based access for users, delivery agents and admins.",
      "Medicine catalogue, order placement, agent assignment, delivery status and inventory management.",
    ],
  },
  {
    slug: "sync-task",
    title: "Sync-Task",
    summary: "Android app that keeps a shared task list in sync between two friends.",
    kind: "solo",
    context: "Personal project",
    period: "2025",
    tracks: ["mobile"],
    stack: ["Android", "Java", "Firebase Auth", "Firestore", "Cloud Functions", "FCM"],
    status: "Open source",
    links: { repo: `${ME}/Sync-Task` },
    problem: "Two people sharing chores needed one list that updates on both phones instantly.",
    highlights: ["Real-time Firestore sync with push notifications from Cloud Functions when the other person changes a task."],
  },
  {
    slug: "attendance-tracker",
    title: "Class Attendance Tracker",
    summary: "Android app for a Taekwondo class: attendance, streaks and reminders.",
    kind: "solo",
    context: "Personal project",
    period: "2025",
    tracks: ["mobile"],
    stack: ["Kotlin", "Jetpack Compose", "Firestore", "WorkManager"],
    status: "Open source",
    links: { repo: `${ME}/attendance-taker-app` },
    problem: "The instructor tracked attendance on paper and had no view of who was falling behind.",
    highlights: ["Jetpack Compose UI, history-based attendance streaks, and reminder notifications with WorkManager."],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

/** The hero's skill graph: which core skills each featured project really uses. */
export const graphSkills = [
  "Python",
  "Java",
  "Spring Boot",
  "FastAPI",
  "React",
  "RAG & agents",
  "ML & PySpark",
  "Docker & AWS",
] as const;

export type GraphSkill = (typeof graphSkills)[number];

export const graphEdges: Record<string, GraphSkill[]> = {
  "diabetes-readmission-predictor": ["Python", "Java", "Spring Boot", "React", "ML & PySpark", "Docker & AWS"],
  "enterprise-knowledge-manager": ["Python", "RAG & agents"],
  "temple-billing-software": ["Java"],
  marisai: ["Python", "FastAPI", "React", "RAG & agents", "ML & PySpark", "Docker & AWS"],
  nariconnect: ["Python", "FastAPI", "React", "RAG & agents"],
  "personal-expense-tracker": ["Java", "Spring Boot", "React", "Docker & AWS"],
};
