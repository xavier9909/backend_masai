const express = require("express")();
//const { application } = require("express");
const mongoose  = require("mongoose")()
const users = require("./users.json")

const connect =()=>{
    return mongodb.connect("mongodb://127.0.0.1:27017/test")
}


const userschema  = new mongoose.Schema({
  
    first_name: {type : String, required : true },
    last_name: {type : String, required : true },
    email: {type : String, required : true },
    gender: {type : String, required : false, default : "Male" },
    age: {type : Number, required : true },
})

const User = mongoose.model("user",userschema)


express.listen(8080,function () {
    console.log("runinig ");
})
const auth = (req,res,next) =>{
    console.log("before"+req.method);
    next()
    console.log("after");
    }

const autho = (permission) =>{
    return (req,res,next)=>{
        const org = res.send.bind(res)
        res.send= function (body) {
            body.name  = "shubham meena"
            console.log(body);
            return org(body)
        }
        next()
    }
}


express.get("/users",(req,res)=>{  
    console.log(

        'insidr the route handler   I AM GET'
    );
    res.send(users)
})

express.get("/users/:email",(req,res)=>{
    const user = users.filter((user)=>user.email===req.params.email)
    res.send(user)
})

express.post("/users",auth ,autho("editor"),(req ,res )=>{
   res.send({name : "Dhaval"})
   console.log("i am post");
})
