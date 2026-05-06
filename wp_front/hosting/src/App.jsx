import './App.css';
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage"
import RecipeDemo from "./demos/RecipeDemo.jsx";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import ContactPage from "./pages/ContactPage.jsx";
import axios from 'axios'

const Main = () => {
    return (
        <Router> <Routes> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path="/" Component={HomePage}/>
            <Route exact path="/home" Component={HomePage}/>
            <Route exact path="/contact" Component={ContactPage}/>
            <Route exact path="/demos/minimalrecipe-scripting-tool" Component={RecipeDemo}/>
            <Route exact path="*" Component={NotFound}/>
        </Routes> </Router>
    );
}

function App() {
    axios.get('https://omarwebportfolio.nfshost.com/api/test')

    return (
        <div>
            <Main />
        </div>
    );
}
export default App;