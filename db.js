import mongoose from "mongoose";
// import env from "../../env.js";

export default async () => {
    return await mongoose.connect(process.env.DB_URL)
}