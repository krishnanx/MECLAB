import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar2 from './components/Navbar2' //This is the component for navigation bar 
import Themeimage from './components/Themeimage.jsx' // THis is the component for that big family image we can change images if we want 
import Cards from './components/Cards.jsx' //The three cards that contains features of our system


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar2/>
    <Themeimage/>
    <Cards/>

  </React.StrictMode>,
)
