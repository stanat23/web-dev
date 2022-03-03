import './App.css';
import './vendors/bootstrap-5.1.3-dist/css/bootstrap.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome-free-5.15.4-web/css/all.min.css';
import './components/Tuiter/home.css';
import {BrowserRouter, Route} from "react-router-dom";
import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs";
import HomeScreen from "./components/Tuiter/HomeScreen/HomeScreen";
import ExploreScreen from "./components/Tuiter/ExploreScreen/ExploreScreen";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Route path="/hello" exact={true}>
                    <HelloWorld/>
                </Route>
                <Route path={["/", "/labs"]} exact={true}>
                    <Labs/>
                </Route>
                <Route path="/tuiter/home" component={HomeScreen}/>
                <Route path="/tuiter/explore" component={ExploreScreen}/>
            </div>
        </BrowserRouter>
    );
}

export default App;

