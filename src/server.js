const { ApolloServer } = require("apollo-server");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const db = require("./config/connection");
const { authenticate } = require("./utils/auth");

const PORT = process.env.PORT || 4000;
const uri = process.env.MONGODB_URI;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const user = authenticate(req);
    return { user };
  },
});

db.once("open", () => {
  server.listen({ port: PORT }).then(({ url }) => {
    console.log(`🌍 Now listening on localhost:${PORT}`);
  });
});
