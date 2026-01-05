import React, { useState, useRef } from "react";
import type { Project } from "../data/projectsData";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const {
    id,
    title,
    description,
    tech,
    image,
    images = [],
    github,
    demo,
  } = project;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const handleNext = () => {
    if (images.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    if (images.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      touchStartX.current = e.touches[0].clientX;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const changedTouch = e.changedTouches[0];
    if (!changedTouch) return;

    const deltaX = changedTouch.clientX - touchStartX.current;
    if (deltaX > 50) handlePrev();
    else if (deltaX < -50) handleNext();

    touchStartX.current = null;
  };

  const currentImage = images[currentIndex] ?? null;

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-delay={id * 100}
        className="group cursor-pointer"
        onClick={() => image && setIsModalOpen(true)}
      >
        {/* Image */}
        {image && (
          <div className="relative overflow-hidden rounded-xl mb-6 aspect-video bg-white/[0.02] border border-white/5">
            <img
              src={image}
              alt={`${title} screenshot`}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
          </div>
        )}

        {/* Title */}
        <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 text-base mb-6 leading-relaxed font-light">{description}</p>

        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-full text-xs text-gray-600 dark:text-gray-400 font-light bg-white dark:bg-gray-800"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-4 text-sm font-light">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-gray-400 hover:text-white transition-colors underline"
            >
              Live Demo
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-gray-400 hover:text-white transition-colors underline"
            >
              Source Code
            </a>
          )}
        </div>
      </div>

      {/* Modal with swipe & animation */}
      <AnimatePresence>
        {isModalOpen && currentImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <div
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Close button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute z-50 top-2 right-2 border border-white/20 bg-black/80 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <span className="text-white text-xl">&times;</span>
              </button>

              {/* Image */}
              <motion.img
                key={`image-${currentIndex}`}
                src={currentImage}
                alt={`${title} preview ${currentIndex + 1}`}
                className="w-full h-full object-contain"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              />

              {/* Navigation buttons */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 border border-white/20 bg-black/80 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-all z-50"
                    aria-label="Previous image"
                  >
                    <span className="text-white text-xl">←</span>
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 border border-white/20 bg-black/80 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-all z-50"
                    aria-label="Next image"
                  >
                    <span className="text-white text-xl">→</span>
                  </button>
                  
                  {/* Image counter */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 border border-white/20 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <span className="text-white text-xs md:text-sm font-medium">
                      {currentIndex + 1} / {images.length}
                    </span>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
