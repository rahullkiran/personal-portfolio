import aboutImg from "../assets/thegoat.png"; 

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center bg-clip-text text-4xl font-thin">About 
        <span className="text-cyan-400"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center ">
              <img src={aboutImg} class="pos" width = {650} alt="about" />
              
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
