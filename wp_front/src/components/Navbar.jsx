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
import { Link } from 'react-scroll';
import { Link as RouterLink} from "react-router-dom";



const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='z-50 fixed w-full h-[11vh] flex justify-between items-center px-4 bg-blackshadow text-gray-300'>
            <div>
                <Link onClick={handleClick} to='home' smooth={true} duration={500} >
                    <img src={logo} alt="logo" style={{cursor: "pointer", width:"10%"}}/>
                </Link>
            </div>
            {/* sticky menu */}
            <ul className='hidden md:flex'>
                <li>
                    <Link to='home' smooth={true} duration={500} className="group">
                        <RiHome6Line className="fill-pinkbeige" style = {{width: "30px", height: "30px"}}></RiHome6Line>
                        <p className="text-buttongreenhighlight group-hover:text-pinkbeige" style={{fontSize: "15px"}}>Home</p>
                    </Link>
                </li>
                <li>
                    <Link to='projects' smooth={true} duration={500} className="group">
                        <MdGridView className="ml-3 fill-pinkbeige" style = {{width: "30px", height: "30px"}}></MdGridView>
                        <p className="text-buttongreenhighlight group-hover:text-pinkbeige" style={{fontSize: "15px"}}>Projects</p>
                    </Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500} className="group">
                        <MdOutlineContactPage className="ml-2 fill-pinkbeige" style = {{width: "30px", height: "30px"}}></MdOutlineContactPage>
                        <p className="text-buttongreenhighlight group-hover:text-pinkbeige" style={{fontSize: "15px"}}>Contact</p>
                    </Link>
                </li>
                <li>
                    <RouterLink to='/blogs' reloadDocument={true} duration={500} className="group">
                        <FiBook className="stroke-pinkbeige" style = {{width: "30px", height: "30px"}}></FiBook>
                        <p className="text-buttongreenhighlight group-hover:text-pinkbeige" style={{fontSize: "15px"}}>Blogs</p>
                    </RouterLink>
                </li>
            </ul>
            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars className="fill-pinkbeige" /> : <FaTimes />}
            </div>
            {/* Hidden menu */}
            <ul
                className={
                    !nav
                        ? 'hidden'
                        : 'absolute top-0 left-0 w-full h-screen bg-[#0b0f02] flex flex-col justify-center items-center'
                }
            >
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        <p className="text-pinkbeige"> Home </p>
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
                        <p className="text-pinkbeige"> Projects </p>
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                        <p className="text-pinkbeige"> Contact </p>
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <RouterLink to="/blogs" reloadDocument={true}>
                        <p className="text-pinkbeige"> Blogs </p>
                    </RouterLink>
                </li>
            </ul>
            {/* Social icons */}

        </div>
    );
};
export default Navbar;