import React from "react";
import { motion } from "framer-motion";

export default function Hero() {

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="home" className="hero">

      {/* Text Section */}
      <motion.div
        className="hero-text"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h5>Hello, I'm</h5>
        <h1>Habib Hussaini</h1>
        <div className="role">Full Stack Developer</div>

        <p className="hero-desc">
          I build clean, scalable and professional web applications using
          modern technologies.
        </p>

        <div className="hero-buttons">
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.button>

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

      {/* Image Section */}
      <motion.div
        className="hero-image"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img src="/assets/hero.png" alt="profile" />
      </motion.div>

    </section>
  );
}
