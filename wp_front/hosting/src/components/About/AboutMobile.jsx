import Triangle from "./Triangle.jsx"
import React, { useRef, useState } from 'react';
import ContactForm from "../ContactForm.jsx";
import SpecializationsMobile from "./SpecializationsMobile.jsx";
import PhilosophyMobile from "./PhilosophyMobile.jsx";
import WhoAmIMobile from "./WhoAmIMobile.jsx";
import { FaBackward } from "react-icons/fa";
import {HashLink} from "react-router-hash-link";

const BackToTriangle = () => {
    return (
        <HashLink to={"/home/about/#triangle"} className={"duration-500 shadow-box hover:shadow-none group border-solid border-2 border-black text-white bg-gradient-to-r from-buttongreen to-buttongreengradient p-1"}>
            <FaBackward className={"inline fill-whitehighlight"}/>
            <p className={"inline ml-2 text-whitehighlight"}>Back</p>
        </HashLink>
    )
}

const AboutMobile = () => {
    const [margin, setMargin] = useState(10);

    const handleClick = (to, bounce) => {
        setMargin(bounce)
        setTimeout(() => {setMargin(10)}, 400)
        setTimeout(() => {
            const element = document.getElementById(to);
            const position = element.getBoundingClientRect();
            window.scrollTo({ top: position.top, behavior: 'smooth' })
        }, 600)
    }

    const divider = 1
    const triangleSize = window.screen.width / 1.25

    return (
        <div className={"flex flex-col"}>
            <HashLink to='/home/#top'><p className={"mt-5 mx-auto text-lg underline bg-beige w-fit text-buttongreen hover:text-buttongreenhighlight"} style={{fontFamily:"GTPressuraMonoLight"}}><strong>Back to Home...</strong></p></HashLink>

            <div className={"h-[10vh]"}></div>
            <div id="whoami" className={"p-4"}>
                <BackToTriangle />
                <WhoAmIMobile/>
            </div>
            <div id="triangle" className={"h-[20vh]"}></div>
            <div className={`mr-auto lg:mx-auto duration-500 mt-${margin}`} style={{width: window.screen.width / divider}}>
                <Triangle size={triangleSize} onClick1={() => {
                    handleClick("specializations", 20)
                }} onClick2={() => {
                    handleClick("whoami", 0)
                }} onClick3={() => {
                    handleClick("philosophy", 20)
                }} onClick4={() => {
                    handleClick("contact", 20)
                }}></Triangle>
            </div>
            <div className={"h-[20vh]"}></div>
            <div>
                <div className={"w-fit ml-8"}><BackToTriangle /></div>
                <SpecializationsMobile/>
            </div>
            <div className={"h-[20vh]"} id="specializations" ></div>
            <div className={"m-4"}>
                <BackToTriangle/>
                <PhilosophyMobile/>
            </div>
            <div className={"h-[20vh]"}></div>
            <div className={"mx-auto w-10/12"}>
                <BackToTriangle />
            </div>
            <div className={"mx-auto w-10/12 bg-triangle4 p-8 rounded-lg"}>
                <h1 className={"text-blackshadow text-4xl mb-2"}>Interested in what I do? <strong>Let's talk:</strong></h1>
                <ContactForm/>
            </div>
            <div className={"h-screen"} id="contact"></div>
        </div>
    )
};

export default AboutMobile;