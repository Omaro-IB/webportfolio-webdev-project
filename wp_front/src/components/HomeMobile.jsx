import {HiArrowNarrowRight, HiOutlineMail} from 'react-icons/hi';
import me from '/assets/me.png';
import hero from '/assets/home-hero-mobile.png'
import resume from "/assets/resume.pdf";
import { Link } from "react-scroll";
import { Link as RouterLink} from "react-router-dom";
import '../App.css';
import { TypeAnimation } from 'react-type-animation';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa';
import { BsRss } from "react-icons/bs";
import rss from "/assets/rss.xml?url";


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
            style={{ fontFamily: 'GTPressuraMono', fontSize: '7vw', color: '#e6e6e6', display: 'inline-block', marginTop: "6vw", zIndex: "20" }}
            repeat={0}
        />
    );
};


const HomeMobile = () => {
    return (
        <div name="home" id = "home" className="bg-[#0b0f02]">
            <div className="bg-[#0b0f02] h-screen">
                <div className="py-20">
                    <div className="absolute z-20 ml-[12vw] mt-[35vw] text-center">
                        <img src={me} alt="profile" className="w-[40vw] h-[40vw] mx-auto"></img>
                        <TyperSmall className="z-20 mx-auto"> </TyperSmall>
                        <hr className="z-20 w-32 border-2 border-[#f9f1e8] hover:border-[#0b5036] duration-500 mx-auto my-[3vw]" ></hr>
                        <p className="mt-2 text-[17px] text-[#e6e6e6] mx-auto">Data Analytics, Network Engineering, Web Dev</p>
                    </div>
                    <p className="text-[50px] text-[#e6e6e6] absolute z-20 mt-[142vw] ml-[12vw]">/home</p>
                    <img src={hero} alt="hero" className="absolute z-0"></img>
                </div>
            </div>
            <div className="bg-[#e9d3bb] h-screen">  {/* content div */}
                <div className="bg-[#e9d3bb] py-20"> {/* info div */}
                    <p className="self-start ml-[10vw] mb-[1vw] mt-[10vw] max-w-[75vw] text-gray-900 text-[15px]">
                        I’m a data scientist with a focus on machine learning, computational mathematics, and also like network engineering too. Currently pursuing my bachelor's degree, and am eager to embark on an internship opportunity.
                        <br></br><br></br>
                        Are you looking for someone driven and capable? Someone with an analytic and mathematic mindset? Or maybe you need someone with a comprehensive understanding of the theory and practical implementation of machine learning algorithms? If so, feel free to reach out to me for further details at omarom.ibra at gmail.com.
                    </p>

                    <div className="self-start max-w-fit mt-5 ml-[10vw]"> {/* buttons */}
                        <div className="grid grid-cols-2">
                        <Link to="contact" smooth duration={500} style = {{width: "110px", height: "40px"}} className="px-4 py-1 duration-500 shadow-box hover:shadow-none group border-solid border-2 border-black text-white bg-gradient-to-r from-[#0b5036] to-[#176648] cursor-pointer">
                            Contact Me
                        </Link>
                        <RouterLink to="/blogs" smooth duration={500} style = {{width: "110px", height: "40px"}} className="ml-2 px-4 py-1 duration-500 shadow-box hover:shadow-none group border-solid border-2 border-black text-white bg-gradient-to-r from-[#0b5036] to-[#176648] cursor-pointer">
                            Read More
                        </RouterLink>
                        </div>
                    </div>

                    <div className="self-start mt-4 ml-[10vw] grid grid-cols-2 max-w-fit" > {/* social media icons */}
                        <div className="grid grid-cols-4"> {/* RSS, Github, Linkedin, Mail */}
                        <a href={rss} className="mx-1 h-6 w-6 duration-500 shadow-box2 hover:shadow-none group border-solid border-2 border-black cursor-pointer">
                            <BsRss style = {{width: "20px", height: "20px"}}/>
                        </a>
                        <a href="https://www.linkedin.com/in/omaribr" className="mx-1 h-6 w-6 duration-500 shadow-box2 hover:shadow-none group border-solid border-2 border-black cursor-pointer">
                            <FaLinkedin style = {{width: "20px", height: "20px"}}/>
                        </a>
                        <a href="https://github.com/Omaro-IB" className="mx-1 h-6 w-6 duration-500 shadow-box2 hover:shadow-none group border-solid border-2 border-black cursor-pointer">
                            <FaGithub style = {{width: "20px", height: "20px"}}/>
                        </a>
                        <a href="mailto:omarom.ibra@gmail.com" className="mx-1 h-6 w-6 duration-500 shadow-box2 hover:shadow-none group border-solid border-2 border-black cursor-pointer">
                            <HiOutlineMail style = {{width: "20px", height: "20px"}}/>
                        </a>
                        </div>
                        {/* Resume */}
                        <a href={resume} className="mx-2 h-6 duration-500 shadow-box2 hover:shadow-none group border-solid border-2 border-black cursor-pointer" style = {{width: "80px", height: "25px"}}>
                            <div className="grid grid-cols-2" style = {{width: "40px", height: "40px"}}>
                            <BsFillPersonLinesFill style = {{width: "20px", height: "20px"}}/>
                            <p style = {{width: "20px", height: "20px"}}>&nbsp;Resume</p>
                            </div>
                        </a>
                    </div>

                    <Link to="projects" smooth={true} duration={1000}>
                    <div className="self-start mt-28 ml-[10vw]">
                        <h4 className="float-left">Scroll to see my projects!</h4>
                        <span className="float-left cursor-pointer hover:rotate-90 duration-300"> <HiArrowNarrowRight size={25} color={"#0b5036"} className="ml-3" /> </span>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default HomeMobile;