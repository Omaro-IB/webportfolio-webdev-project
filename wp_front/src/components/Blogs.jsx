import '../App.css';

const BlogBox = ({title, date, description, href}) => {
    href = "/blogs/"+href
    return (
        <div>
            <a href={href}>
                <div className="self-center min-h-[17vh] sm:min-h-[20vh] max-w-screen-md bg-[#f1e4d4] border-solid border-b-[6px] border-buttongreen hover:border-buttongreenhighlight mr-[2vw] mt-[2vh] shadow-box hover:shadow-none duration-500">
                    <div className="ml-[2vw] py-5">
                        <h1 className="text-2xl inline-block">{title}</h1>
                        <h1 className="text-2xl inline-block float-right mr-[2vw]">{date}</h1>
                    </div>
                    <p className="ml-[2vw]" style={{fontFamily:"GTPressuraMono"}}> {description}. </p>
                </div></a>
        </div>
    )
}

const Blogs = () => {
    return (
        <div className="sm:mt-[15vh] ml-[2.5vw]">
            <BlogBox title="Title..." date="Date..." description="Description..." href="240128"/>
        </div>
    );
};
export default Blogs;