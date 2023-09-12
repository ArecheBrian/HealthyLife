import { configureStore } from "@reduxjs/toolkit";
import alimentosSlice from "../features/alimentosSlice";


export const store = configureStore({
    reducer: {
        alimentos: alimentosSlice
    }
})