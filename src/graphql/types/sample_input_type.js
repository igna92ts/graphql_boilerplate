import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID
} from 'graphql';

export default new GraphQLInputObjectType({
    name:'SampleInput',
    fields:{
        _id:{type: GraphQLID},
        title:{type: GraphQLString}
    }
})