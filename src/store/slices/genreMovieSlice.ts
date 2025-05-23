import { GenresType } from "@/api/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:GenreState = {
    data:[],
    isLoad:false,
    errors:null
}
interface GenreState {
    data: GenresType[]| null;
    isLoad: boolean;
    errors: Error | null;
}

const genreMovieSlice = createSlice({
    name: 'genres',
    initialState,
    reducers:{
        
        setStateMovie(state, action: PayloadAction<GenreState>) {
            state.data = action.payload.data;
            state.isLoad = action.payload.isLoad;
            state.errors = action.payload.errors;
          },
    }
})

export const {setStateMovie} = genreMovieSlice.actions

export default genreMovieSlice.reducer