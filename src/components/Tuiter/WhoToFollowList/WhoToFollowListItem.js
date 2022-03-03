import React from "react";

const WhoToFollowListItem = (
    {
        who={
            avatarIcon: '../java.png',
            userName: 'Java',
            handle: 'Java',
        }
    }) => {
    return(
        <li className="list-group-item list-inline text-white bg-black">
            <div className="wd-float-left">
                <img src={who.avatarIcon} className="rounded-circle wd-follow-suggestion-icon-size"/>
            </div>
            <div className="list-inline-item ms-3">
                <div className="fw-bold">{who.userName} <i className="fas fa-check-circle"/></div>
                <div className="wd-color-gray">@{who.handle}</div>
            </div>
            <div className="list-inline-item wd-float-right align-middle mt-1">
                <button className="btn btn-primary rounded-pill">
                    Follow
                </button>
            </div>
        </li>
    );
}

export default WhoToFollowListItem;