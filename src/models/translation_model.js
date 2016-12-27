import mongoose from 'mongoose';

const translationSchema = new mongoose.Schema({
    lang:{type: String , required: true,unique:true},
    labels:[{
        label_id:{type:String,required:true},
        value:{type:String,required:true}   
    }]
});

export default mongoose.model('Translation',translationSchema);