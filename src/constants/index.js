import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Welcome to my digital portfolio!`;

export const ABOUT_TEXT = [
  {
  text: "Hello World! I am Rahul Kiran, a Computer Engineering student at York University who is passionate about all things computer, including hardware amd software! My interests include:  ",
  interests:['➤  Front-end Development: Experienced in crafting seamless user experiences and responsive functionality', 
    '➤  Back-end Development: Built robust server-side systems to optimize performance for web applications', 
    '➤  Hardware: Experienced in building PCs and have built projects utilising Arduino and FPGAs that blend hardware and software skills'], 
  },
];


export const EXPERIENCES = [
  {
    year: "Sep 2021 - Present",
    role: "B.Eng Computer Engineering",
    company: "York University",
    description: ["Relevant courses: Advanced OOP, Data Structures and Algorithm, Digital Logic Design, Computer Architecture ", " Hardware: Microcontrollers, Circuit Analysis (DC/AC, RLC, Diodes, Transistors), Amplifiers, Rectifiers"],
    
  },
  {
    year: "Jun 2020 - Sep 2020",
    role: "Computer Science Co-op",
    company: "Precision e-Business Group",
    description:[`Worked with Halton District School Board to design a productivity website for school use`,
      'Designed front-end UI and implemented back-end functionality based on key design principles',
      'Led team meetings to present progress reports and projections, while coordinating workload distribution through effective collaboration ']

  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Brampton Chandigarh ",
  phoneNo: "+12 4555 666 00 ",
  email: "rahulkiran698@gmail.com",
};
