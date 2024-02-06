import React  from 'react'
import MainTheme from '../assets/images/family2.png'
import "../stylesheets/Themeimage.css"


export default function Themeimage() {
  return (
    <div className='main-theme'>
      <img src={MainTheme} alt="" id="main-theme-image"/>
    </div>
  )
}
