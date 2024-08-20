import hero from '/assets/blogs-hero-desktop.jpg'
import '../../App.css'
import Blogs from "./Blogs.jsx"
import Splitscreen from "../Splitscreen.jsx";

const BlogsDesktop = () => {
    return (
        <Splitscreen fullscreen={true}
            children1={<div className="grid grid-rows-1 grid-cols-1 h-full">  {/* photo/title div */}
                <img src={hero} alt="hero" className="w-full h-full" style={{gridColumn: 1, gridRow: 1}}></img>
                <div className="self-end m-10" style={{gridColumn: 1, gridRow: 1}}>
                    <p className="text-[40px] text-pinkbeige">/blogs</p>
                </div>
            </div>}
            children2={<div className="flex flex-col bg-beige h-full"> {/* info div */}
                    <div className="flex-1 bg-beige overflow-auto">
                        <Blogs/>
                    </div>
                </div>}
        />
    )
}
export default BlogsDesktop;