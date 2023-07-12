import { ServiceResponse } from '../ServiceResponse';
import { TeamData } from './TeamData';
import { Query } from '../Query';

export default interface ILeaderboardService {
  get(query: Query, home: boolean): Promise<ServiceResponse<TeamData[]>>;
  getAll(query: Query): Promise<ServiceResponse<TeamData[]>>;
}
