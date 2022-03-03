import React from "react";
import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(
        <>
            <div className="wd-border-thin wd-bg-border-color">
                <div className="mt-1 input-group">
                    <input type="text" className="ms-3 me-3 rounded-pill wd-color-gray form-control border-0"
                       placeholder="   Search Tuiter"/>
                    <span className="input-group-lg">
                        <a href="explore-settings.html" className="wd-float-right wd-padding-left me-3">
                            <img src="../tuiter/gear.png"
                                 className="wd-gear-icon-size2"/>
                        </a>
                    </span>
                </div>
                <ul className="nav mb-2 nav-tabs border-0">
                    <li className="nav-item wd-border-bottom">
                        <a href="#" className="wd-link-font-size nav-link wd-font-color-white fw-bold">For you</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="wd-link-font-size nav-link wd-color-lightgray">Trending</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="wd-link-font-size nav-link wd-color-lightgray">COVID-19</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="wd-link-font-size nav-link wd-color-lightgray">News</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="wd-link-font-size nav-link wd-color-lightgray">Sports</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="wd-link-font-size nav-link wd-color-lightgray">Entertainment</a>
                    </li>
                </ul>
            </div>
            <div>
                <img src="../tuiter/ford-f-150-raptor.jpg" className="col-12"/>
            </div>
            <PostSummaryList />
        </>
    );
}

export default ExploreComponent;