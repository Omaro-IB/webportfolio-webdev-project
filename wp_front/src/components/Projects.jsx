import React from 'react';
import proj1 from '/assets/projectboxes/proj1.png';
import proj0 from '/assets/projectboxes/proj0.png';
import { useState, useEffect } from 'react';

const Projects = () => {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());

    function getCurrentDimension(){
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);


        return(() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize])

    let padding;
    if (screenSize.width < 500) {
        padding = 20;
    } else{
        padding = (65536/(screenSize.height+30))+20
    }


    return (
        <div name='projects' id='projects' className='py-[70vh] sticky w-full md:h-screen text-black bg-beige' style={{paddingTop: `${padding}vh`, paddingBottom: `${padding}vh`}}> {/* Project div */}
            <div className='max-w-fit mx-auto p-4 flex flex-col justify-center w-full h-full'> {/* Parent div */}
                <div className='mt-20 pb-8 w-full flex justify-center items-center flex-col'>   {/* Title div */}
                    <p className='text-4xl font-bold inline border-b-4 text-[#000000] border-[#383838]]'>
                        <em className="text-greydef">/Home/</em>#Projects
                    </p>
                    <div className="flex justify-between">
                        <p className='py-6 text-2xl'>Check out some of my work &nbsp;- &nbsp;</p> {/* TODO */}
                        <p className="py-6 text-2xl text-[#f14e4e]"> Still under construction... </p>
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-3 gap-1'> {/* Project container div */}



                    {/* Grid Item Start */}
                    <div id="projectbox" style={{ backgroundImage: `url(${proj1})` }} className='group container flex items-center mx-auto content-div'>
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 grid grid-rows-3 gap-0 items-center self-center mx-auto'>
                            <span className=' text-lg font-bold text-pinkbeige text-center mx-auto'>
                                Recipe Sanitizer
                            </span>
                            <p className='text-center text-pinkbeige px-3'>A small project dedicated to cleanly formatting and downloading online recipes</p>
                            <div className='pt-8 text-center'>
                                <a href='/recipedemo'>
                                    <button className='text-center px-4 py-3 m-2 bg-white text-pinkbeige font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='https://github.com/Omaro-IB/minimalrecipe-scripting-tool'>
                                    <button className='text-center px-4 py-3 m-2 bg-white text-pinkbeige font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item End */}

                    {/* Grid Item Start */}
                    <div id="projectbox" style={{ backgroundImage: `url(${proj0})` }} className='group container flex items-center mx-auto content-div'> {/* TODO: Update image */}
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 grid grid-rows-3 gap-0 items-center self-center mx-auto'>
                            <span className=' text-lg font-bold text-pinkbeige text-center mx-auto'>
                                ... {/* TODO: Update title */}
                            </span>
                            <p className='text-center text-pinkbeige px-3'> ... </p> {/* TODO: Update description */}
                            <div className='pt-8 text-center'>
                                <a href='/'> {/* TODO: Update link to demo page */}
                                    <button className='text-center px-4 py-3 m-2 bg-white text-pinkbeige font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='/'>  {/* TODO: Update link to github page */}
                                    <button className='text-center px-4 py-3 m-2 bg-white text-pinkbeige font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item End */}

                    {/* Grid Item Start */}
                    <div id="projectbox" style={{ backgroundImage: `url(${proj0})` }} className='group container flex items-center mx-auto content-div'> {/* TODO: Update image */}
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 grid grid-rows-3 gap-0 items-center self-center mx-auto'>
                            <span className=' text-lg font-bold text-pinkbeige text-center mx-auto'>
                                ... {/* TODO: Update title */}
                            </span>
                            <p className='text-center text-pinkbeige px-3'> ... </p> {/* TODO: Update description */}
                            <div className='pt-8 text-center'>
                                <a href='/'> {/* TODO: Update link to demo page */}
                                    <button className='text-center px-4 py-3 m-2 bg-white text-pinkbeige font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='/'>  {/* TODO: Update link to github page */}
                                    <button className='text-center px-4 py-3 m-2 bg-white text-pinkbeige font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item End */}

                    {/* Grid Item Start */}
                    <div id="projectbox" style={{ backgroundImage: `url(${proj0})` }} className='group container flex items-center mx-auto content-div'> {/* TODO: Update image */}
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 grid grid-rows-3 gap-0 items-center self-center mx-auto'>
                            <span className=' text-lg font-bold text-pinkbeige text-center mx-auto'>
                                ... {/* TODO: Update title */}
                            </span>
                            <p className='text-center text-pinkbeige px-3'> ... </p> {/* TODO: Update description */}
                            <div className='pt-8 text-center'>
                                <a href='/'> {/* TODO: Update link to demo page */}
                                    <button className='text-center px-4 py-3 m-2 bg-white text-pinkbeige font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='/'>  {/* TODO: Update link to github page */}
                                    <button className='text-center px-4 py-3 m-2 bg-white text-pinkbeige font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item End */}

                    {/* Grid Item Start */}
                    <div id="projectbox" style={{ backgroundImage: `url(${proj0})` }} className='group container flex items-center mx-auto content-div'> {/* TODO: Update image */}
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 grid grid-rows-3 gap-0 items-center self-center mx-auto'>
                            <span className=' text-lg font-bold text-pinkbeige text-center mx-auto'>
                                ... {/* TODO: Update title */}
                            </span>
                            <p className='text-center text-pinkbeige px-3'> ... </p> {/* TODO: Update description */}
                            <div className='pt-8 text-center'>
                                <a href='/'> {/* TODO: Update link to demo page */}
                                    <button className='text-center px-4 py-3 m-2 bg-white text-pinkbeige font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='/'>  {/* TODO: Update link to github page */}
                                    <button className='text-center px-4 py-3 m-2 bg-white text-pinkbeige font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item End */}

                    {/* Grid Item Start */}
                    <div id="projectbox" style={{ backgroundImage: `url(${proj0})` }} className='group container flex items-center mx-auto content-div'> {/* TODO: Update image */}
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 grid grid-rows-3 gap-0 items-center self-center mx-auto'>
                            <span className=' text-lg font-bold text-pinkbeige text-center mx-auto'>
                                ... {/* TODO: Update title */}
                            </span>
                            <p className='text-center text-pinkbeige px-3'> ... </p> {/* TODO: Update description */}
                            <div className='pt-8 text-center'>
                                <a href='/'> {/* TODO: Update link to demo page */}
                                    <button className='text-center px-4 py-3 m-2 bg-white text-pinkbeige font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='/'>  {/* TODO: Update link to github page */}
                                    <button className='text-center px-4 py-3 m-2 bg-white text-pinkbeige font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item End */}


                </div>




            </div>
        </div>
    );
};
export default Projects;