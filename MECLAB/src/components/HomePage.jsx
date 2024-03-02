import { useState, useEffect } from "react"
import Logo from "../assets/images/logo2.png";
// import { collection, getDocs, getDoc, query, where } from "firebase/firestore";
import React from 'react'
import { getIpAddress } from "../library/Firebase";
import { UserAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
    const {logOut} = UserAuth();
    const navigate = useNavigate();
    const [iframeError, setIframeError] = useState(false);
    const {profile} = UserAuth();
    // const ipAddress = getIpAddress(profile.uid);
    const [ipAddress, setIpAddress] = useState('');
    const handleLoad = () => {
        // The iframe has loaded successfully
        console.log('Iframe loaded successfully');
      };
    
      const handleError = () => {
        // An error occurred while loading the iframe
        console.error('Iframe failed to load');
        setIframeError(true);
      };
      console.log(ipAddress)
      useEffect(()=>{
        const response = getIpAddress(profile && profile?.uid);
        // console.log(profile)
        response.then((value)=>setIpAddress(value))
        // setIpAddress(response)
      },[profile])
      console.log(ipAddress)
    const handleSignOut = async () => {
      try {
        await logOut();
        navigate("/")
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div className="Main">
      <nav className="navbar3">
            <label className="logo">
                <img src={Logo} alt="" height="65" width="75" />
              </label>
              <button onClick={handleSignOut} className="button-80" id="signout">
                Log out
              </button>
           
      </nav>
      <div>
        <div className='Homepage'>
          {iframeError ? (
          <p>Iframe failed to load.</p>
        ) : (
          <iframe
            title="External Content"
            src={ipAddress}
            width="600"
            height="400"
            onLoad={handleLoad}
            onError={handleError}
          ></iframe>
        )}
        </div>
      </div>
    </div>
      
    
  )
}

export default HomePage