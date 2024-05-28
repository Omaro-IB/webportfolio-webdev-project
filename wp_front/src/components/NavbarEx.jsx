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



const NavbarEx = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='z-50 fixed w-full h-[80px] flex justify-between items-center px-4 bg-blackshadow text-gray-300'>
            <div>
                <Link onClick={handleClick} to='home' smooth={true} duration={500} >
                    <img src={logo} alt="logo" style={{cursor: "pointer", width:"10%"}}/>
                </Link>
            </div>
            {/* menu */}
            <ul className='hidden md:flex'>
                <li>
                    <RouterLink to='/' smooth={true} duration={500} className="group">
                        <RiHome6Line className="fill-pinkbeige" style = {{width: "30px", height: "30px"}}></RiHome6Line>
                        <p className="text-buttongreenhighlight group-hover:text-pinkbeige" style={{fontSize: "15px"}}>Home</p>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to='/#projects' smooth={true} duration={500} className="group">
                        <MdGridView className="ml-3 fill-pinkbeige" style = {{width: "30px", height: "30px"}}></MdGridView>
                        <p className="text-buttongreenhighlight group-hover:text-pinkbeige" style={{fontSize: "15px"}}>Projects</p>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to='/#contact' smooth={true} duration={500} className="group">
                        <MdOutlineContactPage className="ml-2 fill-pinkbeige" style = {{width: "30px", height: "30px"}}></MdOutlineContactPage>
                        <p className="text-buttongreenhighlight group-hover:text-pinkbeige" style={{fontSize: "15px"}}>Contact</p>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to='/blogs' smooth={true} duration={500} className="group">
                        <FiBook className="stroke-pinkbeige" style = {{width: "30px", height: "30px"}}></FiBook>
                        <p className="text-buttongreenhighlight group-hover:text-pinkbeige" style={{fontSize: "15px"}}>Blogs</p>
                    </RouterLink>
                </li>
            </ul>
            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10 stroke-pinkbeige'>
                {!nav ? <FaBars className="fill-pinkbeige" /> : <FaTimes />}
            </div>
            {/* Mobile menu */}
            <ul
                className={
                    !nav
                        ? 'hidden'
                        : 'absolute top-0 left-0 w-full h-screen bg-[#0b0f02] flex flex-col justify-center items-center'
                }
            >
                <li className='py-6 text-4xl'>
                    <RouterLink to='/'>
                        <p className="text-pinkbeige"> Home </p>
                    </RouterLink>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <RouterLink to='/#projects'>
                        <p className="text-pinkbeige"> Projects </p>
                    </RouterLink>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <RouterLink to='/#contact'>
                        <p className="text-pinkbeige"> Contact </p>
                    </RouterLink>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <RouterLink to='/blogs'>
                        <p className="text-pinkbeige"> Blogs </p>
                    </RouterLink>
                </li>
            </ul>
            {/* Social icons */}

        </div>
    );
};
export default NavbarEx;