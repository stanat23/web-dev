import React from "react";

const PostSummaryItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "../tuiter/images/react-blue.png"
        }
    }) => {
    return(
        <li className="list-group-item text-white bg-black wd-border-thin wd-bg-border-color">
                <img src={post.image} className="wd-post-item-pic"/>
                <div className="wd-post-item-title-text">
                    <div className="wd-color-gray">
                        {post.topic}
                    </div>
                    <div className="wd-color-gray">
                        <span className="wd-font-color-white fw-bold">{post.userName} <i className="fas fa-check-circle"/> </span>
                        - {post.time}
                    </div>
                    <div className="fw-bold">
                        {post.title}
                    </div>
                    <div className={`wd-color-gray ${post.tweets==='' ? 'wd-hide-tuits' : ''}`}>
                        {post.tweets} Tuits
                    </div>
                </div>
        </li>);
}

export default PostSummaryItem;