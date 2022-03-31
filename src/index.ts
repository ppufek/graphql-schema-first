import 'reflect-metadata'

import { ApolloServer, gql } from 'apollo-server'
import { user, users } from './graphql/resolvers/User.resolver'
import { vehicles } from './graphql/resolvers/Vehicle.resolver'

// The GraphQL schema
export const typeDefs = gql`
type Query {
  user(id: ID!): User
  users: [User!]!
  vehicles: [Vehicle!]!
  trackedSignals(input: TrackedSignalsInput): [Signal!]!
}

"""User of the app."""
type User {
  id: ID!
  name: String!

  """The vehicles of the user, or any empty list if they have none."""
  vehicles: [Vehicle!]!
}

"""Registered user vehicle in the system."""
type Vehicle {
  id: ID!
  name: String!
  vin: String!
  signals: [Signal!]!
}

type Signal {
  id: ID!
  name: String!
  samplingPeriod: SamplingPeriodEnum!
}

"""Time difference between signal occurrence"""
enum SamplingPeriodEnum {
  MS_10
  MS_20
  MS_100
}

input TrackedSignalsInput {
  vehicleId: ID!
  isTracked: Boolean!
}
`

// A map of functions which return data for the schema.
const resolvers = {
    Query: {
        user,
        users,
        vehicles
    },
}


const server = new ApolloServer({
    typeDefs,
    resolvers,
})

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
})


