import { ServiceResponse } from '../ServiceResponse';
import { Match } from './Match';
import { Create } from './Create';

export default interface IMatchService {
  getAll(query: Partial<Match>): Promise<ServiceResponse<Match[]>>;
  update(id: number, value: Partial<Match>): Promise<ServiceResponse<{ message: string }>>;
  create(value: Omit<Create, 'inProgress'>): Promise<ServiceResponse<Match>>;
}
