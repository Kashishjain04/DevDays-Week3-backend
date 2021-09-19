import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  assignmentURL: {
    type: String,
    required: true,
  },
});

export default mongoose.model("assignment", assignmentSchema);
