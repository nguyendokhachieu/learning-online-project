import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { courseReducer } from "./courses/reducer";
import { modalsReducer } from './modals/reducer';
import { usersReducer } from './users/reducer';
import { notesReducer } from './notes/reducer';
import { commentsReducer } from './comments/reducer';
import { notificationsReducer } from './notifications/reducer';
import { categoriesReducer } from './categories/reducer';

const rootReducer = combineReducers({
    courses: courseReducer,
    modals: modalsReducer,
    users: usersReducer,
    notes: notesReducer,
    comments: commentsReducer,
    notifications: notificationsReducer,
    categories: categoriesReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));