import React, { useState } from 'react';
import NavbarMenu from "./NavbarMenu.jsx";
import ActionButton from "./ActionButton.jsx";

const NavbarMobile = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => {window.scrollTo(0,0); setNav(!nav);}

    return (
        <div>
            <div className={nav ? "w-screen h-screen bg-navbarsection z-50 absolute top-0 left-0" : "hidden"}>
                <NavbarMenu display={nav} clickFunc={() => setNav(!nav)} />
            </div>
            <div className={"pointer-events-none fixed z-50 w-full flex"}>
                 <div className={'pointer-events-auto p-3'} onClick={handleClick}>
                     <ActionButton nav={nav}/>
                 </div>
            </div>
        </div>
        // <div>
        //     {/*Hidden Menu*/}
        //     <div className={'pointer-events-auto w-screen h-screen'}>
        //         <NavbarMenu display={nav} clickFunc={() => setNav(!nav)}/>
        //     </div>
        //     <div className={nav ? 'w-screen absolute top-0 left-0 bg-navbarsection' : ""}>
        //     {/*Regular Row */}
        //         <div className={"flex flex-row w-screen items-center justify-between p-2 bg-none"}>
        //             {/* Logo */}
        //             {/*<HashLink className={'pointer-events-auto'} to='/home/#top'>*/}
        //             {/*    <img src={logo} alt="logo" className={"w-[50px]"}/>*/}
        //             {/*</HashLink>*/}
        //             {/* Action button (X or hamburger) */}
        //             <div className={'pointer-events-auto'} onClick={handleClick}>
        //                 <ActionButton nav={nav}/>
        //             </div>
        //         </div>
        //
        //     </div>
        // </div>
    )
}

export default NavbarMobile;