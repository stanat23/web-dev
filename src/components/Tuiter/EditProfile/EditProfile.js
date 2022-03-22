import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

const EditProfile = (
    {
        userInfo={
            firstName: 'Zun',
            lastName: 'Wang',
            handle: 'zwang89',
            profilePicture: '../tuiter/zun-wang.jpg',
            bannerPicture: '../tuiter/hanauma-bay-oahu.jpg',
            bio: 'Student, Future Software Engineer, video game enthusiast. Retuits and likes are not endorsements.',
            website: 'youtube.com/webdevtv',
            location: 'Boston, MA',
            dateOfBirth: '2/23/1989',
            dateJoined: '5/2011',
            followingCount: 312,
            followersCount: 180
        }
    }) => {
    const [user, setUser] = useState(userInfo);
    const userNameChangeHandler = (event) => {
        const firstValue = event.target.value;
        const newName = {
            firstName: firstValue,
        };
        setUser(newName);
    }
    const userBioChangeHandler = (event) => {
        const bioValue = event.target.value;
        const newBio = {
            bio: bioValue
        };
        setUser(newBio);
    }
    const dispatch = useDispatch();
    const confirmEdit = (user) => {
        dispatch({type: 'edit-userName', user});
        dispatch({type: 'edit-bio', user});
    };
    return(
        <div className="wd-bg-border-color wd-border-thin">
            <div className="row">
                <Link to="/tuiter/profile" className="col-1 p-3 ms-3">
                    <i className="fas fa-times fa-2x text-white"/>
                </Link>
                <div className="col-8 pt-1 mt-2">
                    <div className="wd-profile-top-author-name">
                        {"Edit profile"}
                    </div>
                </div>
                <Link
                    onClick={() => confirmEdit(user)}
                    to="/tuiter/profile"
                    className="col-2 wd-float-right m-3">
                    <button className="btn btn-primary rounded-pill wd-profile-edit">
                        Save
                    </button>
                </Link>
            </div>
            <div className="text-white row">
                <img src={userInfo.bannerPicture} className="wd-profile-banner-size"/>
                <div className="ms-3 wd-float-left">
                    <img src={userInfo.profilePicture} className="mb-2 wd-profile-author-pic"/>
                    <div className="wd-bookmark-post-author-handle">
                        {"Name"}
                    </div>
                    <div className="me-5">
                        <input
                            onChange={userNameChangeHandler}
                            value={user.firstName}
                            className="form-control"/>
                    </div>
                    <div className="mt-3 wd-bookmark-post-author-handle">
                        {"Bio"}
                    </div>
                    <div className="me-5 mb-4">
                        <input
                            onChange={userBioChangeHandler}
                            value={user.bio}
                            className="form-control"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProfile;