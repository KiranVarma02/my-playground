import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import genericReducer from './genericSlice';

const store = configureStore({
    reducer: {
        todo: todoReducer,
        generic: genericReducer,
    },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
