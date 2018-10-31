import { buildSchema, GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql'
import data from './data.json'

var userType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  }
});

var fieldsType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: userType,
      args: {
        id: { type: GraphQLString }
      },
      // `args` describes the arguments that the `user` query accepts
      // The resolve function describes how to "resolve" or fulfill
      // the incoming query.
      // In this case we use the `id` argument from above as a key
      // to get the User from `data`
      resolve: function (_, args) {
        console.log(_, args, data[args.id]);
        return data[args.id];
      }
    }
  }
});


export default new GraphQLSchema({ query: fieldsType });

