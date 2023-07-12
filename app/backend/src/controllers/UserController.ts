import { Request, Response } from 'express';
import { IUserController } from '../interfaces/User';
import { UserService } from '../services';

export default class UserController implements IUserController {
  constructor(private userService: UserService = new UserService()) { }

  public async login(_req: Request, res: Response): Promise<Response> {
    const { user } = res.locals;
    const { data } = await this.userService.login(user);
    return res.status(200).json(data);
  }

  static role(_req: Request, res: Response): Response {
    const { user } = res.locals;
    const { data } = UserService.role(user);
    return res.status(200).json(data);
  }
}
