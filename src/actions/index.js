export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const ADD_ADDITIONAL_PRICE = 'ADD_ADDITIONAL_PRICE';
export const SUB_ADDITIONAL_PRICE = 'SUB_ADDITIONAL_PRICE';

export const addFearures = feature => {
    return {
        type: ADD_FEATURE,
        payload: feature,
    }
}

export const addAdditionalPrice = price => {
    return {
        type: ADD_ADDITIONAL_PRICE,
        payload: price,
    }
}

export const subAdditionalPrice = price => {
    return {
        type: SUB_ADDITIONAL_PRICE,
        payload: price
    }
}

export const removeFeature = feature => {
    return {
        type: REMOVE_FEATURE,
        payload: feature.id
    }
}

