// ============================================================
// Central content for the portfolio — edit values here only.
// All pulled from Mohan Koduru's resume.
// ============================================================

export const profile = {
  name: "Mohan Koduru",
  fullName: "Mohan Naga Sai Ayyappa Koduru",
  firstName: "Mohan",
  role: "AI & Machine Learning Developer",
  roles: ["AI / ML Developer", "Data Scientist", "LLM & NLP Engineer", "Freelancer"],
  tagline:
    "I build and ship intelligent systems — ML models, AI chatbots and predictive analytics — using Python, LLMs and modern web tools.",
  location: "Mylavaram, India",
  email: "mohankoduru.ai@gmail.com",
  phone: "+91 8639033832",
  linkedin: "https://linkedin.com/in/mohan-koduru",
  github: "https://github.com/", // TODO: add your GitHub username
  photo: "/profile.jpg",
  resume: "/Mohan_Koduru_Resume.pdf",
};

export const about = {
  heading: "Hey there!",
  intro:
    "I'm Mohan, an AI & Data Science undergraduate who loves turning messy data and big ideas into real, production-ready products. I've completed a Machine Learning internship, shipped multiple AI tools end-to-end, and spent 6+ months freelancing with happy clients.",
  education: {
    degree: "B.Tech — Artificial Intelligence & Data Science",
    college: "Lakireddy Bali Reddy College of Engineering, Mylavaram",
    cgpa: "8.20",
    graduation: "Expected May 2027",
  },
  experience: {
    role: "Machine Learning Intern",
    company: "TekSkills Private Limited",
    period: "May 2025 – Jun 2025",
    points: [
      "Built and trained ML models for predictive analytics and data-driven insights using Python, Pandas & Scikit-learn.",
      "Worked on end-to-end ML pipelines — preprocessing, feature engineering, training and evaluation on real business datasets.",
    ],
  },
};

export const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "JavaScript", "HTML", "CSS", "SQL"],
  },
  {
    title: "AI & Data Science",
    items: ["Machine Learning", "Data Analytics", "NLP", "Explainable AI", "LLMs", "Groq API"],
  },
  {
    title: "Libraries & Frameworks",
    items: ["Pandas", "NumPy", "Scikit-learn", "XGBoost", "Random Forest", "ReportLab", "OpenAI API"],
  },
  {
    title: "Web & Deployment",
    items: ["Streamlit", "FastAPI", "REST APIs", "React.js", "Streamlit Cloud", "MySQL"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Jupyter", "Google Colab"],
  },
];

// Short list highlighted as the big rotating "core" skills near the photo.
export const coreSkills = ["Python", "Machine Learning", "LLMs", "NLP", "Streamlit", "FastAPI"];

export const projects = [
  {
    id: "smartbuild",
    name: "SmartBuild",
    subtitle: "Predictive Construction Cost System",
    year: "2025",
    tech: ["Python", "Scikit-learn", "XGBoost", "FastAPI", "React.js", "Recharts"],
    description:
      "A machine-learning house construction-cost predictor using a stacking ensemble of Random Forest + XGBoost — R² of 0.9904 and MAPE of 4.87% across 10,000 records for 15 Indian cities. Engineered features like luxury score, location-area index and area-per-floor.",
    highlight: "R² 0.9904 · MAPE 4.87%",
    link: "#",
  },
  {
    id: "resume-analyzer",
    name: "AI Resume Analyzer",
    subtitle: "ATS Scoring & Improvement Engine",
    year: "2025",
    tech: ["Python", "Streamlit", "Groq API", "NLP", "PyPDF"],
    description:
      "An ATS-based resume analyzer with automated PDF parsing, NLP keyword extraction and compatibility scoring — surfacing strengths, weaknesses and AI-driven tips. Supports batch processing and downloadable PDF reports.",
    highlight: "Batch ATS scoring + PDF reports",
    link: "#",
  },
  {
    id: "support-bot",
    name: "AI Customer Support Chatbot",
    subtitle: "Multi-turn Conversational Assistant",
    year: "2024",
    tech: ["Python", "OpenAI GPT API", "NLP", "Streamlit"],
    description:
      "An AI chatbot with multi-turn conversation memory and intent detection that automates FAQ handling — reducing manual support workload and improving customer satisfaction through contextual NLP responses.",
    highlight: "Memory + intent detection",
    link: "#",
  },
  {
    id: "youtube-analytics",
    name: "YouTube Analytics Automation",
    subtitle: "Channel Metrics Pipeline",
    year: "2024",
    tech: ["Python", "YouTube Data API", "Pandas", "Streamlit"],
    description:
      "An automated pipeline that extracts and analyzes YouTube channel metrics — tracking views, engagement and subscriber growth with actionable insights and exportable analytics reports.",
    highlight: "Automated insight reports",
    link: "#",
  },
];

export const process = [
  {
    number: "01",
    title: "Understand",
    text: "I start with your goal, your data and your constraints — defining the problem clearly before a single line of code.",
  },
  {
    number: "02",
    title: "Explore",
    text: "Cleaning, analysing and visualising the data — finding the signal, the features and the right modelling approach.",
  },
  {
    number: "03",
    title: "Build",
    text: "Training, tuning and validating models, then wrapping them in fast APIs and clean interfaces with Streamlit, FastAPI & React.",
  },
  {
    number: "04",
    title: "Ship",
    text: "Deploying to the cloud, measuring real impact, and iterating — production-ready and client-friendly from day one.",
  },
];

export const achievements = [
  "Smart India Hackathon — National-level participant representing the college with an AI solution.",
  "MSME National-Level Hackathon — presented a business + technology innovation.",
  "Best Performer — Group Discussion & Story Creation, English Hackathon, LBRCE.",
  "1st Place — JNTUK Inter-Collegiate Softball Tournament.",
  "Professional Cricket — Krishna District Cricket Association & Hyderabad Cricket Club.",
];

export const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];
