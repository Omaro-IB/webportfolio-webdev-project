import '../App.css';
import NavbarDesktop from "../components/Navbar/NavbarDesktop.jsx";
import {useEffect, useState} from "react";
import NavbarMobile from "../components/Navbar/NavbarMobile.jsx";
import Contact from "../components/Contact.jsx";
import hero_desktop from '/assets/contact-hero-desktop.jpg'
import hero_mobile from '/assets/contact-hero-mobile.jpg'
import Splitscreen from "../components/Splitscreen.jsx";

function ContactPage() {
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
            <NavbarDesktop left="Blogs" right="Home">
                <Splitscreen fullscreen={true}
                             children1={<div className="grid grid-rows-1 grid-cols-1 h-full">  {/* photo/title div */}
                                 <img src={hero_desktop} alt="hero" className="w-full h-full" style={{gridColumn: 1, gridRow: 1}}></img>
                                 <div className="self-end m-10" style={{gridColumn: 1, gridRow: 1}}>
                                     <p className="text-[40px] text-pinkbeige">/contact</p>
                                 </div>
                             </div>}
                             children2={<div className="py-20 bg-beige h-full px-20"> {/* info div */}
                                 <Contact />
                             </div>}
                />
            </NavbarDesktop>

        )
    } else {
        return (
            <div>
                <NavbarMobile />
                <div className={"flex flex-col"}>
                    <div className="bg-blackshadow grid grid-rows-1 grid-cols-1">  {/* hero div */}
                        <img src={hero_mobile} alt="hero" className="p-6 mx-auto" style={{gridColumn: 1, gridRow: 1}}></img>
                        <div className="self-end mx-auto" style={{gridColumn: 1, gridRow: 1}}>
                            <p className="text-[40px] text-pinkbeige mb-6">/contact</p>
                        </div>
                    </div>
                    <div className={"px-5 bg-beige"}>
                        <Contact/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactPage;