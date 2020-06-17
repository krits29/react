import { combineReducers } from 'redux';
import foods from './foodReducer';

export default combineReducers({
    foodsData: foods, 
})
