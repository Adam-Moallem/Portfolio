import { CheckCircle2 } from "lucide-react";
import Section from "./Section";
import { experiences } from "../data/portfolio";

function SkillList({ skills }) {
  return (
    <div className="tag-list">
      {skills.map((skill) => (
        <span className="tag" key={skill}>
          {skill}
        </span>
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Professional experience">
      <div className="timeline">
        {experiences.map((experience) => (
          <article className="timeline-card" key={experience.company}>
            <div className="timeline-card__meta">
              <span>{experience.period}</span>
            </div>
            <div className="timeline-card__body">
              <div className="item-heading">
                <div>
                  <h3>{experience.company}</h3>
                  <p>{experience.role}</p>
                </div>
              </div>
              <ul className="clean-list">
                {experience.bullets.map((bullet) => (
                  <li key={bullet}>
                    <CheckCircle2 size={18} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <SkillList skills={experience.skills} />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
