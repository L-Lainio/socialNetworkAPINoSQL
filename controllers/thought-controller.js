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
    try {
      const thought = await Thought.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { thoughts: thought._id } },
        { new: true }
      );
      if (!user) {
        res.status(404).json({ message: 'No user found' });
      }
      res.status(200).json();
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // update thought
  async updateThought(req, res) {
    try {
      const thought = await Thought.findIdAndUpdate(req.params, req.body, { new: true });
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
    try {
      const thought = await Thought.findByIdAndDelete({_id: req.params.thoughtId});
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
