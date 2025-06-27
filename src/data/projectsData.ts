import { FaReact, FaNodeJs, FaDatabase, FaCss3Alt } from "react-icons/fa";
import type { ComponentType } from "react";

// ✅ Image imports
import todoImage from "../assets/images/todo-login.png";
import todoDashboard from "../assets/images/todo-dashboard.png";
import portfolioImage from "../assets/images/portfolio-website.png";
import studioHome from "../assets/images/studio-home.png"; // new
import studioGallery from "../assets/images/studio-gallery.png"; // new
import studioInvoice from "../assets/images/studio-invoice.png"; // new
import studioImage from "../assets/images/studio-image.png"; // new

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
];
