const express = require("express")();
const { application } = require("express");
const users = require("./users.json")
express.listen(8080,function () {
    console.log("runinig ");
})
const logger = (req,res,next) =>{
    console.log("before"+req.method);
    next()
    console.log("after");
    }



express.use(logger )
express.get("/users",(req,res)=>{  
    console.log(

        'insidr the route handler'
    );
    res.send(users)
})

express.get("/users/:email",(req,res)=>{
    const user = users.filter((user)=>user.email===req.params.email)
    res.send(user)
})


