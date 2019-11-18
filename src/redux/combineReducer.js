import {combineReducers, createStore, applyMiddleware} from 'redux';
import {visibilityReducer} from '../redux/reducers/visibilityReducer'
import {todoReducer} from '../redux/reducers/todoReducer'
import thunk from 'redux-thunk';

const reducers = {
    visibility:visibilityReducer,
    todos:todoReducer
};

export const store = createStore(combineReducers(reducers), applyMiddleware(thunk));