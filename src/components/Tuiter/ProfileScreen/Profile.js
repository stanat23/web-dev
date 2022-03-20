import React from "react";
import {Link} from "react-router-dom";

const Profile = (
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
                <Link to="/tuiter" className="col-1 p-3 ms-3">
                    <i className="fas fa-arrow-left fa-2x text-white"/>
                </Link>
                <div className="col-7 mt-1">
                    <div className="wd-profile-top-author-name">
                        {user.firstName + " " + user.lastName}
                    </div>
                    <div className="wd-bookmark-post-author-handle">
                        {"5,196 Tuits"}
                    </div>
                </div>
            </div>
            <div className="text-white row">
                <img src={user.bannerPicture} className="wd-profile-banner-size"/>
                <div className="ms-3 wd-float-left">
                    <img src={user.profilePicture} className="mb-2 wd-profile-author-pic"/>
                    <Link to="/tuiter/edit-profile" className="wd-float-right m-3">
                        <button className="me-3 btn rounded-pill wd-profile-edit">
                            Edit profile
                        </button>
                    </Link>
                    <div className="wd-profile-author-name">
                        {user.firstName}{" "}{user.lastName}
                    </div>
                    <div className="wd-bookmark-post-author-handle">
                        {"@"+user.handle}
                    </div>
                    <div className="mt-3 mb-3 wd-post-item-content">
                        {user.bio}
                    </div>
                    <div className="mb-3 wd-bookmark-post-author-handle">
                        <i className="me-1 wd-profile-icon-size fas fa-map-marker-alt"/>
                        {user.location}
                        <i className="ms-4 me-1 wd-profile-icon-size fas fa-birthday-cake"/>
                        {"Born "+user.dateOfBirth}
                        <i className="ms-4 me-1 wd-profile-icon-size fas fa-calendar-alt"/>
                        {"Joined "+user.dateJoined}
                    </div>
                    <div className="mb-3 wd-bookmark-post-author-handle">
                        <span className="me-1 wd-post-item-content">{user.followingCount}</span>
                        {"Following"}
                        <span className="ms-3 me-1 wd-post-item-content">{user.followersCount}</span>
                        {"Followers"}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;