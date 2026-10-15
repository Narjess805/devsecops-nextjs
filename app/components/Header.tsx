export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <h1>Narjess Dabbech</h1>
        <p className="role">Étudiant(e) ingénieur · DevSecOps</p>
        <div className="header-actions">
          <a
            href="https://github.com/Narjess805"
            target="_blank"
            rel="noopener"
            className="btn btn-primary"
          >
            🐙 GitHub
          </a>
          <a href="mailto:narjessdabbech3@gmail.com" className="btn btn-outline">
            ✉️ Me contacter
          </a>
        </div>
      </div>
    </header>
  );
}
