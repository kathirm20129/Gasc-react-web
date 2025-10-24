import React from 'react'
import './Hero.css'
import darkarrow from '../../../assets/dark-arrow.png'

function Hero() {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h2>GOBI ARTS AND SCIENCE COLLEGE</h2>
            <p>Gobi Arts & Science College established in the year 1968 
              is one of the top ranking post-graduate cum research institutions 
              affiliated to Bharathiar University, Coimbatore. It is a co-
              educational grant-in-aid institution managed by the Gobi Arts 
              College Council, registered on 25.8.1967 as a Society. The 
              college was started with the noble objective of opening the 
              doors of higher education to the poor and meritorious students 
              who are mostly first generation students coming from agricultural 
              families. The college commenced its educational service with Pre-
              University classes to begin with, made a steady but phenominal growth 
              since inception, thanks to the vision and efficient strategies engineered 
              by the management, coupled with unstinted support of the staff, in shaping
               the destiny of the college.</p>
            <button className='btn'>Explore-More <img src={darkarrow} alt=""/></button>    
        </div>
      
    </div>
  )
}

export default Hero
