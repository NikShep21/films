import axios from "axios";

class Responses{
    private api_key:string
    constructor(){
        this.api_key = process.env.NEXT_PUBLIC_API_KEY || ""
    }
    getId(id:number){
        try{
            const unswer = axios.get(`https://api.themoviedb.org /3/find/${id}?api_key=${this.api_key}`) 
            return unswer
        }catch(error){
            console.error('Error fetching data:', error);
            throw error;
        }
        
       
    }
}