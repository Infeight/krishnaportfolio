import React from 'react'
import'./projects.css'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <>

 <div className="resume-btn1"><Link to={'/'}>Home</Link></div>
 
          <div className="works">

<div className="workscont">
    <div className="workdone"><img src="ailogo1.png" alt="" />
    <p>
    <h6>Predicting Housing Prices using Regression and Feature Engineering</h6> <br />
Developed a machine learning model to accurately predict housing prices by analyzing a wide range of property features including location, size, number of rooms, and available amenities. Carried out extensive data preprocessing steps such as handling missing values, encoding categorical variables, and scaling numerical features. Applied feature engineering techniques to create new informative features and improve model performance. Explored multiple regression algorithms including Linear Regression, Ridge, Lasso, and Random Forest Regressor using the Scikit-learn library. Evaluated model performance using metrics like Mean Absolute Error (MAE), Root Mean Squared Error (RMSE), and R² score to select the best-performing model.    
    </p>
    </div>
    <div className="workdone"><img src="circuitlogo1.png" alt="" />
    <p>
   <h6> Smart Home Automation Controller</h6> <br />
   Designed a custom PCB for a smart home system using ATmega328P and ESP8266 to enable Wi-Fi-based appliance control. Integrated relay driver circuits with opto-isolator-based AC isolation for safety. Implemented UART communication between the microcontroller and Wi-Fi module, along with EMI suppression techniques for stable operation. Schematic and PCB layout were created in KiCad.
    </p>
    </div>
    <div className="workdone"><img src="ailogo2.png" alt="" />
    <p>
    <h6>Fake News Detection using NLP and Classification</h6> <br />
    Built a fake news detection system using NLP and machine learning. Preprocessed text data with tokenization, stopword removal, and TF-IDF vectorization. Trained Logistic Regression and Random Forest classifiers for prediction. Evaluated model performance using accuracy, precision, recall, and F1-score.
    </p>
    </div>
   

</div>
<div className="imgcont">
    <img src="pcb.png" alt="" />

    <div className="workshead">
    Crafted with Code
    </div>
</div>
</div>

<div className="works1">

<div className="workscont">
    <div className="workdone"><img src="circuitlogo2.png" alt="" />
    <p>
    <h6>Double Tail Comparator Design and Simulation</h6> <br />
    Designed and simulated an optimized double tail comparator using Cadence Virtuoso, focusing on low power and high-speed performance. Analyzed key parameters like delay and offset, and validated the design across PVT variations for reliability.
    </p>
    </div>
    <div className="workdone"><img src="ailogo3.png" alt="" />
    <p>
   <h6> Accident Alert System</h6> <br />
   Developed a real-time accident detection and alert system using sensors integrated with an Arduino. Detected sudden impact or motion patterns and triggered automated alerts to emergency contacts using a Python-based interface. Aimed to improve response time in critical situations through immediate notification.
    </p>
    </div>
    <div className="workdone"><img src="ailogo2.png" alt="" />
    <p>
    <h6>Sign Language Glove</h6> <br />
    Designed a wearable glove system to recognize hand gestures and translate sign language into text using Python and embedded sensors. Integrated flex sensors and microcontroller-based hardware to capture finger movements and process the data in real-time, enabling effective communication for individuals with hearing or speech impairments.
    </p>
    </div>

    <div className="workdone"><img src="circuitlogo3.png" alt="" />
    <p>
    <h6>Spectrum Signal Analysis for Noise Detection</h6> <br />
    Performed frequency-domain analysis using MATLAB to detect and isolate noise components in signals. Applied Fourier Transform techniques to visualize and analyze spectral content, helping to identify unwanted frequencies and assess signal quality.
    </p>
    </div>

    <div className="workdone"><img src="circuitlogo1.png" alt="" />
    <p>
    <h6>16-bit ALU Design in Xilinx Vivado</h6> <br />
    Implemented a 16-bit Arithmetic Logic Unit (ALU) using Verilog HDL in Xilinx Vivado. Supported operations like addition, subtraction, logical and bitwise functions. Verified functionality through testbenches and waveform analysis using simulation tools.
    </p>
    </div>
   

</div>
<div className="imgcont" id='img2'>
    <img src="robot.png" alt="" />
</div>
</div>

    </>
  )
}

export default Projects
