import { UUID } from "mongodb";
import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  id: {
    type: UUID,
    required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    priority: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        required: true,
    },
    reminders: {
        type: [Date],
        required: true,
    },
});

export default mongoose.model("Todo", todoSchema);