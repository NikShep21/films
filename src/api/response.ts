import axios from "axios";
import { MassiveMovieType,GenresType, MassiveTvType, MovieType, TvType, CreditsType, CreditsCrewType, CreditsCastType, CreditsGeneralType, VideoType, ReviewType } from "./types";
const defaultPath = 'https://api.themoviedb.org/3'
const api_key = process.env.NEXT_PUBLIC_API_KEY


export async function getMassiveTitles<T extends 'tv' | 'movie'>(
    typeRequest: string,
    typeTitle: T
): Promise<T extends 'tv' ? MassiveTvType[] : MassiveMovieType[]> {
    
    try {
        const response = await axios.get(
            `${defaultPath}/${typeTitle}/${typeRequest}?api_key=${api_key}`
        );
        return response.data.results;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
export async function getTrending(time:'day'|'week'): Promise<(MassiveMovieType | MassiveTvType)[]>{
    try{
        const response = await axios.get(`${defaultPath}/trending/all/${time}?api_key=${api_key}`)
        const data = response.data.results.filter((item:MassiveMovieType | MassiveTvType | CreditsGeneralType)=> 'vote_average' in item )// проверяем, чтобы это был не фильм или сериал)
        return data
    }
    catch(error){
        console.error('Error fetching data:', error);
        throw error;
    }

}

export async function getGenres(typeGenre:'movie'|'tv'){

    try{
        
        const response = await axios.get(`${defaultPath}/genre/${typeGenre}/list?api_key=${api_key}`)
        
        return response.data.genres
    }
    catch(error){
        console.error('Error fetching data:', error);
        throw error;
    }
    
}

export async function findMediaById<T extends 'movie' | 'tv'>(id:number,type:T): Promise<T extends 'movie' ? MovieType : TvType>{
    try{
        const response = await axios.get(`${defaultPath}/${type}/${id}?api_key=${api_key}`)
        return response.data
    }
    catch(error){
        console.error('Error fetching data:', error);
        throw error;
    }
}   
export async function getCredits<T extends 'crew'|'cast'>(id:number, type:'movie' | 'tv',typeCredits:T):Promise<T extends 'crew' ? CreditsCrewType[] : CreditsCastType[]>{
    try{
        const response = await axios.get(`${defaultPath}/${type}/${id}/credits?api_key=${api_key}`)
        return response.data[typeCredits] as T extends 'crew' ? CreditsCrewType[] : CreditsCastType[];
    }
    catch(error){
        console.error('Error fetching data:', error);
        throw error;
    }
}
export async function getVideos(id:number,type:'movie'|'tv'):Promise<VideoType[]>{
    try{
        const response = await axios.get(`${defaultPath}/${type}/${id}/videos?api_key=${api_key}`)
        return response.data.results
    }
    catch(error){
        console.error('Error fetching data:', error);
        throw error;
    }
}
export async function getSimilar<T extends 'movie' | 'tv'>(id:number, type:T):Promise<T extends 'movie' ? MassiveMovieType[] : MassiveTvType[]>{
    try {
        const response = await axios.get(
            `${defaultPath}/${type}/${id}/similar?api_key=${api_key}`
        );
        return response.data.results;
    } catch(error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
export async function getReviews(id:number, type:'movie'|'tv'):Promise<ReviewType[]> {
    try {
        const response = await axios.get(
            `${defaultPath}/${type}/${id}/reviews?api_key=${api_key}`
        );
        return response.data.results;
    } catch(error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
