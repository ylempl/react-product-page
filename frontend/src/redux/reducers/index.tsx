import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import auth from './auth';
import product from './product';
import drupalProduct from './drupalProduct';

const createRootReducer = (history: History) => combineReducers({
    auth,
    product,
    drupalProduct,
    router: connectRouter(history),
});

export default createRootReducer;
