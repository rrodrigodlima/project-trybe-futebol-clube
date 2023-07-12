import { User } from '../User/User';

export default interface ITokenService {
  generateToken(user: User): Promise<string>;
  verifyToken(token: string): Promise<User | null>;
}
