import mongoose from "mongoose";
const productSchema=new mongoose.Schema({

    discription:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        default:0
    },
    stocks:{
        type:Number,
        default :0

    },
    catrogry:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Cateogry"
    },
    productimage:{
        type:String,

    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"
    }


})