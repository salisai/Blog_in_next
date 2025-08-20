"use client";
import { motion } from "framer-motion";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

const AboutMe = () => {
  return (
    <motion.section
      className="flex justify-center items-center h-screen text-white text-center px-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-[1000px] w-full">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-3"
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-base md:text-lg text-[#c0c0c0] leading-relaxed mt-3"
          variants={itemVariants}
        >
          I am a full stack AI developer and providing AI solutions all over the
          world.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default AboutMe;
