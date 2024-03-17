import React from "react";
import mongoose from "mongoose";
import { MongoClient } from "mongodb";

const mongodb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });
    console.log("connected to mongodb...");
  } catch (error) {
    console.log(error);
  }
};

export default mongodb;
