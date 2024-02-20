import { BsLinkedin } from "react-icons/bs";
import {FaGithub} from 'react-icons/fa'
import { GrTechnology } from "react-icons/gr";

function HeaderSocials() {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/spratik929/" rel='noreferrer' target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/PratikOfficiel" rel='noreferrer' target='_blank'><FaGithub/></a>
        <a href="#skills"><GrTechnology /></a>
    </div>
  )
}

export default HeaderSocials    