import './App.css';
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage"
import RecipeDemoPage from "./pages/RecipeDemoPage";
import BlogsPage from "./pages/BlogsPage";
import AboutPage from "./pages/AboutPage"
import Blog20240128 from "./blogs/Blog20240128";
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
            <Route exact path="/demos/minimalrecipe-scripting-tool" Component={RecipeDemoPage}/>
            <Route exact path="/blogs" Component={BlogsPage}/>
            <Route exact path="/about" Component={AboutPage}/>
            <Route exact path="/blogs/240128" Component={Blog20240128}/>
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