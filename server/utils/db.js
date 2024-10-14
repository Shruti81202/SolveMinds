console.log("MongoDB URI:", process.env.MONGODB_URI);
const mongoose = require("mongoose");
//const URI = "mongodb://localhost:27017/mern_admin";
const URI = process.env.MONGODB_URI;
const connectDb = async()=>{
    try {
        await mongoose.connect(URI); 
        console.log("Connection successful to DB")
    } catch (error) {
        console.error("Database connection failed")
        process.exit(0);
    }
};
module.exports = connectDb;