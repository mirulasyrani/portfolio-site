import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { projectsData } from "../data/projectsData";
import ProjectCard from "./ProjectCards"; // match actual file name


const allTechFilters = ["All", "React", "Node.js", "PostgreSQL", "Tailwind CSS"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.tech.includes(filter));

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Projects</h2>

      {/* Filter buttons */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {allTechFilters.map((tech) => (
          <button
            key={tech}
            onClick={() => setFilter(tech)}
            className={`px-4 py-2 rounded font-semibold ${
              filter === tech
                ? "bg-emerald-500 text-black shadow-lg"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            } transition-colors duration-300`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
