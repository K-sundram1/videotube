import mongoose from "mongoose"

const orderprice=new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        required:true,

    }
})


const orderSchema=new mongoose.Schema({
    cutomer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderprice:{
        type:Number,
        required:true
    },
    stocsk:{
        type:Number,
        default:0,

    },
    orderditems:{
        type:[orderprice]

    }
})
export const Order=mongoose.model("Order",orderSchema)