import ContactForm from "./ContactForm";
import rss from "/assets/rss.xml?url";
import SocialIcons from "./SocialIcons";
import {Scramble} from "./Scramble.js";

const Contact = () => {
    return (
        <div id="contact" className="bg-beige py-10">
            <div className='py-10 sticky w-[90vw] sm:w-[60vw] mx-auto text-pinkbeige bg-blackshadow rounded-[30px]'>
                <div className="flex flex-col items-center">  {/* main contact flex-box */}
                    <div className="text-3xl md:text-4xl">  {/* contact title */}
                        <em className="text-greydef">/Home/</em>#Contact
                    </div>
                    <div className="flex flex-col sm:flex-row my-5 px-5">  {/* Text and form side-by-side */}
                        <div className="sm:px-8">  {/* Text */}
                            <p className="text-2xl font-['GTPressuraMono'] font-bold text-pinkbeige">
                                If you're interested in what I do, <a
                                className="underline text-buttongreen hover:text-buttongreenhighlight" href={rss}>subscribe
                                to my RSS feed!</a>
                            </p>
                            <br></br>
                            <p className="text-2xl font-['GTPressuraMono'] text-pinkbeige">
                                The best way to reach me is through the contact form or via email at <u><a
                                className="text-buttongreen hover:text-buttongreenhighlight"
                                href={Scramble('lc158d7dlcxdlb12xc34lc15b6dl')}>{Scramble('dlcxdlb12xc34lc15b6dl')}</a></u>
                            </p>
                        </div>
                        <div className={"w-full mr-5 mt-5 sm:mt-0"}>
                            <ContactForm />
                        </div>
                    </div>
                    <SocialIcons />
                </div>
            </div>
        </div>
    );
};
export default Contact;