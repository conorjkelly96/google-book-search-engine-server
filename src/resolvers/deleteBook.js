const deleteBook = async (_, { bookId }, { user }) => {
  try {
    if (!user) {
      throw new AuthenticationError("User must be logged in");
    }

    const id = user._id;

    const updatedUser = await User.findOneAndUpdate(
      { _id: id },
      { $pull: { savedBooks: { bookId: bookId } } },
      { new: true }
    );

    if (!updatedUser) {
      throw new AuthenticationError("User does not exist");
    }

    return updatedUser;
  } catch (error) {
    console.info(error);
    throw new ApolloError("[ERROR]: Oops. Something went wrong");
  }
};

module.exports = deleteBook;
