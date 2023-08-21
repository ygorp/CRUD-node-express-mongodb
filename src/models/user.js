import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true }
})

export default mongoose.models.User || mongoose.model('User', UserSchema)