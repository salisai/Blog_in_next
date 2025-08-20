"use client";
import React from 'react';
import "../styles/Footer.css"
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      duration: 0.5
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  },
  hover: {
    y: -3,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const Footer = () => {
  return (
    <motion.footer 
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <div className="footer-container">
        <motion.p variants={itemVariants}>
          © 2025 Sayed Ali Shah. All rights reserved.
        </motion.p>
        
        <motion.div className="footer-links" variants={containerVariants}>
          <motion.a 
            href="https://www.linkedin.com/in/your-profile" 
            target="_blank" 
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover="hover"
          >
            LinkedIn
          </motion.a>
          
          <motion.a 
            href="https://github.com/your-profile" 
            target="_blank" 
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover="hover"
          >
            GitHub
          </motion.a>
          
          <motion.a 
            href="https://www.instagram.com/your-profile" 
            target="_blank" 
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover="hover"
          >
            Instagram
          </motion.a>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;