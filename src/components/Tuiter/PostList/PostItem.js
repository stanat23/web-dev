import React from "react";

const PostItem = (
    {
        post = {
            "userName": "ReactJS",
            "handle": "reactjs",
            "postImage": "../tuiter/hanauma-bay-oahu.jpg",
            "linkTitle": "Countdown: Mission to Space",
            "linkContent": "From training to launch, blablabla, blablabla",
            "time": "2h",
            "tuit": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "userImage": "../tuiter/images/react-blue.png",
            "comments": "123",
            "retuits": "234",
            "likes": "345",
            "shares": "20"
        }
    }) => {
    return(
        <li className="list-group-item text-white bg-black wd-border-thin wd-bg-border-color row">
            <div className="p-0 pt-2 wd-float-left col-1">
                <img src={post.userImage} className="wd-bookmark-post-author-pic"/>
            </div>
            <div className="ps-3 pb-1 wd-float-left col-11">
                <span className="wd-bookmark-post-author-name">
                    {post.userName + " "}
                </span>
                <span className="wd-bookmark-post-author-handle">
                    @{post.handle} - {post.time}
                </span>
                <div className="wd-bookmark-post-content pb-2">
                    {post.tuit}
                </div>
                <div className={`wd-border-thin wd-bg-border-color ${(post.linkTitle===''&&post.linkContent==='') ? 'wd-post-picture' : 'wd-bookmark-post-picture'}`}>
                    <img src={post.postImage} className={`${(post.linkTitle===''&&post.linkContent==='') ? 'wd-post-picture' : 'wd-bookmark-post-picture'}`}/>
                </div>
                <div className={`wd-bookmark-post-link wd-bg-border-color wd-border-thin ${(post.linkTitle===''&&post.linkContent==='') ? 'wd-no-display' : ''}`}>
                    <div className="wd-bookmark-post-link-padding">
                        <div className="wd-bookmark-post-link-title-bold">
                            {post.linkTitle}
                        </div>
                        <div className="wd-bookmark-post-link-content">
                            {post.linkContent}
                        </div>
                    </div>
                </div>
                <div className="wd-grid-row">
                    <div className="wd-bookmark-post-icon-grid">
                        <div className="pt-2">
                            <a href="#" className="wd-bookmark-post-link-content wd-bookmark-post-icon-no-underline">
                                <i className="far fa-comment"/>
                                <span className="wd-bookmark-post-icon-padding-left">
                                    {post.comments}
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="wd-bookmark-post-icon-grid">
                        <div className="pt-2">
                            <a href="#" className="wd-bookmark-post-link-content wd-bookmark-post-icon-no-underline">
                                <i className="fas fa-share">
                                </i>
                                <span className="wd-bookmark-post-icon-padding-left">
                                    {post.retuits}
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="wd-bookmark-post-icon-grid">
                        <div className="pt-2">
                            <a href="#" className="wd-bookmark-post-link-content wd-bookmark-post-icon-no-underline">
                                <i className="fas fa-heart">
                                </i>
                                <span className="wd-bookmark-post-icon-padding-left">
                                    {post.likes}
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="wd-bookmark-post-icon-grid">
                        <div className="pt-2">
                            <a href="#" className="wd-bookmark-post-link-content wd-bookmark-post-icon-no-underline">
                                <i className="fas fa-external-link-alt">
                                </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </li>);
}
export default PostItem;