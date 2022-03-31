import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../../../actions/tuits-actions";
import StatusBar from "./StatusBar";

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
    return(
        <li className="text-white row">
            <div>
                {tuit.tuit}
            </div>
        </li>);
}
export default TuitListItem;