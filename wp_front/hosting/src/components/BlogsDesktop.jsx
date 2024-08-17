import hero from '/assets/blogs-hero-desktop.jpg'
import '../App.css';
import Blogs from "./Blogs";

const BlogsDesktop = () => {
    return (
        <div
            name="blogs"
            id="blogs"
            className="z-0 w-full"
        >
            <div className={"h-screen"}>
                <div className="h-[11vh]"></div>
                <div className="flex flex-row bg-blackshadow h-[89vh]">  {/* content div */}
                    <div className="w-full p-10 grid grid-rows-1 grid-cols-1">  {/* photo/title div */}
                        <img src={hero} alt="hero" className="w-full h-full" style={{gridColumn: 1, gridRow: 1}}></img>
                        <div className="self-end m-10" style={{gridColumn: 1, gridRow: 1}}>
                            <p className="text-[40px] text-pinkbeige">/blogs</p>
                        </div>
                    </div>


                    <div className="w-full flex flex-col bg-beige max-h-[89vh] mt-10"> {/* info div */}
                        <div className="flex-1 bg-beige overflow-auto">
                            <Blogs/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BlogsDesktop;