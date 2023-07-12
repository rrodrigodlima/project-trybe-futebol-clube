import { Request, Response } from 'express';
import { ILeaderboardController, ILeaderboardService } from '../interfaces/Leaderboard';
import { LeaderboardService } from '../services';

export default class LeaderboardController implements ILeaderboardController {
  constructor(private leaderboardService: ILeaderboardService = new LeaderboardService()) { }

  public async getHome(_req: Request, res: Response): Promise<Response | undefined> {
    const query = { inProgress: false };
    const { data } = await this.leaderboardService.get(query, true);
    return res.status(200).json(data);
  }

  public async getAway(_req: Request, res: Response): Promise<Response | undefined> {
    const query = { inProgress: false };
    const { data } = await this.leaderboardService.get(query, false);
    return res.status(200).json(data);
  }

  public async getAll(_req: Request, res: Response): Promise<Response | undefined> {
    const query = { inProgress: false };
    const { data } = await this.leaderboardService.getAll(query);
    return res.status(200).json(data);
  }
}
