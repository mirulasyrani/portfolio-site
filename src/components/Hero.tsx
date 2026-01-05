import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function Hero() {
  const titles = ["Software Engineer", "Quantity Surveyor", "Web Developer", "Digital Marketer"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000); // Change title every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollingText = "Creativity is my craft • Abstract thinking is my passion • Building the future • ";
  const repeatedText = scrollingText.repeat(3);

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
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 md:px-12">
      {/* Scrolling text banner */}
      <div className="absolute top-32 left-0 w-full overflow-hidden border-y border-gray-200 dark:border-gray-800 py-4 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="flex whitespace-nowrap animate-scroll">
          <span className="text-2xl md:text-3xl font-light tracking-wide text-gray-400 dark:text-gray-600">
            {repeatedText}
          </span>
          <span className="text-2xl md:text-3xl font-light tracking-wide text-gray-400 dark:text-gray-600">
            {repeatedText}
          </span>
        </div>
      </div>
      
      {/* Main content */}
      <motion.div 
        className="max-w-4xl mx-auto text-center space-y-8 mt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-4">
          {/* Availability Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200"
            variants={itemVariants}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-sm text-orange-600 font-medium">Available for opportunities</span>
          </motion.div>

          <div className="text-6xl md:text-8xl font-bold tracking-tight text-gray-900 dark:text-white pb-6 mb-2 min-h-[5rem] md:min-h-[7rem] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={titles[currentTitleIndex]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                style={{ lineHeight: '1.2', overflow: 'visible' }}
              >
                {titles[currentTitleIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            A passionate full-stack developer with expertise in modern web technologies.
            Particularly interested in the intersection of design and engineering.
          </motion.p>
        </div>
        
        <motion.div className="pt-8" variants={itemVariants}>
          <p className="text-lg text-gray-500 mb-6">
            Currently building full-stack applications with React, Node.js, Spring Boot, and PostgreSQL.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a 
              href="#about" 
              className="inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-medium transition-all relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">About me</span>
            </motion.a>
            <motion.a 
              href="/Mohd Amirul Asyrani - Resume.pdf"
              download="Mirul_Asyrani_Resume.pdf"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-orange-500 text-white px-8 py-3 rounded-full font-medium relative overflow-hidden group shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(249, 115, 22, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              aria-label="Download Resume"
            >
              <span className="relative z-10">Download Resume</span>
              <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500 font-medium">Scroll</span>
        <motion.div 
          className="w-px h-12 bg-gradient-to-b from-blue-600 to-orange-500"
          animate={{ scaleY: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
