import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import SequelizeMatch from '../database/models/SequelizeMatch';

import mock from './mock/match.mock';

chai.use(chaiHttp);

const { expect } = chai;

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjU0NTI3MTg5fQ.XS_9AA82iNoiVaASi0NtJpqOQ_gHSHhxrpIdigiT-fc";

describe('Match Tests', () => {
  afterEach(()=>{
    sinon.restore();
  })
  it('return all matches', async () => {
    sinon.stub(SequelizeMatch, 'findAll').resolves(mock.matchesData as any)
    const { status, body } = await chai.request(app).get('/matches');
    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal(mock.matches);
  });
  it('returns all matches in progress', async () => {
    sinon.stub(SequelizeMatch, 'findAll').resolves([mock.matchesData[0]] as any)
    const { status, body } = await chai.request(app).get('/matches?inProgress=true');
    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal([mock.matches[0]]);
  });
  it('finish the match', async () => {
    sinon.stub(SequelizeMatch, 'update').resolves([1] as any)
    const { status, body } = await chai.request(app)
      .patch('/matches/1/finish')
      .set({ Authorization: token });
    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal({ message: 'Finished' });
  });
  it('update', async () => {
    sinon.stub(SequelizeMatch, 'update').resolves([1] as any)
    const { status, body } = await chai.request(app)
      .patch('/matches/1')
      .set({ Authorization: token })
      .send({ "homeTeamGoals": 4, "awayTeamGoals": 2 });
    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal({ message: 'Updated' });
  });
  it('create new match', async () => {
    const newMatch = SequelizeMatch.build(mock.newMatch);
    sinon.stub(SequelizeMatch, 'create').resolves(newMatch)
    const { status, body } = await chai.request(app)
      .post('/matches')
      .set({ Authorization: token })
      .send(mock.newMatch);
    expect(status).to.be.equal(201);
    expect(body).to.be.deep.equal(mock.newMatch);
  });
});