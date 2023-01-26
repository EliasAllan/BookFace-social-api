const { Schema, model } = require('mongoose');

// Schema to create Reaction model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      max_length: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
      min_length: 1,
      max_length: 280,
    },
  },
);

module.exports = reactionSchema;
