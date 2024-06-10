const { User, Thought } = require("../models");

const userController = {
  // get all users
  getUsers: (req, res) => {
    User.find({})
      .then(userData => res.json(userData))
      .catch(err => res.status(500).json(err));
  },

  // get single user by id
  getUserById: (req, res) => {
    console.log(req.params)
    try {
      const userData = User.findOne({ _id: req.params.userId }).select('-__v').populate('thoughts')
      res.json(userData)
    } catch (err) {

      res.status(500).json(err)
    }
  },

  // create a new user
  createUser: (req, res) => {
    User.create(req.body)
      .then(userData => res.json(userData))
      .catch(err => res.status(500).json(err));
  },

  // update a user
  updateUser: (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(userData => {
        if (!userData) {
          return res.status(404).json({ message: 'No user found' });
        }
        res.json(userData);
      })
      .catch(err => res.status(500).json(err));
  },

  // delete user (BONUS: and delete associated thoughts)
  deleteUser: (req, res) => {
    User.findByIdAndDelete(req.params.id)
      .then(userData => {
        if (!userData) {
          return res.status(404).json({ message: 'No user found' });
        }
        res.json(userData);
      })
      .catch(err => res.status(500).json(err));
  },

  // add friend to friend list
  addFriend: (req, res) => {
    User.findByIdAndUpdate(req.params.id, { $push: { friends: req.params.friendId } }, { new: true })
      .then(userData => {
        if (!userData) {
          return res.status(404).json({ message: 'No user found' });
        }
        res.json(userData);
      })
      .catch(err => res.status(500).json(err));
  },

  // remove friend from friend list
  removeFriend: (req, res) => {
    User.findByIdAndUpdate(req.params.id, { $pull: { friends: req.params.friendId } }, { new: true })
      .then(userData => {
        if (!userData) {
          return res.status(404).json({ message: 'No user found' });
        }
        res.json(userData);
      })
      .catch(err => res.status(500).json(err));
  }
};

module.exports = userController;
