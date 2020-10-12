const mongoose = require('mongoose');

/**
 * Visitor Schema
 * @Private
 * */

const Schema = mongoose.Schema;

const visitorSchema = new Schema({
    fullName:String,
    gender:String,
    age:Number,
    height:Number,
    currentWeight:Number,
    goalWeight:Number,
    reduceFat:Number,
    activity:String,
    exercisePerWeek:String,
    minutesPerDay:String,
    dislikeFoodOrAllergy:String,
    favoriteFood:String,
    eatHabit:String,
    hear:String,
    instagram:String,
    email:{
        type: String,
    required: true,
    unique: true,
    trim: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    addInfo:String,
    promoCode:String,
},{
    timestamps:true
}
)


module.exports = mongoose.model('Visitor', visitorSchema);
