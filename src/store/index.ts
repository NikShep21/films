import { configureStore } from "@reduxjs/toolkit";
import genreMovieSlice from "./slices/genreMovieSlice";
import genreTvSlice from "./slices/genreTvSlice";
export const store = configureStore({
  reducer: {
    genresMovie: genreMovieSlice,
    genresTv: genreTvSlice,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
