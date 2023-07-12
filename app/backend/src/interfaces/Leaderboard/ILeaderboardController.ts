import { Request, Response } from 'express';

export default interface ILeaderboardService {
  getHome(_req: Request, res: Response): Promise<Response | undefined>;
  getAway(_req: Request, res: Response): Promise<Response | undefined>;
  getAll(_req: Request, res: Response): Promise<Response | undefined>;
}
