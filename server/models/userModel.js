const mongoose = require('mongoose'),
      Schema = mongoose.Schema;
const bcrypt = require('bcrypt');


const UserSchema = new Schema({
  username: {type: String, required: true, index: { unique: true} },
  password: {type: String, required: true},
  fullName: {type: String, required: true},
  favoriteSports: {type: [String], required: true},
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
});

UserSchema.pre('save', async function (next) {
  if(!this.isModified('password')) return next();
try {
  this.password = await bcrypt.hash(this.password, 10)
  return next();
  }
catch (err) {
  return next(err);
}
})


UserSchema.index({ location: '2dsphere'});

const User = mongoose.model('User', UserSchema);

module.exports = User;