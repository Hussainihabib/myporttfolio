import React from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    {
      title: "Al Hussaini Garments",
      description: "A responsive garments website built using HTML, CSS, and JavaScript, showcasing products, designs, and brand details with a clean and user-friendly interface.",
      image: "/assets/ecommerce.png",
      codeLink: "https://github.com/Hussainihabib",
      demoLink: "https://hussainihabib.github.io/HABIB-HUSSAINI/",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Mern_Fitness Tracker",
      description: "A full-stack MERN fitness tracker that helps users monitor workouts, track progress, and maintain a healthy lifestyle through a clean, responsive, and user-friendly interface.",
      image: "/assets/dashboard.png",
      codeLink: "https://github.com/Hussainihabib",
      demoLink: "https://fitnesstracker-beta-five.vercel.app",
      tech: ["React+Vite", "Express.js", "Monogdb-Atlas","Node.js","Material UI"],
    },
    {
      title: "Nexus Aquarium",
      description: "Nexus Aquarium is a responsive aquarium website built using HTML, CSS, JavaScript, and Bootstrap, designed to showcase aquatic products and services with a clean, modern interface.",
      image: "/assets/portfolio.png",
      codeLink: "https://github.com/Hussainihabib",
      demoLink: "https://hussainihabib.github.io/aquariuamweb/index.html",
      tech: ["Html", "Javascript", "CSS","Bootstrap"],
    },
  ];

  return (
    <section id="portfolio" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        PORTFOLIO
      </motion.h2>

      {/* GRID */}
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="portfolio-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* IMAGE */}
            <div className="card-image">
              <img src={project.image} alt={project.title} />
            </div>

            {/* CONTENT */}
            <div className="card-content">
              <h3 className="card-title">{project.title}</h3>
              <p className="card-desc">{project.description}</p>

              <div className="card-tags">
                {project.tech.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>
            </div>

            {/* ACTIONS (BOTTOM FIXED) */}
            <div className="card-actions">
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View Code
              </a>

              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                View Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
