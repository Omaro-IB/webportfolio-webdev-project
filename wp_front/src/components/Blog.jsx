import '../App.css';
import { PiMediumLogoFill } from "react-icons/pi";
import {FaLinkedin, FaTimes} from 'react-icons/fa';

// "bg-codebg text-codewhite font-['Consolas'] mt-[28px] p-4"

function parseContent(content) {
    let index = 0

    let state = 0  // 0 = paragraph, 1 = code
    const elems = []
    let current =  []

    while (index < content.length) {
        if (content[index] === "PS") { state = 0; current = []}  // paragraph
        else if (state === 0 && content[index].slice(0,2) === "n:") {current.push(<span><br /><br />    {content[index].slice(2)}</span>)}  // paragraph - new line
        else if (state === 0 && content[index].slice(0,2) === "i:") {current.push(<span>{content[index].slice(2)}</span>)}  // paragraph - inline
        else if (state === 0 && content[index].slice(0,2) === "l:") {  // paragraph - inline link
            let x = content[index].slice(2).split("|")
            current.push(<a className={"text-buttongreen hover:text-buttongreenhighlight underline"} href={x[1]}>{x[0]}</a>)
        }
        else if (content[index] === "PE") {elems.push(<div className="text-blackshadow font-['GTPressuraLight']">{current}</div>)}  // paragraph

        else if (content[index] === "CS") { state = 1; current = []}  // code
        else if (state === 1 && content[index].slice(0,2) === "n:") {current.push(<span className={"text-codewhite"}><br />{content[index].slice(2)}</span>)}  // code - new line
        else if (state === 1 && content[index].slice(0,2) === "i:") {current.push(<span className={"text-codewhite"}>{content[index].slice(2)}</span>)}  // code - new line
        else if (state === 1 && content[index].slice(0,2) === "b:") {current.push(<span className={"text-codeblue"}>{content[index].slice(2)}</span>)}  // code - new line
        else if (state === 1 && content[index].slice(0,2) === "g:") {current.push(<span className={"text-codegreen"}>{content[index].slice(2)}</span>)}  // code - new line
        else if (state === 1 && content[index].slice(0,2) === "o:") {current.push(<span className={"text-codeorange"}>{content[index].slice(2)}</span>)}  // code - new line
        else if (state === 1 && content[index].slice(0,2) === "p:") {current.push(<span className={"text-codepurple"}>{content[index].slice(2)}</span>)}  // code - new line
        else if (state === 1 && content[index].slice(0,2) === "r:") {current.push(<span className={"text-codered"}>{content[index].slice(2)}</span>)}  // code - new line
        else if (state === 1 && content[index].slice(0,2) === "t:") {current.push(<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>)}  // code - new line
        else if (content[index] === "CE") {elems.push(<div className="bg-codebg text-codewhite font-['Consolas'] mt-6 p-4">{current}</div>); elems.push(<br />)}  // code

        index++
    }

    return (<div>{elems}</div>)
}


function Blog({title, date, medium, linkedin, image, image_subtitle, content, onClose}) {
    const imgSrc = "/assets/blogimages/" + image

    return (
        <div className="bg-beige w-screen">
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

                {parseContent(content)}

                <br className="mt-24"></br>
            </div>
        </div>
    );
}

export default Blog;