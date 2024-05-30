import '../App.css';
import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar.jsx";
import HomeDesktop from "../components/HomeDesktop.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";
import HomeMobile from "../components/HomeMobile.jsx";

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
                <Navbar> </Navbar>
                <HomeDesktop> </HomeDesktop>
                <Projects> </Projects>
                <Contact> </Contact>
            </div>
        )
    } else {
        return (
            <div className="flex flex-col">
                <Navbar> </Navbar>
                <HomeMobile> </HomeMobile>
                <Projects> </Projects>
                <Contact> </Contact>
            </div>
        )
    }
}

export default HomePage;