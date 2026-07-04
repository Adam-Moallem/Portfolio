export default function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      <div className="container">
        {(eyebrow || title) && (
          <div className="section__header">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {title && <h2>{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
