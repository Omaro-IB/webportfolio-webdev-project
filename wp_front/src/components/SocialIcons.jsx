import {BsFillPersonLinesFill, BsRss} from "react-icons/bs";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import resume from "/assets/resume.pdf";
import rss from "/assets/rss.xml?url";
import React from "react";

const SocialIcons = () => {
    return (
        <div className="grid grid-cols-2"> {/* social media icons */}
            <div className="grid grid-cols-4"> {/* RSS, Github, Linkedin, Mail */}
                <a href={rss}
                   className="mx-1 h-6 w-6 duration-500 shadow-box2 hover:shadow-none group border-solid border-2 border-black cursor-pointer">
                    <BsRss style={{width: "20px", height: "20px"}}/>
                </a>
                <a href="https://www.linkedin.com/in/omaribr"
                   className="mx-1 h-6 w-6 duration-500 shadow-box2 hover:shadow-none group border-solid border-2 border-black cursor-pointer">
                    <FaLinkedin style={{width: "20px", height: "20px"}}/>
                </a>
                <a href="https://github.com/Omaro-IB"
                   className="mx-1 h-6 w-6 duration-500 shadow-box2 hover:shadow-none group border-solid border-2 border-black cursor-pointer">
                    <FaGithub style={{width: "20px", height: "20px"}}/>
                </a>
                <a href="mailto:omarom.ibra@gmail.com"
                   className="mx-1 h-6 w-6 duration-500 shadow-box2 hover:shadow-none group border-solid border-2 border-black cursor-pointer">
                    <HiOutlineMail style={{width: "20px", height: "20px"}}/>
                </a>
            </div>
            {/* Resume */}
            <a href={resume}
               className="mx-2 h-6 duration-500 shadow-box2 hover:shadow-none group border-solid border-2 border-black cursor-pointer"
               style={{width: "80px", height: "25px"}}>
                <div className="grid grid-cols-2" style={{width: "40px", height: "40px"}}>
                    <BsFillPersonLinesFill style={{width: "20px", height: "20px"}}/>
                    <p style={{width: "20px", height: "20px"}}>&nbsp;Resume</p>
                </div>
            </a>
        </div>
    )
}

export default SocialIcons;