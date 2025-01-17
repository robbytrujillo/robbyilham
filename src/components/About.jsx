import '../styles/About.css';

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPhp } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { SiPostman } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { DiRuby } from "react-icons/di";


function About() {
  return (
    <section id="about">
        <div className="wrapper">
            <h3>About</h3>
            <p>lorem ipsum dolor sit lorem ipsum dolor sit</p> 
            <p>lorem ipsum dolor sit lorem 
              ipsum dolor sit lorem ipsum dolor 
              sit lorem ipsum dolor sit lorem ipsum 
              dolor sit lorem ipsum dolor sit</p>
            <h4>Programming Language & Tools</h4>
            <div className="skills">
              <FaHtml5 /> <FaCss3Alt /> <IoLogoJavascript /> <FaPhp /> <FaJava />
              <FaReact /> <FaVuejs /> <FaPython /> <FaLaravel /> <FaGitAlt /> <FaGithub /> 
              <SiPostman /> <RiTailwindCssFill /> <FaBootstrap /> <DiRuby />
            </div>
        </div>
    </section>
  )
}

export default About
