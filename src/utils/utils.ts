import { MassiveMovie, MassiveTv } from "@/api/types";
const imagePath = 'https://image.tmdb.org/t/p'
export const isMovie = (data:MassiveMovie | MassiveTv): data is MassiveMovie =>{
    return 'title' in data
}

export const getUrlImage = (path:string,size:string = 'original'):string=>{
    
    return `${imagePath}/${size}${path}`

}
