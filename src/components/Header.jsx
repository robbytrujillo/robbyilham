import profilePicture from '../assets/photo-profile1.png';
import '../styles/Header.css';
// import icon
import { FaInstagram } from "react-icons/fa";


function Header() {
  return (
   <header>
    <div className="header-jumbotron">
        <img src={profilePicture} />
        <h3>Robby Ilham</h3>
        <p>Fullstack Developer - Learner - Researcher</p>
        <div className='socialMedia'>
            <a href=''><FaInstagram /></a>
        </div>
    </div>   
    </header>
  )
}

export default Header
