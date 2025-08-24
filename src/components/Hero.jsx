"use client"
// src/components/Hero.js
import React from 'react';
import '../styles/Hero.css'
import { FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: {
    scale: 0.95
  }
};

const Hero = () => {
  return (
    <motion.section 
      className="hero-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="hero-container">
        {/* Blog Title and Tagline */}
        <motion.div className="hero-text" variants={containerVariants}>
          <motion.h3 variants={itemVariants}>Thoughts on coding, startups, and growth</motion.h3>
  
        </motion.div>

        {/* Subscribe Form */}
        <motion.form 
          className="subscribe-form"
          variants={itemVariants}
          onSubmit={(e) => { e.preventDefault(); alert("Subscribed! 🚀"); }}
        >
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="subscribe-input"
            required
          />
          <motion.button 
            type="submit" 
            className="hero-button solid"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FiMail className="btn-icon" />
            Subscribe
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
}

export default Hero;
