import {combineReducers} from 'redux';
import postReducer from './postReducer.js';
import product from './productReducers';

 export default combineReducers({
        product,
        post : postReducer
});

