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
    origin_country: string[];
    original_name: string;
    seasons: any[];
    type: string;
}
