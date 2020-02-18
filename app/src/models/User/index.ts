export interface IUser {
  id: string;
  email: string;
}

export interface IUserSession {
  id: string;
  user: IUser;
}
