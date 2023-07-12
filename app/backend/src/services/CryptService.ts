import * as bcrypt from 'bcryptjs';
import ICrypt from '../interfaces/ICrypt';

export default class EncrypterService implements ICrypt {
  private bcrypt = bcrypt;

  async compare(password: string, hash: string): Promise<boolean> {
    const checkPassword = await this.bcrypt.compare(password, hash);
    return checkPassword;
  }
}
