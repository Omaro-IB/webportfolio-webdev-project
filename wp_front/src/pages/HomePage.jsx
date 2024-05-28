import '../App.css';
import HomePageMobile from "./HomePageMobile";
import HomePageDesktop from "./HomePageDesktop";
import React, { useState, useEffect } from 'react';

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
        return (<HomePageDesktop />)
    } else {
        return (<HomePageMobile />)
    }
}
export default HomePage;