import mongoose from "mongoose";    
import dotenv from "dotenv";
dotenv.config();    

const connectDB = async () => {  
    try {   
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });  
        console.log("MongoDB connected successfully");  
    } catch (error) {
        console.error("MongoDB connection error:", error);  
        process.exit(1);  
    }       

};

console.warn("Warning: 'src/congif/db.js' is deprecated - rename folder to 'config' and import from 'src/config/db.js'. Using this file for compatibility.");

export default connectDB;