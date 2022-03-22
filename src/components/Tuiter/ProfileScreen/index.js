import Profile from "./Profile";
import {useSelector} from "react-redux";
import React from "react";

const ProfileScreen = () => {
    const user = useSelector(state => state.profile);
    return(
        <div>
            {
                user.map(user => {
                    return(
                        <Profile user={user}/>
                    );
                })
            }
        </div>
    )
}

export default ProfileScreen;