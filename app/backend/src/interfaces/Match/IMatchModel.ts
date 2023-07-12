import { Match } from './Match';
import { Create } from './Create';

export default interface IMatchModel {
  findAll(query: Partial<Match>): Promise<Match[]>;
  update(id: number, value: Partial<Match>): Promise<[affectedCount: number]>;
  create(value: Create): Promise<Match>;
}
