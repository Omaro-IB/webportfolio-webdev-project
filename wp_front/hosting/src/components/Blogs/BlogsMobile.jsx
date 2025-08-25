import hero from '/assets/blogs-hero-mobile.jpg'
import '../../App.css';
import Blogs from "./Blogs.jsx";


const BlogsMobile = () => {
    return (
        <div id="blogs" className="bg-beige flex flex-col w-full h-full">
            <div className="bg-blackshadow grid grid-rows-1 grid-cols-1">  {/* hero div */}
                <img src={hero} alt="hero" className="p-6 mx-auto" style={{gridColumn: 1, gridRow: 1}}></img>
                <div className="self-end mx-auto" style={{gridColumn: 1, gridRow: 1}}>
                    <p className="text-[40px] text-pinkbeige mb-6">/blogs</p>
                </div>
            </div>
            <div className="bg-beige h-screen">  {/* info div */}
                <Blogs />
            </div>
        </div>
    );
};
export default BlogsMobile;