const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const News = require('./models/news');
const Router = require("express");
const router = new Router()

const app = express()
const PORT = config.get('serverPort')

const start = async () =>{
    try {
        mongoose.connect(config.get('dbUrl'))
        app.listen(PORT,()=>{
            console.log('server started on port', PORT)
        })
    }catch (e){

    }
}

start()