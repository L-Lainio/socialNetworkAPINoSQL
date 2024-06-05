const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// Define the routes for GET and POST all Thoughts
router.route('/').get(getThoughts).post(createThought);
router.route('/').get(getSingleThought).post(updateThought);

// Define the routes for GET, PUT and DELETE Thoughts
router.route('/:thoughtId').get(getThoughtsById).put(updateThoughtById).delete(deleteThought);


// Define the route for POST reaction to a Thought
router.route('/:thoughtId/addreactions').post(addReaction);


// Define the route for DELETE reaction to a Thought
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router
