import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { BsCpuFill } from "react-icons/bs";
import { motion } from "framer-motion";

const iconVar = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [12, -12],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl font-thin text-cyan-400"
      >
        E<span className="text-neutral-50">xperience</span>
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVar(2.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaJava className="text-8xl text-red-500 gap-3" />
          <h2 className="my-2 px-1 text-2l font-extralight justify-center flex flex-wrap">
            Java
          </h2>
        </motion.div>
        <motion.div
          variants={iconVar(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <IoLogoJavascript className="text-8xl text-yellow-300 gap-3" />
          <h2 className="my-2 px-1 text-2l font-extralight justify-center flex flex-wrap">
            JavaScript
          </h2>
        </motion.div>
        <motion.div
          variants={iconVar(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaHtml5 className="text-8xl text-orange-500 gap-3" />
          <h2 className="my-2 px-1 text-2l font-extralight justify-center flex flex-wrap">
            HTML/CSS
          </h2>
        </motion.div>
        <motion.div
          variants={iconVar(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaPython className="text-8xl text-yellow-100 gap-3" />
          <h2 className="my-2 px-1 text-2l font-extralight justify-center flex flex-wrap">
            Python
          </h2>
        </motion.div>
        <motion.div
          variants={iconVar(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiCplusplus className="text-8xl text-blue-400 gap-3" />
          <h2 className="my-2 px-1 text-2l font-extralight justify-center flex flex-wrap">
            C/C++
          </h2>
        </motion.div>
        <motion.div
          variants={iconVar(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BsCpuFill className="text-8xl text-green-300 gap-3" />
          <h2 className="my-2 px-1 text-2l font-extralight justify-center flex flex-wrap">
            Verilog HDL
          </h2>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
