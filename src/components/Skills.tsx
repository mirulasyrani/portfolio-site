import { motion } from "framer-motion";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Spring Boot", "Java", "Python", "GraphQL"],
    },
    {
      title: "Database & Tools",
      skills: ["PostgreSQL", "JWT", "Git & GitHub", "Next.js", "Vite", "Yarn", "Docker"],
    },
    {
      title: "Deployment",
      skills: ["Cloudflare Pages", "Railway", "Vercel"],
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <motion.h2 
        className="text-5xl md:text-7xl font-bold mb-16 leading-tight text-blue-600 dark:text-orange-500"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Skills & Technologies
      </motion.h2>
      
      <motion.div 
        className="grid gap-16 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            className="space-y-6"
            variants={cardVariants}
          >
            <h3 className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 font-bold">{category.title}</h3>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIdx) => (
                <motion.span 
                  key={skill} 
                  className="border-2 border-gray-200 dark:border-gray-700 px-5 py-3 rounded-full text-base cursor-default font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + skillIdx * 0.05 }}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "rgb(249 115 22)",
                    borderColor: "rgb(249 115 22)",
                    color: "white",
                    y: -5,
                    boxShadow: "0 10px 30px -10px rgba(249, 115, 22, 0.5)",
                    transition: { duration: 0.2 }
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div 
        className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-gray-600 dark:text-gray-400 text-center font-light">
          Always learning and exploring new technologies to build better solutions.
        </p>
      </motion.div>
    </div>
  );
}
