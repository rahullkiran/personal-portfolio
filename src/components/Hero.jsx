import FancyText from "@carefully-coded/react-text-gradient";
import { HERO_CONTENT } from "../constants";
import pfp from "../assets/rahulPfp.jpg";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});
const hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-sky-500 pb-16 text-7xl font-thick tracking-tighte lg:mt-16 lg:text-8xl"
            >
              <FancyText
                gradient={{ from: "#F858E0", to: "#77156C", type: "linear" }}
                animateTo={{ from: "#6DEDD0", to: "#7AE23A" }}
                animateDuration={2500}
              >
                Rahul Kiran
              </FancyText>
            </motion.h1>
            <div className="">
              <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="bg-clip-text text-4xl font-thin tracking-tight "
              >
                <ReactTyped
                  strings={[
                    "Currently seeking Winter/Summer 2025 internships",
                    "Experienced in full-stack software development",
                    "Experienced with computer hardware and electronics",
                  ]}
                  typeSpeed={60}
                  backSpeed={40}
                  loop
                ></ReactTyped>
              </motion.span>
            </div>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 text-2xl font-thin tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={pfp}
              style={{ borderRadius: "5%" }}
              width={550}
              alt="Rahul Kiran"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
//this is  atest
export default hero;
