import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md'
import { RiLinkedinLine } from "react-icons/ri";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_urg0dih', 'template_pzde2ls', form.current, 'QA63HVbhOhKQxSqn9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>pratik.soni.biz@gmail.com</h5>
            <a href="mailto:pratik.soni.biz@gmail.com" rel='noreferrer' target='_blank'>Send a message</a>
          </article>
          <article className="contact_option">
            <RiLinkedinLine  className='contact_option-icon'/>
            <h4>LinkedIn</h4>
            <h5>spratik929</h5>
            <a href="https://www.linkedin.com/in/spratik929/" rel='noreferrer' target='_blank'>Send a message</a>
          </article>
        </div>

        {/* End Of Contact Options */}

        <form autoComplete='off' ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact