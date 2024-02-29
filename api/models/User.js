const mongoose = require('mongoose')

// Define the User schema
// The schema is the structure of the document that we want to store in the database
// The schema is a blueprint for the document
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

// Define the User model which is based on the User schema
// The model is a class with which we construct documents (instances of the model)

const UserModel = mongoose.model('User', UserSchema)
// The first argument is the singular name of the collection your model is for.
// Mongoose automatically looks for the plural, lowercased version of your model name.
// Thus, for the example above, the model User is for the users collection in the database.

module.exports = UserModel
// The model is exported so that it can be used in other files
