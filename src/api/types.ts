import { off } from "process";

//неправильные типы !!!!!!!
interface BaseMedia {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
}
export interface VideoType{
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    key: string;
    name: string;
    offical: boolean;
    published_at: string;
    site: string;
    size: number;
    type: string;
}
export interface MassiveMovie extends BaseMedia {
    original_title: string;
    title: string;
    release_date: string;
    video: boolean;
}

export interface MassiveTv extends BaseMedia {
    first_air_date: string;
    name: string;
    origin_country: string[];
    original_name: string;
}

interface Creators {
    credit_id: string;
    gender: number;
    id: number;
    name: string;
    original_name: string;
}

export interface Genres {
    id: number;
    name: string;
}

interface DetailedMedia extends BaseMedia {
    genres: Genres[];
    homepage: string;
    production_companies: any[];
    production_countries: any[];
    origin_country: string[];
    spoken_languages: any[];
    status: string; 
    tagline: string;
}

export interface Movie extends DetailedMedia {
    belongs_to_collection: any;
    budget: number;
    imdb_id: string;
    original_title: string;
    release_date: string;
    revenue: number;
    runtime: number;
    title: string;
    video: boolean;
}
export interface CreditsCast extends CreditsGeneral{
    cast_id:number,
    character:string,
    order: number
    credit_id: string,
}
export interface CreditsCrew extends CreditsGeneral{
    department:string,
    job:string
    credit_id: string,
}
export interface CreditsGeneral {
    adult: boolean,
    gender: number,
    id:number,
    known_for_department:string,
    name:string,
    original_name: string,
    popularity:number,
    profile_path:string,
    
}
export interface Credits{
    cast:CreditsCast[],
    crew:CreditsCrew[],

}
export interface Tv extends DetailedMedia {
    created_by: Creators[];
    episode_run_time: number[];
    first_air_date: string;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    last_episode_to_air: any;
    name: string;
    networks: any[];
    next_episode_to_air: any;
    number_of_episodes: number;
    number_of_seasons: number;
    
    original_name: string;
    seasons: any[];
    type: string;
}
