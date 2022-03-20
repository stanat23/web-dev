import React from "react";
import {Link} from "react-router-dom";

const EditProfile = (
    {
        user={
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
    return(
        <div className="wd-bg-border-color wd-border-thin">
            <div className="row">
                <Link to="/tuiter/profile" className="col-1 p-3 ms-3">
                    <i className="fas fa-times fa-2x text-white"/>
                </Link>
                <div className="col-8 pt-1">
                    <div className="wd-profile-top-author-name">
                        {user.firstName + " " + user.lastName}
                    </div>
                    <div className="wd-bookmark-post-author-handle">
                        {"5,196 Tuits"}
                    </div>
                </div>
                <Link to="/tuiter/profile" className="col-2 wd-float-right m-3">
                    <button className="btn btn-primary rounded-pill wd-profile-edit">
                        Save
                    </button>
                </Link>
            </div>
            <div className="text-white row">
                <img src={user.bannerPicture} className="wd-profile-banner-size"/>
                <div className="ms-3 wd-float-left">
                    <img src={user.profilePicture} className="mb-2 wd-profile-author-pic"/>
                    <div className="wd-profile-author-name">
                        {user.firstName}{" "}{user.lastName}
                    </div>
                    <div className="wd-bookmark-post-author-handle">
                        {"@"+user.handle}
                    </div>
                    <div className="mt-3 mb-3 wd-post-item-content">
                        {user.bio}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProfile;