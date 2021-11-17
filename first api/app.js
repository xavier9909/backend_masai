const express = require("express")();



express.listen(2345,function () {
    console.log("sun raha hu mai 2345 pe soch samajh ke bolna");
    console.log(`http//127.0.0.1:2345`);
})



express.get('/users',(req,res)=>{
    res.status(200).send({
        'aman':'1',
        'ankush':'2',
        'dhwal':'2',
        'telo':"1\3",
    })
})

express.get('',function (req,res) {
    res.send("welcome to the new page")
    
})