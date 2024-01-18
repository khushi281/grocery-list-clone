import { configureStore } from "@reduxjs/toolkit";
import groceryReducer from "./grocery/grocerySlice";

const store = configureStore({
    reducer: {
        grocerys:groceryReducer,
    }
})

export default store