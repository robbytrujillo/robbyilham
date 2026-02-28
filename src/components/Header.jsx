import profilePicture from "../assets/photo-profile2.png";
import "../styles/Header.css";
// import icon
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Header() {
  return (
    <header>
      <div className="header-jumbotron">
        <img src={profilePicture} />
        <h3>I am Robby</h3>
        <p>Fullstack Developer - Learner - IT Enthusiast</p>
        <div className="socialMedia">
          <a href="https://wa.me/6281367943830">
            <FaWhatsapp />
          </a>
          <a href="https://github.com/robbytrujillo">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/robby-ilham-kusuma/">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/robbyilhkus/">
            <FaInstagram />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
