import tuits from "../Data/tuits.json";

const tuitsReducer = (state = tuits, action) => {
    switch (action.type) {
        case 'like-tuit':
            return state.map(tuit => {
                if(tuit._id === action.tuit._id) {
                    if(tuit.liked === true) {
                        tuit.liked = false;
                        tuit.likes--;
                    } else {
                        tuit.liked = true;
                        tuit.likes++;
                    }
                    return tuit;
                } else {
                    return tuit;
                }
            });
        case 'create-tuit':
            const newTuit = {
                tuit: action.tuit,
                _id: (new Date()).getTime() + '',
                userName: "ReactJS",
                tuitImage: '',
                linkTitle: '',
                linkContent: '',
                retuits: 111,
                likes: 222,
                comments: 333,
                shares: 444
            }
            return [
                newTuit,
                ...state,
            ];
        case 'delete-tuit':
            return state.filter(
                tuit => tuit._id !== action.tuit._id);
        default:
            return tuits
    }
}

export default tuitsReducer;