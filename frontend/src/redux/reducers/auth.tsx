type ActionType = {
    type: string;
    payload?: any;
    error?: Record<string, unknown>;
};

const initialState = {
    aadResponse: null
};

function auth(state = initialState, action: ActionType) {
    switch (action.type) {
        case 'AAD_LOGIN_SUCCESS':
            return { ...state, aadResponse: action.payload };
        case 'AAD_LOGOUT_SUCCESS':
            return { ...state, aadResponse: null };
        default:
            return state;
    }
}

export default auth;
