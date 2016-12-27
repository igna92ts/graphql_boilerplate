import {
    GraphQLList,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID
} from 'graphql';

import translationType from "../../types/translation_type";
import translationModel from "../../../models/translation_model"
import getProjection from "../../get_projection";

export default {
    description:"return a label list given a language id",
    type: translationType,
    args:{
        lang:{
            name:"lang",
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params,ctx,options){
        
        // return labelModel
        //         .find(params)
        //         .exec();
        const projection = getProjection(options.fieldASTs[0]);
        return translationModel
                .findOne(params)
                .select(projection)
                .exec();
    }
}