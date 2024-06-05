const { Schema, model } = require("mongodb");
const mongoose = require('mongoose');
const reactionSchema = require("./Reaction");
const dateFormat = require("../utils/dateFormat");

const thoughtSchema = new Schema();

module.exports = Thought;
