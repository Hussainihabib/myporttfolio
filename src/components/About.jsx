import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section">
      <motion.h2
        className="section-title"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        ABOUT ME
      </motion.h2>

      <motion.div
        className="about-container flex flex-col md:flex-row items-center gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Image */}
        <motion.img
          src="/assets/about.png"
          alt="about"
          className="w-full md:w-1/2 rounded-lg"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Text Content */}
        <motion.div
          className="flex-1"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-bold mb-2">Habib Hussaini</h3>
          <div className="role mb-4" id="aboutcolor">MERN Stack Developer</div>

          <p className="mb-4">
            I am a dedicated MERN Stack Developer focused on building modern, scalable, and user-centric web applications. With strong hands-on experience in developing RESTful APIs and responsive front-end interfaces, I enjoy transforming ideas into efficient and reliable digital solutions.
            <br /><br />
          
I have a strong interest in clean code, performance optimization, and modern development practices. I continuously work on improving my skills by exploring new technologies, building real-world projects, and learning from the developer community. I believe consistency, curiosity, and continuous improvement are key to creating impactful web experiences
          </p>

          <div className="meta-grid grid grid-cols-2 gap-4 mb-6">
            <div><strong id="aboutcolor">Email:</strong> <span>habib033hussaini@gmail.com</span></div>
            <div><strong id="aboutcolor">Phone:</strong> <span>03703242401</span></div>
            <div><strong id="aboutcolor">Location:</strong> <span>Malir karachi</span></div>
          </div>
<div className="hero-buttons">
  <motion.a
    href="/Habib-Hussaini-CV.pdf"
    target="_blank"
    className="btn-primary"
    whileHover={{ scale: 1.05 }}
  >
    View CV
  </motion.a>

</div>

        </motion.div>
      </motion.div>
    </section>
  );
}
