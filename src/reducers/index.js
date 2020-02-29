import { combineReducers } from 'redux';
import { additionalPriceReducer } from './additionalPriceReducer';
import {carReducer} from './carReducer';
import { featuresReducer } from './featuresReducer';

export const rootReducer = combineReducers({
    car: carReducer,
    features: featuresReducer,
    additionalPrice: additionalPriceReducer
})