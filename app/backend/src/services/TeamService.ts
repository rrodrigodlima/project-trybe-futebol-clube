import TeamModel from '../models/TeamModel';
import { ITeam, ITeamModel, ITeamService } from '../interfaces/Team';
import { ServiceResponse } from '../interfaces/ServiceResponse';

export default class TeamService implements ITeamService {
  constructor(private teamModel: ITeamModel = new TeamModel()) { }

  public async getAll(): Promise<ServiceResponse<ITeam[]>> {
    const teams = await this.teamModel.findAll();
    return { status: 'SUCCESSFUL', data: teams };
  }

  public async getById(id: ITeam['id']): Promise<ServiceResponse<ITeam | null>> {
    const team = await this.teamModel.findById(id);
    return { status: 'SUCCESSFUL', data: team };
  }
}
