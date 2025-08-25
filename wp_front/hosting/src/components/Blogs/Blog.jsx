import '../../App.css';
import { PiMediumLogoFill } from "react-icons/pi";
import {FaLinkedin, FaTimes} from 'react-icons/fa';
import Markdown from 'react-markdown'
import "./Blog.css"
import data from "../../data.json"
import {HashLink} from "react-router-hash-link";
import { FaShareFromSquare } from "react-icons/fa6";
import React, { useState } from 'react';


function Blog({blog_id, onClose}) {
    const [message, setMessage] = useState('')
    const displayMessage = (msg) => {
        setMessage(msg)
        setTimeout(() => {setMessage('')}, 3000)
    }

    const blog_data = data.blogs.find(blog => (blog.id === blog_id))
    if (!blog_data) {return <p className={"bg-beige w-screen min-h-screen h-max mt-[15vh] ml-4 text-4xl"}>Could not find this blog</p>}
    const imgSrc = "/assets/blogimages/" + blog_data.image

    return <div className="bg-beige w-screen min-h-screen h-max">
        <div className={"h-[11vh]"}></div>
        <div className={"flex flex-row items-center h-10 w-[90vw] mx-auto"}>
            <FaTimes className={"w-10 h-10 cursor-pointer fill-codered"} onClick={onClose}></FaTimes>
            <p className={"mx-auto"}>{message}</p>
        </div>
        <div className="origin-center mx-auto flex flex-col w-[90vw] sm:w-[50vw]">
            <div className={"flex flex-row w-full justify-between"}>
                <HashLink to={"/blogs/" + blog_id}>
                    <h1 className="font-bold text-3xl sm:text-5xl">{blog_data.title}</h1>
                </HashLink>
            </div>
            <FaShareFromSquare className={"h-[25px] w-[25px] cursor-pointer"} onClick={() => {
                navigator.clipboard.writeText("https://omarwebportfolio.nfshost.com/blogs/" + blog_id).then(displayMessage("Copied!"))
            }}></FaShareFromSquare>
            <h2>{blog_data.date} &nbsp; &nbsp; • &nbsp; &nbsp; Omar Ibrahim</h2>

            <div className="w-full py-[4vw] sm:py-[2vw] self-center"> {/* read at buttons div */}
                <hr></hr>
                <div className="flex flex-row justify-center max-w-[33] items-center py-1">
                    <p>Read at:</p>
                    <a href={blog_data.medium}
                       className="ml-8 h-6 w-24 duration-500 shadow-box2 hover:shadow-none group border-solid border-2 border-black cursor-pointer flex flex-row justify-center">
                        <PiMediumLogoFill style={{width: "25px", height: "25px", alignSelf: "center"}}/>
                        <p className="ml-2 self-center text-[15px]">Medium</p>
                    </a>
                    <a href={blog_data.linkedin}
                       className="ml-4 h-6 w-24 duration-500 shadow-box2 hover:shadow-none group border-solid border-2 border-black cursor-pointer flex flex-row justify-center">
                        <FaLinkedin style={{width: "25px", height: "25px", alignSelf: "center"}}/>
                        <p className="ml-2 self-center text-[15px]">LinkedIn</p>
                    </a>
                </div>
                <hr></hr>
            </div>

            <img className="self-center" alt={blog_data.image_subtitle} src={imgSrc}></img>
            <p className="self-center text-center text-[12px] sm:text-[14px] mt-1 text-greydef">{blog_data.image_subtitle}</p>
            <br/>

            <div className={"w-screen sm:w-full overflow-auto self-center px-6"}>
                <Markdown className={"blog"} urlTransform={uri =>
                    uri.startsWith("http") ? uri : "/assets/blogimages/" + uri
                }>{blog_data.content}</Markdown>
            </div>

            <br className="mt-24"></br>
        </div>
    </div>;
}

export default Blog;