import { UUID } from "mongodb";
import { Priority } from "./priority";

export interface Todo {
    id: UUID;
    taskName: string;
    description: string;
    date: Date;
    priority: Priority
    completed: boolean;
    reminders: Date[];
}