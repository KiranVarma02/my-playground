import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { clear } from "console";
import { init } from "next/dist/compiled/webpack/webpack";

interface GenericState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export const genericSlice = createSlice({
    name: "generic",
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        setData: <T>(state: GenericState<T>, action: PayloadAction<T>) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        clearData: (state) => {
            state.data = null;
            state.loading = false;
            state.error = null;
        }
    },
});

export const { setData, clearData } = genericSlice.actions;

export default genericSlice.reducer;