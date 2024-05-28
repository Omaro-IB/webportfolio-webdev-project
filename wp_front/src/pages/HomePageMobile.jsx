import '../App.css';
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import HomeMobile from "../components/HomeMobile";


function HomePageMobile() {
  return (
      <div>
        <Navbar > </Navbar>
        <HomeMobile > </HomeMobile>
        <Projects > </Projects>
        <Contact > </Contact>
      </div>
  );
}
export default HomePageMobile;