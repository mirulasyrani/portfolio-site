import { useEffect, useState } from "react";

const sections = ["home", "about", "projects", "skills", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActive(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="text-xl font-bold text-gray-900 dark:text-white">MyPortfolio</div>
        <div className="hidden md:flex space-x-6">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`capitalize ${
                active === id
                  ? "text-indigo-500 font-semibold"
                  : "text-gray-600 dark:text-gray-300 hover:text-indigo-400"
              }`}
            >
              {id}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
