import { UsernameAction } from '../actions/index';
import { StoreState } from '../types/index';
import { SET_USERNAME } from '../constants/index';

const initialState = {
  user: {}
}

export function user(state: StoreState, action: UsernameAction): StoreState {
  switch(action.type) {
    case SET_USERNAME:
      return { ...state, user: { username: state.user.username }};
    default: 
      return state;
  }
}