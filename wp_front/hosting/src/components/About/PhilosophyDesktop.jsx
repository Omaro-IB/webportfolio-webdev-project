import data from '../../data.json'
import { GiCycle } from "react-icons/gi";
import { GiBiceps } from "react-icons/gi";
import { IoSparkles } from "react-icons/io5"
import { GiButterflyFlower } from "react-icons/gi";

const PhilosophyDesktop = () => {
    return (
        <div>
            <h1 className={"text-4xl bg-triangle3 w-fit p-1"}>My Programming Philosophy</h1>
            <div className={"w-full flex flex-col"}>
                <div className={"bg-triangle3 p-5 mr-20 w-7/12 my-10 rounded-lg shadow-box"}>
                    <GiCycle style={{width: 125, height: 125}}/>
                    <h1 className={"text-5xl p-3"}>{data["text"]["philosophy"][0][0]}</h1>
                    <p className={"text-lg px-3"} style={{fontFamily: "GTPressuraMonoLight"}} dangerouslySetInnerHTML={{__html: data["text"]["philosophy"][1][0]}}></p>
                </div>
                <div className={"bg-triangle3 p-5 ml-20 w-7/12 self-end my-10 rounded-lg shadow-box"} id="philosophy">
                    <GiBiceps style={{width: 125, height: 125}} className={"ml-auto"}/>
                    <h1 className={"text-5xl p-3 text-end"}>{data["text"]["philosophy"][0][1]}</h1>
                    <p className={"text-lg px-3 text-end"} style={{fontFamily: "GTPressuraMonoLight"}} dangerouslySetInnerHTML={{__html: data["text"]["philosophy"][1][1]}}></p>
                </div>
                <div className={"bg-triangle3 p-5 mr-20 w-7/12 rounded-lg my-10 shadow-box"}>
                    <IoSparkles style={{width: 125, height: 125}}/>
                    <h1 className={"text-5xl p-3"}>{data["text"]["philosophy"][0][2]}</h1>
                    <p className={"text-lg px-3"} style={{fontFamily: "GTPressuraMonoLight"}} dangerouslySetInnerHTML={{__html: data["text"]["philosophy"][1][2]}}></p>
                </div>
                <div className={"bg-triangle3 p-5 w-7/12 self-end rounded-lg self-end my-10 shadow-box"}>
                    <GiButterflyFlower style={{width: 125, height: 125}} className={"ml-auto"}/>
                    <h1 className={"text-5xl p-3 text-end"}>{data["text"]["philosophy"][0][3]}</h1>
                    <p className={"text-lg px-3 text-end"} style={{fontFamily: "GTPressuraMonoLight"}} dangerouslySetInnerHTML={{__html: data["text"]["philosophy"][1][3]}}></p>
                </div>
            </div>
        </div>
    )
};

export default PhilosophyDesktop;