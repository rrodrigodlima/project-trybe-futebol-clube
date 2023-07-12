import { Create, Match, IMatchModel, IMatchService } from '../interfaces/Match';
import { MatchModel } from '../models';
import { ServiceResponse } from '../interfaces/ServiceResponse';

export default class MatchService implements IMatchService {
  constructor(private matchModel: IMatchModel = new MatchModel()) { }

  public async getAll(query: Partial<Match>): Promise<ServiceResponse<Match[]>> {
    const matches = await this.matchModel.findAll(query);
    return { status: 'SUCCESSFUL', data: matches };
  }

  public async update(
    id: number,
    value: Partial<Match>,
  ): Promise<ServiceResponse<{ message: string }>> {
    await this.matchModel.update(id, value);
    const message = value.inProgress !== undefined ? 'Finished' : 'Updated';
    return { status: 'SUCCESSFUL', data: { message } };
  }

  public async create(value: Omit<Create, 'inProgress'>): Promise<ServiceResponse<Match>> {
    const newMatch = { ...value, inProgress: false };
    const created = await this.matchModel.create(newMatch);
    return { status: 'SUCCESSFUL', data: created };
  }
}
