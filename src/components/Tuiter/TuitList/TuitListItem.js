import React from "react";
import {useDispatch} from "react-redux";

const TuitListItem = (
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
    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
        dispatch({type: 'delete-tuit', tuit})
    };
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };
    return(
        <li className="list-group-item text-white bg-black wd-border-thin wd-bg-border-color row">
            <div className="p-0 pt-2 wd-float-left col-1">
                <img src={tuit.userImage} className="wd-bookmark-post-author-pic"/>
            </div>
            <div className="ps-3 pb-1 wd-float-left col-11">
                <a onClick={() =>
                    deleteTuit(tuit)}>
                    <i className="far fa-times-circle fa-2x fa-pull-right"></i>
                </a>
                <span className="wd-bookmark-post-author-name">
                    {tuit.userName + " "}
                </span>
                <span className="wd-bookmark-post-author-handle">
                    @{tuit.handle} - {tuit.time}
                </span>
                <div className="wd-bookmark-post-content pb-2">
                    {tuit.tuit}
                </div>
                <div className={`${(tuit.linkTitle===''&&tuit.linkContent===''&&tuit.tuitImage==='') ? 'wd-no-display' : ''}`}>
                    <div className={`wd-border-thin wd-bg-border-color ${(tuit.linkTitle===''&&tuit.linkContent==='') ? 'wd-post-picture' : 'wd-bookmark-post-picture'}`}>
                        <img src={tuit.tuitImage} className={`${(tuit.linkTitle===''&&tuit.linkContent==='') ? 'wd-post-picture' : 'wd-bookmark-post-picture'}`}/>
                    </div>
                    <div className={`wd-bookmark-post-link wd-bg-border-color wd-border-thin ${(tuit.linkTitle===''&&tuit.linkContent==='') ? 'wd-no-display' : ''}`}>
                        <div className="wd-bookmark-post-link-padding">
                            <div className="wd-bookmark-post-link-title-bold">
                                {tuit.linkTitle}
                            </div>
                            <div className="wd-bookmark-post-link-content">
                                {tuit.linkContent}
                            </div>
                        </div>
                    </div>
                </div>
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
                            <a onClick={likeTuit} className="wd-bookmark-post-link-content wd-bookmark-post-icon-no-underline">
                                {
                                    tuit.liked &&
                                    <i className="fas fa-heart"
                                       style={{color: 'red'}}></i>
                                }
                                {
                                    !tuit.liked &&
                                    <i className="fas fa-heart"></i>
                                }
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
                </div>
            </div>
        </li>);
}
export default TuitListItem;