import '../App.css';
import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar.jsx";
import HomeDesktop from "../components/HomeDesktop.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";
import HomeMobile from "../components/HomeMobile.jsx";

const p1_text = "I’m a data scientist with a focus on machine learning, computational mathematics, and also like network engineering too. Currently pursuing my bachelor's degree, and am eager to embark on an internship opportunity."
const p2_text = "Are you looking for someone driven and capable? Someone with an analytic and mathematical mindset? Or maybe you need someone with a comprehensive understanding of the theory and practical implementation of machine learning algorithms? If so, feel free to reach out to me for further details at the contact form below (or just via email)."
const subtitle = "Data Science, Network Engineering, Web Dev"

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
                <HomeDesktop subtitle={subtitle} p1_text={p1_text} p2_text={p2_text}> </HomeDesktop>
                <Projects> </Projects>
                <Contact> </Contact>
            </div>
        )
    } else {
        return (
            <div className="flex flex-col">
                <Navbar> </Navbar>
                <HomeMobile subtitle={subtitle} p1_text={p1_text} p2_text={p2_text}> </HomeMobile>
                <Projects> </Projects>
                <Contact> </Contact>
            </div>
        )
    }
}

export default HomePage;