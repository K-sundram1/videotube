import mongoose from "mongoose";
const userSchema=new mongoose.Schema({


    username:{
        type:String,
        require:true,
        lowercase:true,

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
    
});
export const  User=mongoose.model("User",userSchema)