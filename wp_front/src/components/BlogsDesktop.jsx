import hero from '/assets/blogs-hero-desktop.png'
import '../App.css';
import Blogs from "./Blogs";

const BlogsDesktop = () => {
    return (
        <div
            name="blogs"
            id = "blogs"
            className="z-0 h-screen w-full"
        >
            <div className="pt-0 pb-0 flex-row flex items-center justify-center h-full bg-blackshadow">  {/* content div */}
                <div className="h-full w-full flex flex-col-reverse mt-15" >  {/* photo div */}
                    <img src={hero} alt="hero" className="w-[46vw] h-[43vw] absolute self-center justify-center mt-20"></img>
                    <div className="z-10 p-10 ml-10"> {/* title div */}
                        <p className="text-[40px] text-pinkbeige">/blogs</p>
                    </div>
                </div>


                <div className="h-full w-full flex flex-col justify-center h-full bg-[#ff0000]"> {/* info div */}

                    <div className="flex-1 bg-beige overflow-auto">
                        <Blogs />
                    </div>

                </div>
            </div>
        </div>
    );
};
export default BlogsDesktop;