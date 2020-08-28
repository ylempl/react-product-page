export const REQUEST_FETCHING = 'REQUEST_FETCHING';
export const REQUEST_FETCHING_SUCCESS = 'REQUEST_FETCHING_SUCCESS';
export const REQUEST_FETCHING_ERROR = 'REQUEST_FETCHING_ERROR';

export const requestFetching = () => ({
    type: REQUEST_FETCHING,
});

export const requestFetchingSuccess = (payload: any) => ({
    type: REQUEST_FETCHING_SUCCESS,
    payload
});

export const requestFetchingError = (error: any) => ({
    type: REQUEST_FETCHING_ERROR,
    error
});
