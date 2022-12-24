import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';

chai.use(chaiHttp);
const { expect } = chai;

describe('/api/users/ test integration', () => {
  it('Should return status 200 in success context', async () => {
    const { status, body } = await chai.request(app).get('/api/users');

    expect(status).to.be.equal(200);
    expect(body).to.be.an('object');
  });
});
