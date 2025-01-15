import React from 'react'
import {personalInfo, achievements} from '../../data.js';
import './about.css';
import Me from '../../assets/me-about.png'
import { HiAcademicCap } from "react-icons/hi";
import { SiCodeforces } from "react-icons/si";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="my-image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <HiAcademicCap className='about_icon'/>
              <h5>Academics</h5>
              <small>{personalInfo.institute}</small>
            </article>
            <article className="about_card">
              <SiCodeforces className='about_icon'/>
              <h5>Coding</h5>
              {achievements.profiles.map((item)=> (<small key={item.name}><a href={item.link}>{item.name}</a></small>))}
            </article>
            <article className="about_card">
              <VscFolderLibrary className='about_icon'/>
              <h5>Certifications</h5>
              {achievements.certificates.map((item)=> (<small key={item.name}><a href={item.link}>{item.name}</a></small>))}
            </article>
          </div>

          <p>{personalInfo.about}</p>

          <a href="#contact" className='btn btn-primary'>Connect</a>
        </div>
      </div>
    </section>
  )
}

export default About