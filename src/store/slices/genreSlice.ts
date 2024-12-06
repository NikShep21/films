import { Genres } from "@/api/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:GenreState = {
    genres:[],
    isLoading:false,
    isError:null
}
interface GenreState {
    genres: Genres[];
    isLoading: boolean;
    isError: string | null;
}

const genreSlice = createSlice({
    name: 'genres',
    initialState,
    reducers:{
        
        setState(state, action: PayloadAction<GenreState>) {
            state.genres = action.payload.genres;
            state.isLoading = action.payload.isLoading;
            state.isError = action.payload.isError;
          },
    }
})
export const {setState} = genreSlice.actions
export default genreSlice.reducer