import "./projectStyle.css";
import Slider from "react-slick";


const projects = [
  {
    achievement: "Arduino Plant Watering System",
    description: [
      "- Built a self-watering plant system using an Arduino GroveBoard with moisture sensor and MOSFET powering the water pump",
      "- Moisture sensor constantly inputs the moisture level in soil and dispenses water when level is too low",
      "- Programmed using Firmata4j library in Java to communicate with Arduino components",
      "- Displays skills in electronics/hardware and programming  "
    ],
    tags: ["Arduino", "Java", "C", "Hardware"],
    image: "./public/plantwater.png",
    link: "../Projects/plantwater.png",
  },
  {
    achievement: "Personal Portfolio",
    description: [
      "- Programmed a personal portfolio website with React JS",
      "- Project made with intention of advancing skills in web development and UI/UX design concepts",
    ],
    tags: ["React", "Node","UI/UX", "Web-Dev"],
    image: "./public/portfolio-pic.png",
    link: "#",
  },

  {
    achievement: "Stock Analyser",
    description: [
      "- Developed a website that can provide analysis on stocks",
      "- Developed using the Flask framework to run dynamic python web application ",
      "- Interactive data visualtion using News API and Yahoo Finance API    ", 
    ],
    tags: ["Flask (Python)", "React", "Node"],
    image: "./public/stockproject.png",
    link: "#",
  },
  
];

const ProjectsSection = () => {
  // Slick slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, 
    autoplay: true,
    autoplaySpeed: 4000, 
  };

  return (
    <div className="border-b border-neutral-900 pb-3">
      <h2 className="my-20 text-center text-4xl font-thin text-cyan-400">
        P<span className="text-neutral-50">rojects</span>
      </h2>
      <div className="py-2">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div className="project-slide" key={index}>
            <div className="project-card">
              <div className="project-info">
                <h3>{project.challenge}</h3>
                <h2>{project.title}</h2>
                <p>
                  <strong className="text-2xl font-semibold text-neutral-200">{project.achievement}</strong>
                </p>
                <div className="project-tags py-6 mb-2">
                  {project.tags.map((tag, idx) => (
                    <span className="tag" key={idx}>
                      {tag}
                    </span>
                  ))}
                </div>
                <ul className="project-description mb-3 font-extralight">
                  {project.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
                <a href={project.link} className="project-link-btn">
                  Check it out →
                </a>
              </div>
              <div className="px-2">
              <img src={project.image} width={320} alt={`${project.achievement} image`} />
              </div>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default ProjectsSection;
