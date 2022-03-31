import React, {useEffect, useState} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import {createTuit, deleteTuit, findAllTuits, updateTuit}
    from "../../../actions/tuits-actions";
import TuitListItem from "./TuitListItem";

const TuitList = () => {
    const tuits = useSelector(
        state => state.tuits);
    const dispatch = useDispatch();
    useEffect(() =>
            findAllTuits(dispatch),
        []);
    const [newTuit, setNewTuit] =
        useState({tuit: 'New tuit', likes: 0, dislikes: 0});
    return (
        <>
            <button onClick={() =>
                createTuit(dispatch, newTuit)}
                    className="btn btn-primary float-end">
                Tuit
            </button>
            <textarea className="form-control w-75"
                      onChange={(e) =>
                          setNewTuit({...newTuit,
                              tuit: e.target.value})}></textarea>
            <ul className="list-group">
                {
                    tuits.map && tuits.map(tuit =>
                        <div className="list-group-item wd-border-thin wd-bg-border-color wd-bg-color-black">
                            <i className="fas fa-times-circle float-end"
                               onClick={() => deleteTuit(
                                   dispatch, tuit)}/>
                            <TuitListItem key={tuit._id}
                                          tuit={tuit}/>
                            <div className="row">
                                <div className="col">
                                    Likes: {tuit.likes}
                                    <i onClick={() =>
                                        updateTuit(dispatch, {
                                            ...tuit,
                                            likes: tuit.likes + 1
                                        })
                                    }
                                       className="far fa-thumbs-up ms-2"/>
                                </div>
                                <div className="col">
                                    Dislikes: {tuit.dislikes}
                                    <i onClick={() =>
                                        updateTuit(dispatch, {
                                            ...tuit,
                                            dislikes: tuit.dislikes + 1
                                        })
                                    }
                                       className="far fa-thumbs-down ms-2"/>
                                </div>
                            </div>
                        </div>)
                }
            </ul>
        </>
    );
}

export default TuitList;