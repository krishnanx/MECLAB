import "../stylesheets/Navbar2.css"
import Logo from '../assets/images/logo2.png'
import {AlignJustify} from "lucide-react"
import React, { useState } from 'react'

let flag = 0;


export default function Navbar2() {
    const [myStyle , setStyle] = useState({});
    const menu_click = () => {
        
        if (flag == 0) {
            flag = 1;

            setStyle({
                left:0
            })

        }
        else {
            flag = 0 

            setStyle({
                left:'-100%'
            })
        }
    }
  return (
    <div>
      <nav>
        <a className="menu-bttn" href="#" onClick={menu_click}><AlignJustify color="white"/></a>
        <label className="logo"><img src={Logo} alt=""  height='80' width='80'/></label>
        <ul style={myStyle}>
            <li><a class="active" href="#">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">LOGIN</a></li>
        </ul>
      </nav>
    </div>
  )
}
