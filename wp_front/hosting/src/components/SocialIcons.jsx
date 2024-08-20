import {BsFillPersonLinesFill, BsRss} from "react-icons/bs";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import resume from "/assets/resume.pdf";
import rss from "/assets/rss.xml?url";
import React from "react";
import {Scramble} from "./Scramble.js";

const SocialIcons = ({lightshadow, vertical, hideresumetext}) => {
    let shadow; if (lightshadow === true) {shadow = "shadow-boxl"} else {shadow = "shadow-box2"}
    let flex; if (vertical === true) {flex = "flex-col"} else {flex = "flex-row"}


    return (
        <div className={"w-[220px] flex "+flex}> {/* social media icons */}
            <div className={"flex "+flex}> {/* RSS, Github, Linkedin, Mail */}
                <a href={rss}
                   className={"h-6 w-6 duration-500 hover:shadow-none group border-solid border-2 border-black cursor-pointer " + shadow}>
                    <BsRss style={{width: "20px", height: "20px"}}/>
                </a>
                <a href="https://www.linkedin.com/in/omaribr"
                   className={"h-6 w-6 duration-500 hover:shadow-none group border-solid border-2 border-black cursor-pointer " + shadow}>
                    <FaLinkedin style={{width: "20px", height: "20px"}}/>
                </a>
                <a href="https://github.com/Omaro-IB"
                   className={"h-6 w-6 duration-500 hover:shadow-none group border-solid border-2 border-black cursor-pointer " + shadow}>
                    <FaGithub style={{width: "20px", height: "20px"}}/>
                </a>
                <a href={Scramble('lc158d7dlcxdlb12xc34lc15b6dl')}
                   className={"h-6 w-6 duration-500 hover:shadow-none group border-solid border-2 border-black cursor-pointer " + shadow}>
                    <HiOutlineMail style={{width: "20px", height: "20px"}}/>
                </a>
            </div>
            {/* Resume */}
            <a href={resume}
               className={"h-6 duration-500 hover:shadow-none group border-solid border-2 border-black cursor-pointer "+shadow}
               style={{width: hideresumetext? "24px": "80px", height: "25px"}}>
                <div className={hideresumetext? "grid grid-cols-1": "grid grid-cols-2"} style={{width: hideresumetext? "20px": "40px", height: "40px"}}>
                    <BsFillPersonLinesFill style={{width: "20px", height: "20px"}}/>
                    <p className={hideresumetext? "hidden": "w-[20px] h-[20px]"}>&nbsp;Resume</p>
                </div>
            </a>
        </div>
    )
}

export default SocialIcons;