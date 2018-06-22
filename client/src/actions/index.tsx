export interface SetUsername {
  type: string,
  username: string
}

export type UsernameAction = SetUsername;

export function setUsername(username: string): SetUsername {
  return { 
    type: 'SET_USERNAME',
    username 
  }
}