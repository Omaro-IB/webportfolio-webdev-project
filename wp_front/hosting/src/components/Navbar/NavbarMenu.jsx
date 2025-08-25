import SocialIcons from "../SocialIcons.jsx";
import React from "react";
import {FaHashnode} from "react-icons/fa6";
import {HashLink} from "react-router-hash-link";

const NavbarSection = ({title, texts, links, clickFunc}) => (
    <div>
        <h1 className={"text-pinkbeige font-bold text-4xl mb-2 mt-6"}>{title}</h1>
        <div className={"bg-buttongreenshadow border-2 border-whitehighlight py-2"}>
            {texts.map((text, idx) =>
                <div key={idx} className={"flex flex-row items-center mx-3 hover:bg-buttongreenlight"}>
                    <FaHashnode className={"fill-buttongreenhighlight w-7 h-7"}/>
                    <HashLink to={links[idx]} smooth={true} duration={500} onClick={clickFunc}>
                        <h2 className={"text-whitehighlight font-['GTPressuraMono'] underline text-3xl ml-2 w-screen"}>{text}</h2>
                    </HashLink>
                </div>
            )}
        </div>
    </div>
)

const NavbarMenu = ({display, clickFunc}) => (
    <div className={display ? "flex flex-col p-5 w-full h-full" : "hidden"}>
        <NavbarSection title={"About & Works"} texts={["Home", "About", "Works"]} links={["/home/#top", "/home/about/#triangle", "/home/#works"]} clickFunc={clickFunc}/>
        <NavbarSection title={"Let's Talk"} texts={["Contact"]} links={["/contact"]} clickFunc={clickFunc}/>
        <NavbarSection title={"My Writings"} texts={["Blogs"]} links={["/blogs"]} clickFunc={clickFunc}/>
        <div className="mx-auto text-pinkbeige mt-6"><SocialIcons lightshadow={true}/></div>
    </div>
)

export default NavbarMenu