import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull
} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'LabelInput',
    fields:{
        lang:{
            type: new GraphQLNonNull(GraphQLID)
        },
        label_id:{ 
            type: new GraphQLNonNull(GraphQLString)
        },
        value: {
            type: new GraphQLNonNull(GraphQLString)
        }
    }
})