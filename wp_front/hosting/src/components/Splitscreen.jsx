const Splitscreen = ({children1, children2, fullscreen}) => {
    return (
        <div className="mx-auto bg-beige">
            <div className={fullscreen? "flex flex-row bg-blackshadow h-screen" : "flex flex-row bg-blackshadow"}>
                <div className="w-full py-10 pr-5"> {/* Side 1 */}
                    {children1}
                </div>
                <div className="w-full py-10 pl-5"> {/* Side 2 */}
                    {children2}
                </div>
            </div>
        </div>
    );
};
export default Splitscreen;