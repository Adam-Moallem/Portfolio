import Section from "./Section";
import { skillGroups } from "../data/portfolio";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Technical toolkit" className="section--muted">
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="tag-list">
              {group.skills.map((skill) => (
                <span className="tag tag--strong" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
