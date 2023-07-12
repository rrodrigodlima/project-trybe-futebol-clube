import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import SequelizeUser from '../database/models/SequelizeUser';

chai.use(chaiHttp);

const { expect } = chai;

describe('Login Tests', () => {
  afterEach(()=>{
    sinon.restore();
  })
  it('return error if the password is missing', async () => {
    const { status, body } = (await chai.request(app).post('/login').send({ email: 'rodrigolima@trybe.com' }));
    expect(status).to.be.equal(400);
    expect(body).to.be.deep.equal({ message: 'All fields must be filled' });
  });
  it('return error if email field is missing', async () => {
    const { status, body } = (await chai.request(app).post('/login').send({ password: 'xxxxxxxxx' }));
    expect(status).to.be.equal(400);
    expect(body).to.be.deep.equal({ message: 'All fields must be filled' });
  });
  it('return error if email field is invalid', async () => {
    const { status, body } = (await chai.request(app).post('/login').send({
      email: 'invalid',
      password: 'xxxxxxxxxxx',
    }));
    expect(status).to.be.equal(401);
    expect(body).to.be.deep.equal({ message: 'Invalid email or password' });
  });
  it('return error if password field is invalid', async () => {
    const { status, body } = (await chai.request(app).post('/login').send({
      email: 'rodrigolima@trybe.com',
      password: 'xxx',
    }));
    expect(status).to.be.equal(401);
    expect(body).to.be.deep.equal({ message: 'Invalid email or password' });
  });
  it('return token if have success', async () => {
    const mock = SequelizeUser.build({
      id: 1,
      username: 'Rodrigo',
      role: 'user',
      email: 'rodrigo@trybe.com',
      password: '123456789',
    });
    sinon.stub(SequelizeUser, 'findOne').resolves(mock);
    const { status, body } = (await chai.request(app).post('/login').send({
      email: 'rodrigo@trybe.com',
      password: '123456789',
    }));
    expect(status).to.be.equal(200);
    expect(body).not.to.be.undefined;
  });
});