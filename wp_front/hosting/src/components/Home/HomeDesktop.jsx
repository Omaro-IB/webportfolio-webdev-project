import {HiArrowNarrowRight} from 'react-icons/hi';
import me from '/assets/me.png';
import hero from '/assets/home-hero-desktop.jpg'
import {HashLink} from "react-router-hash-link";
import '../../App.css';
import {TypeAnimation} from 'react-type-animation';
import resume from "/assets/resume.pdf";
import Splitscreen from "../Splitscreen.jsx";


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
            style={{fontFamily: 'Plaak', fontSize: '5vw', color: '#e6e6e6', display: 'inline-block'}}
            repeat={0}
        />
    );
};

const Content = ({subtitle}) => {
    return (
        <div className="w-full h-full grid grid-rows-1 grid-cols-1">
            <img src={hero} alt="hero" className="w-full h-full" style={{gridColumn: 1, gridRow: 1}}></img>
            <div className="self-center" style={{gridColumn: 1, gridRow: 1}}> {/* name div */}
                <div className="text-center">
                    <img alt="profile" src={me} className="w-72 h-72 mx-auto"></img>
                    <TyperBig classname="mx-auto"> </TyperBig>
                    <hr className="w-40 border-2 border-whitehighlight hover:border-buttongreenhighlight duration-500 mx-auto mb-3"></hr>
                    <p className="text-2xl text-pinkbeige mx-auto">{subtitle}</p>
                </div>
            </div>
            <div className="self-end m-10" style={{gridColumn: 1, gridRow: 1}}>
                <p className="text-[40px] text-pinkbeige">/home</p>
            </div>
        </div>
    )
}

const Info = ({p1_text, p2_text}) => {
    return (
        <div className="bg-beige w-full h-full overflow-auto text-[1.3vw]"> {/* info div */}
            <div className="flex flex-col ml-4 text-gray-900 px-8 mt-20">
                <h1 style={{fontFamily:"PlaakCondensed"}} className="text-8xl mb-[3vh]">Welcome!</h1>
                <br></br>
                <p style={{fontFamily:"GTPressuraMonoLight"}}> {/* big paragraph */}
                    {p1_text}
                    <br></br><br></br>
                    {p2_text}
                </p>
                <div className="flex flex-row my-8"> {/* buttons div */}
                    <HashLink to="/contact" smooth duration={500} className="px-4 py-2 duration-500 shadow-box hover:shadow-none group border-solid border-2 border-black text-white bg-gradient-to-r from-buttongreen to-buttongreengradient cursor-pointer">
                        <p className={"text-whitehighlight"}>Contact Me</p>
                    </HashLink>
                    <HashLink to="/blogs" className="px-4 py-2 self-start duration-500 shadow-box hover:shadow-none group border-solid border-2 border-black text-white bg-gradient-to-r from-buttongreen to-buttongreengradient cursor-pointer">
                        <p className={"text-whitehighlight"}>Read More</p>
                    </HashLink>
                    <a href={resume} className="px-4 py-2 self-start duration-500 shadow-box hover:shadow-none group border-solid border-2 border-black text-white bg-gradient-to-r from-buttongreen to-buttongreengradient cursor-pointer">
                        <p className={"text-whitehighlight"}>See Resume</p>
                    </a>
                </div>
                <HashLink to="/home/#works" smooth={true} duration={1000}>
                    <div className="flex flex-row items-center group">
                        <h4 className="inline-fl group-hover">Scroll to see my projects!</h4>
                        <span className="inline cursor-pointer group-hover:rotate-90 duration-300"> <HiArrowNarrowRight size={50} color={"#0b5036"} className="ml-3" /> </span>
                    </div>
                </HashLink>
            </div>
        </div>
    )
}

const HomeDesktop = ({subtitle, p1_text, p2_text}) => {
    return (
        <Splitscreen children1={<Content subtitle={subtitle} />} children2={<Info p1_text={p1_text} p2_text={p2_text}/>}/>
    )
};

export default HomeDesktop;