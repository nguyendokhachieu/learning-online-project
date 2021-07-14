import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import { courseReducer } from "./courses/reducer";

const rootReducer = combineReducers({
    courses: courseReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));