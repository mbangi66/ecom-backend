const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    name:String,
    email:String,
    username:String,
    auth0_id:String,
    profile_picture: String,
    //is_admin: Boolean
})

module.exports = mongoose.model('User',User)