const express = require("express")();
const { application } = require("express");
const users = require("./users.json")
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
        console.log("autho");
        res.send("autho")
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
   res.send("i am post")
   console.log("i am post");
})
