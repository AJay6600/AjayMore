import React from 'react'
import CTA from './CTA'
import me from '../../asset/me1.jpeg'
import HearderSocial from './HearderSocial'
import { ParticleBackground } from '../ParticalBackground/ParticleBackground'
import './header.css'
function Header() {
  return (
    <div className=" header_container">
      <ParticleBackground/>

      <h5>Hello I'm</h5>
      <h1>AJAY MORE</h1>
      <h5 className='text-light'>Full Stack Developer</h5>
      <CTA/>
      <HearderSocial/>
      <div className="me">
        <img src={me} alt="me" />
      </div>
      <a href="#contact" className='scroll_down'>Scroll Down</a>
     
    </div>
  )
}

export default Header
