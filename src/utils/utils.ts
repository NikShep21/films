import { MassiveMovie, MassiveTv } from "@/api/types";
import { NextMiddlewareResult } from "next/dist/server/web/types";
const imagePath = 'https://image.tmdb.org/t/p'
export const isMovie = (data:MassiveMovie | MassiveTv): data is MassiveMovie =>{
    return 'title' in data
}

export const getUrlImage = (path:string|NextMiddlewareResult, size:string = 'original'):string=>{
    if (!path) return ''
    return `${imagePath}/${size}${path}`

}
