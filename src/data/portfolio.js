export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const profile = {
  name: "Adam Moallem",
  title: "Software Developer | Full-Stack Developer",
  subtitle:
    "Computer Science student with experience building full-stack web applications, client approval systems, e-commerce platforms, and AI-assisted housing solutions.",
  email: "Adammoallem2002@gmail.com",
  phone: "+96170864723",
  github: "https://github.com/Adam-Moallem",
  portfolio: "https://portfolio-eta-jet-xjkp9hk0w7.vercel.app/",
  cvPath: "/Adam-Moallem-CV.pdf",
  photoPath: "/profile.png",
};

export const about =
  "Adam Moallem is a Computer Science student at the Lebanese University with hands-on experience in full-stack development, backend APIs, database design, KYC/AML approval workflows, e-commerce systems, and AI-powered web applications. He enjoys building practical software solutions using React, Node.js, PostgreSQL, Laravel, PHP, MySQL, and Python.";

export const experiences = [
  {
    company: "Money OverLine",
    role: "Software Developer Intern",
    period: "Aug 2025 - Dec 2025",
    bullets: [
      "Developed an internal KYC/AML client approval portal using React, Node.js, and PostgreSQL.",
      "Built a review workflow allowing AML officers to inspect client selfies, front ID images, and back ID images before making compliance decisions.",
      "Implemented decision actions allowing AML officers to approve, reject, block, or escalate client applications based on verification results.",
      "Integrated an OCR-based ID data extraction system to automate document reading and reduce manual data entry.",
      "Contributed to backend APIs and database design supporting client onboarding and compliance review processes.",
    ],
    skills: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Python",
      "FastAPI",
      "OCR",
      "KYC/AML",
      "Financial Systems",
    ],
  },
  {
    company: "FNMMall",
    role: "Freelance Project",
    period: "Feb 2023 - Apr 2023",
    bullets: [
      "Implemented a full cart system with save-for-later functionality.",
      "Developed two checkout types: credit card payment and cash on delivery.",
      "Created a full admin page for adding and editing items and viewing orders.",
    ],
    skills: ["Laravel", "PHP", "MySQL", "Stripe"],
  },
];

export const projects = [
  {
    name: "RentMate - Final Year Project",
    type: "Full-Stack Web Application for Room and Roommate Discovery",
    period: "2025 - 2026",
    bullets: [
      "Developed RentMate, a web-based housing platform that helps users discover rooms, publish rental listings, communicate with owners, and build trust through ratings and verification.",
      "Built marketplace features including user authentication, profile management, room listing creation, photo uploads, listing search/filtering, and listing details pages.",
      "Implemented real-time messaging between users and listing owners using Socket.IO, including conversation history, unread counts, and live message delivery.",
      "Added trust and moderation features including user ratings, public profiles, admin listing approval, user blocking/reactivation, and identity verification review.",
      "Integrated an identity verification workflow where users upload a selfie and Lebanese ID image, supported by a Python-based computer vision pipeline for ID classification, face detection, and face comparison.",
      "Developed an AI room recommendation assistant for verified users, recommending approved listings based on profile data and natural-language preferences.",
    ],
    skills: [
      "Python",
      "Feature Engineering",
      "Ensemble Methods",
      "Exploratory Data Analysis",
      "Feature Extraction",
      "React",
      "Node.js",
      "Socket.IO",
    ],
  },
  {
    name: "Chess C++ Application",
    type: "Windows Shell Application",
    period: "",
    bullets: [
      "A Windows shell chess application developed using C++ with offline multiplayer mode and game history display.",
    ],
    skills: ["C++", "Offline Multiplayer", "Game History"],
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Laravel", "PHP", "FastAPI"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    title: "AI / Data",
    skills: [
      "Python",
      "OCR",
      "Machine Learning",
      "Feature Engineering",
      "Computer Vision",
    ],
  },
  {
    title: "Tools / Other",
    skills: ["Git", "GitHub", "Stripe", "Socket.IO", "REST APIs"],
  },
];

export const education = [
  {
    school: "Lebanese University - Faculty of Science",
    degree: "Master 1 of Computer Science",
    period: "2025 - 2026",
    coursework:
      "Advanced Web Development, Machine Learning, Networking, Probability for Machine Learning, Cloud Computing, Image Processing, Natural Language Processing, Distributed Systems.",
  },
  {
    school: "Lebanese University - Faculty of Science",
    degree: "Bachelor of Computer Science",
    period: "2022 - 2025",
    coursework:
      "C, Data Structures, Java, Database, Mathematics for Computer Science, Calculus, Operating Systems, Object-Oriented Programming, Parallel Programming, ASP.NET.",
  },
];

export const organizations = [
  {
    name: "IEEE Student Branch",
    role: "Social Media Manager",
    period: "2024 - 2025",
    bullets: [
      "Participated in organization and display of events.",
      "Gave a 12-session full-stack web development bootcamp.",
    ],
  },
];

export const languages = [
  { name: "English", level: "C2" },
  { name: "Arabic", level: "C2" },
];
