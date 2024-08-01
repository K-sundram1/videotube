const express=require('express')
const app=express();

// in the this app we can send request and recieve the requeest
app.get('/',(req,res)=>{
    console.log("server is raedy");
})
const port=4000;
app.listen(port,(req,res)=>{
    console.log("server is sucessfully ");
})