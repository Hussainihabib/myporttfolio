import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiMaterialdesign,
  SiJavascript,
  SiMysql,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        MY SKILLS
      </motion.h2>

      <div className="skill-cards-grid">
        {/* ================= FRONTEND ================= */}
        <motion.div
          className="skill-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="card-header">
            <FaReact className="card-icon" />
            <h3 className="card-title">Frontend</h3>
          </div>

          <p className="card-description">
            Building responsive and interactive user interfaces using modern
            frontend technologies.
          </p>

          <div className="card-tags">
            <span>React</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Tailwind</span>
            <span>Bootstrap</span>
            <span>Material UI</span>
            <span>JavaScript</span>
          </div>
        </motion.div>

        {/* ================= BACKEND ================= */}
        <motion.div
          className="skill-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="card-header">
            <FaNodeJs className="card-icon" />
            <h3 className="card-title">Backend</h3>
          </div>

          <p className="card-description">
            Creating secure and scalable server-side applications and APIs.
          </p>

          <div className="card-tags">
            <span>Node.js</span>
            <span>Express</span>
            <span>REST API</span>
            <span>JWT</span>
          </div>
        </motion.div>

        {/* ================= DATABASE ================= */}
        <motion.div
          className="skill-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="card-header">
            <FaDatabase className="card-icon" />
            <h3 className="card-title">Database</h3>
          </div>

          <p className="card-description">
            Designing efficient databases focused on performance and reliability.
          </p>

          <div className="card-tags">
            <span>MySQL</span>
            <span>MongoDB</span>
          </div>
        </motion.div>

        {/* ================= TOOLS ================= */}
        <motion.div
          className="skill-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="card-header">
            <FaGitAlt className="card-icon" />
            <h3 className="card-title">Tools & Deployment</h3>
          </div>

          <p className="card-description">
            Tools and platforms used for version control, design, and deployment.
          </p>

          <div className="card-tags">
            <span>Git</span>
            <span>GitHub</span>
            <span>Postman</span>
            <span>VS Code</span>
            <span>Figma</span>
            <span>Vercel</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
