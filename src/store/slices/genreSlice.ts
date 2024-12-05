import { createSlice } from "@reduxjs/toolkit";

const initialState:GenreState = {
    genres:[],
    isLoading:false,
    isError:null
}
interface GenreState {
    genres: any;
    isLoading: boolean;
    isError: string | null;
}

const genreSlice = createSlice({
    name: 'genres',
    initialState,
    reducers:{
        setGenres(state,action){
            state.genres = action.payload
        },
        setLoading(state,action){
            state.isLoading = action.payload
        },
        setError(state,action){
            state.isError = action.payload
        }
    }
})
export const {setGenres,setLoading,setError} = genreSlice.actions
export default genreSlice.reducer