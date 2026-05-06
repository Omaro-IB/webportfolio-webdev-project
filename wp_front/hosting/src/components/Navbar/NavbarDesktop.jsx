import React, {useState} from "react";


const NavbarDesktop = ({children}) => {
    return (
        <div className={"flex flex-row"}>
            <div className={"w-sides min-w-sides sticky top-0 left-0 h-screen bg-blackshadow py-10 overflow-clip"}>
            </div>

            <div className={"w-center"}>
                {children}
            </div>

            <div className={"w-sides min-w-sides sticky top-0 right-0 h-screen bg-blackshadow pt-10 overflow-clip"}>
            </div>
        </div>
    )
}

export default NavbarDesktop;