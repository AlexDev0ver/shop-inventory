// @flow
import type { ActionType } from './ActionType';
import type { AppStateType } from './AppStateType';

type PromiseAction = Promise<ActionType>;
type Dispatch = (action: ActionType | ThunkAction | PromiseAction) => any;
type GetState = () => AppStateType;
type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;

export type ThunkType = ThunkAction;
