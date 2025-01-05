import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../types/todo";

export interface TodoState {
    tasks: Todo[];
}

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        tasks: [] as Todo[],
    },
    reducers: {
        addTask: (state, action: PayloadAction<Todo>) => {
            state.tasks.push(action.payload);
        },
        deleteTask: (state, action: PayloadAction<Todo>) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
        },
        updateTask: (state, action: PayloadAction<Todo>) => {
            const taskIndex = state.tasks.findIndex((task) => task.id === action.payload.id);
            state.tasks[taskIndex] = action.payload;
        }
    },
});


export const { addTask, deleteTask, updateTask } = todoSlice.actions;
export default todoSlice.reducer;