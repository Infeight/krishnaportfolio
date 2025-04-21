import React, { useEffect, useRef } from 'react';
import './home.css';
import Skills from './skills';
import Works from './works';
import Education from './education';
import Navbar from './navbar';

const Home = () => {
  const picholdRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!picholdRef.current) return;

      const rect = picholdRef.current.getBoundingClientRect();
      const picholdx = rect.x + rect.width / 2;
      const picholdy = rect.y + rect.height / 2;

      const deltaX = e.clientX - picholdx;
      const deltaY = e.clientY - picholdy;

      const rotateX = (deltaY / window.innerHeight) * 30; // vertical rotation
      const rotateY = (deltaX / window.innerWidth) * 30;   // horizontal rotation
    

      picholdRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  useEffect(() => {
    // const piccont = document.getElementById('profilecontainer');
    const pic = document.getElementById('box2');
    const handleMouseOver = () => {
      if(window.innerWidth>= '1023'){
          pic.style.width = '22vw'
         pic.style.height = '22vw'
      }
        
         document.getElementById('picholdbox').style.boxShadow = 'none'
         if(window.innerWidth>= '1023'){document.getElementById('name').style.left = '2vw'
     document.getElementById('desc').style.top = '0'
     document.getElementById('desc').style.opacity = '100%'}

    };
  
    const handleMouseLeave = () => {
      if(window.innerWidth>= '1023'){
        pic.style.width = '25vw'
       pic.style.height = '25vw'
    }
         document.getElementById('picholdbox').style.boxShadow = '0 0 5px 0px #ffffff'
         if(window.innerWidth>= '1023'){document.getElementById('name').style.left = '29vw'
      document.getElementById('desc').style.top = '-12%'
      document.getElementById('desc').style.opacity = '15%'}
      
    };
  
    pic.addEventListener('mouseover', handleMouseOver);
    pic.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      pic.removeEventListener('mouseover', handleMouseOver);
      pic.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>

      <div className="pichold" ref={picholdRef}>

        <div className='picholdbox' id='picholdbox'>
        <Navbar/>
           
           <div className="introcont">

           <div className='box1' id='heading'>
            Aspiring Electronics & AI/ML Developer: Building Skills to Innovate with Hardware and Intelligent Systems    
            </div>   
         
            <div className="name" id='name'>
            Krishna Teja Regintala
            </div>

           </div>
        
           <div className="box2" id='box2'><img src="nopic.webp" alt="" /></div>
    
  
            <div className="box1" id='desc'>

            With expertise in both Electronics and AI/ML, I specialize in designing advanced embedded systems and intelligent solutions that seamlessly integrate hardware and software. From developing precise circuit designs and PCB layouts to building machine learning models for predictive analytics and automation, I focus on creating innovative, scalable, and efficient solutions. By combining deep knowledge of electronics with the power of artificial intelligence, I aim to address complex challenges and drive technological advancement across various industries.

            </div>
        </div>
        
      </div>
      <Skills/>
      <Works/>
      <Education/>
        
        <div className='endnote'>
        <iframe src="https://lottie.host/embed/ffa724c8-a911-4098-b9d0-460874e3a97b/Az70WASnri.lottie"></iframe>
        If you’re looking for someone who brings a blend of technical depth, creativity, and a strong work ethic—I’d be thrilled to connect and explore how we can create something impactful together.
        </div>

        <div className="contacts">
          <div className="mobile"><a href="tel:+91 9014859400">Call Krishna Teja</a></div>
          <div className="mobile"><a href=" https://mail.google.com/mail/?view=cm&fs=1&to=mailto:krishnatej976@gmail.com&su=Subject%20Here&body=Message%20goes%20here"  
  rel="noopener noreferrer">Compose mail to Krishna Teja</a></div>

        </div>
    </>
  );
};

export default Home;
