import React from "react";
import "./Projects.css";

const projectsData = [
  {
    id: 1,
    title: "Awesome Task Tracker",
    description: "A web app that helps users track their tasks efficiently with deadlines and reminders.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/images/task-tracker.png",
    liveDemo: "https://live-demo-link.com",
    github: "https://github.com/yourusername/task-tracker",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "My personal portfolio website to showcase projects and skills.",
    technologies: ["React", "CSS", "Netlify"],
    image: "/images/portfolio.png",
    liveDemo: "https://your-portfolio-site.com",
    github: "https://github.com/yourusername/portfolio",
  },
  {
    id: 3,
    title: "E-commerce Store",
    description: "Full stack e-commerce store with payment integration and admin panel.",
    technologies: ["React", "Express", "Stripe"],
    image: "/images/ecommerce.png",
    liveDemo: "https://ecommerce-demo.com",
    github: "https://github.com/yourusername/ecommerce-store",
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <div className="projects-container">
      {projectsData.map(({ id, title, description, technologies, image, liveDemo, github }) => (
        <div key={id} className="project-card">
          <img className="project-image" src={image} alt={`${title} Screenshot`} />
          <div className="project-content">
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <div className="tech-badges">
              {technologies.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
