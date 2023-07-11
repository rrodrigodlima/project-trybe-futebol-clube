import { ServiceResponse } from '../ServiceResponse';
import { Team } from './Team';

export default interface ITeamService {
  getAll(): Promise<ServiceResponse<Team[]>>;
  getById(id: Team['id']): Promise<ServiceResponse<Team | null>>;
}
