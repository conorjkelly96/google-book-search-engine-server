const { User } = require("../models");
const { signToken } = require("../utils/auth");

const createUser = async (_, { user }) => {
  try {
    const newUser = await User.create(user);

    return {
      token: signToken(newUser),
      user: newUser,
    };
  } catch (error) {
    console.log(`Error: Failed to add user | ${error.message}`);
    throw new AuthenticationError("Failed to add user");
  }
};

module.exports = createUser;
