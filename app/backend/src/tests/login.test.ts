import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';

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
});