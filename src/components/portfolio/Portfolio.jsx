import React from 'react';
import {projects} from '../../data.js';
import './portfolio.css'

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          projects.map((project)=>(
            <article key={project.id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={project.imgLink} alt="IMAGE-P1" />
              </div>
              <h3>{project.title}</h3>
              <div className="portfolio_item-cta">
                {project.githubLink!=="" && <a href={project.githubLink} target='_blank' rel='noreferrer' className='btn'>Github</a>}
                {project.liveLink!=="" && <a href={project.liveLink} target='_blank' rel='noreferrer' className='btn btn-primary'>Live Demo</a>}
              </div>
            </article>
          ))
        }       
      </div>
    </section>
  )
}

export default Portfolio