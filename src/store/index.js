import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import { courseReducer } from "./courses/reducer";
import { modalsReducer } from './modals/reducer';

const rootReducer = combineReducers({
    courses: courseReducer,
    modals: modalsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));