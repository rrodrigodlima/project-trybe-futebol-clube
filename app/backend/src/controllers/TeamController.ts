import { Request, Response } from 'express';
import { ITeamService } from '../interfaces/Team';
import TeamService from '../services/TeamService';

export default class TeamController {
  constructor(private teamService: ITeamService = new TeamService()) { }

  public async getAll(_req: Request, res: Response): Promise<Response | undefined> {
    const { status, data } = await this.teamService.getAll();
    if (status !== 'SUCCESSFUL') return res.status(400).json(status);
    return res.status(200).json(data);
  }

  public async getById(req: Request, res: Response): Promise<Response | undefined> {
    const { id } = req.params;
    const { data } = await this.teamService.getById(Number(id));
    return res.status(200).json(data);
  }
}
