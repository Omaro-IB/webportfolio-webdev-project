import '../App.css';
import React, { useState, useEffect } from 'react';
import NavbarDesktop from "../components/Navbar/NavbarDesktop.jsx";
import NavbarMobile from "../components/Navbar/NavbarMobile.jsx";
import HomeDesktop from "../components/Home/HomeDesktop.jsx";
import Projects from "../components/Home/Projects.jsx";
import HomeMobile from "../components/Home/HomeMobile.jsx";
import data from "../data.json"

const subtitle = data.text.home_sub
const home_text = data.text.home

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
                    <HomeDesktop subtitle={subtitle} home_text={home_text}> </HomeDesktop>
                    <Projects> </Projects>
                </NavbarDesktop>
            </div>
        )
    } else {
        return (
            <div>
                <NavbarMobile/>
                <div className="flex flex-col">
                    <HomeMobile subtitle={subtitle} home_text={home_text}> </HomeMobile>
                    <Projects> </Projects>
                </div>
            </div>
        )
    }
}

export default HomePage;