import {
    GraphQLNonNull,
    GraphQLBoolean
} from 'graphql'

import SampleInputType from '../../types/sample_input_type'
import SampleModel from '../../../models/sample_model'

export default {
    description:"Adds a single sample given the title, the _id is automatic from mongoose",
    type: GraphQLBoolean,
    args:{
        data:{
            name:'data',
            type: new GraphQLNonNull(SampleInputType)
        }
    },
    async resolve(root,params,ctx,options){
        const sampleModel = new SampleModel(params.data);
        const newSample = await sampleModel.save();
        
        
        if (!newSample) {
          throw new Error('Error adding new blog post');
        }
        return true;
    }
}