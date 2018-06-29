import * as constants from './constants';
import { StoreState, UserState } from './types';

export interface SetUsername extends UserState {
  type: constants.SET_USERNAME,
  user: UserState
}

export type UsernameAction = SetUsername;

export function setUsername(user: UserState): SetUsername {
  return { 
    type: constants.SET_USERNAME,
    user: {
      username: user.username,
      usernameExists: user.username.length > 0
    },
  }
}