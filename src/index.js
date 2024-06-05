import dotenv from "dotenv";
import connectDb from "./db/dbConnection.js";
import { app } from "./app.js";


dotenv.config({
    path:'./.env'
});

connectDb().then(()=>{
    app.on("error", (error) => {
        console.log("ERROR: ", error);
        throw error
    })
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running on PORT : ${process.env.PORT}`);
    });
}).catch((error)=>{ // TODO
    console.log('Server failed to start ',error);
    process.exit(1);
}
);

