import { MassiveMovie, MassiveTv } from "@/api/types";

export const isMovie = (data:MassiveMovie | MassiveTv): data is MassiveMovie =>{
    return 'title' in data
}

