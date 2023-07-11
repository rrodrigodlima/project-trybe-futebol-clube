import { Team, ITeamModel } from '../interfaces/Team';
import SequelizeTeam from '../database/models/SequelizeTeam';

export default class TeamModel implements ITeamModel {
  private model = SequelizeTeam;

  public async findAll(): Promise<Team[]> {
    const teams = await this.model.findAll();
    return teams.map(({ id, teamName }) => ({ id, teamName }));
  }

  public async findById(id: Team['id']): Promise<Team | null> {
    const team = await this.model.findByPk(id);
    return team ? { id: team.id, teamName: team.teamName } : null;
  }
}
