import logo from "../assets/kevinRushLogo.png";
import {FaGit, FaLinkedin} from "react-icons/fa"; 
import {FaGithub} from "react-icons/fa"; 
import { SiGmail } from "react-icons/si";

const navbar = () => {
  return (
    <nav className="bg-red-900 mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin />
            <FaGithub />
            <SiGmail />
        </div>
    </nav>
  )
}

export default navbar
