import 'reflect-metadata'

import { ApolloServer, gql } from 'apollo-server'
import getSchema from './graphql/buildSchema'

// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`

// A map of functions which return data for the schema.
const resolvers = {
    Query: {
        hello: () => 'world',
    },
}

async function main() {
    // const schema = await getSchema()

    const server = new ApolloServer({
        typeDefs,
        resolvers
    })

    server.listen().then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`)
    })
}

main()

