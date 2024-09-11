import Triangle from "./Triangle.jsx"
import React, { useRef, useState } from 'react';
import ContactForm from "../ContactForm.jsx";
import SpecializationsDesktop from "./SpecializationsDesktop.jsx";
import PhilosophyDesktop from "./PhilosophyDesktop.jsx";
import WhoAmIDesktop from "./WhoAmIDesktop.jsx";
import { FaBackward } from "react-icons/fa";
import {HashLink} from "react-router-hash-link";

const BackToTriangle = () => {
    return (
        <HashLink to={"/home/about/#triangle"} className={"duration-500 shadow-box hover:shadow-none group border-solid border-2 border-black text-white bg-gradient-to-r from-buttongreen to-buttongreengradient p-1"}>
            <FaBackward className={"inline fill-whitehighlight"}/>
            <p className={"inline ml-2 text-whitehighlight"}>Back to <strong><em>THE TRIANGLE</em></strong></p>
        </HashLink>
    )
}

const AboutDesktop = () => {
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

    const divider = 2
    const triangleSize = window.screen.height / 1.25

    return (
        <div>
            <div className={"h-[10vh]"}></div>
            <div id="whoami" className={"p-20"}>
                <BackToTriangle />
                <WhoAmIDesktop/>
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
            <div className={"m-20"}>
                <BackToTriangle />
                <SpecializationsDesktop/>
            </div>
            <div className={"h-[20vh]"} id="specializations" ></div>
            <div className={"m-20"}>
                <BackToTriangle/>
                <PhilosophyDesktop/>
            </div>
            <div className={"h-[20vh]"}></div>
            <div className={"mx-auto w-7/12"}>
                <BackToTriangle />
            </div>
            <div className={"mx-auto w-7/12 bg-triangle4 p-8 rounded-lg"}>
                <h1 className={"text-blackshadow text-4xl mb-2"}>Interested in what I do? <strong>Let's talk:</strong></h1>
                <ContactForm/>
            </div>
            <div className={"h-screen"} id="contact"></div>
        </div>
    )
};

export default AboutDesktop;