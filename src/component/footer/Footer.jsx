import React from 'react'
import "./footer.css"
import {BsInstagram,BsGithub} from 'react-icons/bs'
import {AiOutlineLinkedin} from 'react-icons/ai'
function Footer() {
  return (
    <footer>
      <a href="#" className='footer_logo'>AJAY MORE</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer_socials">
          <a href="https://www.instagram.com/_ajay_more_66/" target='_blank'><BsInstagram/></a>
          <a href="https://www.linkedin.com/in/ajay-more-62b309251/" target='_blank'><AiOutlineLinkedin/></a>
          <a href="https://github.com/AJay6600" target='_blank'><BsGithub/></a>
        </div>

        <div className="footer_copyright">
          <small>
            &copy Ajay More. All rights reserved.
          </small>
        </div>

     
    </footer>
  )
}

export default Footer
