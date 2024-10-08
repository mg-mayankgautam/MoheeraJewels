const mongoose = require('mongoose');
const { mongo } = require('mongoose');
//import mongoose, {mongo} from 'mongoose';
const { Schema } = mongoose;


const loveletterSchema = new Schema({
    
    name:{type:String},
    message:{type:String}
    //
});

module.exports = mongoose.model('loveletter', loveletterSchema);