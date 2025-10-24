import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

function About() {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" />
            {/* <img src={play_icon} alt="" /> */}
        </div>
        <div className="about-right">
            <h3>ABOUT THE CAREER GUIDANCE & PLACEMENT CELL</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Career Guidance & Placement Cell was established in 1993 with a 
              noble intention of providing awareness on career choice and ensuring 
              placement opportunities to the students with all the potential skills 
              that would enhance them to meet the demands of organizational world..</p>
            <p>Career Guidance & Placement Cell would engage the students through 
              combination of classical and modern training system that would enable 
              the students to get acquainted with innovative technology and methodology 
              which pave a way for them to acquire multi tasking skills of modern dynamic society.</p> 
            <p>Career Guidance & Placement Cell is represented by Dr. P. Narendiran, Advisor 
              and Dr. K. Kalaiselvi, Placement Director. The cell mediates between the visiting 
              companies and the students. It further extend its everlasting support to the former 
              and later through several practical sessions like offering Motivational programs,
               Test series on grammar, Aptitude, Soft skills, Mock interview sessions etc.,</p>
        </div>

    </div>
  )
}

export default About
