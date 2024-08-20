import ContactForm from "./ContactForm.jsx";
import rss from "/assets/rss.xml?url";
import SocialIcons from "./SocialIcons.jsx";
import {Scramble} from "./Scramble.js";


const Contact = () => {
    return (
        <div className={"mt-10 sm:mt-0 flex flex-col h-full w-full overflow-auto"}>
            <div className=''>  {/* Text */}
                <p className="text-[1.3vw] font-['GTPressuraMono'] font-bold">
                    If you're interested in what I do, <a
                    className="underline text-buttongreen hover:text-buttongreenhighlight" href={rss}>subscribe
                    to my RSS feed!</a>
                </p>
                <br></br>
                <p className="text-[1.3vw] font-['GTPressuraMono']">
                    The best way to reach me is through the contact form below or via email at <u><a
                    className="text-buttongreen hover:text-buttongreenhighlight"
                    href={Scramble('lc158d7dlcxdlb12xc34lc15b6dl')}>{Scramble('dlcxdlb12xc34lc15b6dl')}</a></u>
                </p>
            </div>

            <div className="flex flex-col items-center pt-5 mt-5 pb-10 rounded-lg bg-blackshadow text-pinkbeige">  {/* main contact flex-box */}
                <div className="text-3xl">  {/* contact title */}
                    Contact Form
                </div>
                <div className={"w-[80%] p-2"}>
                    <ContactForm/>
                </div>
                <SocialIcons lightshadow={true}/>
            </div>
        </div>

    )
}
export default Contact;