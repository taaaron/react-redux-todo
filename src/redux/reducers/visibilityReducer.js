
import {TOGGLE_OPTIONS} from "../types";

export const visibilityReducer =(state = TOGGLE_OPTIONS.ALL, action)=>{
    switch (action.type){
        case TOGGLE_OPTIONS.ALL:
        case TOGGLE_OPTIONS.DONE:
        case TOGGLE_OPTIONS.TODO:
            return action.type;
        default:
            return state;

    }
}

