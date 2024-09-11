import '../App.css';
import React, {useEffect, useState} from "react";
import NavbarDesktop from "../components/Navbar/NavbarDesktop.jsx";
import NavbarMobile from "../components/Navbar/NavbarMobile.jsx";
import {HashLink} from "react-router-hash-link";
import AboutDesktop from "../components/About/AboutDesktop.jsx";
import AboutMobile from "../components/About/AboutMobile.jsx";

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
                <NavbarDesktop left="Contact" right="Blogs">
                    <div className="bg-repeat w-full h-full" style={{backgroundImage: `url('/assets/background_about.jpg')` }}>
                        <div className={"h-sides min-h-sides sticky top-0 right-0 overflow-clip bg-blackshadow z-50"}>
                            <p className={"underline text-4xl text-pinkbeige mx-auto w-fit text-center"}><HashLink to="/home/#top">Back To Home</HashLink></p>
                        </div>
                        <AboutDesktop />
                    </div>
                </NavbarDesktop>
            </div>
        )
    } else {
        return (
            <div>
                <NavbarMobile ></NavbarMobile>
                <div className="bg-repeat flex flex-col min-h-screen" style={{backgroundImage: `url('/assets/background_about.jpg')` }}>
                    <HashLink to='/home/#top'><p className={"mt-5 mx-auto text-lg underline bg-beige w-fit text-buttongreen hover:text-buttongreenhighlight"} style={{fontFamily:"GTPressuraMonoLight"}}><strong>Back to Home...</strong></p></HashLink>
                    <div className="pt-8">  {/* info div */}
                        <AboutMobile />
                    </div>
                </div>
            </div>
        )
    }
}




export default AboutPage;