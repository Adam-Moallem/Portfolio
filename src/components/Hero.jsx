import { useState } from "react";
import { ArrowRight, Download, Mail } from "lucide-react";
import placeholderPhoto from "../assets/profile-placeholder.svg";
import { profile } from "../data/portfolio";

const stackItems = ["React", "Node.js", "PostgreSQL", "Laravel", "Python", "OCR"];

export default function Hero() {
  const [photoError, setPhotoError] = useState(false);
  const photoSrc = photoError ? placeholderPhoto : profile.photoPath;

  return (
    <section id="home" className="hero section">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__kicker">Full-stack software developer</p>
          <h1>{profile.name}</h1>
          <p className="hero__title">{profile.title}</p>
          <p className="hero__subtitle">{profile.subtitle}</p>

          <div className="hero__actions" aria-label="Primary actions">
            <a className="btn btn--primary" href="#projects">
              View Projects <ArrowRight size={18} />
            </a>
            <a className="btn btn--secondary" href="#contact">
              Contact Me <Mail size={18} />
            </a>
            <a className="btn btn--ghost" href={profile.cvPath} download>
              Download CV <Download size={18} />
            </a>
          </div>

          <div className="hero__stack" aria-label="Core technologies">
            {stackItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="hero__visual" aria-label="Adam Moallem profile photo">
          <div className="portrait-card">
            <img
              className="portrait-card__image"
              src={photoSrc}
              alt="Adam Moallem"
              onError={() => setPhotoError(true)}
            />
          </div>
          <div className="hero__credentials">
            <span>Computer Science</span>
            <strong>Lebanese University</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
