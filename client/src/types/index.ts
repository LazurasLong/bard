export default interface ThemeInterface {
  primaryColor: string;
  primaryColorInverted: string;
}

export interface User {
  __typename?: string;
  id: string;
  username: string;
}

export interface Auth {
  __typename?: string;
  id?: string;
  email?: string;
  token?: string;
}

export interface Users {
  users: Array<User>;
}

export interface Adventure {
  id: string;
  title: string;
  number: number;
  campaign: string;
}

export interface Adventures {
  __typename?: string;
  adventures: Array<Adventure>;
}