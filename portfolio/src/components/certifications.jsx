import React from 'react'
import './certifications.css'
import { Link } from 'react-router-dom'

const Certifications = () => {
  return (
    <>
    <div className="resume-btn1"><Link to={'/'}>Home</Link></div>
    
       
       <div className="certs1">
         <div className="heading">Certifications</div>
  
  <div className="view">
          <div className="certs">
          <div className='certificate'>
              <img src="cert1.jpeg" alt="" />
              <h2>12 March 2025</h2>
          </div>
          <div className='certificate'>
              <img src="cert2.jpg" alt="" />
              <h2>26 June 2024</h2>
          </div>
          <div className='certificate'>
              <img src="cert3.png" alt="" />
              <h2>21 December 2023</h2>
          </div>
          <div className='certificate'>
              <img src="cert4.png" alt="" />
              <h2>20 December 2023</h2>
          </div>
          <div className='certificate'>
              <img src="cert5.png" alt="" />
              <h2>02 January 2023</h2>
          </div>
  
          <div className='certificate'>
              <iframe src="https://lottie.host/embed/ca0dbbb8-4d9f-4add-be06-e75be07927ba/UfxEBCJ4Vy.lottie" frameborder="0"></iframe>
          </div>
          </div>
       </div>
       </div>
     
    </>
  )
}

export default Certifications
