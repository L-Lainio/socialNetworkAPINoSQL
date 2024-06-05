const router = require("express").Router();

const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

// Define routes directly on the router
router.route('/api/users')
    .get(getUsers)
    .post((req, res, next) => {
        // Additional middleware logic goes here
        // This middleware function can handle any preprocessing before calling the final controller function
        next(); // Call next to proceed to the final controller function
    }, createUser);

router.route('/api/users/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

router.route('/api/users/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);

module.exports = router;
