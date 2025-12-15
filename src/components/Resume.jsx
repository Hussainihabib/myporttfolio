import React from "react";
import { motion } from "framer-motion";

export default function Resume() {

  // Animation for resume cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="resume" className="section">
      <h2 className="section-title">RESUME</h2>

      <div className="resume-content-grid">

        {/* ================= EDUCATION ================= */}
        <div>
          <h3 className="column-title">Education</h3>

          <motion.div
            className="resume-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="card-year">2023 – 2026</span>
            <h4 className="card-title">
              Advanced Diploma in Software Engineering
            </h4>
            <p className="card-institution">Aptech Learning Pakistan</p>
            <p className="card-description">
              Completed an advanced professional diploma focused on software
              development, problem-solving skills, and modern web technologies.
            </p>
          </motion.div>

          <motion.div
            className="resume-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="card-year">2020 – 2022</span>
            <h4 className="card-title">
              Intermediate in Pre-Engineering
            </h4>
            <p className="card-institution">
              Govt. Superior Science College
            </p>
            <p className="card-description">
              Studied core Pre-Engineering subjects including Mathematics,
              Physics, and Chemistry to build a strong academic foundation.
            </p>
          </motion.div>

          <motion.div
            className="resume-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="card-year">Completed 2020</span>
            <h4 className="card-title">
              Matriculation in Computer Science
            </h4>
            <p className="card-institution">
              Sun Rise Children Academy
            </p>
            <p className="card-description">
              Built a strong base in computer studies, logical thinking, and
              basic programming concepts.
            </p>
          </motion.div>
        </div>

        
      </div>
    </section>
  );
}
