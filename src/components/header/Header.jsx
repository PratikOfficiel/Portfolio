import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import './header.css';

function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Pratik Soni</h1>
        <h5 className="text-light">Software Developer</h5>
        <CTA/>

        <div className="info">

          <div className="me">
            <img src={ME} alt="me" />
          </div>

          <a href="#contact" className='scroll_down'>Scroll Down</a>
          <HeaderSocials/>
        </div>
      </div>
    </header>
  )
}

export default Header