import mockgoose from './data_mock';
import TranslationModel from '../../src/models/translation_model';

TranslationModel.create([{
    lang:"US",
    labels:[{
        label_id:'GREETING',
        value:'Hello'   
    }]
}, {
    lang:"ES",
    labels:[{
        label_id:'GREETING',
        value:'Hola'   
    }]
}]);

export default TranslationModel;