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

const genreTvSlice = createSlice({
    name:'genresTv',
    initialState,
    reducers:{
        setStateTv(state, action: PayloadAction<GenreState>) {
            state.data = action.payload.data;
            state.isLoad = action.payload.isLoad;
            state.errors = action.payload.errors;
          },
    }
})

export const {setStateTv} = genreTvSlice.actions
export default genreTvSlice.reducer