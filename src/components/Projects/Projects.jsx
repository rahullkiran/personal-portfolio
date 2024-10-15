import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Projects.module.css";
import Slider from "react-slick";
import { ProjectCard } from "./ProjectCard";

const projectImages=[
    {
        image: 'src/assets/projects/project-1.jpg',
        title: 'project1'
    },
    {
        image: 'src/assets/projects/project-2.jpg',
        title: 'project2'
    },
    {
        image: 'src/assets/projects/project-3.jpg',
        title: 'project3'
    },
    {
        image: 'src/assets/projects/project-4.jpg',
        title: 'project4'
    }
]



const Projects = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 4100, 
        customPaging: (i) => <div className={styles.customDot} />,
        appendDots: (dots) => (
          <div>
            <ul className={styles.dots}>{dots}</ul>
          </div>
        ),
      };
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl font-thin">Projects</h2>
        <div className="h-240 bg-slate-600">
            <div className="h-[400px] w-3/4 m-auto border py-10">
            <Slider {...settings}>
                {
                    projectImages.map((item, index)=>{
                        return(
                            <div key={index}>
                                <div>
                                    <img src={item.image}  width = {350} className="object-contain block m-auto"></img>
                                </div>
                                <div className="p-6">
                                    <p className="flex flex-wrap justify-center font-semibold text-white ">{item.title}</p>
                                </div>
                            </div>
                        )
                    })
                }
                </Slider>
            </div>
        </div>
    </div>
    
  )
}

export default Projects
