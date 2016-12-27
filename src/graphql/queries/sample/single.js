import {
    GraphQLList,
    GraphQLID,
    GraphQLNonNull
} from 'graphql'


import sampleType from '../../types/sample_type'
import sampleModel from '../../../models/sample_model'
import getProjection from '../../get_projection';

export default {
    description:'Gets a single sample given a mongo objectID',
    type: sampleType,
    args:{
        id:{
            name:'id',
            type:new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params,ctx,options){

        const projection = getProjection(options.fieldASTs[0]);
        console.log(projection);
        return sampleModel
            .findById(params.id)
            .select(projection)
            .exec();
    }
}