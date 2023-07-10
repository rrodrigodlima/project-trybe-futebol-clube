import { ServiceResponse } from '../ServiceResponse';
import ITeam from './ITeam';

export default interface ITeamService {
  getAll(): Promise<ServiceResponse<ITeam[]>>;
  getById(id: ITeam['id']): Promise<ServiceResponse<ITeam | null>>;
}
