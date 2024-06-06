import React, { useState } from 'react';
import logo from "/assets/logo2.png";
import {
    FaBars,
    FaTimes,
} from 'react-icons/fa';
import { FiBook } from "react-icons/fi";
import { MdGridView } from "react-icons/md";
import { RiHome6Line } from "react-icons/ri";
import { MdOutlineContactPage } from "react-icons/md";
import starIcon from "/assets/star.png";
import starIconPlain from "/assets/star-plain.png";
import { Link } from 'react-scroll';
import { Link as RouterLink} from "react-router-dom";
import Sparkle from 'react-sparkle'


const NavbarStickyItem = ({children, ext, link}) => {
    if (ext) {
        return (<RouterLink to={link} reloadDocument={true}>{children}</RouterLink>)
    } else {
        return (<Link to={link} smooth={true} duration={500}>{children}</Link>)
    }
}

const NavbarHamburgerItem = ({text, ext, link, onClickFunc}) => {
    if (ext) {
        return (<RouterLink to={link} onClick={onClickFunc} reloadDocument={true}><p className="text-pinkbeige py-6 text-4xl"> {text} </p></RouterLink>)
    } else {
        return (<Link to={link} onClick={onClickFunc} smooth={true} duration={500}><p className="text-pinkbeige py-6 text-4xl"> {text} </p></Link>)
    }
}


const Navbar = ({callingPage}) => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    const navbarIcons = [  // All Navbar Icons & Styling, Text, Etc.
        (<div className="group">{/* home */}
            <RiHome6Line className="fill-pinkbeige" style={{width: "30px", height: "30px"}}></RiHome6Line>
            <p className="text-buttongreenhighlight group-hover:text-pinkbeige" style={{fontSize: "15px"}}>Home</p>
        </div>),
        (<div className="group">{/* projects */}
            <MdGridView className="ml-3 fill-pinkbeige" style = {{width: "30px", height: "30px"}}></MdGridView>
            <p className="text-buttongreenhighlight group-hover:text-pinkbeige" style={{fontSize: "15px"}}>Projects</p>
        </div>),
        (<div className="group">  {/* contact */}
            <MdOutlineContactPage className="ml-2 fill-pinkbeige" style={{width: "30px", height: "30px"}}></MdOutlineContactPage>
            <p className="text-buttongreenhighlight group-hover:text-pinkbeige" style={{fontSize: "15px"}}>Contact</p>
        </div>),
        (<div className="group">  {/* blogs */}
            <FiBook className="stroke-pinkbeige" style={{width: "30px", height: "30px"}}></FiBook>
            <p className="text-buttongreenhighlight group-hover:text-pinkbeige" style={{fontSize: "15px"}}>Blogs</p>
        </div>),
        (<div className="group grid grid-rows-1 grid-cols-1">  {/* about */}
            <img src={starIconPlain} style={{width: "30px", height: "30px", gridColumn: 1, gridRow: 1}} className="group-hover:invisible" alt={"a sparkling star"}/>
            <img src={starIcon} style={{width: "30px", height: "30px", gridColumn: 1, gridRow: 1}} className="invisible group-hover:visible" alt={"a sparkling star"}/>
            <div className="relative top-1/2 invisible group-hover:visible" style={{width: "30px", height: "30px", gridColumn: 1, gridRow: 1}}><Sparkle color={'#97C979'} count={10}/></div>
            <p style={{gridColumn: 1, gridRow: 1}} className="text-popout text-xs relative bottom-3 right-3 invisible group-hover:visible"> interactive!</p>
            <p className="text-buttongreenhighlight" style={{fontSize: "15px"}}>About</p>
        </div>)
    ]

    // Exts: Internal or External Link?; Links: Link to Page
    let exts; let links;
    if (callingPage === "home") {exts = [false, false, false, true, true]; links = ['home', 'projects', 'contact', '/blogs', '/about']}
    else {exts =[true, true, true, true, true]; links = ['/home', '/home/#projects', '/home/#contact', '/blogs', '/about']}
    if (callingPage === "blogs") {exts[3] = false}
    if (callingPage === "about") {exts[4] = false}

    // Data: Central source of truth for rendering navbar items ***
    const data = [
        {"text":"Home", "ext": exts[0], "link": links[0], "child": navbarIcons[0]},
        {"text":"Projects", "ext": exts[1], "link": links[1], "child": navbarIcons[1]},
        {"text":"Contact", "ext": exts[2], "link": links[2], "child": navbarIcons[2]},
        {"text":"Blogs", "ext": exts[3], "link": links[3], "child": navbarIcons[3]},
        {"text":"About", "ext": exts[4], "link": links[4], "child": navbarIcons[4]}
    ]

    return (
        <div className='z-50 fixed w-full h-[11vh] flex justify-between items-center px-4 bg-buttongreenshadow border hover:border-b-buttongreenhighlight border-b-pinkbeige text-gray-300'>
            {/* Logo */}
            <div><Link onClick={handleClick}><img src={logo} alt="logo" className="cursor-pointer w-14"/></Link></div>
            {/* Sticky Menu */}
            <ul className='hidden md:flex'>
                {data.map((d) => <li><NavbarStickyItem ext={d.ext} link={d.link}>{d.child}</NavbarStickyItem></li>)}
            </ul>
            {/* Mobile Hamburger */}
            <div onClick={handleClick} className='sm:hidden z-10'>
                {!nav ? <FaBars style={{width: "30px", height: "30px"}} className="fill-pinkbeige" /> : <FaTimes/>}
            </div>
            {/* Hidden Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-blackshadow flex flex-col justify-center items-center'}>
                {data.map((d) => <li><NavbarHamburgerItem text={d.text} ext={d.ext} link={d.link} onClickFunc={handleClick}></NavbarHamburgerItem></li>)}
            </ul>
            {/* Social Icons TODO */}

        </div>
    );
};
export default Navbar;