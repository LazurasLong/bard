import { UsernameAction } from '../actions/index';
import { StoreState } from '../types/index';
import { SET_USERNAME } from '../constants/index';

const initialState: StoreState = {
  username: ""
}

export function username(state: StoreState = initialState, action: UsernameAction): StoreState {
  switch(action.type) {
    case SET_USERNAME:
      return { ...state, username: state.username };
    default: 
      return state;
  }
}