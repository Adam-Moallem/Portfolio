import { ExternalLink, Github, Globe, Mail, Phone } from "lucide-react";
import Section from "./Section";
import { profile } from "../data/portfolio";

const contactItems = [
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    icon: Phone,
  },
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/Adam-Moallem",
    href: profile.github,
    icon: Github,
  },
  {
    label: "Portfolio",
    value: "github.com/Adam-Moallem",
    href: profile.portfolio,
    icon: Globe,
  },
];

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Build something practical">
      <div className="contact-layout">
        <div className="contact-copy">
          <p>
            For project discussions, internship opportunities, or collaboration,
            reach Adam directly by email.
          </p>
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            Contact Adam <Mail size={18} />
          </a>
        </div>
        <div className="contact-grid">
          {contactItems.map(({ label, value, href, icon: Icon }) => (
            <a
              className="contact-card"
              href={href}
              key={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
            >
              <Icon size={22} />
              <span>{label}</span>
              <strong>{value}</strong>
              {href.startsWith("http") && <ExternalLink size={16} />}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
