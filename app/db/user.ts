import mongoose from "mongoose";

const user = new mongoose.Schema({
    name: { type: String },
    email: { type: String }
});

export default mongoose.models.User || mongoose.model("User", user);