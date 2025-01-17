import { UUID } from "mongodb";
import mongoose from "mongoose";
import { Todo } from "../types/todo";

const todoSchema = new mongoose.Schema<Todo>({
    id: {
        type: UUID,
        required: true,
    },
    taskName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    date: {
        type: Date,
    },
    priority: {
        type: String,
    },
    completed: {
        type: Boolean,
    },
    reminders: {
        type: [Date],
    },
});

export default mongoose.models.Todo || mongoose.model<Todo>("Todo", todoSchema);