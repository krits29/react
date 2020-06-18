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
} from '../actions/types';

const defaultState = {
    foods: [],
    error: null,
    isLoading: false
};

const foodReducer = (state = defaultState, action) => {
    switch(action.type){
        case FETCH_FOODS_SUCCESS:
            return {...state, foods: action.payload};
        case FETCH_FOODS_LOADING:
            return {...state, isLoading: action.payload}
        case FETCH_FOODS_ERROR:
            return {...state, error: action.payload}
        default:
            return state;
    }
}

export default foodReducer