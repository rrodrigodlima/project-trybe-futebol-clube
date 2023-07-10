import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import Team from '../database/models/SequelizeTeam';
import mock from './mock/team.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teams Tests', () => {
  afterEach(()=>{
    sinon.restore();
  })
  it('should return all teams', async () => {
    sinon.stub(Team, 'findAll').resolves(mock.teams as any)
    const { status, body } = await chai.request(app).get('/teams');
    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal(mock.teams);
  });
});