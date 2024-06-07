import mongoose from "mongoose";
async function connection(){
    try {
        const conn=mongoose.connect(process.env.MONGO_URL)
        conn.on("connect",()=>{
            console.log("Database Connected");
        })
        conn.on("error",()=>{
            console.log("Something went wrong in Database Connection");
            process.exit()
        })
    } catch (error) {
        console.log(error);
    }
}
export default connection;