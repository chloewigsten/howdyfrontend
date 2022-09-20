const mongoose = require("mongoose");

const PhotosSchema = new mongoose.Schema({
        message: Array,
        status: String,
    });
const Photos = mongoose.model("Photos", PhotosSchema);

module.exports = Photos;