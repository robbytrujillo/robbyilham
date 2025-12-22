import "../styles/About.css";

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
        <p>Who am I</p>
        <p>
          Hi, I am Robby Ilhamkusuma, a full-stack web developer with over four
          years of experience in web programming. I currently focus on
          website/app development and work as an Information Technology
          professional at a boarding school in the Greater Jakarta area. I am
          also a freelance web developer and work on several personal open
          source projects on GitHub. I also enjoy learning about programming and
          other IT topics.
        </p>
        <h4>Programming Language & Tools</h4>
        <div className="skills">
          <FaHtml5 /> <FaCss3Alt /> <IoLogoJavascript /> <FaPhp /> <FaJava />
          <FaReact /> <FaVuejs /> <FaPython /> <FaLaravel /> <FaGitAlt />{" "}
          <FaGithub />
          <SiPostman /> <RiTailwindCssFill /> <FaBootstrap /> <DiRuby />
        </div>
      </div>
    </section>
  );
}

export default About;
