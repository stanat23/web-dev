import profile from "../Data/profile.json";

const profileReducer = (state = profile, action) => {
    switch (action.type) {
        case 'edit-userName':
            return state.map(user => {
                user.firstName = action.user.firstName;
                return user;
            });
        case 'edit-bio':
            return state.map(user => {
                user.bio = action.user.bio;
                return user;
            });
        default:
            return state;
    }

}

export default profileReducer;