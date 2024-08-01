import mongoose from "mongoose";
const cateogryschema=new mongoose.Schema({
    discription:{
        type:String,
        requird:true,
    },
    

})
export const Cateogry=mongoose.model("Cateogry",cateogryschema)