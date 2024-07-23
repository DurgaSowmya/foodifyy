import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://durgasowmyakollipara:313239@cluster0.k69p88h.mongodb.net/food-delivery').then(()=>console.log("DB Connected"));
}