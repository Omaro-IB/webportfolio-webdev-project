import data from '../../data.json'

const SpecializationsDesktop = () => {
    const titles = data["text"]["specializations"][0]
    const imgs = data["text"]["specializations"][1]
    const links = data["text"]["specializations"][2]
    const texts = data["text"]["specializations"][3]

    return (
        <div className={"bg-triangle1 w-fit p-1"}>
            <h1 className={"text-4xl bg-triangle1 w-fit p-1"}>What do I specialize in?</h1>
                <div className={"flex flex-row"}>
                    {titles.map((title, i) => (
                        <div key={i} className={"flex m-1"}>
                            <a href={links[i]}
                               className={"duration-500 shadow-box hover:shadow-none group border-solid border-2 border-black text-white bg-gradient-to-r from-triangle1 to-[#de5d5d] p-2"}>
                                <p className={"text-2xl overflow-auto p-1"}
                                   style={{fontFamily: "GTPressuraMonoLight"}}>{`${title}:`}</p>
                                <div className={"flex flex-row w-fit mx-auto"}>
                                    {imgs[i].map(img => (
                                        <img className={"mr-5 w-20 h-20"}
                                             src={"/assets/skillimages/" + img.split(':')[1]}
                                             alt={`Icon for ${title}`}/>
                                    ))}
                                </div>
                                <p className={"text-blackshadow text-3xl mx-auto w-fit"}>{texts[i]}</p>
                            </a>
                        </div>))}
                </div>
        </div>
    )
};

export default SpecializationsDesktop;