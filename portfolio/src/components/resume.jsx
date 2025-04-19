import React from 'react'
import './resume.css'
import { Link } from 'react-router-dom'


const Resume = () => {
  return (
    <>
      
       <div className="resume-btn1"><Link to={'/'}>Home</Link></div>
       <div className="heading">Resume</div>
       <div className="resumecont">
        <iframe src="krishna_teja_regintala.pdf" frameborder="0">Krishna Teja Regintala</iframe>
        <img src="resume1.png" className='resumeimg' alt="" />
        <img src="resume2.png" className='resumeimg' alt="" />

       </div>
    </>
  )
}

export default Resume
