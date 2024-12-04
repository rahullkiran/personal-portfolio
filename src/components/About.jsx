import aboutImg from "../assets/rahulpic.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center bg-clip-text text-4xl font-thin">
        About
        <span className="text-cyan-400"> Me</span>
      </h2>
 i     <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.85 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center ">
            <img src={aboutImg} className="pos" width={450} alt="about" style={{ borderRadius: '5%' }} />
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 1, x: 100 }}
          transition={{ duration: 0.85 }}
          className="w-full lg:w-1/2"
        >
          <ul>
            {ABOUT_TEXT.map((about, index) => (
              <div key={index} className="">
                <div className="flex justify-center lg:justify-start"></div>

                <p className="my-2 max-w-xl py-6 font-sans font-thin text-xl">
                  {about.text}
                </p>
                {about.interests.map((interest, index) => (
                  <div key={index} className="">
                    <li className="mb-4 my-7 mx-4 w-3/4 font-thin text-cyan-200">
                      {interest}
                    </li>
                  </div>
                ))}
              </div>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
