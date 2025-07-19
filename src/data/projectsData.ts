import { FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaHtml5, FaJsSquare } from "react-icons/fa";
import type { ComponentType } from "react";

// ✅ Image imports
import todoImage from "../assets/images/todo-login.png";
import todoDashboard from "../assets/images/todo-dashboard.png";
import portfolioImage from "../assets/images/portfolio-website.png";
import studioHome from "../assets/images/studio-home.png";
import studioGallery from "../assets/images/studio-gallery.png";
import studioInvoice from "../assets/images/studio-invoice.png";
import studioImage from "../assets/images/studio-image.png";
import trackerThumb from "../assets/images/recruitment-tracker.png";
import trackerScreenshot from "../assets/images/recruitment-tracker-1.png";
import trackerLogin from "../assets/images/recruitment-tracker-login.png";
import ecommerceImg1 from "../assets/images/ecommercestorefront-1.png";
import ecommerceImg2 from "../assets/images/ecommercestorefront-2.png";
import ecommerceImg3 from "../assets/images/ecommercestorefront-3.png";
// ✅ Import the new weather app images
import weatherApp1 from "../assets/images/weather-app-1.png";
import weatherApp2 from "../assets/images/weather-app-2.png";


// ✅ Type definition for each project
export interface Project {
  id: number;
  title: string;
  description: string;
  details: string[];
  tech: string[];
  github?: string | null;
  demo?: string | null;
  image?: string;
  images?: string[];
  icons: ComponentType[];
}

// ✅ Array of project data
export const projectsData: Project[] = [
  {
    id: 1,
    title: "Full-Stack Todo App",
    description:
      "A task management system with full authentication, protected routes, and per-user task control.",
    details: [
      "Built with React, Node.js, and PostgreSQL",
      "JWT authentication with protected routes",
      "Each user can only manage their own tasks",
    ],
    tech: ["React", "Node.js", "PostgreSQL"],
    image: todoImage,
    images: [todoImage, todoDashboard],
    icons: [FaReact, FaNodeJs, FaDatabase],
    github: "https://github.com/mirulasyrani/todo-project.git",
    demo: null,
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "This site! Designed and built from scratch using React, Tailwind CSS, and Vite.",
    details: [
      "Fully responsive layout",
      "Dark mode enabled",
      "Scroll animations with AOS",
    ],
    tech: ["React", "Tailwind CSS"],
    image: portfolioImage,
    images: [portfolioImage],
    icons: [FaReact, FaCss3Alt],
    github: null,
    demo: null,
  },
  {
    id: 3,
    title: "Photography Studio Website",
    description:
      "A modern photography studio site with appointment booking, image gallery, admin dashboard, and PDF invoice/quotation support.",
    details: [
      "Booking system with time validation and invoice generator",
      "Gallery with lightbox and scrollable project view",
      "Admin dashboard for uploads and PDF/email automation",
      "Protected routes with login system",
    ],
    tech: ["React", "Tailwind CSS", "Node.js", "PostgreSQL"],
    image: studioHome,
    images: [studioHome, studioGallery, studioInvoice, studioImage],
    icons: [FaReact, FaNodeJs, FaDatabase, FaCss3Alt],
    github: "https://github.com/mirulasyrani/peeking-studio.git",
    demo: "https://peeking-studio.pages.dev/",
  },
  {
    id: 4,
    title: "Recruitment Tracker",
    description:
      "A healthcare recruitment dashboard for managing patient appointments and staff actions.",
    details: [
      "JWT-based login system",
      "Appointment management for GP-referred patients",
      "Integrated with PostgreSQL and hosted on Vercel",
      "Uses Bearer token auth and localStorage",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    image: trackerThumb,
    images: [trackerScreenshot, trackerLogin],
    icons: [FaReact, FaNodeJs, FaDatabase, FaCss3Alt],
    github: "https://github.com/mirulasyrani/recruitment-agency-tracker",
    demo: "https://recruitment-assessment.vercel.app/dashboard",
  },
  {
    id: 5,
    title: "E-Commerce Storefront",
    description:
      "A responsive e-commerce frontend with product filtering, cart features, and modern UI built using React and Tailwind CSS.",
    details: [
      "Built with React, Tailwind CSS, Zustand, React Router, and Vite",
      "Product filtering with URL-based routing and dynamic product pages",
      "Shopping cart functionality using Zustand global state",
      "Deployed to Cloudflare Pages for fast global delivery and easy access",
    ],
    tech: ["React", "Tailwind CSS", "Zustand", "Vite", "React Router"],
    image: ecommerceImg1,
    images: [ecommerceImg1, ecommerceImg2, ecommerceImg3],
    icons: [FaReact, FaCss3Alt],
    github: "https://github.com/mirulasyrani/ecommerce-store.git",
    demo: "https://ecommerce-store-3w9.pages.dev/",
  },
  // --- Weather App Project moved to the bottom ---
  {
    id: 6,
    title: "Weather App",
    description:
      "A clean and modern weather application that provides current conditions and a 5-day forecast for any city.",
    details: [
      "Built with vanilla HTML, JavaScript, and the Tailwind CDN for rapid styling",
      "Fetches data from the OpenWeatherMap API",
      "Features a dynamic city suggestion dropdown for Malaysian cities",
      "Fully responsive design for mobile and desktop",
    ],
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    image: weatherApp1,
    images: [weatherApp1, weatherApp2],
    icons: [FaHtml5, FaCss3Alt, FaJsSquare],
    github: "https://github.com/mirulasyrani/weather-app-MY.git",
    demo: "https://weather-app-my.pages.dev/",
  },
];
