import React, { useState } from 'react';
import logo from "/assets/logo.png";
import {HashLink} from "react-router-hash-link";
import NavbarMenu from "./NavbarMenu.jsx";
import ActionButton from "./ActionButton.jsx";

const NavbarMobile = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className={"fixed z-50 pointer-events-none"}>
            <div className={nav ? 'h-screen w-screen absolute top-0 left-0 bg-navbarsection' : ""}>
            {/*Regular Row */}
                <div className={"flex flex-row w-screen items-center justify-between p-2 bg-none"}>
                    {/* Logo */}
                    <HashLink className={'pointer-events-auto'} to='/home/#top'>
                        <img src={logo} alt="logo" className={"w-[50px]"}/>
                    </HashLink>
                    {/* Action button (X or hamburger) */}
                    <div className={'pointer-events-auto'} onClick={handleClick}>
                        <ActionButton nav={nav}/>
                    </div>
                </div>
                {/*Hidden Menu*/}
                <div className={'pointer-events-auto'}>
                    <NavbarMenu display={nav} clickFunc={() => setNav(!nav)}/>
                </div>
            </div>
        </div>
    )
}

export default NavbarMobile;