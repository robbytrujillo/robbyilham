import profilePicture from '../assets/photo-profile1.png';
import '../styles/Header.css';
// import icon
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


function Header() {
  return (
   <header>
    <div className="header-jumbotron">
        <img src={profilePicture} />
        <h3>Robby Ilhamkusuma</h3>
        <p>Fullstack Developer - Learner - Researcher</p>
        <div className='socialMedia'>
            <a href=''><FaInstagram /></a>
            <a href=''><FaGithub /></a>
            <a href=''><FaLinkedin /></a>
            <a href=''><FaFacebookF /></a>
            
        </div>
    </div>   
    </header>
  )
}

export default Header
