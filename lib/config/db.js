import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect(process.env.MONOGODB_URL);
    console.log("DB Connected")
}