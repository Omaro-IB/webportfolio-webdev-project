import './App.css';
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage"
import RecipeDemo from "./demos/RecipeDemo.jsx";
import BlogsPage from "./pages/BlogsPage";
import AboutPage from "./pages/AboutPage"
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

const Main = () => {
    return (
        <Router> <Routes> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path="/" Component={HomePage}/>
            <Route exact path="/home" Component={HomePage}/>
            <Route exact path="/index" Component={HomePage}/>
            <Route exact path="/demos/minimalrecipe-scripting-tool" Component={RecipeDemo}/>
            <Route exact path="/blogs" Component={BlogsPage}/>
            <Route exact path="/blogs/:id" Component={BlogsPage}/>
            <Route exact path="/about" Component={AboutPage}/>
            <Route exact path="*" Component={NotFound}/>
        </Routes> </Router>
    );
}

function App() {
    return (
        <div>
            <Main />
        </div>
    );
}
export default App;