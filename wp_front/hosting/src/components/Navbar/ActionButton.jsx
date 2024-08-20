import {FaBars, FaTimes} from "react-icons/fa";
import React from "react";

const ActionButton = ({nav}) => {
    const FaStyleBack = "fill-buttongreen h-[48px] w-[48px]"
    const FaStyleFront = "fill-pinkbeige h-[38px] w-[34px]"

    if (nav) {
        // X Button
        return (
            <div className={"grid grid-rows-1 grid-cols-1 items-center justify-items-center"}>
                <FaTimes className={FaStyleBack}  style={{gridColumn: 1, gridRow: 1}}/>
                <FaTimes className={FaStyleFront}  style={{gridColumn: 1, gridRow: 1}}/>
            </div>
        )
    } else {
        // Hamburger button
        return (
            <div className={"grid grid-rows-1 grid-cols-1 items-center justify-items-center"}>
                <FaBars className={FaStyleBack} style={{gridColumn: 1, gridRow: 1}}/>
                <FaBars className={FaStyleFront} style={{gridColumn: 1, gridRow: 1}}/>
            </div>
        )
    }
}

export default ActionButton