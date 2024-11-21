import axios from "axios";
const defaultPath = 'https://api.themoviedb.org/3'
const imagePath = 'https://image.tmdb.org/t/p'
const api_key = process.env.NEXT_PUBLIC_API_KEY
export async function getMovieMassive (typeReqest:string){
    try{
        
        const response = await axios.get(`${defaultPath}/movie/${typeReqest}?api_key=${api_key}`) 
        
        return response.data.results
        
    }catch(error){
        console.error('Error fetching data:', error);
        throw error;
    }
    
}               