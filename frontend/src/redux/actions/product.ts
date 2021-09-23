export const PIM_PRODUCT_FETCHING = 'PIM_PRODUCT_FETCHING';
export const PIM_PRODUCT_FETCHING_SUCCESS = 'PIM_PRODUCT_FETCHING_SUCCESS';
export const PIM_PRODUCT_FETCHING_ERROR = 'PIM_PRODUCT_FETCHING_ERROR';

export const pimProductFetching = () => ({
    type: PIM_PRODUCT_FETCHING,
});

export const pimProductFetchingSuccess = (payload: any) => ({
    type: PIM_PRODUCT_FETCHING_SUCCESS,
    payload,
});

export const pimProductFetchingError = (error: any) => ({
    type: PIM_PRODUCT_FETCHING_ERROR,
    error,
});
