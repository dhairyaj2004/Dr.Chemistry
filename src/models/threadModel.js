import mongoose from "mongoose";

const threadSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    enum: ["Organic Chemistry", "Inorganic Chemistry", "Biochemistry"],
    required: true,
  },
  ownerEmail: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Thread || mongoose.model("Thread", threadSchema);
