import { useState } from 'react'
import Home from './components/home'
import './App.css'
import Navbar from './components/navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Projects from './components/projects'
import Resume from './components/resume'
import Certifications from './components/certifications'


function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home/>}/>
        <Route path='/certifications' element={<Certifications/>}/>
       <Route path='/resume' element={<Resume/>}/>
       <Route path='/projects' element={<Projects/>}/> 
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
