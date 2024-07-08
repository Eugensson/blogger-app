import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(process.env.DB_HOST);
  console.log("DB connected");
};
