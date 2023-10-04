import mongoose from "mongoose";

let mongoURI = 'mongodb://127.0.0.1:27017'

const connectToMongo = async()=>{
    console.log("connecting to mongo....")
  try {
    await mongoose.connect(mongoURI , {
        dbName: "AuthAPP",
     })
     console.log("Connected to Mongo Successfully");
  } catch (error) {
    console.log(error);
  }
}

export default connectToMongo