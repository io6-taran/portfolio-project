import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>If you’d like to work together or just want to say hello, feel free to reach out!</p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="6" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-socials">
          <a href="mailto:your.email@example.com">📧 Email</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">💼 LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">🐱 GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
