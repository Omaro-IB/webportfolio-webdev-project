import React from 'react';
import proj1 from '/assets/projectboxes/proj1.png';
import proj0 from '/assets/projectboxes/proj0.png';

const ProjectBox = ({title, description, image, project}) => {
    const github = "https://github.com/Omaro-IB/"+project
    const demo = "/demos/"+project

    return (
        <div id="projectbox" style={{ backgroundImage: `url(${image})` }} className='group container flex items-center content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 grid grid-rows-3 gap-0 items-center self-center mx-auto'>
                            <span className=' text-lg font-bold text-pinkbeige text-center mx-auto'>
                                {title}
                            </span>
                <p className='text-center text-pinkbeige px-3'>{description}</p>
                <div className='pt-8 text-center'>
                    <a href={demo}>
                        <button className='text-center px-4 py-3 m-2 bg-white text-pinkbeige font-bold text-lg'>
                            Demo
                        </button>
                    </a>
                    <a href={github}>
                        <button className='text-center px-4 py-3 m-2 bg-white text-pinkbeige font-bold text-lg'>
                            Code
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

const Projects = () => {
    return (
        <div id='projects' className='bg-beige py-[10vh] flex flex-col'> {/* Project div */}
            <div className='flex flex-col'>   {/* Title div */}
                <p className='self-center text-3xl sm:text-4xl font-bold inline border-b-4 text-[#000000] border-greydef]'>
                    <em className="text-greydef">/Home/</em>#Projects
                </p>
                <div style={{fontFamily:"GTPressuraMono"}} className="self-center flex mb-7">
                    <p className='text-center text-base sm:text-2xl'>Check out some of my work - <span className="text-rederror">still under construction</span></p> {/* TODO */}
                </div>
            </div>
            <div className="grid grid-cols-1 gap-1 sm:grid-cols-3 self-center sm:p-0 p-4">  {/* Project boxes div */}
                <ProjectBox title = "Recipe Sanitizer" description="A small project dedicated to cleanly formatting and downloading online recipes" image={proj1} project="minimalrecipe-scripting-tool"/>
                <ProjectBox title = "..." description="..." image={proj0} project=""/>
                <ProjectBox title = "..." description="..." image={proj0} project=""/>
            </div>
        </div>
    );
};
export default Projects;