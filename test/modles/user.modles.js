// for the modeles creation first import instance of moongoose
import mongoose from "mongoose";
// 2nd step create a model schema
const userSchema= new mongoose.Schema({
    // in this feild we defined all the data
    username:{
        type:String,
        require:true,
        unique:true,
        lowercase:true
    },
    email:{
        type:String,
        require:true,
        lowercase:true,

    },
    password:{
        type:String,
        require:true,
        lowercase:true,

    }


},{timestamps:true});
// if we want to store the time stamp of the created object just pass onther object time stamp contain two function created at and updated at 
// in data bases the model import as pularal and in lowwr case

export const User=mongoose.model("User",userSchema)