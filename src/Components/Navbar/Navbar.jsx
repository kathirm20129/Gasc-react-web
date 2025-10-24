import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/gasclogo.png'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'

export default function Navbar() {
  const[mobilemenu,setmobilemenu]=useState(true);
  const toggleMenu = ()=>{
    mobilemenu ? setmobilemenu(false) : setmobilemenu(true)
  }

  const[sticky,setsticky]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 500 ? setsticky(true) : setsticky(false)
    })
  },[]);
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo'/>
      <ul className={mobilemenu ? '': 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-160} duration={500}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>College Committee</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500}><button className='btn'>Contact us</button></Link></li>
      </ul>
      <img src={menu_icon} className='menu-icon'alt="" onClick={toggleMenu} />
    </nav>
  )
}
