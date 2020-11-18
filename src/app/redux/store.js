// @flow
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import type { ActionType } from '../types/ActionType';

import appReducer from './reducer';

const store: any = createStore(appReducer, applyMiddleware(thunk));

export default store;
