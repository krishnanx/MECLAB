import React from 'react'
import Krishnan from '../../Images/Krishnan.jpg';
import Linkedin from "../../Icons/Linkedin.svg"
import Github from "../../Icons/github.svg"
import Instagram from "../../Icons/Instagram.svg"
//import {useNavigate,Navigate } from 'react-router-dom';
// <FontAwesomeIcon icon="fa-brands fa-linkedin" />
const Contacts = () => {
  /*KRISHNAN*/
  const KrishnanLinkedIn = () => {
    window.location.href = 'https://www.linkedin.com/in/krishnan-e-7a1112202/';
  };
  const KrishnanGithub = ( ) =>{
    window.location.href = 'https://github.com/krishnanx';
  }
  const KrishnanInstagram = ( ) =>{
    window.location.href = 'https://www.instagram.com/xkrishnanx/';
  }
  /*KRISHNAN OVER */
  /*     AMAL    */
  const AmalLinkedIn = () => {
    window.location.href = 'https://www.linkedin.com/in/krishnan-e-7a1112202/';
  };
  const AmalGithub = ( ) =>{
    window.location.href = 'https://github.com/krishnanx';
  }
  const AmalInstagram = ( ) =>{
    window.location.href = 'https://www.instagram.com/xkrishnanx/';
  }
  /*         */
  return (
    <div className='contacts'>
      <div>
        <h1>CONTACT US</h1>
      </div>
      <div className='part-1'>
        <div className='contact-1'>
          <div className='krishnan'>
            <div >
              <img className='krishnan-pic' src={Krishnan}></img>
            </div>
            <div>
              <h1>
                Krishnan E
              </h1>
            </div>
          </div>
          <div className='icons' id="krishnan_icons">
            <button  onClick={KrishnanLinkedIn}><img src={Linkedin} className='linkedin'></img></button>
            <button  onClick={KrishnanGithub}><img src={Github} className='linkedin'></img></button>
            <button  onClick={KrishnanInstagram}><img src={Instagram} className='linkedin'></img></button>
          
          
          </div>


        
        </div>
     
        <div className='contact-2'>
        <div className='krishnan'>
            <div >
              <img className='krishnan-pic' src={Krishnan}></img>
            </div>
            <div>
              <h1>
              Krishnan E
              </h1>
            </div>
          </div>
          <div className='icons' id="krishnan_icons">
            <button  onClick={AmalLinkedIn}><img src={Linkedin} className='linkedin'></img></button>
            <button  onClick={AmalGithub}><img src={Github} className='linkedin'></img></button>
            <button  onClick={AmalInstagram}><img src={Instagram} className='linkedin'></img></button>
          
          
          </div>

          

        </div>
      </div>
      <div className='part-2'>
        <div className='contact-1'>
            <div className='krishnan'>
              <div >
                <img className='krishnan-pic' src={Krishnan}></img>
              </div>
              <div>
                <h1>
                  Krishnan E
                </h1>
              </div>
            </div>
            <div className='icons' id="krishnan_icons">
              <button  onClick={KrishnanLinkedIn}><img src={Linkedin} className='linkedin'></img></button>
              <button  onClick={KrishnanGithub}><img src={Github} className='linkedin'></img></button>
              <button  onClick={KrishnanInstagram}><img src={Instagram} className='linkedin'></img></button>
            
            
            </div>


          
          </div>
      
        <div className='contact-2'>
          <div className='krishnan'>
              <div >
                <img className='krishnan-pic' src={Krishnan}></img>
              </div>
              <div>
                <h1>
                Krishnan E
                </h1>
              </div>
          </div>
            <div className='icons' id="krishnan_icons">
              <button  onClick={KrishnanLinkedIn}><img src={Linkedin} className='linkedin'></img></button>
              <button  onClick={KrishnanGithub}><img src={Github} className='linkedin'></img></button>
              <button  onClick={KrishnanInstagram}><img src={Instagram} className='linkedin'></img></button>
            
            
            </div>
        </div>
      </div>
            

    

        
        
    </div>
  )
}

export default Contacts