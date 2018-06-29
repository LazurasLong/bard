import { UsernameAction } from '../actions';
import { StoreState, UserState } from '../types';
import { SET_USERNAME } from '../constants';

const initialState: StoreState = {
  user: {
    username: '',
    usernameExists: false,
  }
};

export default function username(state: StoreState = initialState, action: UsernameAction): StoreState {
  switch(action.type) {
    case SET_USERNAME:
      return { 
        ...state, 
        user: {
          username: action.user.username,
          usernameExists: action.user.username.length > 0
        }
      };
    default: 
      return state;
  }
}