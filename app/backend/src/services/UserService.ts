import { ServiceResponse } from '../interfaces/ServiceResponse';
import { User, IUserService } from '../interfaces/User';
import { Token, ITokenService } from '../interfaces/Token';
import TokenService from './TokenService';

export default class UserService implements IUserService {
  constructor(private tokenService: ITokenService = new TokenService()) { }

  public async login(user: User): Promise<ServiceResponse<Token>> {
    const token = await this.tokenService.generateToken(user);
    return { status: 'SUCCESSFUL', data: { token } };
  }
}
