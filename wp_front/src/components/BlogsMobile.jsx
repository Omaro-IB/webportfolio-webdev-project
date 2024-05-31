import {HiArrowNarrowRight, HiOutlineMail} from 'react-icons/hi';
import hero from '/assets/blogs-hero-mobile.png'
import '../App.css';
import Blogs from "./Blogs";


const BlogsMobile = () => {
    return (
        <div name="blos" id = "blogs" className="bg-blackshadow">
            <div className="bg-blackshadow h-screen">
                <div className="py-20">
                    <div className="absolute z-20 ml-[12vw] mt-[140vw] text-center">
                        <p className="mt-2 text-[50px] text-pinkbeige mx-auto">/blogs</p>
                    </div>
                    <img src={hero} alt="hero" className="absolute z-0"></img>
                </div>
            </div>
            <div className="bg-beige h-screen">  {/* content div */}
                <div className="bg-beige py-20"> {/* info div */}
                    <Blogs />
                </div>
            </div>
        </div>
    );
};
export default BlogsMobile;