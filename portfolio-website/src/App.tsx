import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";


export default function App() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-900 text-white pt-20">
        <section className="min-h-screen flex flex-col items-center justify-center p-4">
          <Hero />
        </section>

        <section id="about" className="min-h-screen flex flex-col items-center justify-center p-8">
          <About />
        </section>

        <section id="projects" className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-800">
          <Projects />
        </section>

        <section id="skills" className="min-h-screen flex flex-col items-center justify-center p-8">
          <Skills />
        </section>

        <section id="contact" className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-800">
          <Contact />
        </section>
      </main>
      <ScrollToTop />

    </>
  );
}
