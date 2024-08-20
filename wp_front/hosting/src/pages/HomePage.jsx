import '../App.css';
import React, { useState, useEffect } from 'react';
import NavbarDesktop from "../components/Navbar/NavbarDesktop.jsx";
import NavbarMobile from "../components/Navbar/NavbarMobile.jsx";
import HomeDesktop from "../components/Home/HomeDesktop.jsx";
import Projects from "../components/Home/Projects.jsx";
import HomeMobile from "../components/Home/HomeMobile.jsx";
import About from "../components/Home/About.jsx";
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
                <NavbarDesktop left="Contact" right="Blogs">
                    <HomeDesktop subtitle={subtitle} p1_text={p1_text} p2_text={p2_text}> </HomeDesktop>
                    <About />
                    <Projects> </Projects>
                </NavbarDesktop>
            </div>
        )
    } else {
        return (
            <div>
                <NavbarMobile/>
                <div className="flex flex-col">
                    <HomeMobile subtitle={subtitle} p1_text={p1_text} p2_text={p2_text}> </HomeMobile>
                    <About />
                    <Projects> </Projects>
                </div>
            </div>
        )
    }
}

export default HomePage;