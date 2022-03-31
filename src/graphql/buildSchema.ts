import { GraphQLSchema } from 'graphql'
import { typeDefs } from '../index'
import { makeExecutableSchema } from '@graphql-tools/schema'

export default function getSchema(): GraphQLSchema { 
    return makeExecutableSchema({
        typeDefs,
    })
}
