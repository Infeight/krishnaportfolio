import React from 'react'
import './works.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Works = () => {



  const drop = (e)=>{
  console.log(  e.target.closest('.workdone'))
  e.target.closest('.workdone').style.transitionDelay = '1.5s'
  e.target.closest('.workdone').style.opacity = '0'
  e.target.closest('.workdone').style.transitionDuration = '2s'

  setTimeout(()=>{
    e.target.closest('.workdone').style.opacity = '1'
    e.target.closest('.workdone').style.transitionDelay = '0s'
    e.target.closest('.workdone').style.transitionDuration = '0.5s'
  },4000)

  }

  

  

  return (
    <>
      <div className="works">

        <div className="workscont">

            <div className="workdone" id='workdone1'><img src="ailogo1.png" alt="" />
            <img src="screwhead.png" id='screw1' onMouseEnter={drop} alt="" />
            <p>
            <h6>Predicting Housing Prices using Regression and Feature Engineering</h6> <br />
            Developed a machine learning model to predict housing prices using features like location, size, room count, and amenities. Performed data preprocessing including handling missing values, encoding categoricals, and scaling. Applied feature engineering to enhance performance. Explored models like Linear Regression, Ridge, Lasso, and Random Forest using Scikit-learn. Evaluated using MAE, RMSE, and R² to select the best model.


            </p>
            </div>
            <div className="workdone" id='workdone2'><img src="circuitlogo1.png" alt="" />
            <img src="screwhead.png" id='screw2'  onMouseEnter={drop}  alt="" />
            <p>
           <h6> Smart Home Automation Controller</h6> <br />
           Designed a custom PCB for a smart home system using ATmega328P and ESP8266 to enable Wi-Fi-based appliance control. Integrated relay driver circuits with opto-isolator-based AC isolation for safety. Implemented UART communication between the microcontroller and Wi-Fi module, along with EMI suppression techniques for stable operation. Schematic and PCB layout were created in KiCad.
            </p>
            </div>

            <div className="workdone" id='workdone3'><img src="ailogo2.png" alt="" />
            <img src="screwhead.png" id='screw3'  onMouseEnter={drop}  alt="" />
            <p>
            <h6>Fake News Detection using NLP and Classification</h6> <br />
            Built a fake news detection system using NLP and machine learning techniques to classify news articles as real or fake. Preprocessed text data with tokenization, stopword removal, and TF-IDF vectorization to convert text into numerical features. Trained Logistic Regression and Random Forest classifiers for prediction and compared their performance. Evaluated models using accuracy, precision, recall, and F1-score to ensure reliability and robustness.
            </p>
            </div>
           
   <button className='explore'><Link to={'/projects'}>Explore More</Link></button>
        </div>
        <div className="imgcont">
            <img src="pcb.png" alt="" />

            <div className="workshead">
            Crafted with Code
            </div>
        </div>
      </div>
    </>
  )
}

export default Works
