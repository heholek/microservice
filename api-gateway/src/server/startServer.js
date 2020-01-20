const { ApolloServer } = require("apollo-server-express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const express = require("express")

const resolvers = require("@src/graphql/resolvers")
const typeDefs = require("@src/graphql/typeDefs")
const formatGraphQLErrors = require("@src/server/formatGraphQLErrors")
const injectSession = require("./injectSession")

const PORT = process.env.PORT || 7000

const apolloServer = new ApolloServer({
    context: a => a,
    formatError: formatGraphQLErrors,
    typeDefs: typeDefs,
    resolvers: resolvers
})

const app = express()
app.use(cookieParser())
app.use(
    cors({
        origin: (origin, cb) => cb(null, true),
        credentials: true
    })
)
app.use(injectSession)
apolloServer.applyMiddleware({ app: app, cors: false, path: "/graphql" })

app.listen(PORT, () => {
    console.log("api Gateway")
})
