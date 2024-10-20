import "./projectStyle.css";
import Slider from "react-slick";
const projects = [
  {
    achievement: "Project 1",
    description: [
      "text123",
      "text4567",
    ],
    tags: ["Flutter (Dart)", "Firebase", "Google Cloud Platform APIs"],
    image: "something1",
    link: "#",
  },
  {
    achievement: "Project 2",
    description: [
      "blah blah blah",
      "more blah blah blahhrrhrhhrhr",
    ],
    tags: ["Flutter (Dart)", "Firebase", "Google Cloud Platform APIs"],
    image: "something2",
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
                  <strong>{project.achievement}</strong>
                </p>
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
                <a href={project.link} className="project-link-btn">
                  Check it out →
                </a>
              </div>
              <div className="project-image">
                <img src={project.image} alt={`${project.title} logo`} />
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
