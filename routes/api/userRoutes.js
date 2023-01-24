const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
} = require('../../controllers/userController');
// GET '/api/posts/' - all users
// POST '/api/posts/' - create one user
router.route('/').get(getPosts).post(createPost);

router.route('/:postId').get(getSinglePost);

module.exports = router;