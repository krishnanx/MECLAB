import "../stylesheets/Navbar2.css";
import Logo from "../assets/images/logo2.png";
import { AlignJustify } from "lucide-react";
<<<<<<< HEAD
import React, { useContext, useEffect, useState,useRef} from "react";
=======
import {ArrowUp} from 'lucide-react';
import React, { useContext, useEffect, useState } from "react";
>>>>>>> ca01b62523cb0d260e47124a1e9909c7d72061f5
import { GoogleButton } from "react-google-button";
import { AuthContext, UserAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import TargetDivRef from "../components/TargetDivRef"
// import signIn from "./Trial"
import SignUpPage from "./SignUpPage";
import { signUp, addIp } from "../library/Firebase";
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/all';


const scrollup =()=> {
  window.scrollTo({
    top:0 , 
    behavior: "smooth"
  })
}

let flag = 0;

export default function Navbar2() {
  const targetDivRef = TargetDivRef();
  const { user, logOut, profile, setProfile } = UserAuth();
  //console.log(user)
  /*                                               */
  // Check if user object exists
  if (user) {
    // Accessing individual properties only if user is not null or undefined
    /*const accessToken = user.stsTokenManager.accessToken;
    const displayName = user.displayName;
    const email = user.email;
    const emailVerified = user.emailVerified;
    const photoURL = user.photoURL;
    const uid = user.uid;

    // Logging the values
    console.log('Access Token:', accessToken);
    console.log('Display Name:', displayName);
    console.log('Email:', email);
    console.log('Email Verified:', emailVerified);
    console.log('Photo URL:', photoURL);
    console.log('UID:', uid);*/

    // Additional properties (if needed)
    if (user.metadata) {
      const createdAt = user.metadata.createdAt;
      const lastLoginAt = user.metadata.lastLoginAt;
      //console.log('Created At:', createdAt);
      //console.log('Last Login At:', lastLoginAt);
    }
  } else {
    console.log("User object is null or undefined.");
  }

  /*                                               */
  const [uid, setUid] = useState(null);
  const navigate = useNavigate();
  const [myStyle, setStyle] = useState({});
  const menu_click = () => {
    if (flag == 0) {
      flag = 1;

      setStyle({
        left: 0,
      });
    } else {
      flag = 0;

      setStyle({
        left: "-100%",
      });
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  /*sign up*/

  const handleButtonClick = async () => {
    // Call signup function
    const response = await signUp();
    console.log(response)
    setProfile(response);
  };
  useEffect(() => {
    console.log(Object.keys(profile).length)
    if (Object.keys(profile).length !== 0) {
      console.log("changed");

      if (profile && profile.ipAddress) {
        console.log("Changed")
        navigate('/HomePage');
      } else {
        navigate("/SignUpWithIp");
      }
    }
  }, [profile]);

  /*        */
  /* GO HOME*/
  const GoHome = () => {
    navigate("/");
  };

<<<<<<< HEAD
    /*const handleClick = () => {
      if (targetDivRef.current) {
        targetDivRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };*/
=======
  


  
>>>>>>> ca01b62523cb0d260e47124a1e9909c7d72061f5
  return (
    <div>
      <nav className="main-nav-bar">
        <a className="menu-bttn" href="#" onClick={menu_click}>
          <AlignJustify color="rgb(1, 39, 81)" />
        </a>
        <label className="logo">
          <img src={Logo} alt="" height="65" width="75" />
        </label>
        <div className="nav-buttons" style={{myStyle,width:"520px",marginLeft:"900px",marginRight:"40px"}}>
          <button className="button-80" onClick={GoHome} id="Home">
            Home
          </button>
          <button className="button-80" id="about-bttn">
            About
          </button>

          {user?.displayName ? (
            <button onClick={handleSignOut} className="button-80" id="signout">
              Log out
            </button>
          ) : (
            <button
              onClick={handleButtonClick}
              className="button-80"
              id="signin"
            >
              {" "}
              Sign in{" "}
            </button>
          )}

          <div className="pttb" onClick={scrollup}>
            <ArrowUp className="push" />
          </div>
          
        </div>
      </nav>
    </div>
  );
<<<<<<< HEAD
}
=======
}



// window.addEventListener("DOMContentLoaded" , ()=>{

// window.addEventListener("load" , ()=>{
//   window.addEventListener("scroll" , ()=>{
//     let Yaxis = window.scrollY;
//     console.log(Yaxis);
//     if (Yaxis>=200) {
//       console.log("flag");

//       bttn.style.opacity = '1';
//     }
//   })
// })

// })


window.addEventListener("load" , ()=>{
  gsap.registerPlugin(ScrollTrigger)
  gsap.to(".pttb",{
      scrollTrigger: {
          trigger: ".pttb" ,
          toggleActions:"play none none reverse" ,
          start: "20px 80%" 
      },
      opacity:1 ,
      duration: .2
  })
})








>>>>>>> ca01b62523cb0d260e47124a1e9909c7d72061f5
