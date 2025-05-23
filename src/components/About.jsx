import React from 'react';
import './About.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaGraduationCap, FaLightbulb, FaUserAlt } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  return (
    <div className="about-container">
      {/* Section 1: Hero */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Hi, I'm Taranpreet Kaur</h1>
          <TypeAnimation
            sequence={['Web Developer 💻', 2000, 'Creative Designer 🎨', 2000, 'Tech Enthusiast 🚀', 2000]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
          />
          <div className="social-icons">
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="mailto:your@email.com"><FaEnvelope /></a>
          </div>
          <a href="/resume.pdf" className="resume-btn" download>Download Resume</a>
        </div>
        <div className="hero-image">
          <img src="/assets/myimage.jpg" alt="Taranpreet" />
        </div>
      </section>

      {/* Section 2: Card Layout */}
      <section className="cards-section">
        <div className="card">
          <FaUserAlt className="card-icon" />
          <h3>About Me</h3>
          <p>Passionate web developer with a creative mind and love for building sleek web interfaces.</p>
        </div>
        <div className="card">
          <FaGraduationCap className="card-icon" />
          <h3>Education</h3>
          <p>B.Tech in Computer Science from XYZ University.</p>
        </div>
        <div className="card">
          <FaLightbulb className="card-icon" />
          <h3>Fun Facts</h3>
          <p>I love solving puzzles and listening to lo-fi while coding.</p>
        </div>
        <div className="card">
          <FaUserAlt className="card-icon" />
          <h3>Vision</h3>
          <p>To become a full-stack developer and build meaningful web solutions.</p>
        </div>
      </section>

      
     
    </div>
  );
};

export default About;
