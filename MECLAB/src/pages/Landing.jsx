import React from "react";
import Navbar2 from "../components/Navbar2.jsx"
import Themeimage from "../components/Themeimage.jsx"; // THis is the component for that big family image we can change images if we want
import Cards from "../components/Cards.jsx"; //The three cards that contains features of our system
import Contact from "../components/contacts/Contacts.jsx";
const Landing = () => {
  return (
    <>
      <Navbar2/>
      <Themeimage />
      <Cards />
      <Contact/>
    </>
  );
};

export default Landing;
