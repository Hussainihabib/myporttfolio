import React, { useRef, useState } from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_4wbqrno",
      "template_gte3wvk",
      form.current,
      "KZKESF0Adb6AQlhQ_"
    ).then(
      () => {
        setStatus("Message sent successfully!");
        form.current.reset();
        setTimeout(() => setStatus(""), 3000);
      },
      () => {
        setStatus("Failed to send message.");
        setTimeout(() => setStatus(""), 3000);
      }
    );
  };

  return (
    <section id="contact" className="section">
      <h2 className="section-title">CONTACT</h2>

      <div className="contact-wrapper">
        {/* ================= FORM ================= */}
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <input name="user_name" placeholder="Your Name" className="input" />
          <input name="user_email" placeholder="Your Email" className="input" />
          <input name="subject" placeholder="Subject" className="input full" />
          <textarea
            name="message"
            rows="5"
            placeholder="Message"
            className="input full"
          />

          {/* FIXED BUTTON */}
          <motion.button
            type="submit"
            className="btn-change" 
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            Send Message
          </motion.button>

          {status && <p className="form-status">{status}</p>}
        </form>

        {/* ================= CONTACT INFO + SOCIALS ================= */}
        <div className="contact-info">
          <h4>Contact Info</h4>

          <a href="mailto:habib033hussaini@gmail.com" className="info-item">
            <FaEnvelope /> habib033hussaini@gmail.com
          </a>

          <a href="tel:+923703242401" className="info-item">
            <FaPhoneAlt /> +92 370 3242401
          </a>

          <div className="info-item">
            <FaMapMarkerAlt /> Karachi, Pakistan
          </div>

          {/* SOCIAL ICONS MOVED HERE */}
          <div className="info-socials">
            <a href="https://www.linkedin.com/in/habib-hussaini-a3b78839a/" className="info-item" target="_blank" rel="noreferrer">  
              <FaLinkedinIn />Linkedin
            </a>
            <a href="https://github.com/Hussainihabib" className="info-item" target="_blank" rel="noreferrer">  
              <FaGithub />Github
            </a>
            <a href="https://www.facebook.com/habib.hussaini.54584" className="info-item" target="_blank" rel="noreferrer">  
              <FaFacebookF /> Facebook
            </a>
          </div>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <p className="copyright">
        © Habib Hussaini 2025. All Rights Reserved.
      </p>
    </section>
  );
}
