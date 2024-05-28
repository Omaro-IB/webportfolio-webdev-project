import '../App.css';


const Blogs = () => {
    return (
        <div className="sm:mt-[15vh] ml-[2.5vw]">
            {/* Blog #1 Item Start */}
            <a href="/blogs/240128">  {/* TODO: Update link to blog page */}
                <div className="self-center min-h-[17vh] sm:min-h-[20vh] max-w-screen-md bg-[#f1e4d4] border-solid border-b-[6px] border-buttongreen hover:border-buttongreenhighlight mr-[2vw] mt-[2vh] shadow-box hover:shadow-none duration-500">
                    <div className="ml-[2vw] py-5">
                        <h1 className="text-2xl inline-block">Title</h1>  {/* TODO: Update title */}
                        <h1 className="text-2xl inline-block float-right mr-[2vw]">Date</h1> {/* TODO: Update date */}
                    </div>
                    <p className="ml-[2vw]"> Description... </p>  {/* TODO: Update description */}
            </div></a>
            {/* Blog #1 Item End */}
        </div>
    );
};
export default Blogs;