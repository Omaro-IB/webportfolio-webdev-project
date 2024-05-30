import {HiArrowNarrowRight, HiOutlineMail} from 'react-icons/hi';
import me from '/assets/me.png';
import hero from '/assets/home-hero-desktop.png'
import { Link } from "react-scroll";
import { Link as RouterLink} from "react-router-dom";
import '../App.css';
import { TypeAnimation } from 'react-type-animation';
import SocialIcons from "./SocialIcons.jsx";



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
        <div id = "home" className="z-0 w-full bg-beige">
            <div className="h-[11vh]"></div>
            <div className="flex flex-row bg-blackshadow h-[89vh]" id="contentdiv">  {/* content div */}
                <div className="w-full p-10 grid grid-rows-1 grid-cols-1">
                    <img src={hero} alt="hero" className="w-full h-full" style={{gridColumn:1, gridRow:1}}></img>
                    <div className="self-center" style={{gridColumn:1, gridRow:1}}> {/* name div */}
                        <div className="text-center">
                            <img alt="profile" src={me} className="w-[10vw] h-[10vw] mx-auto"></img>
                            <TyperBig classname="mx-auto"> </TyperBig>
                            <hr className="w-40 border-2 border-[#f9f1e8] hover:border-[#0b5036] duration-500 mx-auto my-2 mb-3"></hr>
                            <p className="mt-2 text-[17px] text-[#e6e6e6] mx-auto">Data Analytics, Network Engineering,
                                Web Dev</p>
                        </div>
                    </div>
                </div>
                <div className="bg-beige w-full flex flex-col"> {/* info div */}
                    <div className="mt-[5vw] ml-[7vw] mr-[5vw] text-gray-900 text-[17px]">
                        <p> {/* big paragraph */}
                            I’m a data scientist with a focus on machine learning, computational mathematics, and also like
                            network engineering too. Currently pursuing my bachelor's degree, and am eager to embark on an
                            internship opportunity.
                            <br></br><br></br>
                            Are you looking for someone driven and capable? Someone with an analytic and mathematical
                            mindset? Or maybe you need someone with a comprehensive understanding of the theory and
                            practical implementation of machine learning algorithms? If so, feel free to reach out to me for
                            further details at omarom.ibra at gmail.com.
                        </p>
                        <div className="flex flex-row mt-[5vh]"> {/* buttons div */}
                            <Link to="contact" smooth duration={500} className="px-4 py-2 duration-500 shadow-box hover:shadow-none group border-solid border-2 border-black text-white bg-gradient-to-r from-[#0b5036] to-[#176648] cursor-pointer">
                                Contact Me
                            </Link>
                            <RouterLink to="/blogs"className="px-4 py-2 ml-4 self-start duration-500 shadow-box hover:shadow-none group border-solid border-2 border-black text-white bg-gradient-to-r from-[#0b5036] to-[#176648] cursor-pointer">
                                Read More
                            </RouterLink>
                        </div>
                        <div className="mt-[5vh]"><SocialIcons /></div>

                        <Link to="projects" smooth={true} duration={1000}>
                            <div className="self-start mb-[1vw] mt-[5vh]">
                                <h4 className="float-left">Scroll to see my projects!</h4>
                                <span className="float-left cursor-pointer hover:rotate-90 duration-300"> <HiArrowNarrowRight size={25} color={"#0b5036"} className="ml-3" /> </span>
                            </div>
                        </Link>
                </div>
            </div>

            </div>


        </div>
    );
};
export default HomeDesktop;