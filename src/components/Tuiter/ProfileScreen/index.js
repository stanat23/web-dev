import Profile from "./Profile";
import profileReducer from "../Reducers/profile-reducer";
import {createStore} from "redux";
import {Provider} from "react-redux";
const store = createStore(profileReducer);

const ProfileScreen = () => {
    return(
        <Provider store={store}>
            <div>
                <Profile/>
            </div>
        </Provider>
    )
}

export default ProfileScreen;