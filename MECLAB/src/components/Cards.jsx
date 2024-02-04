import React, { useState } from 'react'
import "../stylesheets/Cards.css"
import image1 from '../assets/images/icons/easy.jpg';
import image2 from '../assets/images/icons/security2.png';
import image3 from '../assets/images/icons/automation.jpg';


let flag1 = 0;
let flag2 = 0;
let flag3 = 0;
const text1 = "Maintain total control over your house with our easy to use interface "
const text2 = "Protect your house with best technology at ease of your comfort"
const text3 = "Upgrade Your Security to latest home automation devices to boost your security"

export default function Cards() {
    const [Text1 , SetText1] = useState(text1)
    const button_click1 = () => {
        if (flag1 === 0) {
            SetText1("ProteGo's simple and powerful UI interface with advanced features help users conviently use the system and enhance the security  ")
            flag1+=1
        }
        else {
            SetText1(text1)
            flag1--
        }
    }


    const [Text2 , SetText2] = useState(text2)
    const button_click2 = () => {
        if (flag2 === 0) {
            SetText2("ProteGo's simple and powerful UI interface with advanced features help users conviently use the system and enhance the security  ")
            flag2+=1
        }
        else {
            SetText2(text2)
            flag2--
        }
    }


    const [Text3 , SetText3] = useState(text3)
    const button_click3 = () => {
        if (flag3 === 0) {
            SetText3("ProteGo's simple and powerful UI interface with advanced features help users conviently use the system and enhance the security  ")
            flag3+=1
        }
        else {
            SetText3(text3)
            flag3--
        }
    }



  return (
    <div>

        <section className='container'>
            <div className="card">
                <div className="card-image">
                    <img src={image1} alt="" />
                </div>
                <h2>TOTAL CONTROL</h2>
                <p>{Text1}</p>
                <button onClick={button_click1}>Read More</button>
            </div>
            <div className="card">
                <div className="card-image">
                    <img src={image2} alt="" />
                </div>
                <h2>FULL PROTECTION</h2>
                <p>{Text2}</p>
                <button onClick={button_click2}>Read More</button>
            </div>
            <div className="card">
                <div className="card-image">
                    <img src={image3} alt="" />
                </div>
                <h2>AUTOMATION</h2>
                <p>{Text3}</p>
                <button id='b3' onClick={button_click3}>Read More</button>
            </div>
        </section>
      
    </div>
  )
}
