import * as jwt from 'jsonwebtoken';
import { ITokenService } from '../interfaces/Token';
import { User } from '../interfaces/User';

export default class TokenService implements ITokenService {
  private jwt = jwt;

  public async generateToken(user: User): Promise<string> {
    const token = this.jwt.sign(user, 'jwt_secret');
    return token;
  }

  public async verifyToken(token: string): Promise<User | null> {
    try {
      const user = <User> this.jwt.verify(token, 'jwt_secret');
      return user;
    } catch (error) {
      return null;
    }
  }
}
