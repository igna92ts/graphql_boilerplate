import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/server';

chai.use(chaiHttp);

const test = (query, cb) => {
    chai.request(server)
        .post('/')
        .send({ query })
        .end((res,err) => {
            cb(res,err);
        })
        
}


export default test;
