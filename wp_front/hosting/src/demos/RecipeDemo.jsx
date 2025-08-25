import '../App.css';
import React, {useEffect, useState} from 'react';
import NavbarDesktop from "../components/Navbar/NavbarDesktop.jsx";
import axios from 'axios'
import NavbarMobile from "../components/Navbar/NavbarMobile.jsx";
const baseUrl = 'https://omarwebportfolio.nfshost.com/api/recipe/'

const downloadFile = (html) => {
    const element = document.createElement("a");
    const file = new Blob([html], {type: 'text/html'});
    element.href = URL.createObjectURL(file);
    element.download = "recipe.html";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
}

function Demo() {
    const [newInput, setNewInput] = useState('')
    const [output, setOutput] = useState('Your recipe appears here...')
    const [finished, setFinished] = useState(false)

    return (
            <div className="bg-beige min-h-screen h-full w-full">

                <div className={"flex flex-col items-center"}>
                    {/*Input*/}
                    <input
                        className={"w-7/12 h-10 mt-20 text-center sm:text-2xl font-['GTPressura'] shadow-box2 shadow-blackshadow bg-whitehighlight"}
                        placeholder={"Enter Recipe URL or Dish Name"}
                        value={newInput} onChange={(e) => {
                        setNewInput(e.target.value)
                    }}></input>

                    {/*Buttons*/}
                    <div className={"flex flex-row my-2"}>
                        <button
                            className={"shadow-box hover:shadow-none duration-500 group border-solid border-2 border-black bg-gradient-to-r from-buttongreen to-buttongreengradient cursor-pointer mx-3 px-5 py-2"}
                            type="submit" onClick={() => {
                            setFinished(false)
                            if (newInput.length > 0) {
                                setOutput("Loading...")
                                axios.put(baseUrl, {input: newInput}).then(response => {
                                    setOutput(response.data)
                                    setFinished(true)
                                }).catch(err => {
                                    if (err.code === "ERR_BAD_RESPONSE") {
                                        setOutput(err.response.data)
                                    } else {
                                        setOutput(err.code)
                                    }
                                })
                            }
                        }
                        }><p className={"text-whitehighlight"}>Submit</p></button>
                        <button
                            className={finished ? "shadow-box duration-500 hover:shadow-none group border-solid border-2 border-black bg-gradient-to-r from-buttongreen to-buttongreengradient cursor-pointer mx-3 px-5 py-2" : "bg-[#608476] mx-3 px-5 py-2 text-buttongreenshadow"}
                            onClick={() => {
                                if (finished) {
                                    downloadFile(output)
                                }
                            }}><p className={"text-whitehighlight"}>Download</p></button>
                    </div>

                    {/*Output*/}
                    <div className={"bg-whitehighlight mt-10 w-10/12 p-2 min-h-60 rounded-lg"}>
                        <p className={"text-greydef italic text-sm"}>Source: cooking.nytimes.com</p>
                        <div className={"overflow-auto"} dangerouslySetInnerHTML={{__html: output}}></div>
                    </div>
                </div>
            </div>
    )
}

function RecipeDemo() {
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
    )
    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => setMatches( e.matches ));
    }, []);

    if (matches) {
        return (
            <NavbarDesktop>
                <Demo />
            </NavbarDesktop>
        )
    } else {
        return (
            <div>
                <NavbarMobile />
                <Demo />
            </div>
        )
    }
}

export default RecipeDemo;