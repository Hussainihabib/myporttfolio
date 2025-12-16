import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

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

  // Scroll event to track active section
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const onScroll = () => {
      let current = "#home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = `#${section.id}`;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth scroll handler
  const handleScroll = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
      setActiveSection(target); // also set on click
    }
  };

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#resume", label: "Resume" },
    { href: "#contact", label: "Contact" },
  ];

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
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            className={activeSection === link.href ? "active" : ""}
            style={{
              color: activeSection === link.href ? "var(--accent)" : "var(--text-muted)",
              position: "relative",
              fontWeight: 500,
              textDecoration: "none",
              transition: "color 0.3s",
            }}
          >
            {link.label}
            {/* Underline for active */}
            <span
              style={{
                position: "absolute",
                left: 0,
                bottom: -6,
                height: 2,
                width: activeSection === link.href ? "100%" : "0",
                background: "var(--accent)",
                borderRadius: 2,
                transition: "width 0.3s ease",
              }}
            />
          </a>
        ))}
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
