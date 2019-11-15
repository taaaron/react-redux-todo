import {combineReducers, createStore} from 'redux';
import {visibilityReducer} from '../redux/reducers/visibilityReducer'
import {todoReducer} from '../redux/reducers/todoReducer'

const reducers = {
visibility:visibilityReducer,
todos:todoReducer
};

export const store = createStore(combineReducers(reducers));