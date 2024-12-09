import { configureStore } from "@reduxjs/toolkit";
import genreSlice from "./slices/genreSlice";
export const store = configureStore({
    reducer:{
        genres:genreSlice,
    }
})
export default store
export type RootState = ReturnType<typeof store.getState>;