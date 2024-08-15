import '../App.css';
import { PiMediumLogoFill } from "react-icons/pi";
import {FaLinkedin, FaTimes} from 'react-icons/fa';
import Markdown from 'react-markdown'
import "./Blog.css"


function Blog({title, date, medium, linkedin, image, image_subtitle, content, onClose}) {
    const imgSrc = "/assets/blogimages/" + image

    return (
        <div className="bg-beige w-screen h-max">
            <div className="origin-center mx-auto flex flex-col mt-[15vh] w-[90vw] sm:w-[50vw]">
                <div className={"flex flex-row w-full justify-between"}>
                    <h1 className="font-bold text-3xl sm:text-5xl">{title}</h1>
                    <FaTimes className={"w-10 h-10 cursor-pointer fill-codered"} onClick={onClose}></FaTimes>
                </div>
                <h2>{date} &nbsp; &nbsp; • &nbsp; &nbsp; Omar Ibrahim</h2>

                <div className="w-full py-[4vw] sm:py-[2vw] self-center"> {/* read at buttons div */}
                    <hr></hr>
                    <div className="flex flex-row justify-center max-w-[33] items-center py-1">
                        <p>Read at:</p>
                        <a href={medium}
                           className="ml-8 h-6 w-24 duration-500 shadow-box2 hover:shadow-none group border-solid border-2 border-black cursor-pointer flex flex-row justify-center">
                            <PiMediumLogoFill style={{width: "25px", height: "25px", alignSelf: "center"}}/>
                            <p className="ml-2 self-center text-[15px]">Medium</p>
                        </a>
                        <a href={linkedin}
                           className="ml-4 h-6 w-24 duration-500 shadow-box2 hover:shadow-none group border-solid border-2 border-black cursor-pointer flex flex-row justify-center">
                            <FaLinkedin style={{width: "25px", height: "25px", alignSelf: "center"}}/>
                            <p className="ml-2 self-center text-[15px]">LinkedIn</p>
                        </a>
                    </div>
                    <hr></hr>
                </div>

                <img className="self-center" alt={image_subtitle} src={imgSrc}></img>
                <p className="self-center text-center text-[12px] sm:text-[14px] mt-1 text-greydef">{image_subtitle}</p>
                <br/>

                <div className={"blog"}>
                    <Markdown>{content}</Markdown>
                </div>

                <br className="mt-24"></br>
            </div>
        </div>
    );
}

export default Blog;