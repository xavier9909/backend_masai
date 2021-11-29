const express = require("express");

var app = express();
const mongoose  = require("mongoose")


const connect =()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/test")
}


const userschema  = new mongoose.Schema({
  
    job_name: {type : String, required : true },
    skills: {type : String, required : true },
    city: {type : String, required : true,unique:true  },
    rating: {type : String, required : false, },
    jtype: {type : String, required : true },
},
{
    versionKey: false,
    timestamps: true,
}

)
app.use(express.json());
const User = mongoose.model("user",userschema)



app.listen(8080,async function () {
    await connect()
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


app.get("/users",async(req,res)=>{  
    try {
        const users = await User.find().lean().exec()
 res.send({users})
    } catch (e) {
        res.status(500).json({status: e.message})
    }
 
})

app.get("/users/:id", async(req,res)=>{
    const user = await User.findById(req.params.id).lean().exec()
    res.send({user})
})

app.post("/users",async(req ,res )=>{
    try {
        const user  =await  User.create(req.body) 
  res.status(201).send(user)
    } catch (error) {
        res.status(500).json({status: error.message})
    }
  
})


app.patch("/users/:id",async(req,res)=>{
    try {
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new : true})
        res.status(201).send({user})
    } catch (error) {
        res.status(500).json({status: error.message})
    }
})
app.delete("/users/:id",async(req,res)=>{
try {
    const user = await User.findByIdAndDelete(req.params.id).lean().exec()
    res.status(200).send(user)
} catch (error) {
    res.status(500).json({status: error.message})
}

})