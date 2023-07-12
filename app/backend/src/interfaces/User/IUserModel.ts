import { User } from './User';

export default interface IUserModel {
  findByEmail(email: User['email']): Promise<User | null>;
}
