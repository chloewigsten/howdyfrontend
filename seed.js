require("dotenv").config();
const { MONGODB_URI } = process.env;
const axios = require('axios')

// Add in mongoose
const mongoose = require('mongoose');
mongoose.connect(MONGODB_URI);

// Connection Events
mongoose.connection
  .on("open", () => console.log("This is my awesome amazing connection man"))
  .on("close", () => console.log("Your are disconnected from mongoose :'("))
  .on("error", (error) => console.log(error));

const { Photos } = require('./models')

const seedingData = async () => {
    try {
        const myPhotos = await axios.get('https://dog.ceo/api/breed/hound/images');
        const allPhotos = await myPhotos.data;
        const deletedPhotos = await Photos.deleteMany({})
        const addedPhotos = await Photos.insertMany(allPhotos);
        console.log(deletedPhotos);
        console.log(addedPhotos);
    } catch(err) {
        console.log(err);
    }
}

seedingData();