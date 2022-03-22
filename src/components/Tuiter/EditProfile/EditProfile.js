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
    const [firstName, setFirstName] = useState(userInfo.firstName);
    const [lastName, setLastName] = useState(userInfo.lastName);
    const [bio, setBio] = useState(userInfo.bio);
    const userNameChangeHandler = (event) => {
        const newFirstName = event.target.value;
        setFirstName(newFirstName);
    }
    const userLastChangeHandler = (event) => {
        const newLastName = event.target.value;
        setLastName(newLastName);
    }
    const userBioChangeHandler = (event) => {
        const newBio = event.target.value;
        setBio(newBio);
    }
    const dispatch = useDispatch();
    const confirmEdit = (firstName, lastName, bio) => {
        dispatch({type: 'edit-profile', firstName, lastName, bio});
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
                    onClick={() => confirmEdit(firstName, lastName, bio)}
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
                    <div className="row">
                        <div className="col">
                            <div className="wd-bookmark-post-author-handle">
                                {"First Name"}
                            </div>
                            <div className="me-5">
                                <input
                                    onChange={userNameChangeHandler}
                                    value={firstName}
                                    className="form-control"/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="wd-bookmark-post-author-handle">
                                {"Last Name"}
                            </div>
                            <div className="me-5">
                                <input
                                    onChange={userLastChangeHandler}
                                    value={lastName}
                                    className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 wd-bookmark-post-author-handle">
                        {"Bio"}
                    </div>
                    <div className="me-5 mb-4">
                        <input
                            onChange={userBioChangeHandler}
                            value={bio}
                            className="form-control"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProfile;