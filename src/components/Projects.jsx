import { Code2 } from "lucide-react";
import Section from "./Section";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Selected work">
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <div className="project-card__top">
              <Code2 size={22} />
              {project.period && <span>{project.period}</span>}
            </div>
            <h3>{project.name}</h3>
            <p className="project-card__type">{project.type}</p>
            <ul className="project-list">
              {project.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <div className="tag-list">
              {project.skills.map((skill) => (
                <span className="tag" key={skill}>
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
