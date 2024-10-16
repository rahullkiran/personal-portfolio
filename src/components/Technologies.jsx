import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { BsCpuFill } from "react-icons/bs";
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl font-thin text-cyan-400">E
        <span className="text-neutral-50">xperience</span>
        </h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/*Technologies*/}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaJava className="text-8xl text-red-500 gap-3" />
          <h2 className="my-2 px-1 text-2l font-extralight justify-center flex flex-wrap">
            Java
          </h2>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoJavascript className="text-8xl text-yellow-300 gap-3" />
          <h2 className="my-2 px-1 text-2l font-extralight justify-center flex flex-wrap">
            JavaScript
          </h2>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaHtml5 className="text-8xl text-orange-500 gap-3" />
          <h2 className="my-2 px-1 text-2l font-extralight justify-center flex flex-wrap">
            HTML/CSS
          </h2>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaPython className="text-8xl text-yellow-100 gap-3" />
          <h2 className="my-2 px-1 text-2l font-extralight justify-center flex flex-wrap">
            Python
          </h2>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCplusplus className="text-8xl text-blue-400 gap-3" />
          <h2 className="my-2 px-1 text-2l font-extralight justify-center flex flex-wrap">
            C/C++
          </h2>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BsCpuFill className="text-8xl text-neutral-600 gap-3" />
          <h2 className="my-2 px-1 text-2l font-extralight justify-center flex flex-wrap">
            Verilog HDL
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
