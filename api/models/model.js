'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const BrigadeSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the brigade'
  },
  year: {
    type: Number,
    required: 'Enter year'
  },
  kindOfTroops: {
    type: String,
  },
  typeOfTroops: {
    type: String
  },
  awards: {
    type: String
  },
  motto: {
    type: String
  },
  trophies: {
    type: String
  },
  protector: {
    type: String
  },
  pet: {
    type: String
  },
  videoLink: {
    type: String
  },
  img: {
    type: String
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

const UserSchema = new Schema({
  id: {
    type: String,
    required: false
  }
})

module.exports = mongoose.model('Brigades', BrigadeSchema);
module.exports = mongoose.model('Users', UserSchema);