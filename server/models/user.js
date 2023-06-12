
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true},
  password: { type: String, required: true},
  email: {type: String, required: true}
})

const User = mongoose.model('User', userSchema);

async function userRegister(username, password, email) {
  const user = await getUser(username);
  if(user) throw Error('Username already exists');

  const newUser = await User.create({
    username: username,
    password: password,
    email: email
  });

  return newUser;
}

async function userLogin(username, password) {
  const user = await getUser(username);
  if(!user) throw Error('User doesnot exist');
  if(user.password != password) throw Error('Incorrect Password');
  return user;
}

async function updatePassword(userid, password) {
  const user = await User.updateOne({"_id": userid}, {$set: { password: password}});
  return user;
}

async function deleteUser(userid) {
  await User.deleteOne({"_id": userid});
};

async function getUser(username) {
  return await User.findOne({ "username": username});
}

module.exports = { 
  userRegister, userLogin, updatePassword, deleteUser 
};