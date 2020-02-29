import { 
    ADD_ADDITIONAL_PRICE, 
    SUB_ADDITIONAL_PRICE 
} from './../actions';

const initialState = {
    additionalPrice: 0,
};

export const additionalPriceReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ADDITIONAL_PRICE:
            return {
                ...state,
                additionalPrice: state.additionalPrice + action.payload
            }
        case SUB_ADDITIONAL_PRICE:
            return {
                ...state,
                additionalPrice: state.additionalPrice - action.payload
            }
        default:
            return state
    }
}