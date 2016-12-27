import mongoose from 'mongoose';

let sampleSchema = new mongoose.Schema({
    title:{type:String, required:true}
});

export default mongoose.model('Sample',sampleSchema);