import mongoose from 'mongoose';
import { DB_NAME } from "../constant.js";


const connectDb=async()=>{
    try{
       const connectInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`Mongodb connected successfully !! connection Host : ${connectInstance.connection.host}`)
    }
    catch(error){
        console.log(`Mongodb connection failed ,${error}`);
        process.exit(1);
    }
}


export default connectDb;
