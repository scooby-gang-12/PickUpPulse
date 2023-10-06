const mongoose = require('mongoose'),
      Schema = mongoose.Schema;
const bcrypt = require('bcrypt');


const UserSchema = new Schema({
  username: {type: String, required: true, index: { unique: true} },
  password: {type: String, required: true},
  fullName: {type: String, required: true},
  userLocation: {type: String, required: true},
  favoriteSports: {type: [String], require: true}
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

const User = mongoose.model('user', UserSchema);

module.exports = User;