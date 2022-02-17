import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div class="wd-border-thin wd-bg-border-color">
           <div class="mt-1 input-group">
                <input type="text" class="ms-3 me-3 rounded-pill wd-color-gray form-control border-0"
                       placeholder="&#xF002;     Search Tuiter"
                       style="font-family: Arial, 'Font Awesome 5 Free' !important; font-weight: 600;"/>
                <span class="input-group-lg">
                    <a href="explore-settings.html" class="wd-float-right wd-padding-left me-3">
                    <img src="../gear.png"
                         class="wd-gear-icon-size2"/>
                    </a>
                </span>
           </div>
           <ul class="nav mb-2 nav-tabs border-0">
                <li class="nav-item wd-border-bottom">
                    <a href="#" class="wd-link-font-size nav-link wd-font-color-white fw-bold">For you</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="wd-link-font-size nav-link wd-color-lightgray">Trending</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="wd-link-font-size nav-link wd-color-lightgray">COVID-19</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="wd-link-font-size nav-link wd-color-lightgray">News</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="wd-link-font-size nav-link wd-color-lightgray">Sports</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="wd-link-font-size nav-link wd-color-lightgray">Entertainment</a>
                </li>
                      <!-- tabs -->
           </ul>
        </div>
        <div>
                <img src="../ford-f-150-raptor.jpg" class="col-12">
        </div>
           <!-- image with overlaid text -->
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;
