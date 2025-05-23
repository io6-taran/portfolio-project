import React from "react";
import "./Projects.css";

const projectData = [
  {
    title: "Student Network Platform",
    description: "A full-stack social platform for students using React, Node.js, MySQL.",
    tech: ["React", "Node.js", "MySQL"],
    image: "https://via.placeholder.com/600x300?text=Student+Network",
  },
  {
    title: "Weather App",
    description: "Real-time weather app using React and OpenWeatherMap API.",
    tech: ["React", "API", "CSS"],
    image: "https://via.placeholder.com/600x300?text=Weather+App",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and styled-components.",
    tech: ["React", "CSS", "Bootstrap"],
    image: "https://via.placeholder.com/600x300?text=Portfolio+Website",
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-intro">
        <h2>My Projects</h2>
        <p>
          Welcome to the projects section! Here, you'll find a collection of my personal and collaborative projects.
          These projects are built using technologies like{" "}
          <strong>React, Node.js, MySQL, and Bootstrap</strong>.
          Each one reflects my skills, creativity, and problem-solving capabilities in full-stack web development.
        </p>
      </div>

      <div className="project-cards-container">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((techItem, i) => (
                  <span key={i} className="tech-badge">{techItem}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
