import "../stylesheets/Navbar2.css";
import Logo from "../assets/images/logo2.png";
import { AlignJustify } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { GoogleButton } from "react-google-button";
import { AuthContext, UserAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
let flag = 0;

export default function Navbar2() {
  const { user, logOut } = UserAuth();
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

  const { googleSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = async () => {
    try {
      const response = await googleSignIn();
      setUid(response.uid)
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    if ( user !== null) {
      navigate("/signInPage");
    }
    else{
      navigate('/')
    }
  },[user])
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  /*sign up*/
  const handleGoogleSignUp = async () => {
    try {
      const response = await googleSignIn();
      setUid(response.uid)
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    if ( user !== null) {
      navigate("/signUpPage");
    }
    else{
      navigate('/')
    }
  },[user])
  /*        */
  return (
    <div>
      <nav>
        <a className="menu-bttn" href="#" onClick={menu_click}>
          <AlignJustify color="white" />
        </a>
        <label className="logo">
          <img src={Logo} alt="" height="65" width="75"/>
        </label>
        <div className="nav-buttons"style={myStyle}>
          <button className="button-80" id="Home">Home</button>
          <button className="button-80" id="about-bttn">About</button>
          {user?.displayName?(
            null ) : (<button className="button-80" role="button" id="signup" onClick={handleGoogleSignUp}>Sign up</button>
          )}
          
          {user?.displayName ? (
            <button onClick={handleSignOut} className="button-80" id="signout">Log out</button>
          ) : (
            <button onClick={handleGoogleSignIn} className="button-80" id="signin"> Sign in </button>
          )}
        </div>

        <link to="/signin"></link>
      </nav>
    </div>
  );
}
