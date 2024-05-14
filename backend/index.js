import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js"
import cors from "cors"
import userRoute from "./route/user.route.js";
// import cors from "cors"

const app = express()
dotenv.config();

// Enable CORS for all requests
app.use(cors());
// parse application/json
app.use(express.json());

const PORT=process.env.PORT || 4000;
const URI=process.env.MongoDBURI;
//connect the mongoDB
try {
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log("Connected to MongoDB")
} catch (error) {
    console.log("Error connecting to MongoDB  :error are  :"  ,error)
}

//definig routes
app.use("/book",bookRoute);
app.use("/user",userRoute);


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
}) 