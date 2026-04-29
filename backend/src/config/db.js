import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
    try {
        // Newer mongoose/mongodb drivers no longer accept useNewUrlParser/useUnifiedTopology options.
        // Passing the URI alone lets mongoose use sensible defaults.
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

export default connectDB;
