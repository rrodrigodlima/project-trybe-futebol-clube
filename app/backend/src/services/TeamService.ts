import TeamModel from '../models/TeamModel';
import { Team, ITeamModel, ITeamService } from '../interfaces/Team';
import { ServiceResponse } from '../interfaces/ServiceResponse';

export default class TeamService implements ITeamService {
  constructor(private teamModel: ITeamModel = new TeamModel()) { }

  public async getAll(): Promise<ServiceResponse<Team[]>> {
    const teams = await this.teamModel.findAll();
    return { status: 'SUCCESSFUL', data: teams };
  }

  public async getById(id: Team['id']): Promise<ServiceResponse<Team | null>> {
    const team = await this.teamModel.findById(id);
    return { status: 'SUCCESSFUL', data: team };
  }
}
