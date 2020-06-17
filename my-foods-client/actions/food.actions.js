import{
    ADD_FOOD_ERROR,
    ADD_FOOD_LOADING,
    ADD_FOOD_SUCCESS,
    DELETE_FOOD_ERROR,
    DELETE_FOOD_LOADING,
    DELETE_FOOD_SUCCESS,
    EDIT_FOOD_ERROR,
    EDIT_FOOD_LOADING,
    EDIT_FOOD_SUCCESS,
    FETCH_FOODS_ERROR,
    FETCH_FOODS_LOADING,
    FETCH_FOODS_SUCCESS
} from './types';

import { foods } from '../data'

export const fetchFoodsSuccess = (data) => {
    return {
        type: FETCH_FOODS_SUCCESS,
        payload: data, 
    }
}

export const fetchFoods = () => {
    return (dispatch) => {
        dispatch(fetchFoodsSuccess(foods));
    } 
}