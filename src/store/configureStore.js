import {createStore, applyMiddleware, compose} from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory';

import rootReducer from '../reducers';

export const history = createHistory();
export function configureStore(initialState) {

    const enhancers = [];
    const middleware = [
        thunk,
        routerMiddleware(history)
    ];

    const composedEnhancers = compose(
        applyMiddleware(...middleware),
        ...enhancers
    );

    const store = createStore(
        rootReducer,
        initialState,
        composedEnhancers
    );

    return store;
}