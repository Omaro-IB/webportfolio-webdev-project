const SmallTriangle = ({ w, h, text, color, direction = 'top', onClick }) => {
    const points = {
        top: 'polygon(50% 0%, 0% 86.6%, 100% 86.6%)',
        right: 'polygon(0% 0%, 0% 100%, 100% 50%)',
        bottom: 'polygon(0% 0%, 100% 0%, 50% 86.6%)',
        left: 'polygon(100% 0%, 100% 100%, 0% 50%)'
    }

    let pt = h/4
    if (direction === 'top') {pt = h/2}

    return (
        <div>
            <div style={{width:`${w}px`, height:`${h}px`, clipPath:points[direction], backgroundColor:color}} className={`group cursor-pointer`}
            onClick={onClick}>
                <p className={"text-blackshadow sm:group-hover:text-3xl text-center sm:text-2xl text-wrap"} style={{paddingTop: pt}}>{text}</p>
            </div>
        </div>

    )
}

const Triangle = ({size, onClick1, onClick2, onClick3, onClick4}) => {
    return (
        <div style={{width: size, height:size * 0.866}} className={"flex flex-col"}>
            <div style={{width: size, height:size * 0.433}} className={"flex flex-row justify-center"}>
                <div style={{width: size / 4}}><SmallTriangle w={size * 0.5} h={size * 0.5} direction={'bottom'} text={"Specializations"} color={"#C96868"} onClick={onClick1}/></div>
                <div style={{width: size / 4}}><SmallTriangle w={size * 0.5} h={size * 0.5} text={"Who Am I?"} onClick={onClick2} color={"#597445"}/></div>
                <div style={{width: size / 4}}><SmallTriangle w={size * 0.5} h={size * 0.5} direction={'bottom'} text={"Philosophy"} color={"#FADFA1"} onClick={onClick3}/></div>
            </div>
            <div style={{width: size, height: size * 0.433}} className={"flex flex-row justify-center"}>
                <div style={{width: size / 4}}></div>
                <SmallTriangle w={size * 0.5} h={size * 0.5} direction={'bottom'} text={"Contact"} color={"#7EACB5"} onClick={onClick4}/>
            </div>
        </div>

    )
};

export default Triangle;