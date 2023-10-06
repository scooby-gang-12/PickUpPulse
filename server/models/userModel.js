const mongoose = require('mongoose'),
      Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  username: {type: String, required: true, index: { unique: true} },
  password: {type: String, required: true},
  fullName: {type: String, required: true},
  favoriteSports: {type: [String], require: true},
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

UserSchema.pre('save', function(next){
  if (!this.isModified('password')) return next();
  bcrypt.hash(this.password, process.env.SALT_FACTOR, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    return next();
  })
});

UserSchema.index({ location: '2dsphere'});

const User = mongoose.model('User', UserSchema);

module.exports = User;