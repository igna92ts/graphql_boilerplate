import {
    GraphQLList,
    GraphQLNonNull,
    GraphQLID
} from 'graphql'

import translationType from '../../types/translation_type';
import translationModel from '../../../models/translation_model';
import getProjection from '../../get_projection';

export default{
    description:"returns multiple languages, mainly for listing avaliable translations",
    type: new GraphQLList(translationType),
    args:{},
    resolve(root,params,ctx,options){
        //const projection = getProjection(options.fieldASTs[0]);
        return translationModel
                .find()
                .select({lang:1})
                .exec();
    }
}