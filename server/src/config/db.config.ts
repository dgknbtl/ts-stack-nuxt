import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongoURI =
      process.env.MONGODB_URI || "mongodb://mongo:27017/ts-stack";

    await mongoose.connect(mongoURI);
    console.log("MongoDB bağlantısı başarılı");
  } catch (error) {
    console.error("MongoDB bağlantı hatası:", error);
    process.exit(1);
  }
};

export default connectDB;
