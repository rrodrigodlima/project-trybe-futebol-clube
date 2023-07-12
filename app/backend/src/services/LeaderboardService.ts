import { MatchModel } from '../models';
import { FMatch, ILeaderboardService, TeamData } from '../interfaces/Leaderboard';
import { IMatchModel } from '../interfaces/Match';
import { Query } from '../interfaces/Query';
import { ServiceResponse } from '../interfaces/ServiceResponse';
import { formatMatch, mergeMatch, sortMatch } from '../utils/format';

export default class LeaderboardService implements ILeaderboardService {
  constructor(private matchModel: IMatchModel = new MatchModel()) { }

  public async get(query: Query, home: boolean): Promise<ServiceResponse<TeamData[]>> {
    const matches = <FMatch[]> await this.matchModel.findAll(query);
    const format = formatMatch(matches, home);
    const result = sortMatch(format);
    return { status: 'SUCCESSFUL', data: result };
  }

  public async getAll(query: Query): Promise<ServiceResponse<TeamData[]>> {
    const matches = <FMatch[]> await this.matchModel.findAll(query);
    const formatHome = formatMatch(matches, true);
    const formatAway = formatMatch(matches, false);
    const merged = mergeMatch(formatHome, formatAway);
    const result = sortMatch(merged);
    return { status: 'SUCCESSFUL', data: result };
  }
}
