const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item text-white bg-black wd-border-thin wd-bg-border-color">
                <img src=${post.image} class="wd-post-item-pic"/>
                <div class="wd-post-item-title-text">
                    <div class="wd-color-gray">
                        ${post.topic}
                    </div>
                    <div class="wd-color-gray">
                        <span class="wd-font-color-white fw-bold">${post.userName} <i class="fas fa-check-circle"></i></span>
                        - ${post.time}
                    </div>
                    <div class="fw-bold">
                        ${post.title}
                    </div>
                    <div class="wd-color-gray ${post.tweets==='' ? 'wd-hide-tuits' : ''}">
                        ${post.tweets} Tuits
                    </div>
                </div>
        </li>`);
}
export default PostSummaryItem;