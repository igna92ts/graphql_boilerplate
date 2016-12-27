import {
    GraphQLList,
    GraphQLString
} from 'graphql';

import sampleType from "../../types/sample_type";
import sampleModel from "../../../models/sample_model";
import getProjection from "../../get_projection";

export default {
    description:"it returns multiple samples, can be queried by any field",
    type: new GraphQLList(sampleType),
    args:{
        title:{
            name:'title',
            type:GraphQLString
        }
    },
    resolve(root,params,ctx,options){
        const projection = getProjection(options.fieldASTs[0]);
        return sampleModel
                .find(params)
                .select(projection)
                .exec();
    }
}