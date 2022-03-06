const getSingleUser = async (_, { user }) => {
  try {
    if (!user) {
      console.info("no user");
      throw new AuthenticationError("User must be logged in");
    }

    const foundUser = await User.findOne({ _id: user._id });

    if (!foundUser) {
      throw new AuthenticationError("ERROR]: User does not exist");
    }
    return foundUser;
  } catch (error) {
    console.info(error);
    throw new ApolloError("[ERROR]: Oops. Something went wrong");
  }
};

module.exports = getSingleUser;
