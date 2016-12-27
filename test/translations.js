import { expect, request } from 'chai';
import test from './tester';
import TranslationModel from './data_mocking/translation_data';


describe('translations', ()  => {
   it('should return a single translation given a language ID', (done) => {
       const langId = 'ES'
         test(`{ 
            translation(lang:"${langId}"){
               lang
               labels{
                  label_id,
                  value
               }
           }
           
         }`, (err, res) => {
            const data = res.body.data;
            console.log(res.body)
            expect( data.translation.lang ).to.equal('ES');
            expect( data.translation.labels.length ).to.equal(1);
            
            done();
         });
   });
});