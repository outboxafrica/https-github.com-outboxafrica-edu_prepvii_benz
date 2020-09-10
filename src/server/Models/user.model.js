// User Model
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min:6,
        max: 255,
    },
    email: {
        type: String,
        required: true,
        max:255,
        min:6
        },
    password: {
        type: String,
        required: true,
        max:1024,
        min:6,
        set: (value) => {
            return bcrypt.hashSync(value, 10);
          },
        
      },
      date:{
          type:Date,
          default:Date.now
      }

})

module.exports = mongoose.model('User',userSchema)