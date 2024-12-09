import { Genres } from "@/api/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:GenreState = {
    data:[],
    isLoad:false,
    errors:null
}
interface GenreState {
    data: Genres[]| null;
    isLoad: boolean;
    errors: Error | null;
}

const genreSlice = createSlice({
    name: 'genres',
    initialState,
    reducers:{
        
        setState(state, action: PayloadAction<GenreState>) {
            state.data = action.payload.data;
            state.isLoad = action.payload.isLoad;
            state.errors = action.payload.errors;
          },
    }
})
export const {setState} = genreSlice.actions
export default genreSlice.reducer