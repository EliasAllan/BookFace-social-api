const { Schema, model } = require("mongoose");
const thoughtSchema = require('./Thought');

// Schema to create a User model
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      // validate: {
      //   validator: function (v) {
      //     // any white space strings will be false or invalid
      //     if (v.trim().length === 0) {
      //       return false;
      //     }
      //     return /[A-Za-z0-9\- ]+/.test(v);
      //   },
      //   message: (props) => `${props.value} is not a valid username!`,
      // },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max_length: 50,
    },
    thoughts: [thoughtSchema],
    friends: [userSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const User = model("user", userSchema);

userSchema.virtual('friendCount').get(function() {
  return this.friends.length
})

module.exports = User;
