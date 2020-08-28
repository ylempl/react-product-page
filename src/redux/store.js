import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createPromise } from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const middlewares = [createPromise(), thunk];

if (process.env.NODE_ENV === 'development') {
    const loggerMiddleware = createLogger();

    middlewares.push(loggerMiddleware);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(...middlewares);

export default createStore(
    rootReducer,
    composeEnhancers(middleware)
);
