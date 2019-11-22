import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {visibilityReducer} from '../redux/reducers/visibilityReducer'
import {todoReducer} from '../redux/reducers/todoReducer'
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = {
    visibility:visibilityReducer,
    todos:todoReducer
};

export const store = createStore(combineReducers(reducers), composeEnhancers(applyMiddleware(thunk)));