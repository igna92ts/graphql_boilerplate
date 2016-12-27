import {
    GraphQLNonNull,
    GraphQLID,
    GraphQLBoolean,
    GraphQLString
} from 'graphql'

import TranslationModel from '../../../models/translation_model';

export default {
    description:'Add a new translation with missing labels',
    type:GraphQLBoolean,
    args:{
        lang:{
            name:'lang',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    async resolve(root,params,ctx,options){
        const translationModel = new TranslationModel({lang:params.lang});
        const newTranslationModel = await translationModel.save();
        
        if(!newTranslationModel)
            throw new Error('Error creating new translation')
            
        return true;
    } 
}