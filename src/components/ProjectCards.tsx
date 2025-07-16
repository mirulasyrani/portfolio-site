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
    details,
    tech,
    image,
    images = [], // fallback to empty array
    icons,
    github,
    demo,
  } = project;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const techColors: Record<string, string> = {
    React: "bg-cyan-500",
    "Node.js": "bg-green-500",
    PostgreSQL: "bg-indigo-500",
    "Tailwind CSS": "bg-sky-500",
  };

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

    const deltaX = e.changedTouches[0]?.clientX - touchStartX.current;
    if (deltaX > 50) handlePrev();
    else if (deltaX < -50) handleNext();

    touchStartX.current = null;
  };

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-delay={id * 100}
        className="bg-gray-900 border border-emerald-700 rounded-xl p-6 shadow-md hover:shadow-xl hover:ring-2 hover:ring-emerald-400 hover:shadow-emerald-500/20 transform hover:scale-[1.03] transition-all duration-300"
      >
        {image && (
          <img
            src={image}
            alt={`${title} screenshot`}
            onClick={() => setIsModalOpen(true)}
            className="w-full h-40 object-cover rounded-md mb-4 border border-gray-700 cursor-pointer hover:opacity-90"
          />
        )}

        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="text-gray-300 mt-2">{description}</p>

        {details?.length > 0 && (
          <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1">
            {details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((t) => (
            <span
              key={t}
              className={`${
                techColors[t] || "bg-gray-700"
              } text-black px-2 py-1 rounded text-xs font-semibold`}
            >
              {t}
            </span>
          ))}
        </div>

        {icons && (
          <div className="flex gap-2 mt-2 text-emerald-400 text-xl">
            {icons.map((Icon, i) => (
              <div key={i}>{React.createElement(Icon)}</div>
            ))}
          </div>
        )}

        <div className="mt-4 flex gap-4">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              Live Demo
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              View Source Code
            </a>
          )}
        </div>
      </div>

      {/* Modal with swipe & animation */}
      <AnimatePresence>
        {isModalOpen && images.length > 0 && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <div
              className="relative max-w-4xl w-full px-4"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* ❌ Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute z-50 top-4 right-6 text-white text-4xl font-bold hover:text-emerald-400"
              >
                &times;
              </button>

              {/* 🖼️ Image Preview */}
              <motion.img
                key={images[currentIndex]}
                src={images[currentIndex]}
                alt={`${title} preview ${currentIndex + 1}`}
                className="w-full max-h-[80vh] object-contain rounded-lg z-10"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.4 }}
              />

              {/* ⬅️ Arrows */}
              <div className="absolute inset-y-0 left-2 flex items-center z-50">
                <button
                  onClick={handlePrev}
                  className="text-white text-4xl font-bold hover:text-emerald-400"
                >
                  &#8592;
                </button>
              </div>
              <div className="absolute inset-y-0 right-2 flex items-center z-50">
                <button
                  onClick={handleNext}
                  className="text-white text-4xl font-bold hover:text-emerald-400"
                >
                  &#8594;
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
