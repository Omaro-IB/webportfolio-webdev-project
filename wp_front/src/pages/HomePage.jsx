import '../App.css';
import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar.jsx";
import HomeDesktop from "../components/HomeDesktop.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";
import HomeMobile from "../components/HomeMobile.jsx";
import data from "../data.json"

const p1_text = data.text.home_p1
const p2_text = data.text.home_p2
const subtitle = data.text.home_sub

function HomePage() {
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
    )
    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => setMatches( e.matches ));
    }, []);

    if (matches) {
        return (
            <div>
                <   Navbar callingPage="home"> </Navbar>
                <HomeDesktop subtitle={subtitle} p1_text={p1_text} p2_text={p2_text}> </HomeDesktop>
                <Projects> </Projects>
                <Contact> </Contact>
            </div>
        )
    } else {
        return (
            <div className="flex flex-col">
                <Navbar callingPage="home"> </Navbar>
                <HomeMobile subtitle={subtitle} p1_text={p1_text} p2_text={p2_text}> </HomeMobile>
                <Projects> </Projects>
                <Contact> </Contact>
            </div>
        )
    }
}

export default HomePage;