import {HiArrowNarrowRight} from 'react-icons/hi';
import me from '/assets/me.png';
import hero from '/assets/home-hero-mobile.png'
import { Link } from "react-scroll";
import { Link as RouterLink} from "react-router-dom";
import '../App.css';
import { TypeAnimation } from 'react-type-animation';
import SocialIcons from "./SocialIcons.jsx";


const TyperSmall = () => {
    return (
        <TypeAnimation
            sequence={[
                '',
                1000, // wait 1s
                'omaribrah.im',
            ]}
            wrapper="span"
            speed={30}
            style={{ fontFamily: 'Plaak', fontSize: '50px', color: '#e6e6e6', display: 'inline-block', zIndex: "20" }}
            repeat={0}
        />
    );
};


const HomeMobile = ({subtitle, p1_text, p2_text}) => {
    return (
        <div id="home" className="bg-beige flex flex-col">
            <div className="h-[11vh]"></div>
            <div className="bg-blackshadow grid grid-rows-1 grid-cols-1">  {/* name div */}
                <img src={hero} alt="hero" className="p-6 mx-auto h-full" style={{gridColumn: 1, gridRow: 1}}></img>
                <div className="mx-auto my-auto" style={{gridColumn: 1, gridRow: 1}}>
                    <img src={me} alt="profile" className="w-[150px] h-[150px] mx-auto"></img>
                    <TyperSmall/>
                    <hr className="w-32 border-2 border-whitehighlight hover:border-buttongreen duration-500 mx-auto"></hr>
                    <p className="text-[17px] text-pinkbeige mx-auto mt-3">{subtitle}</p>
                </div>
                <div className="self-end mx-auto" style={{gridColumn: 1, gridRow: 1}}>
                    <p className="text-[40px] text-pinkbeige mb-6">/home</p>
                </div>
            </div>
            <div className="bg-beige h-screen p-8">  {/* info div */}
                <h1 style={{fontFamily: "PlaakCondensed"}} className="text-8xl">Welcome!</h1>
                <br></br>
                <p style={{fontFamily: "GTPressuraMonoLight"}}
                   className="self-start max-w-[75vw] text-gray-900 text-[15px]">
                    {p1_text}
                    <br></br><br></br>
                    {p2_text}
                </p>
                <div className="max-w-fit mt-10"> {/* buttons */}
                    <div className="grid grid-cols-2">
                        <Link to="contact" smooth duration={500} style={{width: "110px", height: "40px"}}
                              className="px-4 py-1 duration-500 shadow-box hover:shadow-none group border-solid border-2 border-black text-white bg-gradient-to-r from-buttongreen to-buttongreengradient cursor-pointer">
                            Contact Me
                        </Link>
                        <RouterLink to="/blogs" smooth duration={500} style={{width: "110px", height: "40px"}}
                                    className="ml-2 px-4 py-1 duration-500 shadow-box hover:shadow-none group border-solid border-2 border-black text-white bg-gradient-to-r from-buttongreen to-buttongreengradient cursor-pointer">
                            Read More
                        </RouterLink>
                    </div>
                </div>
                <div className="mt-4"> {/* social media icons */}
                    <SocialIcons/>
                </div>
                <Link to="projects" smooth={true} duration={1000}>
                    <div className="mt-3">
                        <h4 className="float-left">Scroll to see my projects!</h4>
                        <span
                            className="float-left cursor-pointer hover:rotate-90 duration-300"> <HiArrowNarrowRight
                            size={25} color={"#0b5036"} className="ml-3"/> </span>
                    </div>
                </Link>
            </div>
            <div className="h-[11vh]"></div>
        </div>
    );
};
export default HomeMobile;