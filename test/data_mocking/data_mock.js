import mongoose from 'mongoose';
import mockgoose from 'mockgoose';

const db = new mongoose.Mongoose();

before((done) => {
    mockgoose(db).then(() => {
        db.connect('mongodb://localhost:27019/test', (err) => {
            done(err);
        });
    });
});

export default mockgoose;