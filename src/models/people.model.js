const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const peopleSchema = mongoose.Schema(
  {
    PID: {
      type: String,
      required: true,
      trim: true,
    },
    PName: {
      type: String,
      required: true,
      trim: true,
    },
    Sex: {
      type: String,
      required: true,
      trim: true,
    },
    DOB: {
      type: Date,
      required: true,
      trim: true,
    },
    Phone: {
      type: Number,
      required: true,
      trim: true,
    },
    Address: {
      type: String,
      required: true,
      trim: true,
    },
  }
)

// add plugin that converts mongoose to json
peopleSchema.plugin(toJSON);
peopleSchema.plugin(paginate);

/**
 * @typedef People
 */
const People = mongoose.model('People', peopleSchema);

module.exports = People;
