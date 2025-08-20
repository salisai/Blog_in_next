"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ScrollProgress from "./ScrollProgress";
import menu_icon from "../../public/menu_icon.svg"; // place your menu icon in /public

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  // Check for mobile view
  useEffect(() => {
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    checkMobileView();
    window.addEventListener('resize', checkMobileView);
    return () => window.removeEventListener('resize', checkMobileView);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('nav') === null) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobileMenuOpen]);

  // Animation variants
  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  return (
    <>
      <ScrollProgress />
      <nav className="fixed top-0 left-0 w-full bg-[#1e1e1e] text-white px-5 py-[15px] z-[100] shadow-[0_0_1px_0_#d0d0d0]">
        <div className="flex justify-between items-center max-w-[1200px] mx-auto">
          {/* Desktop Menu (static) */}
          <ul className="hidden md:flex list-none m-0 p-0">
            <li className="mx-[15px]">
              <a 
                href="#home" 
                className="text-[#c0c0c0] no-underline text-base font-medium transition-colors duration-300 hover:text-white relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Home
              </a>
            </li>
            <li className="mx-[15px]">
              <a 
                href="#about" 
                className="text-[#c0c0c0] no-underline text-base font-medium transition-colors duration-300 hover:text-white relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                About
              </a>
            </li>
            <li className="mx-[15px]">
              <a 
                href="#projects" 
                className="text-[#c0c0c0] no-underline text-base font-medium transition-colors duration-300 hover:text-white relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Projects
              </a>
            </li>
            <li className="mx-[15px]">
              <a 
                href="#blog" 
                className="text-[#c0c0c0] no-underline text-base font-medium transition-colors duration-300 hover:text-white relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Blog
              </a>
            </li>
            <li className="mx-[15px]">
              <a 
                href="#contact" 
                className="text-[#c0c0c0] no-underline text-base font-medium transition-colors duration-300 hover:text-white relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu with Animation */}
          {isMobileView && (
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.ul
                  className="flex md:hidden fixed top-[70px] left-0 w-full bg-[#1e1e1e] flex-col py-4 shadow-[0_5px_10px_rgba(0,0,0,0.2)] list-none m-0 p-0 origin-top-center"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={mobileMenuVariants}
                >
                  <motion.li variants={navItemVariants} className="py-[0.8rem] px-8 list-none text-center">
                    <a 
                      href="#home" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full text-[#c0c0c0] no-underline text-base font-medium transition-colors duration-300 hover:text-white relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                    >
                      Home
                    </a>
                  </motion.li>
                  <motion.li variants={navItemVariants} className="py-[0.8rem] px-8 list-none text-center">
                    <a 
                      href="#about" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full text-[#c0c0c0] no-underline text-base font-medium transition-colors duration-300 hover:text-white relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                    >
                      About
                    </a>
                  </motion.li>
                  <motion.li variants={navItemVariants} className="py-[0.8rem] px-8 list-none text-center">
                    <a 
                      href="#projects" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full text-[#c0c0c0] no-underline text-base font-medium transition-colors duration-300 hover:text-white relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                    >
                      Projects
                    </a>
                  </motion.li>
                  <motion.li variants={navItemVariants} className="py-[0.8rem] px-8 list-none text-center">
                    <a 
                      href="#blog" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full text-[#c0c0c0] no-underline text-base font-medium transition-colors duration-300 hover:text-white relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                    >
                      Blog
                    </a>
                  </motion.li>
                  <motion.li variants={navItemVariants} className="py-[0.8rem] px-8 list-none text-center">
                    <a 
                      href="#contact" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full text-[#c0c0c0] no-underline text-base font-medium transition-colors duration-300 hover:text-white relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                    >
                      Contact
                    </a>
                  </motion.li>
                </motion.ul>
              )}
            </AnimatePresence>
          )}

          <div className="hidden max-md:flex cursor-pointer z-[101]" onClick={toggleMobileMenu}>
            <motion.img 
              src={menu_icon} 
              alt="Hamburger Menu" 
              className="w-[30px] h-[30px] invert brightness-100 transition-transform duration-200"
              animate={{
                rotate: isMobileMenuOpen ? 90 : 0,
                opacity: isMobileMenuOpen ? 0.8 : 1
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;