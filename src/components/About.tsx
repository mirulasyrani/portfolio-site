import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <motion.div 
        className="space-y-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-5xl md:text-7xl font-bold mb-12 leading-tight text-blue-600 dark:text-orange-500"
          variants={itemVariants}
        >
          About Me
        </motion.h2>
        
        <div className="space-y-8 text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
          <motion.p variants={itemVariants}>
            I'm a self-taught full-stack developer with a unique background in construction and cost engineering.
            Transitioning into tech, I've built full-stack applications using modern technologies.
          </motion.p>
          
          <motion.p variants={itemVariants}>
            My approach blends structured workflows, stakeholder collaboration, and an eye for detail—skills 
            refined over 4+ years in project delivery roles. I'm passionate about learning, building, and 
            solving real-world problems through code.
          </motion.p>
          
          <motion.p variants={itemVariants}>
            I believe that software development and design can be combined to create truly transformative 
            experiences that make a positive impact.
          </motion.p>
        </div>
        
        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-gray-200 dark:border-gray-800"
          variants={itemVariants}
        >
          {[
            { number: "10+", label: "Projects Built" },
            { number: "5+", label: "Technologies" },
            { number: "4+", label: "Years Experience" },
            { number: "100%", label: "Committed" }
          ].map((stat, idx) => (
            <motion.div 
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-blue-600 dark:text-orange-400" style={{ WebkitTextFillColor: 'currentColor' }}>
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="pt-12"
          variants={itemVariants}
        >
          <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-6 font-semibold">Currently Exploring</p>
          <div className="flex flex-wrap gap-3">
            {["Spring Boot", "TypeScript", "GraphQL", "Next.js", "System Design"].map((skill, idx) => (
              <motion.span 
                key={skill} 
                className="border-2 border-gray-200 dark:border-gray-700 px-6 py-3 rounded-full text-sm cursor-default text-gray-700 dark:text-gray-300 font-medium bg-white dark:bg-gray-800"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "rgb(59 130 246)",
                  borderColor: "rgb(59 130 246)",
                  color: "white",
                  transition: { duration: 0.2 }
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
