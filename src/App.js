import './App.css';
import './vendors/bootstrap-5.1.3-dist/css/bootstrap.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome-free-5.15.4-web/css/all.min.css';
import './components/Tuiter/home.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router-dom";
import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs";
import Tuiter from "./components/Tuiter"
import HomeScreen from "./components/Tuiter/HomeScreen";
import ExploreScreen from "./components/Tuiter/ExploreScreen/ExploreScreen";
import ProfileScreen from "./components/Tuiter/ProfileScreen";
import EditProfileScreen from "./components/Tuiter/EditProfile";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/">
                        <Route path="labs"
                           element={<Labs/>}/>
                        <Route path="hello"
                           element={<HelloWorld/>}/>
                        <Route path="tuiter"
                               element={<Tuiter/>}>
                            <Route index
                                   element={<HomeScreen/>}/>
                            <Route path="explore"
                                   element={<ExploreScreen/>}/>
                            <Route path="profile"
                                   element={<ProfileScreen/>}/>
                            <Route path="edit-profile"
                                   element={<EditProfileScreen/>}/>
                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

