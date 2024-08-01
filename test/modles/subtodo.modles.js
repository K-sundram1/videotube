import mongoose, { Types } from "mongoose";
const subtodo=new mongoose.Schema({
    constent:{
        Types:String,
        require:true,

    },
    completed:{
    Types:Boolean,
    required:true,
    
    }

});
export const  SubTodo=mongoose.model(" SubTodo",subtodo)