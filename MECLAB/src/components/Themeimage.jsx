import React, { useEffect , useRef}  from 'react'
import MainTheme from '../assets/images/family.png'
import "../stylesheets/Themeimage.css"
import Typewriter from 'typewriter-effect';




function Themeimage() {
  return (
    <div className='main-theme'>
      <img src={MainTheme} alt="" id="main-theme-image"/>
      <div className="animation-text" id='type-field'>
      <Typewriter
          options={{
            strings:["Stay Smart..." , "Stay Safe..." , "Stay Secure"] ,
            autoStart:true ,
            loop:true
          }} />
      </div>
      <div className="text1">
        <h1>ProteGo</h1>
        <h2>Innovation for a secure tomorrow</h2>
      </div>
    </div>
  )
}

export default Themeimage
