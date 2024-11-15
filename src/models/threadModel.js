import mongoose from "mongoose";

const threadSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please fill up the field"],
  },
  description: {
    type: String,
    required: [true, "Please fill up the field"],
  },
  topic: {
    type: String,
    enum: ["Organic Chemistry", "Inorganic Chemistry", "Biochemistry"],
    required: true,
  },
  // userId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'users',
  //   required: true,
  // }, // Store the user ID
});
const Thread =
  mongoose.models.threads || mongoose.model("threads", threadSchema);

module.exports = Thread;