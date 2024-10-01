const mongoose = require('mongoose');
const { mongo } = require('mongoose');
//import mongoose, {mongo} from 'mongoose';
const { Schema } = mongoose;


const adminSchema = new Schema({
    id: { type: String },
    password: { type: String },
    role:{type:String},
    refreshToken:{type:String}
    //
});

module.exports = mongoose.model('Admin', adminSchema);