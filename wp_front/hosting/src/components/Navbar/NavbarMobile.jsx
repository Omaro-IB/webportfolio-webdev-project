import React, { useState } from 'react';
import logo from "/assets/logo2.png";
import {HashLink} from "react-router-hash-link";
import NavbarMenu from "./NavbarMenu.jsx";
import ActionButton from "./ActionButton.jsx";

const NavbarMobile = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className={"fixed z-50"}>
            <div className={nav ? 'h-screen w-screen absolute top-0 left-0 bg-navbarsection' : ""}>
            {/*Regular Row */}
                <div className={"flex flex-row w-screen items-center justify-between p-2"}>
                    {/* Logo */}
                    <HashLink to='/home/#top'>
                        <img src={logo} alt="logo" className={"w-[50px] shadow-circle rounded-[50%]"}/>
                    </HashLink>
                    {/* Action button (X or hamburger) */}
                    <div onClick={handleClick}>
                        <ActionButton nav={nav}/>
                    </div>
                </div>
                {/*Hidden Menu*/}
                <NavbarMenu display={nav} clickFunc={() => setNav(!nav)}/>
            </div>
        </div>
    )
}

export default NavbarMobile;