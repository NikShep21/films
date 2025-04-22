import { MassiveMovieType, MassiveTvType } from "@/api/types";
import { NextMiddlewareResult } from "next/dist/server/web/types";
const imagePath = 'https://image.tmdb.org/t/p'
export const isMovie = (data:MassiveMovieType | MassiveTvType): data is MassiveMovieType =>{
    return 'title' in data
}

export const getUrlImage = (path:string, size:string = 'original'):string=>{
    return `${imagePath}/${size}${path}`

}
