import { SetUsername } from "./../actions";

interface UserState {
  username: string
}

const initialState = {
  user: {}
}

export function user(state: UserState, action: ) {
  switch(action.type) {
    case SET_USERNAME:
      return { ...state, username: state.username };
    default: 
      return state;
  }
}