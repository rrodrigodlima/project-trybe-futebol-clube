import { Request, Response } from 'express';

export default interface IUserController {
  login(_req: Request, res: Response): Promise<Response>;
}
