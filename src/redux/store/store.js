import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import allReducers from '../reducers/index.js';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    allReducers,
    initialState,
    applyMiddleware(...middleware)
);

export default store;



//import { createStore, combineReducers } from 'redux';
//import { reducer as reduxFormReducer } from 'redux-form';
//
//const reducer = combineReducers({
//  form: reduxFormReducer,
//});
//const store = (window.devToolsExtension
//  ? window.devToolsExtension()(createStore)
//  : createStore)(reducer);
//
//export default store;


//import {combineReducers, createStore, applyMiddleware} from 'redux';
//import {reducer as reduxFormReducer} from 'redux-form';
//
//const rootReducer = combineReducers(()=>
//[],{form: reduxFormReducer}, applyMiddleware())
//
// const store = createStore(rootReducer);
// export default store;