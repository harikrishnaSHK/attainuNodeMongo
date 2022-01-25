const express  = require('express')
const {connect} = require('./config/db')

const app = express()

const port  = process.env.PORT || 3000

connect()

app.get('/',(req,res)=>{

res.send("hi from heroku")

})

app.listen(port,()=>{

console.log(`server is running on port ${port}`)

})