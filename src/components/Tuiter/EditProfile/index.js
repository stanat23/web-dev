import EditProfile from "./EditProfile";
import {useSelector} from "react-redux";
import React from "react";
import Profile from "../ProfileScreen/Profile";

const EditProfileScreen = () => {
    const user = useSelector(state => state.profile);
    return(
        <div>
            {
                user.map(userInfo => {
                    return(
                        <EditProfile userInfo={userInfo}/>
                    );
                })
            }
        </div>
    )
}

export default EditProfileScreen;