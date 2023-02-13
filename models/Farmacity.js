const mongoose = require("mongoose")

const Schema = mongoose.Schema

const schema = new Schema({
    nombreMedicamento:{
        type: String,
        required: true
    },
    precio:{
        type: Number,
        required:true
    },
    cantidadStock:{
        type: Number,
        required: true
    },
    oferta:{
        type:Boolean,
        required:false
    }

})

const Farmacity = mongoose.model("Farmacity", schema);
module.exports = { Farmacity }