import { Priority } from "./priority";

export interface Todo {
    id: string;
    title: string;
    description: string;
    date: Date;
    priority: Priority
    completed: boolean;
    reminders: Date[];
}