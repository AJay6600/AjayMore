import React from 'react'
import './portfolio.css'
function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item_imag"></div>
          <h3>This is Portfolio item title</h3>
          <a href="https://gthub.com/" className='btn'target='_blank'>Git Hub</a>
          <a href="https://gthub.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item_imag"></div>
          <h3>This is Portfolio item title</h3>
          <a href="https://gthub.com/" className='btn'target='_blank'>Git Hub</a>
          <a href="https://gthub.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        
        <article className='portfolio_item'>
          <div className="portfolio_item_imag"></div>
          <h3>This is Portfolio item title</h3>
          <a href="https://gthub.com/" className='btn'target='_blank'>Git Hub</a>
          <a href="https://gthub.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        
        <article className='portfolio_item'>
          <div className="portfolio_item_imag"></div>
          <h3>This is Portfolio item title</h3>
          <a href="https://gthub.com/" className='btn'target='_blank'>Git Hub</a>
          <a href="https://gthub.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item_imag"></div>
          <h3>This is Portfolio item title</h3>
          <a href="https://gthub.com/" className='btn'target='_blank'>Git Hub</a>
          <a href="https://gthub.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>

      </div>
    </section>
  )
}

export default Portfolio
