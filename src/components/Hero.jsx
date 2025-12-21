import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {

  const roles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Frontend Developer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (charIndex < currentRole.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentRole.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, 80); // typing speed

      return () => clearTimeout(typingTimeout);
    } else {
      const pauseTimeout = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1500); // pause after full text

      return () => clearTimeout(pauseTimeout);
    }
  }, [charIndex, roleIndex]);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="home" className="hero">

      <motion.div
        className="hero-text"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h5>Hello, I'm</h5>
        <h1>Habib Hussaini</h1>

        {/* 🔥 TYPING EFFECT */}
        <div className="role">
          <span className="typing">
            {displayText}
            <span className="cursor">|</span>
          </span>
        </div>

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
