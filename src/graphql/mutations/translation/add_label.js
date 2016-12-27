import {
    GraphQLNonNull,
    GraphQLBoolean
} from 'graphql';

import LabelInputType from '../../types/label_input_type';
import TranslationModel from '../../../models/translation_model';


export default{
    description:'add or updates a label to a particular language, and creates placeholders for the others.',
    type: GraphQLBoolean,
    args:{
        data:{
            name:'data',
            type: new GraphQLNonNull(LabelInputType)
        }
    },
    async resolve(root,params,ctx,options){
        let translationModel = await TranslationModel.findOne({lang:params.data.lang});
       

        if(!translationModel){
           throw new Error('A translations object for that language doesnt exist')
        }
        
        let otherTranslationModels = await TranslationModel.find({lang:{$ne:params.data.lang}});
        
        const labels = translationModel.labels.filter((label) => label.label_id == params.data.label_id);
        if(labels.length == 0){
            translationModel.labels.push({
                label_id:params.data.label_id,
                value:params.data.value
            });
            const newTranslationModel = await translationModel.save();
            if(!newTranslationModel)
                throw new Error(`Error creating label for language ${params.data.lang}`)
            
            otherTranslationModels.map(async (translation) => {
                if(translation.labels.filter((label) => label.label_id == params.data.label_id).length == 0){
                    translation.labels.push({
                        label_id:params.data.label_id,
                        value:'<b>MISSING LABEL</b>'
                    })
                }
                let newTranslation = await translation.save();
                if(!newTranslation)
                    throw new Error(`Error creating label for language ${translation.lang}`)
                    
                return newTranslation;
            });
        }else{
            throw new Error('label already exists');
        }
        
        return true;
    }
};


