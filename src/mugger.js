const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MuggerSchema = new Schema({
    name: String,
    img: String,
    short_text: String,
    long_text: String
});

const Mugger =  mongoose.model("mugger",MuggerSchema);

module.exports = Mugger;