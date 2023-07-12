import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import SequelizeMatch from '../database/models/SequelizeMatch';
import mock from './mock/match.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Leaderboard Tests', () => {
  afterEach(()=>{
    sinon.restore();
  })
  it('return all matches', async () => {
    sinon.stub(SequelizeMatch, 'findAll').resolves(mock.finishedMatches as any)
    const { status } = await chai.request(app).get('/leaderboard');
    expect(status).to.be.equal(200);
  });
  it('return home matches', async () => {
    sinon.stub(SequelizeMatch, 'findAll').resolves(mock.finishedMatches as any)
    const { status } = await chai.request(app).get('/leaderboard/home');
    expect(status).to.be.equal(200);
  });
  it('return away matches', async () => {
    sinon.stub(SequelizeMatch, 'findAll').resolves(mock.finishedMatches as any)
    const { status } = await chai.request(app).get('/leaderboard/away');
    expect(status).to.be.equal(200);
  });
});