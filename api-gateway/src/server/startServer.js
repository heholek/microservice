const { ApolloServer } = require("apollo-server-express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const express = require("express")

const resolvers = require("@src/graphql/resolvers")
const typeDefs = require("@src/graphql/typeDefs")

const PORT = process.env.PORT || 7000

const apolloServer = new ApolloServer({
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

apolloServer.applyMiddleware({ app: app, cors: false, path: "/graphql" })

app.listen(PORT, () => {
    console.log("api Gateway")
})
