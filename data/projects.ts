import type { Project, ProjectsSection } from "@/types/portfolio";

export const projectsSection: ProjectsSection = {
  eyebrow: "Projects",
  title: "Selected work with room to grow",
  description:
    "Each project stored here can be the path to a new milestone in future with a bigger opportunity.",
  detailButtonText: "View Details",
  codeButtonText: "Code",
  backLinkText: "Back to projects",
  liveButtonText: "Live Preview",
  sourceButtonText: "Source Code",
  challengesTitle: "Challenges",
  futurePlansTitle: "Future Plans",
};

export const projectsData: Project[] = [
  {
    id: 1,
    slug: "plm-messenger",
    title: "PLM Messenger",
    shortDescription: "A lightweight real-time web chat app where users can create accounts, connect through unique 4-digit codes, and send private messages instantly.",
    description:
      "PLM messenger is a real-time web messaging application designed for simple, private conversations between users. The platform allows people to create accounts, connect with others through a unique 4-digit code, and start one-on-one chats instantly. It includes core messaging features such as account registration, login, friend/request handling, and live message exchange, making it suitable for quick communication in a lightweight and accessible format.",
    image: "/images/projects/plm-messenger.png",
    gallery: ["/images/projects/plm-messenger.png"],
    technology: ["Node.js", "Express", "Socket.IO", "MongoDB", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/pronoyc11/web_chat_app",
    live: "https://web-chat-app-vlv2.onrender.com/",
    futurePlans: ["Add enhanced user profiles", "group chats", "message notifications", "media sharing", "better security", "authentication features."],
    challenges: ["Real-time messaging reliability", "handling concurrent users", "managing database consistency", "ensuring smooth performance and scalability"],
    featured: true,
  },
  {
    id: 2,
    slug: "photo-gallery-app",
    title: "Photo gallery app",
    shortDescription: "A React-based nature photography gallery with category browsing, authentication, and a contact form.",
    description:
      "This project is a polished photo gallery experience built with React and Redux. It allows users to explore nature-themed collections by category, navigate between routes, sign in for protected interactions, and contact the site owner through a functional form.",
    image: "/images/projects/photo-gallery-app.png",
    gallery: ["/images/projects/photo-gallery-app.png"],
    technology: ["React", "Redux", "React Router", "Bootstrap", "EmailJS"],
    github: "https://github.com/pronoyc11/Photo-gallery-app.git",
    live: "https://photo-gallery-app-51ad5.web.app/",
    futurePlans: [
      "Add user-uploaded images",
      "Improve search and filtering",
      "Expand category pages and curated collections"
    ],
    challenges: [
      "Managing shared state across image browsing and authentication",
      "Creating a smooth multi-route experience for gallery navigation",
      "Integrating a working contact form without breaking the UI"
    ],
    featured: true
  },
  {
    id: 3,
    slug: "hotel-booking-app",
    title: "Hotel Booking App",
    shortDescription:
      "A responsive hotel booking app for browsing rooms, reserving stays, and managing bookings.",
    description:
      "This project is a React-based hotel booking experience with room listings, detailed room views, user authentication, and a profile page for tracking reservations. It combines a polished UI with Redux-based state management and Firebase-backed booking data.",
    image: "/images/projects/hotel-booking-app.png",
    gallery: ["/images/projects/hotel-booking-app.png"],
    technology: ["React", "Redux", "React Router", "Firebase", "Axios", "CSS Modules"],
    github: "https://github.com/pronoyc11/hotel-booking-app",
    live: "https://bookenj.netlify.app/home",
    futurePlans: [
      "Add payment integration",
      "Add real-time room availability updates",
      "Improve the mobile booking experience"
    ],
    challenges: [
      "Managing booking state across authentication and profile views",
      "Keeping room availability consistent during reservation flow"
    ],
    featured: false
  }
];
