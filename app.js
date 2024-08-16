// const app = require('express')()
const express = require('express')
const app = express()


app.get('/',(req,res)=>{
    res.send("<h1>haha world</h1>")
})

app.get('/about',(req,res)=>{
    res.send("This is about page")
})



app.listen(3000,()=>{
    console.log("project suru vayo hai tw nodejs ko")
})

