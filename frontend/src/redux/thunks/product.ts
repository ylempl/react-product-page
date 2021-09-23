import { Dispatch } from 'redux';
import {
    pimProductFetching,
    pimProductFetchingSuccess,
    pimProductFetchingError,
} from '../actions/product';
import apiRoutes from '../../consts/apiRoutes';

const fetchRequest = () => (dispatch: Dispatch) => {
    dispatch(pimProductFetching());

    fetch(apiRoutes.getAlbumData, {
        method: 'GET',
    })
        .then((res) => res.json())
        .then((res) => {
            dispatch(pimProductFetchingSuccess(res));
        })
        .catch((err) => dispatch(pimProductFetchingError(err)));
};

export const getProductThunk = () => (dispatch: any) => {
    dispatch(fetchRequest());
};
