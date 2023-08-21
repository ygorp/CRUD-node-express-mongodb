import mongoose from "mongoose";

const URI = 'mongodb+srv://admin:sQVqGbwEOfnd5FNT@cluster0.wkgqab9.mongodb.net/?retryWrites=true&w=majority'

const databaseConnection = async () => {
    if (!global.mongoose) {
        mongoose.set('strictQuery', false)
        global.mongoose = await mongoose.connect(URI)
    }    
}

export default databaseConnection