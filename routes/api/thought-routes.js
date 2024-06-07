const router = require('express').Router();

const {
    getAllThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// Define the routes for GET all Thoughts and POST a new Thought
router.route('/')
    // Callback function for GET all Thoughts
    .get(getAllThoughts)

// Define the routes for GET a single Thought and PUT a Thought by ID
router
    .route('/:userId')
    .get((req, res) => {
        // Callback function for GET a single Thought
        getSingleThought(req, res);
    })
        // Callback function for POST a new Thought
    .post(createThought)

    .put((req, res) => {
        // Callback function for PUT a Thought by ID
        updateThought(req, res);
    })
        // Callback function for DELETE a Thought
    .delete(deleteThought);

// Define the route for POST a reaction to a Thought
router.route('/:thoughtId/reactions')
    .post((req, res) => {
        // Callback function for POST a reaction to a Thought
        addReaction(req, res);
    });

// Define the route for DELETE a reaction from a Thought
router.route('/:thoughtId/reactions/:reactionId')
    .delete((req, res) => {
        // Callback function for DELETE a reaction from a Thought
        removeReaction(req, res);
    });

module.exports = router;
