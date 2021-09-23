import * as actions from '../actions/product';

type ActionType = {
    type: string;
    payload?: any;
    error?: Record<string, unknown>;
};

const initialState = {
    isFetching: false,
    data: [],
    error: {},
};

function drupalProduct(state = initialState, action: ActionType) {
    switch (action.type) {
        case actions.DRUPAL_PRODUCT_FETCHING:
            return {
                ...state,
                isFetching: true,
            };

        case actions.DRUPAL_PRODUCT_FETCHING_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload,
            };

        case actions.DRUPAL_PRODUCT_FETCHING_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            };

        default:
            return { ...state };
    }
}

export default drupalProduct;
