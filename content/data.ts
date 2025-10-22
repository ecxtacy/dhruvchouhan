import { Education } from "@/components/education-card";
import { Experience } from "@/components/experience-card";
import { Project } from "@/components/project-card";

export const about_me = [
  "Hi, I'm Dhruv. I'm a software engineer fascinated by the challenge of building robust, scalable systems that solve real-world problems. My journey has taken me from securing cloud infrastructure at Google, where I worked on the Cloud Armor team to build high-performance logging pipelines for DDoS mitigation, to developing user-focused applications from scratch. I love diving deep into complex backend problems, but I'm just as passionate about creating intuitive products, like a real-time video matchmaking app I built using WebRTC. At the heart of my work is a deep love for problem-solving, a passion I've cultivated through hours of competitive programming. I enjoy the process of breaking down complex algorithmic puzzles to find the most elegant and efficient solution. When I’m not in front of a screen, you might find me mentoring junior developers as the lead of my college's technical society or finding a different kind of rhythm as a professional tabla player. I also love the focus and strategy of sports and have competed in table tennis, basketball, and swimming. I'm always eager to learn and take on new challenges. If you're working on something exciting or just want to connect, feel free to reach out!",
];

export const educationData: Education[] = [
  {
    institution: "Indian Institute of Information Technology, Lucknow",
    institutionLink: "#",
    degree: "B.Tech, Information Technology",
    date: "2022 — 2026",
    description: [
      "CGPA: 8.57/10.0",
      "Relevant Coursework: Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks.",
    ],
  },
  {
    institution: "Sankalp Public School Bhopal",
    institutionLink: "#",
    degree: "Class 12 CBSE",
    date: "2022",
    description: [
      "Secured 95% in the Central Board of Secondary Education (CBSE) Class 12th exams.",
      "Active member of the school's basketball and swimming teams, competing at the district level.",
    ],
  },
];

export const experience = {
  start_date: "June 2025",
  end_date: "August 2025",
  company: "Google",
  location: "Bengaluru",
  description: [
    "Enhanced networking security for backend systems by contributing to the Google Cloud Armor platform.",
    "Integrated Cloud Armor Control Plane with Cloud Logging to enable real-time traffic monitoring and analysis.",
    "Developed a logging pipeline that enhanced detection and response to Layer 7 DDoS attacks, mitigating approximately 10% of specific annual threats to customer backends.",
    "Implemented a payload segmentation algorithm to optimize logging of large data payloads for customer projects.",
    "Improved backend reliability by writing unit tests that achieved 90% code coverage across API endpoints.",
  ],
};

export const experiences: Experience[] = [
  {
    role: "Software Engineering Intern",
    company: "Google",
    companyLink: "https://google.com",
    date: "JUN 2025 — AUG 2025",
    description: [
      "Enhanced networking security for backend systems by contributing to the Google Cloud Armor platform.",
      "Integrated Cloud Armor Control Plane with Cloud Logging to enable real-time traffic monitoring and analysis.",
      "Developed a logging pipeline that enhanced detection and response to Layer 7 DDoS attacks, mitigating approximately 10% of specific annual threats to customer backends.",
      "Implemented a payload segmentation algorithm to optimize logging of large data payloads for customer projects.",
      "Improved backend reliability by writing unit tests that achieved 90% code coverage across API endpoints.",
    ],
    skills: [
      "Google Cloud Platform",
      "Cloud Armor",
      "Cloud Logging",
      "DDoS Mitigation",
      "Go",
      "Unit Testing",
    ],
  },
];

export const projectsData: Project[] = [
  {
    title: "Stumingle - Real-time Video Call Application",
    description:
      "A full-stack real-time video call application with random matchmaking.",
    githubLink: "https://github.com/yourusername/chat-app",
    skills: [
      "React",
      "Node.js",
      "Socket.io",
      "PostgreSQL",
      "Express",
      "WebRTC",
    ],
  },
  {
    title: "GraspEaser - Content Summarization application using RAG",
    description:
      "Constructed content summarizing application which allows people with ADHD and Dyslexia to learn with ease. Implemented RAG (Retrieval Augmented Generation) with Langchain and Google Gemini for summarization. Integrated Text to Speech functionality on the frontend to simplify the learning process for people.",
    liveLink: "https://yourecommercedemo.com",
    githubLink: "https://github.com/yourusername/ecommerce-platform",
    skills: [
      "Next.js",
      "TypeScript",
      "Langchain",
      "Gemini API",
      "PostgreSQL",
      "Tailwind CSS",
    ],
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio website showcasing my projects, experience, and skills, built with modern web technologies.",
    githubLink: "https://github.com/yourusername/portfolio",
    liveLink: "https://dhruvchouhan.vercel.app",
    skills: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
  },
];

export const skills = [
  "Go",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "React.js",
  "C++",
  "C",
  "Python",
  "Google Cloud",
  "Git",
  "Docker",
  "Linux",
  "Protobufs",
];

export const project_detail = [
  {
    name: "studate",
    description: "A real time matchmaking and communication app for students.",
    link: "",
  },
  {
    name: "Symmetrical Octo Spork",
    description: "Auto google form filler using generative AI.",
    link: "",
  },
];

export const contact = {
  email: "dc.dhruvchouhan@gmail.com",
};

export const social_links = {
  github: "https://github.com/ecxtacy",
  twitter: "https://x.com/destroycompiler",
  gmail: "mailto:dc.dhruvchouhan@gmail.com",
  instagram: "https://www.instagram.com/dc.cpp",
  linkedin: "https://www.linkedin.com/in/dhruv-chouhan-86a5711bb",
};

const data = { about_me, skills, contact };
export default data;
