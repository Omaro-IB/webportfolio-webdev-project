import React from 'react';
import data from "../data.json"
import { Link as RouterLink} from "react-router-dom";
import { PiStackPlus } from "react-icons/pi";

const ProjectBox = ({title, description, project_id, demo, learn_more, skills}) => {
    const github = "https://github.com/Omaro-IB/"+project_id

    let demoLink = ''; let displayDemo = true
    if (demo === "disabled") {displayDemo = false}
    else if (demo === "auto") {demoLink = "/demos/"+project_id}
    else {demoLink = demo}

    let learnLink = ''; let displayLearn = true
    if (learn_more === "disabled") {displayLearn = false}
    else {learnLink = learn_more}

    let skillImgs = []
    let skillTxts = []
    skills.forEach(skill => {
        const s = skill.split(':')
        if (s[0] === 'img') {skillImgs.push(<img className={"m-1 h-6 sm:h-9"} src={"/assets/skillimages/" + s[1]} alt={s[1].substring(0, s[1].length - 4)} />)}
        else if (s[0] === 'txt') {skillTxts.push(<div className={"m-1 bg-gradient-to-r from-[#d4af37] to-[#f3d882] rounded-sm border-2 flex items-center p-1"}>
                                                    <PiStackPlus className={"w-[12px] sm:w-[25px] h-[12px] sm:h-[25px]"} />
                                                    <p className={"mx-1"}>{s[1]}</p>
                                                </div>)}
        else {skillTxts.push(<p>Error rendering {skill}</p>)}
    })


    return (
        <div id="projectbox" style={{backgroundImage: `url('/assets/projectboxes/${project_id}.jpg')` }} className='group container content-div flex flex-col overflow-auto'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 p-10 flex flex-col items-center my-auto'>
                {/*Title & Description*/}
                <span className='text-2xl sm:text-4xl font-bold text-pinkbeige text-center'>{title}</span>
                <p className='mt-2 text-sm sm:text-2xl text-pinkbeige text-center'>{description}</p>

                {/*Buttons*/}
                <div className={"my-4"}>
                    <a href={demoLink} className={displayDemo? "mx-[1vw] p-2 duration-500 shadow-box2 hover:shadow-none border-solid border-2 border-buttongreenshadow bg-whitehighlight text-buttongreenshadow text-lg": "hidden"}>
                        <button>
                            Demo
                        </button>
                    </a>
                    <a href={github} className={"mx-[1vw]-5 p-2 duration-500 shadow-box2 hover:shadow-none border-solid border-2 border-buttongreenshadow bg-whitehighlight text-buttongreenshadow text-lg"}>
                        <button>
                            Code
                        </button>
                    </a>
                    <RouterLink to={"/blogs/"+learnLink} className={displayLearn? "mx-[1vw] p-2 duration-500 shadow-box2 hover:shadow-none border-solid border-2 border-buttongreenshadow bg-whitehighlight text-buttongreenshadow text-lg": "hidden"}>
                        <button>
                            Learn More
                        </button>
                    </RouterLink>
                </div>

                {/*Skills*/}
                <div className={"flex flex-wrap bg-whitehighlight bg-opacity-80 rounded-sm p-2"}>
                    {skillImgs}
                    {skillTxts}
                </div>
            </div>
        </div>
    )
}

const Projects = () => {
    return (
        <div id='projects' className='bg-beige py-14'> {/* Project div */}
            <p className='self-center text-3xl sm:text-4xl font-bold border-b-4 text-black border-greydef mb-4 w-fit mx-auto'> {/* Title */}
                <em className="text-greydef">/Home/</em>#Projects
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 max-w-fit mx-auto bg-blackshadow">  {/* Project boxes div */}
                {data.projects.map((project) => (
                    <div className={"sm:px-1 py-1 sm:my-0 my-1 bg-buttongreen sm:bg-blackshadow"}>
                    <ProjectBox key={project.id} title={project.title} description={project.description} project_id={project.id}
                                demo={project.demo} learn_more={project.learn_more} skills={project.skills}></ProjectBox>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Projects;