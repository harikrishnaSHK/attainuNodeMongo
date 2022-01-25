
require('dotenv').config()
const express  = require('express')
const app = express()
const mongoose = require('mongoose')
var collectionName = ""

connect = ()=>{mongoose.connect(process.env.MONGO_URI,

    {

useNewUrlParser : true,
useUnifiedTopology : true

})

const db = mongoose.connection
db.on("error" , function(){console.log("connection error")})
db.once("open",function(){

    console.log("connected sucessfully")
    mongoose.connection.db.listCollections().toArray(function (err, names) {
     console.log(names); // [{ name: 'dbname.myCollection' }]
    
    const names2  = names[0].name
    console.log(" from main file "+names2)
     
    collectionName = names2

    });
})
}

connect()

const port  = process.env.PORT || 3000

app.get('/',(req,res)=>{

res.send("hi from heroku connected to db with collections " + collectionName )

})


app.listen(port,()=>{

console.log(`server is running on port ${port}`)

})