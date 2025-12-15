import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width for responsive menu button
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // mobile breakpoint
      if (window.innerWidth > 768) setOpen(false); // close menu on desktop
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth scroll handler
  const handleScroll = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="header fixed top-0 w-full z-50"
      style={{
        background: "rgba(15,18,36,0.85)",
        backdropFilter: "blur(10px)",
        padding: "18px 8%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Logo */}
      <div className="logo" style={{ color: "var(--accent)", fontSize: "22px", fontWeight: "800" }}>
        Habib
      </div>

      {/* Navigation */}
      <nav
        className={`nav ${open ? "open" : ""}`}
        style={{
          display: isMobile ? (open ? "flex" : "none") : "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: "26px",
          position: isMobile ? "absolute" : "static",
          top: isMobile ? "60px" : "auto",
          right: isMobile ? "8%" : "auto",
          background: isMobile ? "rgba(15,18,36,0.95)" : "transparent",
          padding: isMobile ? "16px" : "0",
          borderRadius: isMobile ? "12px" : "0",
        }}
      >
        <a href="#home" onClick={(e) => handleScroll(e, "#home")}>Home</a>
        <a href="#about" onClick={(e) => handleScroll(e, "#about")}>About</a>

        <a href="#skills" onClick={(e) => handleScroll(e, "#skills")}>Skills</a>
        <a href="#portfolio" onClick={(e) => handleScroll(e, "#portfolio")}>Portfolio</a>
        <a href="#resume" onClick={(e) => handleScroll(e, "#resume")}>Resume</a>
        <a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>Contact</a>
      </nav>

      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          style={{
            fontSize: "24px",
            color: "var(--accent)",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          ☰
        </button>
      )}
    </motion.header>
  );
}
