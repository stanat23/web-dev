import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
        active = 'home'
    }) => {
    return(
        <div>
            <div className="list-group">
                <Link to="/" className="list-group-item">
                    <i className="fab fa-twitter"/>
                </Link>
                <Link to="/tuiter" className={`list-group-item ${active==='home' ? 'active' : ''}`}>
                    <i className="fas fa-home"/>
                    <span className="d-none d-xl-inline-flex ps-2">Home</span>
                </Link>
                <Link to="/tuiter/explore" className={`list-group-item ${active==='explore' ? 'active' : ''}`}>
                    <i className="fas fa-hashtag"/>
                    <span className="d-none d-xl-inline-flex ps-2">Explore</span>
                </Link>
                <a className="list-group-item" href="/">
                    <i className="fas fa-bell"/>
                    <span className="d-none d-xl-inline-flex ps-2">Notifications</span>
                </a>
                <a className="list-group-item" href="/">
                    <i className="fas fa-envelope"/>
                    <span className="d-none d-xl-inline-flex ps-2">Messages</span>
                </a>
                <a className="list-group-item" href="/">
                    <i className="fas fa-bookmark"/>
                    <span className="d-none d-xl-inline-flex ps-2">Bookmarks</span>
                </a>
                <a className="list-group-item" href="/">
                    <i className="fas fa-list"/>
                    <span className="d-none d-xl-inline-flex ps-2">Lists</span>
                </a>
                <Link to="/tuiter/profile" className={`list-group-item ${active==='profile' ? 'active' : ''}`}>
                    <i className="fas fa-user"/>
                    <span className="d-none d-xl-inline-flex ps-2">Profile</span>
                </Link>
                <a className="list-group-item" href="/">
                    <i className="fas fa-ellipsis-h fa-xs"/>
                    <span className="d-none d-xl-inline-flex ps-2">More</span>
                </a>
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </div>
    );
}

export default NavigationSidebar;
