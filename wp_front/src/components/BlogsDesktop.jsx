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
                <div className="h-full w-full flex flex-col justify-center mt-15" >  {/* photo div */}
                    <img src={hero} alt="hero" className="w-[46vw] h-[43vw] absolute self-center justify-center mt-20"></img>
                    <div className="sticky z-20 mb-[15vw]"> {/* title div */}
                        <div className="text-center mt-[55vw] mr-[30vw]">
                            <p className="text-[40px] text-pinkbeige">/blogs</p>
                        </div>
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