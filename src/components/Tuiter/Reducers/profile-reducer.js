import profile from "../Data/profile.json";

const profileReducer = (state = profile, action) => {
    switch (action.type) {
        case 'edit-profile':
            return state.map(user => {
                user.firstName = action.firstName;
                user.lastName = action.lastName;
                user.bio = action.bio;
                return user;
            });
        default:
            return state;
    }

}

export default profileReducer;