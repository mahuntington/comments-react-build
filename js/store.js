import { createStore } from 'redux'

let comments = function(state = [], action){
    switch(action.type){
        case 'ADD':
            return [...state, action.comment];
        default:
            return state
    }
}

let store = createStore(comments);

export default store;
