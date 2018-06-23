import { UsernameAction } from '../actions/index';
import { StoreState } from '../types/index';
import { SET_USERNAME } from '../constants/index';

const initialState: StoreState = {
  username: "",
  usernameExists: false,
}

export function username(state: StoreState = initialState, action: UsernameAction): StoreState {
  switch(action.type) {
    case SET_USERNAME:
      return { 
        ...state, 
        username: action.username,
        usernameExists: action.username.length > 0
      };
    default: 
      return state;
  }
}