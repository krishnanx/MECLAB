import "./App.css";
import "./stylesheets/Button.css" 
import "./components/contacts/Contacts.css"
import React from "react";
// import { ListName } from "./library/Firebase.js";
//import SignIn from "./components/SignIn/SignIn.jsx";
import { LoginContext } from "./Context/LoginContext.jsx";
//import { Route } from 'lucide-react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
// import signInPage from "./components/SignInPage.jsx";
import Landing from "./pages/Landing.jsx";
import SignInPage from "./components/SignInPage.jsx";
import SignUpPage from "./components/SignUpPage.jsx";
import Navbar2 from "./components/Navbar2.jsx";

const App = () => {
  
  

  return (
    <main>
      <div>
        {/* <ListName/> */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signinpage" index element={<SignInPage/>} />
          <Route path="/SignUpPage" index element={<SignUpPage/>}/>
  
          {/* <Route path="/signinpage" element={<SignInPage />} /> */}
        </Routes>
      </div>
    </main>
  );
};
export default App;
