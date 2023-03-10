const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require("../../controllers/thoughtController");
// GET '/api/thoughts/' - all thoughts
// POST '/api/thoughts/' - create one thought
router.route("/")
  .post(createThought)
  .get(getThoughts);

router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought)

  router
  .route('/:thoughtId/reactions')
  .post(createReaction)
  .delete(deleteReaction)

module.exports = router;
