import React, { useState } from "react";
import axios from 'axios'
const baseUrl = 'https://omarwebportfolio.nfshost.com/api/submit'

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(0); // 0 = not submitted, 1 = success, 2 = failure

    const handleSubmit = (e) => {
        e.preventDefault();

        const inputs = e.target.elements;
        const data = {};

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].name) {
                data[inputs[i].name] = inputs[i].value;
            }
        }

        const request = axios.post(baseUrl, data)
        request.then(_ => {
            setSubmitted(1)
        }).catch(err => {
            setSubmitted(2)
        })
    };

    if (submitted === 1) {
        return (
            <div className="text-pinkbeige">
                <div className="text-2xl">Thank you! ☺</div>
                <div className="text-md">I'll get back to you as soon as I can.</div>
            </div>
        );
    } else if (submitted === 0) {
        return (
            <form onSubmit={handleSubmit} method="POST" >
                {/*Form Fields*/}
                <div style={{fontFamily: 'GTPressura', color: "black"}} className="pt-0 mb-3">
                    <input type="text" placeholder="Your name" name="name" className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-pinkbeige border-0 rounded shadow outline-none" required/>
                </div>
                <div style={{fontFamily: 'GTPressura', color: "black"}} className="pt-0 mb-3">
                    <input type="email" placeholder="Email" name="email" className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-pinkbeige border-0 rounded shadow outline-none" required/>
                </div>
                <div style={{fontFamily: 'GTPressura', color: "black"}} className="pt-0 mb-3">
                    <textarea placeholder="Your message" name="message" className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-pinkbeige border-0 rounded shadow outline-none" required/>
                </div>

                {/*Submit Button*/}
                <div className="mb-3 stroke-pinkbeige">
                    <button className="text-pinkbeige bg-buttongreen active:bg-buttongreenhighlight px-6 py-3 mb-1 mr-1 text-sm font-bold transition-all duration-150 ease-linear rounded" type="submit">
                        <p>Submit</p>
                    </button>
                </div>
            </form>
        );
    } else {
        return (
            <div className="text-pinkbeige">
                <div className="text-2xl">Something went wrong!</div>
                <div className="text-md">Your message was not delivered, please send me an e-mail instead!</div>
            </div>
        );
    }
};


export default ContactForm;