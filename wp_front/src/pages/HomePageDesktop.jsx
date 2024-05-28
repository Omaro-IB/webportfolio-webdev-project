import '../App.css';
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import HomeDesktop from "../components/HomeDesktop";
import {useEffect, useState} from "react";


function HomePageDesktop() {
  return (
      <div>
        <Navbar > </Navbar>
        <HomeDesktop > </HomeDesktop>
        <Projects> </Projects>
        <Contact> </Contact>
      </div>
  );
}
export default HomePageDesktop;