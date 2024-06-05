const { Thought, User } = require("../models");

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


  },

  // create a thought
  async createThought(req, res) {

  },

  // update thought
  async updateThought(req, res) {

  },

  // delete thought
  async deleteThought(req, res) {

  },

  // add a reaction to a thought
  async addReaction(req, res) {

  },

  // remove reaction from a thought
  async removeReaction(req, res) {
    
  },
};

module.exports = thoughtController;
