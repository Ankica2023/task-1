const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
  },
  area: {
   type: String,
   required: [true, 'Please tell us what you are interested in']
  },
  
});



const Course = mongoose.model('Course', courseSchema);

module.exports = Course;