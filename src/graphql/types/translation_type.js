import {
    GraphQLString,
    GraphQLNonNull,
    GraphQLID,
    GraphQLObjectType,
    GraphQLList
} from 'graphql';

import label from './label_type'

export default new GraphQLObjectType({
    name:'Translation',
    description:"Holds labels for a particular language to be loaded on the site",
    fields:{
        lang:{
            type: new GraphQLNonNull(GraphQLID)
        },
        labels:{
            type: new GraphQLList(label)
        }
    }
});



