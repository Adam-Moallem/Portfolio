import { BriefcaseBusiness, Code2, Database, Sparkles } from "lucide-react";
import Section from "./Section";
import { about } from "../data/portfolio";

const focusAreas = [
  {
    icon: Code2,
    title: "Full-Stack Applications",
    text: "React interfaces, backend APIs, and practical user workflows.",
  },
  {
    icon: BriefcaseBusiness,
    title: "KYC/AML Systems",
    text: "Client approval portals, review flows, and compliance decisions.",
  },
  {
    icon: Database,
    title: "Database Design",
    text: "PostgreSQL and MySQL structures for production-style applications.",
  },
  {
    icon: Sparkles,
    title: "AI-Assisted Products",
    text: "OCR, computer vision, and recommendation features for web platforms.",
  },
];

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Practical software for real workflows">
      <div className="about-layout">
        <p className="about-copy">{about}</p>
        <div className="focus-grid">
          {focusAreas.map(({ icon: Icon, title, text }) => (
            <article className="focus-card" key={title}>
              <Icon size={22} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
