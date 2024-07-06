import React from 'react';
import data from "../data.json"

const ProjectBox = ({title, description, project_id, displayDemo}) => {
    const github = "https://github.com/Omaro-IB/"+project_id
    const demo = "/demos/"+project_id

    return (
        <div id="projectbox" style={{ backgroundImage: `url('/assets/projectboxes/${project_id}.png')` }} className='group container flex items-center content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 grid grid-rows-3 gap-0 items-center self-center mx-auto'>
                            <span className=' text-lg font-bold text-pinkbeige text-center mx-auto'>
                                {title}
                            </span>
                <p className='text-center text-pinkbeige px-3'>{description}</p>
                <div className='pt-8 text-center'>
                    <a href={demo}>
                        <button className={displayDemo? 'text-center px-4 py-3 m-2 bg-white text-pinkbeige font-bold text-lg': "hidden"}>
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
                </div>
            </div>
            <div className="grid grid-cols-1 gap-1 sm:grid-cols-3 self-center sm:p-0 p-4">  {/* Project boxes div */}
                {data.projects.map((project) => (
                    <ProjectBox key={project.id} title={project.title} description={project.description} project_id={project.id}></ProjectBox>
                ))}
            </div>
        </div>
    );
};
export default Projects;