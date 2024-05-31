import {HiArrowNarrowRight} from 'react-icons/hi';
import me from '/assets/me.png';
import hero from '/assets/home-hero-desktop.png'
import { Link } from "react-scroll";
import { Link as RouterLink} from "react-router-dom";
import '../App.css';
import { TypeAnimation } from 'react-type-animation';
import SocialIcons from "./SocialIcons.jsx";
import {Scramble} from "./Scramble.js";



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
            style={{ fontFamily: 'Plaak', fontSize: '60px', color: '#e6e6e6', display: 'inline-block' }}
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
                    <img src={hero} alt="hero" className="w-full h-full" style={{gridColumn: 1, gridRow: 1}}></img>
                    <div className="self-center" style={{gridColumn: 1, gridRow: 1}}> {/* name div */}
                        <div className="text-center">
                            <img alt="profile" src={me} className="w-[11vw] h-[11vw] mx-auto"></img>
                            <TyperBig classname="mx-auto"> </TyperBig>
                            <hr className="w-40 border-2 border-whitehighlight hover:border-buttongreenhighlight duration-500 mx-auto mb-3"></hr>
                            <p className="text-[20px] text-pinkbeige mx-auto">Data Science, Network Engineering,
                                Web Dev</p>
                        </div>
                    </div>
                    <div className="self-end m-10" style={{gridColumn: 1, gridRow: 1}}>
                        <p className="text-[40px] text-pinkbeige">/home</p>
                    </div>
                </div>
                <div className="mt-10 bg-beige w-full max-h-[89vh] overflow-auto"> {/* info div */}
                    <div className="flex flex-col ml-4 text-gray-900 text-[17px]">
                        <h1 style={{fontFamily:"PlaakCondensed"}} className="text-8xl mb-[3vh]">Welcome!</h1>
                        <br></br>
                        <p style={{fontFamily:"GTPressuraMonoLight"}}> {/* big paragraph */}
                            I’m a data scientist with a focus on machine learning, computational mathematics, and also like
                            network engineering too. Currently pursuing my bachelor's degree, and am eager to embark on an
                            internship opportunity.
                            <br></br><br></br>
                            Are you looking for someone driven and capable? Someone with an analytic and mathematical
                            mindset? Or maybe you need someone with a comprehensive understanding of the theory and
                            practical implementation of machine learning algorithms? If so, feel free to reach out to me for
                            further details at <u><a className="text-buttongreen hover:text-buttongreenhighlight" href={Scramble('lc158d7dlcxdlb12xc34lc15b6dl')}>{Scramble('dlcxdlb12xc34lc15b6dl')}.</a></u>
                        </p>
                        <div className="flex flex-row mt-[4vh]"> {/* buttons div */}
                            <Link to="contact" smooth duration={500} className="px-4 py-2 duration-500 shadow-box hover:shadow-none group border-solid border-2 border-black text-white bg-gradient-to-r from-buttongreen to-buttongreengradient cursor-pointer">
                                Contact Me
                            </Link>
                            <RouterLink to="/blogs" className="px-4 py-2 ml-4 self-start duration-500 shadow-box hover:shadow-none group border-solid border-2 border-black text-white bg-gradient-to-r from-buttongreen to-buttongreengradient cursor-pointer">
                                Read More
                            </RouterLink>
                        </div>
                        <div className="mt-[1.5vh] mb-[1vh]"><SocialIcons /></div>

                        <Link to="projects" smooth={true} duration={1000}>
                            <div className="self-start">
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