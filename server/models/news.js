const {Schema,model} = require("mongoose")

const News = new Schema({
    name: {type:String,required:true, unique:true},
    link: {type:String,required:true},
    shortText: {type:String,required:true},
    longText: {type:String,required:true},
})


module.exports = model('News',News)