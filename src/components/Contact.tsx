import { motion } from "framer-motion";

export default function Contact() {
  const currentTime = new Date().toLocaleTimeString('en-MY', { 
    timeZone: 'Asia/Kuala_Lumpur',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true 
  });

  return (
    <div className="max-w-5xl mx-auto">
      <div className="space-y-16">
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold leading-tight text-blue-600 dark:text-orange-500">
            Let's work together
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl font-light">
            I'm open to freelance work, collaborations, or full-time opportunities.
            Feel free to reach out if you'd like to discuss a project or just chat about tech.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.a 
              href="mailto:mirulasyrani@gmail.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-orange-500 text-white px-10 py-4 rounded-full font-medium text-lg relative overflow-hidden group shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(249, 115, 22, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <span className="relative z-10">Email me</span>
              <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/amirulasyrani"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-10 py-4 rounded-full font-medium text-lg relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <span className="relative z-10">LinkedIn</span>
              <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          className="border-t border-gray-200 dark:border-gray-800 pt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="grid md:grid-cols-3 gap-12 text-sm">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3 font-semibold">Contact</p>
              <a href="mailto:mirulasyrani@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-all duration-300 font-medium">
                mirulasyrani@gmail.com
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3 font-semibold">Local Time</p>
              <p className="text-gray-700 dark:text-gray-300 font-medium">{currentTime} GMT+8</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3 font-semibold">Connect</p>
              <div className="space-y-2">
                {[
                  { name: "Github", url: "https://github.com/mirulasyrani" },
                  { name: "LinkedIn", url: "https://linkedin.com/in/amirulasyrani" },
                  { name: "Instagram", url: "https://instagram.com/mirulasyrani" },
                  { name: "TikTok", url: "https://tiktok.com/@mirulasyrani" }
                ].map((social, idx) => (
                  <motion.a 
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
