import React, { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";
import myImage from "../assets/me.jpeg";
import "./Homepage.css";

const textToType = "I build beautiful websites.";

const Homepage = () => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypedText((prev) => prev + textToType[index]);
      index++;
      if (index === textToType.length) clearInterval(timer);
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="homepage">
      <div className="left-section">
        <h1>Taranpreet Kaur</h1>
        <h3 className="passion">{typedText}<span className="cursor">|</span></h3>
        <p>
          Passionate web developer creating responsive and modern websites.
        </p>
        <div className="contact-icons">
          <a href="mailto:taranpreet@example.com" title="Email">
            <FaEnvelope />
          </a>
          <a href="https://instagram.com/yourinsta" target="_blank" rel="noreferrer" title="Instagram">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer" title="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
        <a
          href="/Taranpreet-Kaur-Resume.pdf"
          download
          className="resume-btn"
          title="Download Resume"
        >
          <FaDownload /> Download Resume
        </a>
      </div>

      <div className="right-section">
        <img src={myImage} alt="Taranpreet Kaur" />
      </div>
    </div>
  );
};

export default Homepage;
