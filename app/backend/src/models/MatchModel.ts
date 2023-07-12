import { Create, Match, IMatchModel } from '../interfaces/Match';
import SequelizeMatch from '../database/models/SequelizeMatch';
import SequelizeTeam from '../database/models/SequelizeTeam';
import { Query } from '../interfaces/Query';

export default class MatchModel implements IMatchModel {
  private model = SequelizeMatch;

  public async findAll(query: Query): Promise<Required<Match[]>> {
    const matches = await this.model.findAll({
      include: [
        { model: SequelizeTeam, as: 'homeTeam', attributes: ['teamName'] },
        { model: SequelizeTeam, as: 'awayTeam', attributes: ['teamName'] },
      ],
      where: query,
    });
    return matches.map(({ dataValues }) => ({ ...dataValues }));
  }

  public async update(id: number, value: Query): Promise<[affectedCount: number]> {
    const updated = await this.model.update(value, { where: { id } });
    return updated;
  }

  public async create(value: Create): Promise<Match> {
    const { dataValues } = await this.model.create(value);
    return dataValues;
  }
}
