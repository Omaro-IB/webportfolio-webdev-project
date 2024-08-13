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
                <div className="flex flex-row bg-blackshadow">  {/* content div */}
                    <div className="w-full grid grid-rows-1 grid-cols-1">  {/* photo/title div */}
                        <img src={hero} alt="hero" className="w-full p-10"
                             style={{gridColumn: 1, gridRow: 1}}></img>
                        <div className="self-end m-20" style={{gridColumn: 1, gridRow: 1}}>
                            <p className="text-[40px] text-pinkbeige">/blogs</p>
                        </div>
                    </div>


                    <div className="w-full flex flex-col justify-center bg-beige"> {/* info div */}

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