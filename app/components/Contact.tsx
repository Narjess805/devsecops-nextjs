export default function Contact() {
  return (
    <section className="section">
      <h2 className="section-title">
        <span className="icon">📬</span> Contact
      </h2>

      <div className="contact-grid">
        <a
          href="mailto:narjessdabbech3@gmail.com"
          className="contact-card"
        >
          <span className="contact-icon">✉️</span>
          <div className="contact-info">
            <p className="contact-label">Email</p>
            <p className="contact-value">narjessdabbech3@gmail.com</p>
          </div>
        </a>

        <a
          href="https://github.com/Narjess805"
          target="_blank"
          rel="noopener"
          className="contact-card"
        >
          <span className="contact-icon">🐙</span>
          <div className="contact-info">
            <p className="contact-label">GitHub</p>
            <p className="contact-value">github.com/Narjess805</p>
          </div>
        </a>
      </div>
    </section>
  );
}
