import "./projectStyle.css";
import Slider from "react-slick";
import React from "react";

const projects = [
  {
    achievement: "Arduino Plant Watering System",
    description: [
      "Built a self-watering plant system using an Arduino GroveBoard with moisture sensor and MOSFET powering the water pump",
      "Moisture sensor constantly inputs the moisture level in soil and dispenses water when level is too low",
      "Programmed using Firmata4j library in Java to communicate with Arduino components",
      "Displays skills in electronics/hardware and programming",
    ],
    tags: ["Arduino", "Java", "C", "Hardware"],
    image: "/plantwater.png",
    link: "https://github.com/rahullkiran/Plant-Watering-System",
  },
  {
    achievement: "Personal Portfolio",
    description: [
      "Programmed a personal portfolio website with ReactJS",
      "Project made with intention of advancing skills in web development and UI/UX design concepts",
    ],
    tags: ["React", "Node", "UI/UX", "Web-Dev"],
    image: "/portfolio-pic.png",
    link: "https://github.com/rahullkiran/personal-portfolio",
  },
  {
    achievement: "Railway Defect Detection System",
    description: [
      "Developed a real-time AI system to automatically detect and track railway defects, improving inspection speed and accuracy",
      "Built a real-time computer vision system using YOLOv8, achieving 91.2% mAP and 91.3% recall at 97 FPS on Apple M1 GPU",
      "Designed full ML pipeline including preprocessing, annotation conversion, and transfer learning on 383 labeled images",
      "Deployed using Docker Compose with PostgreSQL logging and MLflow experiment tracking",
    ],
    tags: ["Python", "PyTorch", "OpenCV", "YOLOv8", "PostgreSQL", "MLflow", "Docker"],
    image: "/Railway_Defect_Detect.jpg",
    link: "https://github.com/rahullkiran/Railway_Defect_Detection",
  },
  {
    achievement: "System Resources Monitor",
    description: [
      "A full-stack monitoring tool that tracks system performance metrics in real-time and provides actionable insights",
      "Visualized usage history with a real-time graph using Recharts, and generated alerts when thresholds were exceeded",
      "Includes threshold configuration, historical charts with toggles, auto-refresh, and full Dockerization",
    ],
    tags: ["Python", "FastAPI", "psutil", "ReactJS", "Docker"],
    image: "/sysMonitor.png",
    link: "https://github.com/rahullkiran/system-monitor",
  },
];

const ProjectCard = React.memo(({ project }) => (
  <div className="project-card">
    <div className="project-info">
      <h2 className="project-title">{project.achievement}</h2>
      <div className="project-tags">
        {project.tags.map((tag, idx) => (
          <span className="tag" key={idx}>
            {tag}
          </span>
        ))}
      </div>
      <ul className="project-description">
        {project.description.map((desc, idx) => (
          <li key={idx}>{desc}</li>
        ))}
      </ul>
      <a
        href={project.link}
        className="project-link-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check it out →
      </a>
    </div>
    <div className="project-image">
      <img src={project.image} alt={project.achievement} loading="lazy" />
    </div>
  </div>
));

const ProjectsSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
  };

  return (
    <div className="border-b border-neutral-900 pb-3">
      <h2 className="my-20 text-center text-4xl font-thin text-cyan-400">
        P<span className="text-neutral-50">rojects</span>
      </h2>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div className="project-slide" key={index}>
            <ProjectCard project={project} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectsSection;
