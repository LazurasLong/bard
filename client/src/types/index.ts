export default interface ThemeInterface {
  primaryColor: string;
  primaryColorInverted: string;
}

export interface UserState {
  username: string,
  usernameExists: boolean,
}

export interface StoreState {
  user: UserState,
}