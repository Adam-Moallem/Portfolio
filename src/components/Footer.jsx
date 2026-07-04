import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>{profile.name}</span>
        <span>Software Developer | Full-Stack Developer</span>
      </div>
    </footer>
  );
}
