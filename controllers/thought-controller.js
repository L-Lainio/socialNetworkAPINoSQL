const { Thought, User } = require('../models');

const thoughtController = {
  // Define the ThoughtController object, which contains methods for handling various API requests related to thoughts
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find({});
      res.json(thoughts);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // get single thought by id
  async getSingleThought(req, res) {
    try {
      const thoughts = await Thought.findOne({});
      if (!thoughts) {
        res.status(404).json({ message: 'No thought found' });
      } else {
        res.json(thoughts);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // create a thought
  async createThought(req, res) {
    // console.log({req,res})
    try {
      const thought = await Thought.create(req.body);
      // console.log({thought})
      console.log(req.body, req.params, thought._id);
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $push: { thoughts: thought._id } },
        { new: true }
      );
console.log({user});

      if (!user) {
        res.status(404).json({ message: 'No user found!' });
      }
      res.status(200).json({ message: 'Thought successfully created!'});
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // update thought
  async updateThought(req, res) {
    try {
      // { req.body }, { new: true }
      const thought = await Thought.findOneAndUpdate({ _id: req.body.thoughtId });
      console.log({thought});
      if (!thought) {
        res.status(404).json({ message: 'No thought found' });
      } else {
        res.json(thought);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // delete thought
  async deleteThought(req, res) {
    console.log(req.params);
    try {
      // { $addToSet: { reactions: req.body } },
      const thought = await Thought.findByIdAndDelete({ _id: req.params.thoughtId }, { runValidators: true, new: true });
      console.log({thought});
      if (!thought) {
        res.status(404).json({ message: 'No thought found' });
      }
      res.status(200).json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // add a reaction to a thought
  async addReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId }, // Assuming thoughtId is the parameter you are looking for
        { $push: { reactions: req.body } },
        { new: true }
      );
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // remove reaction from a thought
  async removeReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId, "reactions.reactionId": req.params.reactionId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { new: true }
      );
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

};

  module.exports = thoughtController;
