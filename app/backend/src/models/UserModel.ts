import { User, IUserModel } from '../interfaces/User';
import SequelizeUser from '../database/models/SequelizeUser';

export default class UserModel implements IUserModel {
  private model = SequelizeUser;

  public async findByEmail(email: string): Promise<User | null> {
    const user = await this.model.findOne({ where: { email } });
    return (
      user
        ? ({
          id: user.id,
          username: user.username,
          role: user.role,
          email: user.email,
          password: user.password,
        })
        : null);
  }
}
