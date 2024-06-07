import '../App.css';
import Navbar from "../components/Navbar";


function RecipeDemoPage() {
  return (
      <div>
          <Navbar callingPage="recipedemo"></Navbar>
          <div className="h-[11vh]"></div>
          <div className="m-10">
            <p style={{fontFamily: 'GTPressuraMono'}} > Under construction... </p>
          </div>
      </div>
  );
}
export default RecipeDemoPage;