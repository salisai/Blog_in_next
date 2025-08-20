"use client";
import { FiMail, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: { scale: 0.95 },
};

const Hero = () => {
  return (
    <motion.section
      className="flex justify-center items-center h-screen text-white text-center px-5"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-[1000px] w-full">
        {/* Name and Profession */}
        <motion.div className="hero-text" variants={containerVariants}>
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white"
            variants={itemVariants}
          >
            Sayed Ali Shah
          </motion.h1>

          <motion.h3
            className="text-2xl md:text-3xl font-medium text-[#c0c0c0] mb-5"
            variants={itemVariants}
          >
            Full Stack Developer
          </motion.h3>

          <motion.p
            className="text-base md:text-lg text-[#c0c0c0] leading-relaxed mt-5"
            variants={itemVariants}
          >
            Passionate about building responsive, scalable web applications with
            a keen eye for detail. I specialize in both front-end and back-end
            development, ensuring seamless user experiences and high-quality
            performance.
          </motion.p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex justify-center gap-5 flex-wrap mt-8"
          variants={itemVariants}
        >
          {/* Solid Button */}
          <motion.a
            href="mailto:sayed@example.com"
            className="relative flex items-center justify-center gap-2 px-5 py-5 min-w-[180px] rounded-lg text-base font-semibold text-white bg-[#111] border-2 border-[#111] overflow-hidden transition-all duration-300 group"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-white/10 scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left"></span>
            <FiMail className="text-lg z-10" />
            <span className="z-10">Get In Touch</span>
          </motion.a>

          {/* Outline Button */}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center gap-2 px-5 py-5 min-w-[180px] rounded-lg text-base font-semibold text-white border-2 border-gray-400 overflow-hidden transition-all duration-300 group"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-white/10 scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left"></span>
            <FiExternalLink className="text-lg z-10" />
            <span className="z-10">View Resume</span>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
