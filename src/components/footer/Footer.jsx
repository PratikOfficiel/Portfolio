import './footer.css'
import { BsLinkedin } from "react-icons/bs";
import {FaGithub} from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <a href="#" className='footer_logo'>Pratik</a>

      <ul className='permalinks'>

        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/pratik-s-bb15521b2/"><BsLinkedin/></a>
        <a href="https://github.com/PratikOfficiel"><FaGithub/></a>
      </div>


      <div className="footer_copywright">
        <small>&copy; Sinova...</small>
      </div>
    </footer>
  )
}

export default Footer