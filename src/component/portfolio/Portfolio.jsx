import React from 'react'
import './portfolio.css'
import IMG1 from '../../asset/petsafty.png'
import IMG3 from '../../asset/carpoint.png'
import IMG2 from '../../asset/chatboo.png'
import IMG4 from '../../asset/igniteVR.png'
import IMG5 from '../../asset/blog.png'
import IMG6 from '../../asset/profmaker.png'

function Portfolio() {
  const data =[
    {
      id:1,
      image:IMG1,
      title:"Free Qr Genarator for PET",
      tech:['php','html','css'],
      github:'https://github.com/AJay6600/PetSafty',
      demo:'https://petsafty.000webhostapp.com/',
    },
    {
      id:2,
      image:IMG2,
      title:"Online chat Bot ",
      tech:['php','html','css','js','ajax'],
      github:'https://github.com/AJay6600/ChatBoo',
      demo:'http://chatboo.000webhostapp.com/bot.php',
    },
    {
      id:3,
      image:IMG3,
      title:"Predict price and Model of Car ",
      tech:['html','css','js','django','ml'],
      github:'https://github.com/AJay6600/CarPoint',
      demo:'https://ajay6600.github.io/CarPoint/',
    },
    {
      id:4,
      image:IMG4,
      title:"Virtual Reality ",
      tech:['html','aframe'],
      github:'https://github.com/AJay6600/Ignite-VR',
      demo:'https://ignite-vr.glitch.me/',
    },
    {
      id:5,
      image:IMG5,
      title:"Blog Application ",
      tech:['react','css'],
      github:'https://github.com/AJay6600/Mine.Blog',
      demo:'https://mine-blog-two.vercel.app/',
    },
    {
      id:6,
      image:IMG6,
      title:"Upload Profiles",
      tech:['react','css','firebase'],
      github:'https://github.com/AJay6600/ProfMaker',
      demo:'https://upload-pics-250cf.web.app/',
    },
  ]

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id,image,title,tech,github,demo}) =>{
            return(
              <article key={id} className='portfolio_item'>
              <div className="portfolio_item_imag">
              <img src={image} alt="PetSafty" />
              </div>
              <h3>{title}</h3>
              <div className="teck_stack">
                {
                  tech.map((stack)=>{
                    return <span className={stack}>{stack}</span>
                  })
                }
                
              </div>
              <div className="portfolio_item-cta">
              <a href={github} className='btn'target='_blank'>Git Hub</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
       
        
        {/* <article className='portfolio_item'>
          <div className="portfolio_item_imag">
          <img src={IMG1} alt="PetSafty" />
          </div>
          <h3>This is Portfolio item title</h3>
          <div className="teck_stack">
            <span className='react'>react</span>
            <span className='php'>php</span>
            <span className='html'>html</span>
            <span className='css'>css</span>
            <span className='js'>js</span>
            <span className='ml'>ml</span>
            <span className='aframe'>Aframe</span>
          </div>
          <div className="portfolio_item-cta">
          <a href="https://gthub.com/" className='btn'target='_blank'>Git Hub</a>
          <a href="https://gthub.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article> */}
      
        

      </div>
    </section>
  )
}

export default Portfolio
