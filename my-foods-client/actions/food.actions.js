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

import axios from 'axios';

const baseurl = 'http://localhost:8000/';


export const fetchFoodsSuccess = (data) => {
    return {
        type: FETCH_FOODS_SUCCESS,
        payload: data, 
    };
};

export const fetchFoodsLoading = (data) => {
    return {
        type: FETCH_FOODS_LOADING,
        payload: data,
    };
};

export const fetchFoodsError = (data) => {
    debugger;
    return {
        type: FETCH_FOODS_ERROR,
        payload: data, 
    };
};


//invoking map on the data array
//for each item making sure that the attribute name for each item object is lower case
//then return a new array whcih is returned from the map method invoked on data
const normalizeResponse = (data) => {
    const arr = data.map(item => {
        const keys = Object.keys(item);

        keys.forEach (k => {
            item[k.toLowerCase()] = item[k];
            delete item[k]
        });
        return item;
    });

    return arr;
}

var instance = axios.create({
    baseURL: baseurl,
    timeout: 1000,
    headers: {'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFeHBpcmVzQXQiOjE1OTIxMDAxNzQsIklzc3VlZEF0IjoxNTkyMTAwMDU0LCJ1c2VySUQiOjZ9.EptIalKgOpNECKxjRGV-Ed1wW1HPEod7V33YnU3fTag'}
  });

export const fetchFoods = () => {
    let isLoading = true;
    return (dispatch) => {
        dispatch(fetchFoodsLoading(isLoading));
        //dispatch(fetchFoodsSuccess(foods));
        return axios.get('/login')
        .then(response => {
            const data = normalizeResponse(response.data);
            dispatch(fetchFoodsSuccess(data))
            isLoading = false;
            dispatch(fetchFoodsLoading(isLoading));
        }).catch(error => {
            //console.log(error);
            const errorPayload = {};
            errorPayload['message'] = error.response.data;
            errorPayload['status'] = error.response.status;
            dispatch(fetchFoodsError(errorPayload));
            
            isLoading = false;
            dispatch(fetchFoodsLoading(isLoading));
        }); 
    } 
}
