import mongoose from "mongoose";

interface users extends Document{
    name:string;
}

const user =new mongoose.Schema<users>({
    name:String
})

export const userModel = mongoose.models.users || mongoose.model("users",user)