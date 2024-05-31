import {HiArrowNarrowRight} from 'react-icons/hi';
import me from '/assets/me.png';
import hero from '/assets/home-hero-mobile.png'
import { Link } from "react-scroll";
import { Link as RouterLink} from "react-router-dom";
import '../App.css';
import { TypeAnimation } from 'react-type-animation';
import SocialIcons from "./SocialIcons.jsx";
import {Scramble} from "./Scramble.js";


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
            style={{ fontFamily: 'Plaak', fontSize: '10vw', color: '#e6e6e6', display: 'inline-block', marginTop: "6vw", zIndex: "20" }}
            repeat={0}
        />
    );
};


const HomeMobile = () => {
    return (
        <div id = "home" className="bg-beige">
            <div className="bg-blackshadow h-screen">
                <div className="py-20">
                    <div className="absolute z-20 ml-[12vw] mt-[35vw] text-center">
                        <img src={me} alt="profile" className="w-[40vw] h-[40vw] mx-auto"></img>
                        <TyperSmall className="z-20 mx-auto"> </TyperSmall>
                        <hr className="z-20 w-32 border-2 border-whitehighlight hover:border-buttongreen duration-500 mx-auto mb-3" ></hr>
                        <p className="text-[17px] text-pinkbeige mx-auto">Data Science, Network Engineering, Web Dev</p>
                    </div>
                    <p className="text-[50px] text-pinkbeige absolute z-20 mt-[142vw] ml-[12vw]">/home</p>
                    <img src={hero} alt="hero" className="absolute z-0"></img>
                </div>
            </div>
            <div className="ml-[10vw] h-screen">  {/* content div */}
                <div className="bg-[#e9d3bb] py-20"> {/* info div */}
                    <h1 style={{fontFamily: "PlaakCondensed"}} className="text-8xl">Welcome!</h1>
                    <br></br>
                    <p style={{fontFamily: "GTPressuraMonoLight"}}
                       className="self-start max-w-[75vw] text-gray-900 text-[15px]">
                        I’m a data scientist with a focus on machine learning, computational mathematics, and also like
                        network engineering too. Currently pursuing my bachelor's degree, and am eager to embark on an
                        internship opportunity.
                        <br></br><br></br>
                        Are you looking for someone driven and capable? Someone with an analytic and mathematical
                        mindset? Or maybe you need someone with a comprehensive understanding of the theory and
                        practical implementation of machine learning algorithms? If so, feel free to reach out to me for
                        further details at <u><a className="text-buttongreen hover:text-buttongreenhighlight" href={Scramble('lc158d7dlcxdlb12xc34lc15b6dl')}>{Scramble('dlcxdlb12xc34lc15b6dl')}.</a></u>
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
            </div>
        </div>
    );
};
export default HomeMobile;