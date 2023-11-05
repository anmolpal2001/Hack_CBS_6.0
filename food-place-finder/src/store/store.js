import { configureStore } from "@reduxjs/toolkit";
import allResReducer from "../Features/allRes";
export const store=configureStore({
    reducer:{
        allRes:allResReducer,
    }
})