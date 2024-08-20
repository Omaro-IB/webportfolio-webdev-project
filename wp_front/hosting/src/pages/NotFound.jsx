import '../App.css';
import NavbarDesktop from "../components/Navbar/NavbarDesktop.jsx";
import {useEffect, useState} from "react";
import NavbarMobile from "../components/Navbar/NavbarMobile.jsx";

function RecipeDemoPage() {
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
            <NavbarDesktop>
                <div className="bg-beige h-screen w-screen flex flex-col justify-evenly">
                    <div className={"mx-auto w-fit flex flex-row items-center"}>
                        <h1 className={"text-9xl font-extrabold border-r-4 sm:pr-8"}>404</h1>
                        <h2 className={"text-4xl sm:ml-8"}>This page could not be found.</h2>
                    </div>
                </div>
            </NavbarDesktop>

        )
    } else {
        return (
            <div className={"bg-beige h-screen w-screen"}>
                <NavbarMobile />
                <div className={"mx-auto w-fit flex flex-col items-center h-full"}>
                    <h1 className={"text-5xl font-extrabold mt-auto mb-2 border-b-4"}>404</h1>
                    <h2 className={"text-3xl mb-auto"}>This page could not be found.</h2>
                </div>
            </div>
        )
    }
}

export default RecipeDemoPage;