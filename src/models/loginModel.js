import mongoose from "mongoose";

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please fill up the filled"],
  },
  username: {
    type: String,
    required: [true, "Please fill up the filled"],
    unquie: true,
  },
  password: {
    type: String,
    required: [true, "Please fill up the filled"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});
const User = mongoose.models.users || mongoose.model("users", schema);
// Here mongoDB don't if there is model named user is created or not so that we wrote mongoose.models.users if not then it gives undefined and new model is created by other condn
export default User;
