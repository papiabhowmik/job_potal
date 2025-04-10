import mongoose from "mongoose";
 const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_LOCAL);
        console.log(`Connected to mongodb database ${conn.connection.host}`);
    }catch(error){
        console.log(`MongoDB database error ${error}`)
    }
}

export default connectDB;