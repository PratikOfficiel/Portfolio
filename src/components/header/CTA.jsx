import React from 'react'
import CV from '../../assets/cv.pdf'

function CTA() {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Resume</a>
        <a href="#contact" className='btn btn-primary'>Connect</a>
    </div>
  )
}

export default CTA