import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "../data/projectsData";
import ProjectCard from "./ProjectCards";

const allTechFilters = ["All", "React", "Node.js", "PostgreSQL", "Tailwind CSS", "Spring Boot", "TypeScript"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.tech.includes(filter));

  return (
    <section className="max-w-7xl mx-auto">
      <motion.h2 
        className="text-5xl md:text-7xl font-bold mb-16 leading-tight text-blue-600 dark:text-orange-500"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      {/* Filter buttons */}
      <motion.div 
        className="flex flex-wrap gap-3 mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        {allTechFilters.map((tech, idx) => (
          <motion.button
            key={tech}
            onClick={() => setFilter(tech)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === tech
                ? "bg-gradient-to-r from-blue-600 to-orange-500 text-white shadow-lg"
                : "border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 bg-white dark:bg-gray-800"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {tech}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects grid */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={filter}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      
      {filteredProjects.length === 0 && (
        <motion.div 
          className="text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-500 text-lg font-light">No projects found with this filter.</p>
        </motion.div>
      )}
    </section>
  );
}
