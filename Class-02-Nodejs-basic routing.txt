const express = require('express')
const app = express()
const router = new express.Router()

app.listen(3000)

console.log("Listen")


   //tcp potocol e chole

app.get("/",function(req,res)
{
res.send("Hello World")
})

app.get("/about",function(req,res)
{
res.send("About me")
})

app.get("/home",function(req,res)
{
res.send("This Home")
})

app.get("/contact",function(req,res)
{
res.send("Contact us")
})

app.get("/signin",function(req,res)
{
res.send("Sign In")
})



//var DB= require("./models/index");
