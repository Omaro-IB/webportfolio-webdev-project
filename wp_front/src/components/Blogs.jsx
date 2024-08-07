import '../App.css';
import data from "../data.json"
import Blog from "./Blog";
import {useState} from "react";

const BlogBox = ({title, date, description, onClick}) => {
    return (
        <div onClick={onClick} className={"cursor-pointer"}>
            <div className="self-center min-h-[17vh] sm:min-h-[20vh] max-w-screen-md bg-[#f1e4d4] border-solid border-b-[6px] border-buttongreen hover:border-buttongreenhighlight mr-[2vw] mt-[2vh] shadow-box hover:shadow-none duration-500">
                <div className="ml-[2vw] py-5">
                    <h1 className="text-2xl inline-block">{title}</h1>
                    <h1 className="text-2xl inline-block float-right mr-[2vw]">{date}</h1>
                </div>
                <p className="ml-[2vw]" style={{fontFamily:"GTPressuraMono"}}> {description} </p>
            </div></div>
    )
}

const Blogs = () => {
    const [display, setDisplay] = useState(false);
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [medium, setMedium] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [image, setImage] = useState("");
    const [image_subtitle, setImage_subtitle] = useState("");
    const [content, setContent] = useState([]);

    return (
        <div>
            <div className={display? "absolute z-20 top-0 left-0 w-screen h-screen bg-beige" : "hidden"}>
                <Blog title={title} date={date} medium={medium} linkedin={linkedin} image={image} image_subtitle={image_subtitle} content={content} onClose={() => setDisplay(false)}/>
            </div>

            <div className={"sm:mt-[15vh] ml-[2.5vw]"}>
                {data.blogs.map(item =>
                    <BlogBox key={item.id} title={item.title} date={item.date} description={item.description} onClick={() => {
                        setDisplay(true); setTitle(item.title); setDate(item.date); setMedium(item.medium); setLinkedin(item.linkedin);
                        setImage(item.image); setImage_subtitle(item.image_subtitle); setContent(item.content); window.scrollTo(0, 0)
                    }} />
                )}
            </div>
        </div>
    );
};
export default Blogs;
