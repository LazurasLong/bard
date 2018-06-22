import * as constants from '../constants';

export interface SetUsername {
  type: constants.SET_USERNAME,
  username: string
}

export type UsernameAction = SetUsername;

export function setUsername(username: string): SetUsername {
  return { 
    type: constants.SET_USERNAME,
    username 
  }
}