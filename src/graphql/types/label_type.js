import {
    GraphQLString,
    GraphQLNonNull,
    GraphQLID,
    GraphQLObjectType,
    GraphQLList
} from 'graphql';

export default new GraphQLObjectType({
    name:'Label',
    description:"key value pair for label list",
    fields:{
        label_id:{ 
            type: new GraphQLNonNull(GraphQLID)
        },
        value: {
            type: GraphQLString
        }
    }
});