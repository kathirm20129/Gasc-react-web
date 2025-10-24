import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Navbar/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'> 
        <Title Subtitle='Our PROGRAM' tilte='What We Offer'/>
        <Programs/>
        <About/>
        <Title Subtitle='Gallery' tilte='Campus Photos'/>
        <Campus/>
        <Title Subtitle='COLLEGE COMMITTEE' tilte='MEMBERS OF THE GOBI ARTS & SCIENCE COLLEGE COMMITTEE'/>
        <Testimonials/>
        <Title Subtitle='Contact us' tilte='Get In Touch'/>
        <Contact/>
        <Footer/>
      </div>
   
    </div>
  )
}

export default App  
