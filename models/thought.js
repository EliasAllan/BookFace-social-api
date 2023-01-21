const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');

// Schema to create Throught model
const thoughtSchema = new mongoose.Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,  
    },
    createdAt: {
      type: Date,
      required: true,
      min_length: 1,
      max_length: 280,
    },
    username: {
      type: String,
      required: true,
      max_length: 50,
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Thought = model('thought', thoughtSchema);

thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length
})

module.exports = Thought;
