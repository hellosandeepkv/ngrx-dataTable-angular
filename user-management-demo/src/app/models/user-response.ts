import { UserDataInterface } from './user.model';

export interface UserResponse {
  total: number;
  users: UserDataInterface[];
}
