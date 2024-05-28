import {HiArrowNarrowRight, HiOutlineMail} from 'react-icons/hi';
import me from '/assets/me.png';
import hero from '/assets/home-hero-desktop.png'
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



const TyperBig = () => {
    return (
        <TypeAnimation
            sequence={[
                '',
                1000, // wait 1s
                'omaribrah.im',
            ]}
            wrapper="span"
            speed={30}
            style={{ fontFamily: 'GTPressuraMono', fontSize: '2vw', color: '#e6e6e6', display: 'inline-block' }}
            repeat={0}
        />
    );
};

const HomeDesktop = () => {
    return (
        <div
            name="home"
            id = "home"
            className="z-0 h-screen w-full"
        >
            <div className="pt-0 pb-0 flex-row flex items-center justify-center h-full bg-[#0b0f02]">  {/* content div */}
                <div className="h-full w-full flex flex-col justify-center mt-15" >  {/* photo div */}
                    <img src={hero} alt="hero" className="w-[46vw] h-[43vw] absolute self-center justify-center mt-20"></img>
                    <div className="sticky z-20 self-center mb-[15vw]"> {/* name div */}
                        <div className="text-center mt-52">
                            <img alt="profile" src={me} className="w-[10vw] h-[10vw] mx-auto"></img>
                            <TyperBig classname="mx-auto"> </TyperBig>
                            <hr className="w-40 border-2 border-[#f9f1e8] hover:border-[#0b5036] duration-500 mx-auto my-2 mb-3" ></hr>
                            <p className="mt-2 text-[17px] text-[#e6e6e6] mx-auto">Data Analytics, Network Engineering, Web Dev</p>
                        </div>
                    </div>
                    <p className="text-[40px] text-[#e6e6e6] absolute mt-[40vw] ml-[7vw]">/home</p>
                </div>


                <div className="h-full w-full flex flex-col justify-center h-full bg-[#e9d3bb]"> {/* info div */}
                    <p className="self-start mb-[1vw] mt-[5vw] ml-[7vw] mr-[5vw] max-w-[300px] sm:max-w-screen-sm text-gray-900 text-[17px] 2xl:text-[20px]">
                        I’m a data scientist with a focus on machine learning, computational mathematics, and also like network engineering too. Currently pursuing my bachelor's degree, and am eager to embark on an internship opportunity.
                        <br></br><br></br>
                        Are you looking for someone driven and capable? Someone with an analytic and mathematic mindset? Or maybe you need someone with a comprehensive understanding of the theory and practical implementation of machine learning algorithms? If so, feel free to reach out to me for further details at omarom.ibra at gmail.com.
                    </p>

                    <div className="self-start mt-5 ml-[7vw] mb-[1vw]"> {/* buttons */}
                        <div className="w-full grid grid-cols-2">
                        <Link to="contact" smooth duration={500} style = {{width: "110px", height: "40px"}} className="px-4 py-1 duration-500 shadow-box hover:shadow-none group border-solid border-2 border-black text-white bg-gradient-to-r from-[#0b5036] to-[#176648] cursor-pointer">
                            Contact Me
                        </Link>
                        <RouterLink to="/blogs" smooth duration={500} style = {{width: "110px", height: "40px"}} className="px-4 py-1 ml-4 self-start duration-500 shadow-box hover:shadow-none group border-solid border-2 border-black text-white bg-gradient-to-r from-[#0b5036] to-[#176648] cursor-pointer">
                            Read More
                        </RouterLink>
                        </div>
                    </div>

                    <div className="self-start mt-4 grid grid-cols-2 ml-[7vw] mb-[1vw]" > {/* social media icons */}
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
                    <div className="self-start mb-[1vw] mt-10 ml-[7vw]">
                        <h4 className="float-left">Scroll to see my projects!</h4>
                        <span className="float-left cursor-pointer hover:rotate-90 duration-300"> <HiArrowNarrowRight size={25} color={"#0b5036"} className="ml-3" /> </span>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default HomeDesktop;