import React from 'react'
import './education.css'

const Education = () => {

  const drag = (e)=>{
   document.getElementById('language').style.animationName = 'swing'
   document.getElementById('language').querySelector('#langiframe').style.transform = 'rotateY(180deg)'
   document.getElementById('language').querySelectorAll('.lang1').forEach(element => {
      element.style.transform = 'rotateY(180deg)'
    });
    e.target.style.display = 'none'
    document.getElementById('do').style.display = 'block'
    setTimeout(()=>{
      document.getElementById('language').style.animationName = ''
      document.getElementById('language').querySelectorAll('.lang1').forEach(element => {
        element.style.transform = 'rotateY(180deg)'
      });
    },1000)
  }

  const normal = (e)=>{
    document.getElementById('language').style.animationName = ''
       document.getElementById('language').querySelector('#langiframe').style.transform = 'rotateY(0deg)'
     document.getElementById('language').querySelectorAll('.lang1').forEach(element => {
      element.style.transform = 'rotateY(0deg)'
    });
    e.target.style.display = 'none'
    document.getElementById('dont').style.display = 'block'

     setTimeout(()=>{
  document.getElementById('language').style.transform = 'rotateY(0deg)'
    },1000)
   }

  return (
    <>
      <div className="education">
        <div className="study">
            <div className="study1" id='study1'>

             <h6>Bachelor of Technology (B.Tech) in Electronics and Communication Engineering</h6>
             <p>
             Indian Institute of Information Technology, Design and Manufacturing (IIITDM) Kurnool <br /> <br />
2022 – Present | CGPA: 8.13 <br />
Currently pursuing an undergraduate degree with a strong foundation in electronics, embedded systems, communication technologies, and programming. Involved in hands-on projects and coursework emphasizing both theoretical and practical aspects of ECE.


             </p>

            </div>
            <div className="study1" id='study2'>
                <h6>Higher Secondary Certificate (HSC) – MPC (Mathematics, Physics, Chemistry)</h6>
                <p>
                Sri Chaitanya Junior College  <br /> <br />
Graduated: 2022 | Percentage: 97.5%   <br />
Completed intermediate education with a focus on mathematics and science, demonstrating strong academic performance and problem-solving skills. Ranked among the top performers in the cohort.
                </p>
            </div>

            <div className="study1" id='study3'>
                <h6>Secondary School Certificate (SSC)</h6>
                <p>
                Sri Chaitanya School <br /> <br />
Graduated: 2020 | Percentage: 97.8% <br />
Achieved academic excellence in the 10th-grade board exams, building a solid foundation in science and mathematics, and consistently performing at the top of the class.
                </p>
            </div>
        </div>

        <button id='dont' onClick={drag}>Don't Click</button>
        <button id='do' onClick={normal}>Click     </button>
     
        <div className="language"  id='language'>

        <iframe id='langiframe' src="https://lottie.host/embed/5918a1c2-5779-421a-ab39-d9375ed660fc/XW0UqGjzY4.lottie"></iframe>

           <div className="lang1">
         <h6>  English – Fluent (Professional Working Proficiency)</h6>
           Comfortable in both written and spoken communication; capable of handling professional discussions, documentation, and presentations effectively.
           </div>

           <div className="lang1">
         <h6> Telugu – Native Speaker</h6>
         Excellent command over the language, including native-level fluency in speaking, reading, and writing.
           </div>

           <div className="lang1">
         <h6> Hindi – Intermediate (Conversational)</h6>
         Able to understand and engage in everyday conversations; can read and write with moderate proficiency.
           </div>


        </div>
       
      </div>
    
    </>
  )
}

export default Education
