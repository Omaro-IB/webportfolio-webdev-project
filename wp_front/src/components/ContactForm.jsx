import React, { useState } from "react";
const FORM_ENDPOINT = ""; // TODO - update to the correct endpoint

const ContactForm = () => {

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {

        e.preventDefault();


        const inputs = e.target.elements;

        const data = {};


        for (let i = 0; i < inputs.length; i++) {

            if (inputs[i].name) {

                data[inputs[i].name] = inputs[i].value;

            }

        }

        console.log(data);
        setSubmitted(true);
    };


    if (submitted) {

        return (

            <div className="text-pinkbeige">

                <div className="text-2xl">Thank you! ☺</div>

                <div className="text-md">I'll get back to you as soon as I can.</div>

            </div>

        );

    }


    return (

        <form

            action={FORM_ENDPOINT}

            onSubmit={handleSubmit}

            method="POST"

        >

            <div style={{fontFamily: 'GTPressura', color: "black"}} className="pt-0 mb-3">

                <input

                    type="text"

                    placeholder="Your name"

                    name="name"

                    className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-pinkbeige border-0 rounded shadow outline-none"

                    required

                />

            </div>

            <div style={{fontFamily: 'GTPressura', color: "black"}} className="pt-0 mb-3">

                <input

                    type="email"

                    placeholder="Email"

                    name="email"

                    className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-pinkbeige border-0 rounded shadow outline-none"

                    required

                />

            </div>

            <div style={{fontFamily: 'GTPressura', color: "black"}} className="pt-0 mb-3">

        <textarea

            placeholder="Your message"

            name="message"

            className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-pinkbeige border-0 rounded shadow outline-none"

            required

        />

            </div>

            <div className="mb-3 stroke-pinkbeige">

                <button

                    className="text-pinkbeige bg-buttongreen active:bg-buttongreenhighlight px-6 py-3 mb-1 mr-1 text-sm font-bold text-pinkbeige transition-all duration-150 ease-linear rounded"

                    type="submit"

                >

                    <p>Submit</p>

                </button>

            </div>

        </form>

    );

};


export default ContactForm;