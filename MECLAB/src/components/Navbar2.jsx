import "../stylesheets/Navbar2.css";
import Logo from "../assets/images/logo2.png";
import { AlignJustify } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { GoogleButton } from "react-google-button";
import { AuthContext, UserAuth } from "../Context/AuthContext";
import { useNavigate} from "react-router-dom";
// import signIn from "./Trial"
import SignUpPage from "./SignUpPage";
import { signIn } from "../library/Firebase";
let flag = 0;

export default function Navbar2() {
  const { user, logOut } = UserAuth();
  console.log(user)
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
    console.log('User object is null or undefined.');
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
  // const [Resp, setResp] = useState(null);
  const { googleSignIn } = useContext(AuthContext);
  const { googleSignUp} = useContext(AuthContext);
  /*useEffect(()=>{
    if (user?.displayName!== null) {
      navigate("/signinpage");
    }
    else{
      navigate('/')
    
  },[user?.displayName])}*/
  // const handleGoogleSignIn = async () => {
  //   try {
  //     const response = await googleSignIn();
  //     setResp(response)
      
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   /*if (Resp===true){
  //     console.log("true")
  //   }
  //   else{
  //     console.log('false')
  //   }*/
    
  
  // };
  
    
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
      const response = await googleSignUp();
      
      //setUid(response.uid)
      console.log(response)
    } catch (error) {
      console.log(error);
    }
    console.log(uid)
 
  };
    
  
  /*        */
  /* GO HOME*/  
  const GoHome = () =>{
    navigate("/")
  }
  return (
    <div>
      <nav>
        <a className="menu-bttn" href="#" onClick={menu_click}>
          <AlignJustify color="rgb(1, 39, 81)" />
        </a>
        <label className="logo">
          <img src={Logo} alt="" height="65" width="75"/>
        </label>
        <div className="nav-buttons"style={myStyle}>
          <button className="button-80" onClick={GoHome} id="Home">Home</button>
          <button className="button-80" id="about-bttn">About</button>
          {user?.displayName?(
            null ) : (<button className="button-80" id="signup" onClick={signIn}>Sign up</button>
          )}
          
          {user?.displayName ? (
            <button onClick={handleSignOut} className="button-80" id="signout">Log out</button>
          ) : (
            <button onClick={signIn} className="button-80" id="signin"> Sign in </button>
          )}
        </div>

      </nav>
    </div>
  );
}
