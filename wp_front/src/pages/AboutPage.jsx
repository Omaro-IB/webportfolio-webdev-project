import '../App.css';
import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar.jsx";
import About from "../components/About";

function AboutPage() {
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
                <Navbar callingPage="about"></Navbar>
                <div className="h-[11vh]"></div>
                <About/>
            </div>
        )
    } else {
        return (
            <div>
                <Navbar callingPage="about"></Navbar>
                <div className="h-[11vh]"></div>
                <About/>
            </div>
        )
    }
}

export default AboutPage;