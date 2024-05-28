import React, {useEffect, useState} from "react";
import ContactForm from "./ContactForm";
import rss from "/assets/rss.xml?url";

const Contact = () => {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());

    function getCurrentDimension(){
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);


        return(() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize])

    let y = screenSize.height;
    // y = -8E-07x^3 + 0.0014x^2 - 0.7646x + 219
    let padding = (32768/(y+30))+25

    return (
        <div
            name="contact"
            id="contact"
            className="w-full h-screen bg-[#e9d3bb] text-gray-300"
            style={{paddingTop: `${padding}vh`, paddingBottom: `${padding}vh`}}
        >
            <div className="flex flex-col justify-center float-left items-center w-full h-full py-20">
                <div className=" py-16 rounded-md bg-[#06130e] flex flex-col justify-center items-center w-4/6">
                    <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
                        <div className="sm:text-right pb-8 pl-4">
                            <p className="text-4xl text-pinkbeige font-bold inline border-b-4 border-[#06130e]">
                                <em className="text-greydef">/Home/</em>Contact
                            </p>
                        </div>
                        <div></div>
                    </div>
                    <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                        <div className="">
                            <p className="font-['GTPressuraMono'] sm:text-left text-3xl font-bold text-pinkbeige">
                                If you're interested in what I do, <a className="underline text-buttongreen hover:text-buttongreenhighlight" href={rss}>subscribe to my RSS feed</a> or send me a message!
                            </p>
                            <br></br>
                            <p className="font-['GTPressuraMono'] text-pinkbeige">
                                {" "}
                                The best way to reach me is via email (omarom.ibra at gmail.com).
                            </p>
                            <p className="font-['GTPressuraMono'] text-[#f14e4e]">Please note this message form is still under construction so it likely will not deliver your message...</p>  {/* TODO */}
                        </div>
                        <div>
                            <ContactForm />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
export default Contact;