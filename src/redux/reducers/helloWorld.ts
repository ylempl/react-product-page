import * as actions from '../actions/helloWorld'

type ActionType = {
    type: string;
    payload?: any;
    error?: { message: string } | {};
};

const initialState = {
    isFetching: false,
    data: [],
    error: {}
};

function helloWorld (state = initialState, action: ActionType) {
    switch (action.type) {
        case actions.REQUEST_FETCHING:
            return {
                ...state,
                isFetching: true
            };

        case actions.REQUEST_FETCHING_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload
            };

        case actions.REQUEST_FETCHING_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.error
            };

        default:
            return { ...state };
    }
}

export default helloWorld;
