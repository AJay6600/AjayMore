import React from 'react'
import "./about.css"
import ME from '../../asset/about_me.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {TfiHeadphoneAlt} from 'react-icons/tfi'
import {BsLinkedin,BsGithub,BsInstagram} from 'react-icons/bs'
function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>

            <article className='about_card'>
              <TfiHeadphoneAlt className='about_icon'/>
              <h5>Support</h5>
              <small>Online 24/7</small>
            </article>


          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quo quae quaerat veniam vel exercitationem, 
            tenetur in velit ex vero, dolores facere necessitatibus sequi soluta nemo pariatur ut, quia a.</p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            <div className="about_socials">
             <a href="https://linkedin.com" target='_blank'><BsLinkedin/></a>
             <a href="https://github.com" target='_blank'><BsGithub/></a>
             <a href="https://instagram.com" target='_blank'><BsInstagram/></a>
           </div>

        </div>
      </div>
    </section>
  )
}

export default About
