const express = require("express");
const users = require("./MOCK_DATA.json")
const app = new express()
app.use(express.json())
app.listen(2345,function () {
    console.log("sun raha hu mai 2345 pe soch samajh ke bolna");
    console.log("http//127.0.0.1:2345");
})



app.get('/users',(req,res)=>{
    res.status(200).send({users})
})

app.get('/',function (req,res) {
    res.send("hello")
    
})
app.get('/:email',function (req,res) {
    
    const nusers = users.filter((user)=> user.email === req.params.email)
    res.send(nusers)
    
})

app.post("/",(req,res) =>{
    //console.log(req.body)
    const nusers = [...users,req.body]
    res.send({nusers})
})


app.patch("/:id",(req,res)=>

{
console.log(req.params.id);
const nusers = users.map((user)=>{
    if(req.params.id == user.id){
       if(req?.body?.first_name) user.first_name = req.body.first_name
       if(req?.body?.id) user.id = req.body.id
       if(req?.body?.email) user.email = req.body.email
       if(req?.body?.book) user.book = req.body.book
    }
    return user
} )
res.send(nusers)

})


app.delete("/:email",(req,res)=>{
    const nusers = users.filter((user)=> user.email !== req.params.email)
    res.send(nusers)
})
//express.use(express.static("index.html"))