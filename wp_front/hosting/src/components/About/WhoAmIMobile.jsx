import data from '../../data.json'

const WhoAmIMobile = () => {
    return (
        <div>
            <h1 className={"text-4xl bg-triangle2 w-fit p-3"}>Who Am I?</h1>
            <div className={"text-lg overflow-auto bg-triangle2 flex flex-col gap-4 text-black font-bold p-4 shadow-box"}
                 style={{fontFamily:"GTPressuraMonoLight"}} dangerouslySetInnerHTML={{__html: data["text"]["whoami"]}}>
            </div>
        </div>
    )
};

export default WhoAmIMobile;