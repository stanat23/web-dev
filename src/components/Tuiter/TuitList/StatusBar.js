import React from "react";

const StatusBar = (
    {
        tuit = {
            _id: '345',
            userName: 'ReactJS',
            handle: 'reactjs',
            liked: false,
            verified: false,
            tuitImage: '',
            linkTitle: '',
            linkContent: '',
            time: '2h',
            tuit: 'React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs',
            userImage: '../tuiter/images/react-blue.png',
            comments: '123',
            retuits: '234',
            likes: '345',
            shares: '20'
        }
    }) => {
    return(
                <div className="wd-grid-row">
                    <div className="wd-bookmark-post-icon-grid">
                        <div className="pt-2">
                            <a href="#" className="wd-bookmark-post-link-content wd-bookmark-post-icon-no-underline">
                                <i className="far fa-comment"/>
                                <span className="wd-bookmark-post-icon-padding-left">
                                    {tuit.comments}
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
                                    {tuit.retuits}
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
                                    {tuit.likes}
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
                </div>);
}
export default StatusBar;