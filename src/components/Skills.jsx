import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaTools,
  FaGitAlt,
  FaPython,
  FaJava,
} from "react-icons/fa";

import "./Skills.css";

const skillsData = [
  {
    category: "Frontend Development",
    icon: <FaHtml5 />,
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery", "AJAX"],
  },
  {
    category: "Backend Technologies",
    icon: <FaDatabase />,
    skills: ["Basic PHP", "MySQL"],
  },
  {
    category: "Full-Stack Development (MERN Stack)",
    icon: <FaReact />,
    skills: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js (currently learning)",
    ],
  },
  {
    category: "Programming Languages",
    icon: <FaCode />,
    skills: ["C++", "Java (basic)", "Python (basic)", "JavaScript"],
  },
  {
    category: "Data Structures & Algorithms",
    icon: <FaJsSquare />,
    skills: [
      "Good grasp of core data structures and algorithms",
      "Regularly practicing problem-solving",
    ],
  },
  {
    category: "Tools & Development Environments",
    icon: <FaTools />,
    skills: ["Git", "GitHub", "VS Code", "Chrome DevTools", "Postman"],
  },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {skillsData.map((section, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-header">
              <span className="skill-icon">{section.icon}</span>
              <h3>{section.category}</h3>
            </div>
            <ul className="skill-list">
              {section.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
