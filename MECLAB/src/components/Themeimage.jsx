import React, { useEffect , useRef}  from 'react'
import MainTheme from '../assets/images/family.png'
import "../stylesheets/Themeimage.css"


function Themeimage() {
  return (
    <div className='main-theme'>
      <img src={MainTheme} alt="" id="main-theme-image"/>
      <div className="animation-text" id='type-field'>
        .
      </div>
      <div className="text1">
        <h1>ProteGo</h1>
        <h2>Innovation for a secure tomorrow</h2>
      </div>
    </div>
  )
}

export default Themeimage
