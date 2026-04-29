import express from "express";  
import cors from "cors";    
import dotenv from "dotenv";    
import connectDB from "./config/db.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

app.get('/', (req,res)=>{
    res.send("Hello world");        
})

app.listen(process.env.PORT,()=>{           
    console.log(`Server is running on port ${process.env.PORT}`);
    connectDB();    
});



// mongodb username = 'sanddysuresh_db_user'
// mongodb password = '5JU8J6FPB7Ko6R0w'
