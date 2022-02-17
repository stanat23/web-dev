const NavigationSidebar = (active) => {
    return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
                <a class="list-group-item ${active==='home' ? 'active' : ''}" href="../HomeScreen/home.html">
                    <i class="fas fa-home"></i>
                    <span class="d-none d-xl-inline-flex ps-2">Home</span></a>
                <a class="list-group-item ${active==='explore' ? 'active' : ''}" href="../ExploreScreen/explore.html">
                    <i class="fas fa-hashtag"></i>
                    <span class="d-none d-xl-inline-flex ps-2">Explore</span></a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-bell"></i>
                    <span class="d-none d-xl-inline-flex ps-2">Notifications</span></a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-envelope"></i>
                    <span class="d-none d-xl-inline-flex ps-2">Messages</span></a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-bookmark"></i>
                    <span class="d-none d-xl-inline-flex ps-2">Bookmarks</span></a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-list"></i>
                    <span class="d-none d-xl-inline-flex ps-2">Lists</span></a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-user"></i>
                    <span class="d-none d-xl-inline-flex ps-2">Profile</span></a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-ellipsis-h fa-xs"></i>
                    <span class="d-none d-xl-inline-flex ps-2">More</span></a>
            <!-- continue the rest of the list -->
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
