import React from 'react'
import './certifications.css'
import { Link } from 'react-router-dom'
import { FaExternalLinkAlt } from "react-icons/fa";

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
              <div className="details">
              <h2>Supervised Machine Learning : Regression and Classification</h2>
            
              <div className="cred">
              <p>Credential ID:</p>
                <div className="credid">9SY2SVFX9KCA</div>    
              <a href="https://www.coursera.org/account/accomplishments/verify/9SY2SVFX9KCA?trk=public_profile_see-credential">Show credential <FaExternalLinkAlt />              </a>
              </div>

              </div>
          </div>
          <div className='certificate'>
              <img src="cert2.jpg" alt="" />
              <div className="details">
              <h2>Data Structures & Algorithms using Cpp</h2>
            
              <div className="cred">
              <p>Credential ID:</p>
                <div className="credid">UC-f56616c6-b566-44eb-b868-e66214962a33</div>    
              <a href="https://www.udemy.com/certificate/UC-f56616c6-b566-44eb-b868-e66214962a33/?trk=public_profile_see-credential">Show credential  <FaExternalLinkAlt />              </a>
              </div>

              </div>
          </div>
          <div className='certificate'>
              <img src="cert3.png" alt="" />
              <div className="details">
              <h2>Circuit Simulation Onramp</h2>
            
              <div className="cred">
              {/* <p>Credential ID:</p> */}
                <div className="credid"></div>    
              <a href="https://matlabacademy.mathworks.com/progress/share/certificate.html?id=425329ab-56da-480e-932d-8270d8027077&&trk=public_profile_see-credential">Show credential <FaExternalLinkAlt />              </a>
              </div>

              </div>
          </div>
          <div className='certificate'>
              <img src="cert4.png" alt="" />
              <div className="details">
              <h2>Simulink Onramp</h2>
            
              <div className="cred">
              {/* <p>Credential ID:</p> */}
                <div className="credid"></div>    
              <a href="https://matlabacademy.mathworks.com/progress/share/certificate.html?id=6529a18c-2a7a-46f7-ab68-d88adb5a822d&&trk=public_profile_see-credential">Show credential  <FaExternalLinkAlt />              </a>
              </div>

              </div>
          </div>
          <div className='certificate'>
              <img src="cert5.png" alt="" />
              <div className="details">
              <h2>Microsoft Certified: Azure Fundamentals</h2>
            
              <div className="cred">
              <p>Credential ID:</p>
                <div className="credid">I555-4897</div>    
              <a href="https://learn.microsoft.com/en-us/users/krishnatejaregintala-3839/?trk=public_profile_see-credential">Show credential <FaExternalLinkAlt />              </a>
              </div>

              </div>
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
