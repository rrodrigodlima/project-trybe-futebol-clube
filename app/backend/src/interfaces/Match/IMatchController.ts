import { Request, Response } from 'express';

export default interface IMatchController {
  getAll(req: Request, res: Response): Promise<Response | undefined>;
  finish(req: Request, res: Response): Promise<Response | undefined>;
  update(req: Request, res: Response): Promise<Response | undefined>;
  create(req: Request, res: Response): Promise<Response | undefined>;
}
