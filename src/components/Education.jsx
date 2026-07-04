import { GraduationCap, Languages, UsersRound } from "lucide-react";
import Section from "./Section";
import { education, languages, organizations } from "../data/portfolio";

export default function Education() {
  return (
    <>
      <Section id="education" eyebrow="Education" title="Academic background">
        <div className="education-grid">
          {education.map((item) => (
            <article className="education-card" key={item.degree}>
              <GraduationCap size={24} />
              <div>
                <div className="item-heading">
                  <div>
                    <h3>{item.school}</h3>
                    <p>{item.degree}</p>
                  </div>
                  <span>{item.period}</span>
                </div>
                <p className="coursework">{item.coursework}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="organizations" eyebrow="Organizations" title="Community involvement">
        <div className="split-grid">
          {organizations.map((item) => (
            <article className="info-card" key={item.name}>
              <UsersRound size={24} />
              <div className="item-heading">
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.role}</p>
                </div>
                <span>{item.period}</span>
              </div>
              <ul className="project-list">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}

          <article className="info-card">
            <Languages size={24} />
            <h3>Languages</h3>
            <div className="language-list">
              {languages.map((language) => (
                <div className="language-row" key={language.name}>
                  <span>{language.name}</span>
                  <strong>{language.level}</strong>
                </div>
              ))}
            </div>
          </article>
        </div>
      </Section>
    </>
  );
}
