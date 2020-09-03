import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { History } from 'history';
import album from './album';

const createRootReducer = (history: History) => combineReducers({
    album,
    router: connectRouter(history),
})

export default createRootReducer;