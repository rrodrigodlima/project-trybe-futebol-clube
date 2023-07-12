import { Request, Response } from 'express';
import { IMatchController, IMatchService } from '../interfaces/Match';
import { MatchService } from '../services';

export default class MatchController implements IMatchController {
  constructor(private matchService: IMatchService = new MatchService()) { }

  public async getAll(req: Request, res: Response): Promise<Response | undefined> {
    const { inProgress } = req.query;
    const query = inProgress ? { inProgress: inProgress === 'true' } : {};
    const { data } = await this.matchService.getAll(query);
    return res.status(200).json(data);
  }

  public async finish(req: Request, res: Response): Promise<Response | undefined> {
    const { id } = req.params;
    const { data } = await this.matchService.update(Number(id), { inProgress: false });
    return res.status(200).json(data);
  }

  public async update(req: Request, res: Response): Promise<Response | undefined> {
    const { params: { id }, body } = req;
    const { data } = await this.matchService.update(Number(id), body);
    return res.status(200).json(data);
  }

  public async create(req: Request, res: Response): Promise<Response | undefined> {
    const { body } = req;
    const { data } = await this.matchService.create(body);
    return res.status(201).json(data);
  }
}
