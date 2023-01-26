const { Thought, User } = require('../models');

module.exports = {
    // getUsers(req, res) {
    //   User.find()
    //     .then((posts) => res.json(posts))
    //     .catch((err) => res.status(500).json(err));
    // },
    // getSingleUser(req, res) {
    //   User.findOne({ _id: req.params.postId })
    //     .then((post) =>
    //       !post
    //         ? res.status(404).json({ message: 'No user with that ID' })
    //         : res.json(post)
    //     )
    //     .catch((err) => res.status(500).json(err));
    // },
    // create a new post
    createThought(req, res) {
      Thought.create(req.body)
        .then((dbThoughtData) => 
        // User.findOneAndUpdate()
        //find that user, and push the new thought id to the array of the user
        res.json(dbThoughtData))
        .catch((err) => res.status(500).json(err));
    },
  };