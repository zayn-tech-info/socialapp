import mongoose from "mongoose";
import dotevn from "dotenv";
dotevn.config();

const connectToDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to database: ${conn.connection.host}`);
  } catch (err) {
    console.log("Some error occured: " + err);
  }
};

export default connectToDb
