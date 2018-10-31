import {
  GraphQLSchema,
  GraphQLObjectType
} from 'graphql';

import {info, infos} from './info'
import {course} from './course'
import {student} from './student'

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      infos,
      info,
      course,
      student
    }
  })
})
