import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const Navbar = () => {
  return (
    <>
    <div className="navbar">
    <div className="resume-btn"><Link to={'/projects'}>Projects</Link></div>
    <div className="resume-btn"><Link to={'/resume'}>Resume</Link></div>
    <div className="resume-btn"><Link to={'/certifications'}>Certifications</Link></div>
    <div><a href="https://www.instagram.com/thej_04/"><FaInstagram className='logos'/></a></div>
    <div><a href="https://in.linkedin.com/in/krishna-teja-r-291678290"><FaLinkedin  className='logos'/></a></div>
    </div>
 
      
    </>
  )
}

export default Navbar
