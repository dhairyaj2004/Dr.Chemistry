import mongoose from "mongoose";
export const conn="mongodb+srv://dhairyaj2004:Djs@2014@dhairya.0cmkln2.mongodb.net/?retryWrites=true&w=majority&appName=Dhairya"
async function connection() {
  try {
    
    await mongoose.connect(process.env.MONGO_URI);
    mongoose.connection.on("connected", () => {
      console.log("Database Connected");
    });
//     mongoose.connect(process.env.MONGO_URI, )
// .then(() => console.log('Connected to MongoDB'))
// .catch((err) => console.error('Error connecting to MongoDB:', err))
    mongoose.connection.on("error", () => {
      console.log("Something went wrong in Database Connection");
      // process.exit();
    });
  } catch (error) {
    console.log(error);
  }
}
export default connection;
