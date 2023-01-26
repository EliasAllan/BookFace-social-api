const router = require('express').Router();
const {
  // getUsers,
  // getSingleUser,
  createThought,
} = require('../../controllers/thoughtController');
// GET '/api/posts/' - all users
// POST '/api/posts/' - create one user
router.route('/').post(createThought);

// router.route('/:userId').get(getSingleUser);

module.exports = router;