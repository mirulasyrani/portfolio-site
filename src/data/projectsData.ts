import { FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaHtml5, FaJsSquare, FaJava } from "react-icons/fa";
import { SiSpring, SiPostgresql, SiTypescript, SiNextdotjs, SiGraphql } from "react-icons/si";
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
// ✅ Import TruHealth images
import truHealthHome from "../assets/images/truehealth-home.png";
import truHealthServices from "../assets/images/truehealth-services.png";
import truHealthAbout from "../assets/images/truehealth-aboutus.png";
// ✅ Import TaskFlow images
import taskFlowKanban from "../assets/images/taskflow-kanban.png";
import taskFlowDashboard from "../assets/images/taskflow-dashboard.png";
import taskFlowCalendar from "../assets/images/taskflow-calendar.png";
import taskFlowTaskPage from "../assets/images/taskflow-taskpage.png";
// ✅ Import Pricing Portal images
import pricingPortalOverview from "../assets/images/pricing-portal overview.png";
import pricingPortalSupplier from "../assets/images/pricing-portal-supplierupload.png";
import pricingPortalVisualizer from "../assets/images/pricing-portal-visualizer.png";


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
  {
    id: 7,
    title: "TruHealth Clinic Website",
    description:
      "A modern, full-stack web application for TruHealth Clinic in Kota Damansara featuring appointment booking and contact management.",
    details: [
      "Built with React (TypeScript) frontend and Spring Boot backend",
      "RESTful API with full CRUD operations for appointments and contact messages",
      "JWT authentication with protected routes and role-based access",
      "H2 database for development with JPA/Hibernate for data persistence",
      "Responsive modern UI with gradient themes and smooth navigation",
    ],
    tech: ["React", "TypeScript", "Spring Boot", "Java", "PostgreSQL"],
    image: truHealthHome,
    images: [truHealthHome, truHealthServices, truHealthAbout],
    icons: [FaReact, SiTypescript, SiSpring, FaJava, FaDatabase],
    github: "https://github.com/mirulasyrani/true-health-clinic.git",
    demo: "https://true-health-clinic.pages.dev/",
  },
  {
    id: 8,
    title: "TaskFlow - Task Management System",
    description:
      "Full-stack task manager with Spring Boot & React featuring Kanban boards, time tracking, and collaboration tools.",
    details: [
      "Kanban board with drag & drop functionality and calendar view",
      "Time tracking with start/stop timers and analytics dashboard",
      "Task CRUD operations with priorities, due dates, subtasks, and comments",
      "JWT authentication with BCrypt password hashing and rate limiting",
      "Dark mode support with keyboard shortcuts for improved productivity",
    ],
    tech: ["React", "Spring Boot", "PostgreSQL", "Tailwind CSS", "JWT"],
    image: taskFlowKanban,
    images: [taskFlowKanban, taskFlowDashboard, taskFlowCalendar, taskFlowTaskPage],
    icons: [FaReact, SiSpring, SiPostgresql, FaCss3Alt],
    github: "https://github.com/mirulasyrani/neurogine-task.git",
    demo: null,
  },
  {
    id: 9,
    title: "Enterprise Pricing Management System",
    description:
      "Full-stack enterprise solution for managing pricing data with database infrastructure, GraphQL API, and business intelligence integration.",
    details: [
      "Built with Next.js 14, TypeScript, and PostgreSQL with GraphQL API",
      "Python-based database infrastructure with schema migrations and containerized deployment",
      "Spreadsheet integration with automatic data mapping for bulk imports",
      "Business intelligence platform integration for advanced analytics",
      "Automated data collection and synchronization from multiple external sources",
      "REST and GraphQL API integrations for seamless data flow",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "GraphQL", "Python", "Docker"],
    image: pricingPortalOverview,
    images: [pricingPortalOverview, pricingPortalSupplier, pricingPortalVisualizer],
    icons: [SiNextdotjs, SiTypescript, SiPostgresql, SiGraphql, FaDatabase],
    github: null,
    demo: null,
  },
];
