import React from 'react'
import './experience.css'
import {SKILLS} from '../../data.js';
import { BsPatchCheckFill } from "react-icons/bs";

function Experience() {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_coding">
          <h3>Coding</h3>
          <div className="coding_content">
            {
              SKILLS.coding.map((skill)=>{
                const s_name = Object.keys(skill)[0];
                const level = skill[s_name];
                return (
                <article key={s_name} className="experience_details">
                  <BsPatchCheckFill className="experience_detail-icon"/>
                  <div>
                    <h4>{s_name}</h4>
                    <small className='text-light'>{level}</small>
                  </div>
                </article>);
              })
            }
            
          </div>
        </div>

        {/* End of Coding */}

        <div className="experience_development">

          <div className="experience_frontend">
            <h3>Frontend Development</h3>
            <div className="experience_content">
            {
              SKILLS.frontend.map((skill)=>{
                const s_name = Object.keys(skill)[0];
                const level = skill[s_name];
                return (
                <article key={s_name} className="experience_details">
                  <BsPatchCheckFill className="experience_detail-icon"/>
                  <div>
                    <h4>{s_name}</h4>
                    <small className='text-light'>{level}</small>
                  </div>
                </article>);
              })
            }
            </div>
          </div>

          {/* End of Frontend */}
          <div className="experience_backend">
          <h3>Backend Development</h3>
            <div className="experience_content">
            {
              SKILLS.backend.map((skill)=>{
                const s_name = Object.keys(skill)[0];
                const level = skill[s_name];
                return (
                <article key={s_name} className="experience_details">
                  <BsPatchCheckFill className="experience_detail-icon"/>
                  <div>
                    <h4>{s_name}</h4>
                    <small className='text-light'>{level}</small>
                  </div>
                </article>);
              })
            }            
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience