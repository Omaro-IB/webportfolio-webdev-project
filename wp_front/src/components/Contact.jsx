import ContactForm from "./ContactForm";
import rss from "/assets/rss.xml?url";
import SocialIcons from "./SocialIcons";

const Contact = () => {
    return (
        <div id="contact" className="bg-beige py-10">
            <div className='py-10 sticky w-[90vw] sm:w-[60vw] mx-auto text-pinkbeige bg-buttongreenshadow rounded-[30px]'>
                <div className="flex flex-col items-center">  {/* main contact flex-box */}
                    <div className="text-3xl md:text-4xl">  {/* contact title */}
                        <em className="text-greydef">/Home/</em>Contact
                    </div>
                    <div className="flex flex-col sm:flex-row mt-5 px-8">  {/* Text and form side-by-side */}
                        <div className="sm:px-8">  {/* Text */}
                            <p className="text-2xl font-['GTPressuraMono'] font-bold text-pinkbeige">
                                If you're interested in what I do, <a
                                className="underline text-buttongreen hover:text-buttongreenhighlight" href={rss}>subscribe
                                to my RSS feed</a> or send me a message!
                            </p>
                            <br></br>
                            <p className="sm:text-lg text-sm font-['GTPressuraMono'] text-pinkbeige">
                                {" "}
                                The best way to reach me is via email (omarom.ibra at gmail.com).
                            </p>
                            <p className="sm:text-lg text-sm font-['GTPressuraMono'] text-rederror">Please note this message form is still
                                under construction so it likely will not deliver your message...</p>  {/* TODO */}
                        </div>
                        <div className="mt-10 mb-10 sm:mb-5 sm:basis-5/6"> <ContactForm /> </div>  {/* Form */}
                    </div>
                    <SocialIcons />
                </div>
            </div>
        </div>
    );
};
export default Contact;