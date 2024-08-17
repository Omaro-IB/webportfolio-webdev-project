import '../App.css';
import data from "../data.json"
import Blog from "./Blog";
import {useState} from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { IoTimeOutline } from "react-icons/io5"


const BlogBox = ({title, date, description, onClick}) => {
    return (
        <div onClick={onClick} className={"cursor-pointer"}>
            <div className="p-4 min-h-40 bg-[#f1e4d4] border-solid border-b-4 border-buttongreen hover:border-buttongreenhighlight shadow-box hover:shadow-none duration-500">
                <h1 className="text-2xl">{title}</h1>
                <div className={"flex flex-row items-center"}><IoTimeOutline /><h1 className="text-lg m-3">{date}</h1></div>
                <p style={{fontFamily:"GTPressuraMono"}}> {description} </p>
            </div>
        </div>
    )
}

const Blogs = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [display, setDisplay] = useState(!params.id? '': params.id)

    return (
        <div>
            <div className={(display.length > 0)? "absolute z-20 top-0 left-0 w-screen h-screen bg-beige" : "hidden"}>
                <Blog blog_id={display} onClose={() => setDisplay(false)}/>
            </div>

            <div className={"p-10"}>
                {data.blogs.map(d => <BlogBox key={d.id} title = {d.title} date = {d.date} description = {d.description} onClick = {() =>
                {setDisplay(d.id)}
                } />)}
            </div>
        </div>
    );
};
export default Blogs;
