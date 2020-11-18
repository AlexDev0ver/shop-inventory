// @flow
import appReducer from '../redux/reducer';

let state: any = appReducer();

export type AppStateType = typeof state;
