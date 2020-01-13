const { gql } = require("apollo-server")

module.exports = gql`
    type Listing {
        description: String!
        id: ID!
        title: String!
    }

    type Query {
        listings: [Listing!]!
    }
`
