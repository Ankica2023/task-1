const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const academySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
  },
  
});



const Academy = mongoose.model('Academy', academySchema);

module.exports = Academy;