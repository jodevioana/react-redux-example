import {SUCCESS_COUNTRIES, SUCCESS_SELECTED_COUNTRY} from "../types/types";

export const updateCountries = (countries) => ({
    type: SUCCESS_COUNTRIES,
    payload: countries
});

export const updateCountryInfo = (countryInfo) => ({
    type: SUCCESS_SELECTED_COUNTRY,
    payload: countryInfo
});