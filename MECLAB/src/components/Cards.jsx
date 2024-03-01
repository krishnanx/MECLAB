import React, { useEffect, useState } from 'react'
import "../stylesheets/Cards.css"
import image1 from '../assets/images/icons/easy.jpg';
import image2 from '../assets/images/icons/security2.png';
import image3 from '../assets/images/icons/automation.jpg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Adruino from '../assets/images/arduino.jpg'
import ESP from '../assets/images/ESP32.jpg'
import PIR from '../assets/images/PIRsensor.jpg'



gsap.registerPlugin(ScrollTrigger);




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
                <h2 className="card-text">TOTAL CONTROL</h2>
                <p className="card-text">{Text1}</p>
                <button onClick={button_click1}>Read More</button>
            </div>
            <div className="card">
                <div className="card-image">
                    <img src={image2} alt="" />
                </div>
                <h2 className="card-text">FULL PROTECTION</h2>
                <p className="card-text">{Text2}</p>
                <button onClick={button_click2}>Read More</button>
            </div>
            <div className="card">
                <div className="card-image">
                    <img src={image3} alt="" />
                </div>
                <h2 className="card-text">AUTOMATION</h2>
                <p className="card-text">{Text3}</p>
                <button id='b3' onClick={button_click3}>Read More</button>
            </div>
        </section>

        <section className='container2'>
            <div className="box" id='box1'>
                <div className="img"></div>
                <div className="txt">
                    <p>
                Our project, Protego, encompasses three essential models designed to enhance security and surveillance. The first model functions as a live streaming video system, essentially serving as a security camera with the potential for integration with IPO (Internet Protocol Camera). Exploring the versatility of a live streaming platform or camera for various applications is a critical aspect that we will delve into further. Additionally, we anticipate expanding the scope of this model for future developments.
                    </p>
                </div>

            </div>
            <div className="box" id='box2'>
            <div className="txt">
                    <p>
                    The second model incorporates a Passive Infrared (PIR) sensor for motion detection. Upon detecting motion, the system promptly initiates video recording at a high-quality VGA resolution of 680 x 400 pixels. The recorded video is seamlessly transmitted through the Telegram API, notifying users of the detected motion. Users receive messages along with the video, providing them with the ability to alert authorities if necessary.
                    </p>
                </div>
                <div className="img"></div>
            </div>
            <div className="box" id='box3'>
            <div className="img"></div>
                <div className="txt">
                    <p>
                    The third model is a dash cam, addressing the escalating issue of fraudulent insurance claims related to false accidents. Equipped with a 16 GB SD card, the dash cam continuously records videos over specific time intervals, typically ranging from 10 to 20 minutes. This proactive approach safeguards against false claims and ensures a reliable record of events.
                    </p>
                </div>
            </div>
            <div className="conclusion-text">
            Considering the diverse preferences of users, we have designed the system to accommodate a range of camera qualities and models. This adaptability enables users to tailor the system to their specific needs and preferences, ensuring a comprehensive and customizable security solution.
            </div>

            <div className="tools">
                <div className="tool1" id="tool-img">
                    <img src={Adruino} alt="" />
                </div>
                <div className="tool2" id="tool-img">
                    <img src={ESP} alt="" />
                </div>
                <div className="tool3" id="tool-img">
                    <img src={PIR} alt="" />
                </div>
            </div>
        </section>
      
    </div>
  )
}


window.addEventListener("load" , ()=>{
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(".card",{
        scrollTrigger: {
            trigger: ".container" ,
            toggleActions:"play none none reverse" ,
            start: "70px 80%" ,
        },
        opacity: 0,
        y: 70,
        duration:1,
        ease: true
    })
})

window.addEventListener("load" , ()=>{
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(".conclusion-text",{
        scrollTrigger: {
            trigger: ".conclusion-text" ,
            toggleActions:"play none none reverse" ,
            start: "70px 80%" 
        },
        opacity: 0,
        y: 70,
        duration:1,
        ease: true
    })
})


window.addEventListener("load" , ()=>{
    gsap.registerPlugin(ScrollTrigger)
    gsap.from("#box1",{
        scrollTrigger: {
            trigger: "#box1" ,
            toggleActions:"play none none reverse" ,
            start: "70px 80%" ,
        },
        x: -1500 ,
        duration:1
    })
})

window.addEventListener("load" , ()=>{
    gsap.registerPlugin(ScrollTrigger)
    gsap.from("#box2",{
        scrollTrigger: {
            trigger: "#box2" ,
            toggleActions:"play none none reverse" ,
            start: "70px 80%" ,
        },
        x: 1500 ,
        duration:1,
        ease: true
    })
})

window.addEventListener("load" , ()=>{
    gsap.registerPlugin(ScrollTrigger)
    gsap.from("#box3",{
        scrollTrigger: {
            trigger: "#box3",
            toggleActions:"play none none reverse" ,
            start: "70px 80%" ,
        },
        x: -1500 ,
        duration:1
    })
})

window.addEventListener("load" , ()=>{
    gsap.from(".tools" , {
        scrollTrigger: {
            trigger: ".tools" ,
            toggleActions:"play none none reverse" ,
            start: "70px 80%" 
    },
    opacity: 0,
    duration: 1
    })
})