import React, {useState} from "react";
import NavbarMenu from "./NavbarMenu.jsx";
import ActionButton from "./ActionButton.jsx";
import logo from "/assets/logo2.png";
import {HashLink} from "react-router-hash-link";
import SocialIcons from "../SocialIcons.jsx";


const NavbarDesktop = ({children, left, right}) => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    let elem
    if (nav) {
        elem = (<div className={"bg-navbarsection w-full h-screen flex overflow-auto"}>
                 <div className={"self-center mx-auto w-7/12"}><NavbarMenu display={nav} clickFunc={() => setNav(!nav)}/></div>
            </div>)
    } else {
        elem = children
    }

    let link_left = "/"
    if (left === "Home") {link_left = "/home/#top"}
    else if (left === "Contact") {link_left = "/contact"}
    else if (left === "Blogs") {link_left = "/blogs"}
    let link_right = "/"
    if (right === "Home") {link_right = "/home/#top"}
    else if (right === "Contact") {link_right = "/contact"}
    else if (right === "Blogs") {link_right = "/blogs"}

    return (
        <div className={"flex flex-row"}>
            <div className={"w-sides min-w-sides sticky top-0 left-0 h-screen bg-blackshadow py-10 overflow-clip"}>
                <div className={"flex flex-col h-full items-center"}>
                    {/* Logo */}
                    <div className={"w-[50px] mx-auto h-full"}>
                        <HashLink to='/home/#top'>
                            <img src={logo} alt="logo" className={"w-[50px] shadow-circle rounded-[50%] cursor-pointer"}/>
                        </HashLink>
                    </div>
                    <div className={"h-full"}>
                        <p className={"rotate-90 underline text-4xl text-pinkbeige mt-24"}><HashLink to={link_left}>{left}</HashLink></p>
                    </div>
                    <div className={"text-greydef mx-auto w-[25px] flex items-end h-full"}>
                        <SocialIcons vertical={true} hideresumetext={true} />
                    </div>
                </div>
            </div>

            <div className={"w-center"}>
                {elem}
            </div>

            <div className={"w-sides min-w-sides sticky top-0 right-0 h-screen bg-blackshadow pt-10 overflow-clip"}>
                <div className={"flex flex-col h-full items-center"}>
                    <div onClick={handleClick} className={"cursor-pointer h-full"}>
                        <ActionButton nav={nav}/>
                    </div>
                    <div className={"h-full text-center"}>
                        <p className={"rotate-270 underline text-4xl text-pinkbeige mb-40 mt-24"}><HashLink to={link_right}>{right}</HashLink></p>
                    </div>
                    <div className={"h-full"}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarDesktop;