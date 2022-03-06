const createUser = require("./createUser");
const deleteBook = require("./deleteBook");
const getSingleUser = require("./getSingleUser");
const login = require("./login");
const saveBook = require("./saveBook");

const resolvers = {
  Query: {
    me: getSingleUser,
  },
  Mutation: {
    login,
    addUser: createUser,
    saveBook,
    removeBook: deleteBook,
  },
};

module.exports = resolvers;
