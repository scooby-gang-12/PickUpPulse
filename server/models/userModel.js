const mongoose = require('mongoose'),
      Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  username: {type: String, required: true, index: { unique: true} },
  password: {type: String, required: true, bcrypt: true},
  fullName: {type: String, required: true},
  userLocation: {type: String, required: true},
  favoriteSports: {type: [String], require: true}
});

UserSchema.pre('save', (next) => {
  if (!this.ismodified('password')) return next();
  bcrypt.hash(this.password, process.env.SALT_FACTOR, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    return next();
  })
})

const User = mongoose.model('user', UserSchema);

module.exports = User;