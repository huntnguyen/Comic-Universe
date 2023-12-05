import React, {useReducer} from "react";
import createDataContext from "./createDataContext";

const listReducer = (state, action) => {
    switch(action.type) {
        case 'add_list':
            return [...state, {
                id: Math.floor(Math.random() * 9999), 
                title: action.payload.title,
                content: action.payload.content
            }
        ]
        case 'delete_list':
            return state.filter((listPost) => {
                return listPost.id !== action.payload
            });
            case 'edit_list':
                return state.map((listPost) => {
                    if (listPost.id === action.payload.id) {
                        return action.payload;
                    }
                    else {
                        return listPost;
                    }
                })
        default:
            return state;
    }
}

    const addList = (dispatch) => {
        return (title, content, callback) => {
            dispatch({type: 'add_list', payload: {title: title, content: content}})
            callback();
        }
    }

    const deleteList = (dispatch) => {
        return (id) => {
            dispatch({type: 'delete_list', payload: id})
        }
    }

    const editList = (dispatch) => {
        return (id, title, content, callback) => {
            dispatch({type: 'edit_list', payload: {id: id, title: title, content: content}})
            callback();

        }
    }

    export const {Context, Provider} = createDataContext(listReducer, {addList: addList, deleteList: deleteList, editList: editList}, 
        [{title: "Batman List", content: "Batman: Year One \n Batman and Robin \n The Dark Knight Returns" , id: 1}]
        );
