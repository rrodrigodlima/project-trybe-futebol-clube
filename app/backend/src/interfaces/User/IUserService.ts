import { ServiceResponse } from '../ServiceResponse';
import { User } from './User';
import { Token } from '../Token';

export default interface IUserService {
  login(user: User): Promise<ServiceResponse<Token>>;
}
