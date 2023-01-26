const { Schema, model } = require("mongoose");
const thoughtSchema = require('./Thought');

// Schema to create a User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max_length: 50,
      match: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
    },
    thoughts: [ {
      type: Schema.Types.ObjectId,
      ref: 'thought'
    },],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user'
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

const User = model("user", userSchema);

userSchema.virtual('friendCount').get(function() {
  return this.friends.length
})

module.exports = User;
