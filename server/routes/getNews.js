const Router = require("express");
const News = require("../models/News")
const router = new Router()

router.post('/get_news', (res,req) => {
    try {
        
    }catch (e) {
        console.log(e)
        res.send({message: "Server error"})
    }
})