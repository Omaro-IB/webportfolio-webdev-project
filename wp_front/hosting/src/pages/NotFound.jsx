import '../App.css';
import Navbar from "../components/Navbar";

function RecipeDemoPage() {
  return (
      <div className="bg-beige h-screen w-screen">
          <Navbar callingPage="notfound"></Navbar>
            <div className="flex justify-center items-center py-96">
                <div className="flex flex-col sm:flex-row">
                    <h1 className="text-[70px] sm:text-[70px] text-center font-extrabold text-slate-900 sm:pr-6 sm:mr-6 sm:border-r sm:border-slate-900/10 sm:dark:border-slate-300/10 dark:text-slate-200">404</h1>
                    <h2 className="text-[30px] sm:text-[30px] dark:text-slate-400 mt-7">This page could not be found.</h2>
                </div>
            </div>
      </div>
  )
}
export default RecipeDemoPage;