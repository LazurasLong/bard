import * as constants from './constants';
import { StoreState, UserState } from './types';

export interface SetUsername {
  type: constants.SET_USERNAME,
  user: UserState
}

export function setUsername(user: UserState): SetUsername {
  return { 
    type: constants.SET_USERNAME,
    user: {
      username: user.username,
      usernameExists: user.username.length > 0
    },
  }
}

export type UsernameAction = SetUsername;
