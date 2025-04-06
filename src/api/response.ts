import axios from "axios";
import { MassiveMovie,Genres, MassiveTv, Movie, Tv, Credits, CreditsCrew, CreditsCast, CreditsGeneral, VideoType } from "./types";
const defaultPath = 'https://api.themoviedb.org/3'
const imagePath = 'https://image.tmdb.org/t/p'
const api_key = process.env.NEXT_PUBLIC_API_KEY


export async function getMassiveTitles<T extends 'tv' | 'movie'>(
    typeRequest: string,
    typeTitle: T
): Promise<T extends 'tv' ? MassiveTv[] : MassiveMovie[]> {
    
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
export async function getTrending(time:'day'|'week'): Promise<(MassiveMovie | MassiveTv)[]>{
    try{
        const response = await axios.get(`${defaultPath}/trending/all/${time}?api_key=${api_key}`)
        const data = response.data.results.filter((item:MassiveMovie | MassiveTv | CreditsGeneral)=> 'vote_average' in item )// проверяем, чтобы это был не фильм или сериал)
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

export async function findMediaById<T extends 'movie' | 'tv'>(id:number,type:T): Promise<T extends 'movie' ? Movie : Tv>{
    try{
        const response = await axios.get(`${defaultPath}/${type}/${id}?api_key=${api_key}`)
        return response.data
    }
    catch(error){
        console.error('Error fetching data:', error);
        throw error;
    }
}   
export async function getCredits<T extends 'crew'|'cast'>(id:number, type:'movie' | 'tv',typeCredits:T):Promise<T extends 'crew' ? CreditsCrew[] : CreditsCast[]>{
    try{
        const response = await axios.get(`${defaultPath}/${type}/${id}/credits?api_key=${api_key}`)
        return response.data[typeCredits] as T extends 'crew' ? CreditsCrew[] : CreditsCast[];
    }
    catch(error){
        console.error('Error fetching data:', error);
        throw error;
    }
}
export async function getVideos(id:number,type:'movie'|'tv'):Promise<VideoType[]>{
    try{
        const response = await axios.get(`${defaultPath}/${type}/${id}/videos?api_key=${api_key}`)
        console.log(response.data)
        return response.data.results
    }
    catch(error){
        console.error('Error fetching data:', error);
        throw error;
    }
}
