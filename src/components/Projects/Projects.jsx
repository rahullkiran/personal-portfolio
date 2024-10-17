import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const projectImages = [
  {
    image: "src/assets/projects/project-1.jpg",
    title: "project1",
  },
  {
    image: "src/assets/projects/project-2.jpg",
    title: "project2",
  },
  {
    image: "src/assets/projects/project-3.jpg",
    title: "project3",
  },
  {
    image: "src/assets/projects/project-4.jpg",
    title: "project4",
  },
];
const Projects = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4100,  
  };
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl font-thin text-cyan-400">
        {" "}
        P<span className="text-neutral-50">rojects</span>
      </h2>
      <div className="h-240">
        <div className="h-[600px] w-full m-auto border rounded-lg border-cyan-600 py-10">
          <Slider {...settings}>
            {projectImages.map((item, index) => {
              return (
                <div key={index}>
                  <div>
                    <img src={item.image} width={300} className="-m-96 "></img>
                  </div>
                  <div className="p-6">
                    <p className="flex flex-wrap justify-center font-semibold text-white ">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default Projects;
