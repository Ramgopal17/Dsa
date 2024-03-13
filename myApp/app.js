const express=require("express")
const app=express()

app.get("/server",function(req,res){
    console.log("hi")
})

app.listen(3000,function (){
    console.log("express running on " +3000)
})