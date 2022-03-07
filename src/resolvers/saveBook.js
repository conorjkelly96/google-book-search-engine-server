const { AuthenticationError } = require("apollo-server");
const { Library } = require("../models");

const saveBook = async (_, { book, libraryId }, context) => {
  try {
    if (!context.user) {
      throw new AuthenticationError(
        "You are not authorised to perform this operation"
      );
    }

    const library = await Library.findByIdAndUpdate(
      libraryId,
      {
        $push: {
          books: book,
        },
      },
      {
        new: true,
      }
    );

    return library;
  } catch (error) {
    console.log(`[ERROR]: Failed to add book to library | ${error.message}`);
  }
};

module.exports = saveBook;
