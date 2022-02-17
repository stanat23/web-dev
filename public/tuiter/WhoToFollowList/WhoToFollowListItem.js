const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item list-inline text-white bg-black">
            <div class=wd-float-left>
                    <img src=${who.avatarIcon} class="rounded-circle wd-follow-suggestion-icon-size">
                </div>
                <div class="list-inline-item ms-3">
                    <div class="fw-bold">${who.userName} <i class="fas fa-check-circle"></i></div>
                    <div class="wd-color-gray">@${who.handle}</div>
                </div>
                <div class="list-inline-item wd-float-right align-middle mt-1">
                    <button class="btn btn-primary rounded-pill">
                        Follow
                    </button>
                </div>
        </li>`);
}
export default WhoToFollowListItem;