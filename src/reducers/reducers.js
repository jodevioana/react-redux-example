import { combineReducers } from 'redux';
import {SUCCESS_COUNTRIES, SUCCESS_SELECTED_COUNTRY} from "../types/types";

const defaultState = {
    countries: null,
    selectedCountry: null
};

const countryReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SUCCESS_COUNTRIES:
            return { ...state, countries: action.payload };
        case SUCCESS_SELECTED_COUNTRY:
            return { ...state, selectedCountry: action.payload};
        default:
            return state;
    }
};


export default combineReducers({countryReducer});

