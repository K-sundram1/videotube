import mongoose, { Types } from "mongoose";
const todoSchema=new mongoose.Schema({
    content:{
        Types:String,
        require:true,

    },
    complete:{
        Types:Boolean,
        default:false,
        require:true,

    },
    createdby:{
        Types:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    subTodos:{
        Types:mongoose.Schema.Types.ObjectId,
        ref:"Subtodo"
    }
})
export const Todo=mongoose.model("Todo",todoSchema);