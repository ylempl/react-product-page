import * as actions from '../actions/album'

type ActionType = {
    type: string;
    payload?: any;
    error?: { message: string } | {};
};

const initialState = {
    isFetching: false,
    album: [],
    error: {}
};

function album (state = initialState, action: ActionType) {
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

export default album;
