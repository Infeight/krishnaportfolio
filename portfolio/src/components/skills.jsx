import React from 'react'
import './skills.css';
import  { useEffect, useRef,useState } from 'react';


const Skills = () => {
      const pichold = useRef(null);
      const [isLoaded, setIsLoaded] = useState(true);

      const handleError = () => {
        console.log('er')
        setIsLoaded(false); // Hide on error
      };
    
    

    useEffect(()=>{
        const handleMouseMove = (e) => {
            if (!pichold.current) return;
      
            const rect = pichold.current.getBoundingClientRect();
            const picholdx = rect.x + rect.width / 2;
            const picholdy = rect.y + rect.height / 2;
      
            const deltaX = e.clientX - picholdx;
            const deltaY = e.clientY - picholdy;
      
            const rotateX = Math.atan2(deltaY,deltaX);
            const deg = (rotateX * 180) / Math.PI 
            // const rotateY = -(deltaX / window.innerWidth) * 40;   
          
      
            pichold.current.style.transform = `rotate(${90 + deg}deg)`;
          };

          window.addEventListener('mousemove', handleMouseMove);

          return () => {
            window.removeEventListener('mousemove', handleMouseMove);
          };
    },[])

    useEffect(()=>{
      const skills = document.getElementById('skills')

      const handleskills = ()=>{
        document.getElementById('head').style.left = '0vw'
        document.getElementById('skillcont').style.opacity = '1'
        document.querySelectorAll('.logobox').forEach(box=>{
          box.style.boxShadow = ' 0 4px 8px rgba(0, 0, 0, 0.2)';
        })
      }

      const handleskillsleft = ()=>{

        document.getElementById('head').style.left = `70vw`
        document.getElementById('skillcont').style.opacity = '5%'
        document.querySelectorAll('.logobox').forEach(box=>{
          box.style.boxShadow = 'none';
        })
      }

    if(window.innerWidth>='1023'){
      skills.addEventListener('mouseover',handleskills)
      skills.addEventListener('mouseleave',handleskillsleft)
    }

      return () => {
        skills.removeEventListener('mouseover',handleskills);
      skills.removeEventListener('mouseleave',handleskillsleft)

      };
    },[])

    const iframeanim = ()=>{
      document.getElementById('circuitanim').style.opacity = '1'
    }
    const stopanim = ()=>{
      document.getElementById('circuitanim').style.opacity = '0'

    }

  return (
    <>

      <div className="skills" id='skills'>
  
        <div className="skillcont" id='logoscont'>

        <div className="head" id='head'>SKILLS</div>

         <div className="logossep">
        
         </div>

         
         
         <div className="logossep">
         <div className="logobox"><img src="python.jpg" alt="" /></div>
         <div className="logobox"><img src="pandas.jpg" alt="" /></div>
          <div className="logobox"><img src="scikit.png" alt="" /></div>
          <div className="logobox"><img src="vscode.jpg" alt="" /></div>
          <div className="logobox"><img src="jupyter.png" alt="" /></div>
         </div>
         
         <div className="logossep">
         <div className="logobox"><img src="matlab.jpg" alt="" /></div>
          <div className="logobox"><img src="keil.jpeg" alt="" /></div>
          <div className="logobox"><img src="kicad.png" alt="" /></div>
          <div className="logobox"><img src="git.png" alt="" /></div>
         <div className="logobox"><img src="numpy.png" alt="" /></div>

         </div>
          <div className="logossep">
          <div className="logobox"><img src="ansys.jpg" alt="" /></div>
          <div className="logobox"><img src="scipy.png" alt="" /></div>
          <div className="logobox"><img src="verilog.png" alt="" /></div>
          <div className="logobox"><img src="matplotlib.png" alt="" /></div>
          <div className="logobox"><img src="cadence.png" alt="" /></div>
          <div className="logobox"><img src="anaconda.png" alt="" /></div>
          </div>

          

        </div>
        {isLoaded && (
        <iframe
        id='circuitanim'
          src="https://lottie.host/embed/175046f5-1eea-49d8-9c8e-5a2b0a13646c/RzZ3l1O2XB.lottie"
          title="Lottie animation"
          onError={handleError}
        />
      )}
        {/* <iframe id='circuitanim' src="https://lottie.host/embed/175046f5-1eea-49d8-9c8e-5a2b0a13646c/RzZ3l1O2XB.lottie"></iframe> */}
         <div className="skillimg" ref={pichold}>
          <img onMouseEnter={iframeanim} onMouseLeave={stopanim} id='skillimg_img' src="aibot.png" alt="" />
          </div>

        <div className="skillcont" id='skillcont'>

 <div className="skill"> C & C++ Programming (Data Structures & Algorithms) 🖥️</div>
           <div className="skill"> Python Programming (Machine Learning & Artificial Intelligence)  🐍🤖</div>
           <div className="skill">Data Science & Machine Learning Libraries (NumPy, Pandas, Matplotlib, Scikit-learn, SciPy, TensorFlow Basics) 📊📚</div>
           <div className="skill">Development Tools (VS Code, GitHub) 💻🔧</div>
       <div className="skill">Assembly Programming (8086, 8051) 🛠️</div>
       <div className="skill">PCB Design & Hardware Development (KiCad, Logic Design, VLSI - Verilog, Cadence Virtuoso)  📐💡</div>
       <div className="skill">Simulation & Modeling Tools (MATLAB, Keil uVision, HFSS, Ansys, Simulink) 🔬📊</div>

        </div>
      </div>
    </>
  )
}

export default Skills
