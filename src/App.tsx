import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="relative">
      {/* Skip to content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-gradient-to-r focus:from-blue-600 focus:to-orange-500 focus:text-white focus:rounded-full focus:font-medium focus:shadow-lg"
      >
        Skip to main content
      </a>
      
      <Navbar />
      <main id="main-content" className="text-gray-900 dark:text-gray-100">
        <section id="home" className="min-h-screen flex flex-col items-center justify-center">
          <Hero />
        </section>

        <section id="about" className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
          <div data-aos="fade-right" className="w-full max-w-7xl border-2 border-gray-200 dark:border-gray-800 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-8 md:p-12 shadow-lg">
            <About />
          </div>
        </section>

        <section id="projects" className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
          <div data-aos="fade-right" className="w-full max-w-7xl border-2 border-gray-200 dark:border-gray-800 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-8 md:p-12 shadow-lg">
            <Projects />
          </div>
        </section>

        <section id="skills" className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
          <div data-aos="fade-right" className="w-full max-w-7xl border-2 border-gray-200 dark:border-gray-800 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-8 md:p-12 shadow-lg">
            <Skills />
          </div>
        </section>

        <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
          <div data-aos="fade-right" className="w-full max-w-7xl border-2 border-gray-200 dark:border-gray-800 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-8 md:p-12 shadow-lg">
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
