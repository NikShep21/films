import { Movie, Tv } from "@/api/types";

function uniqData(data: Movie | Tv | null, type: 'movie' | 'tv') {
  if (type === 'movie') {
    const movie = data as Movie | null;

    return [
      [
        { label: "Status: ", content: movie?.status ?? null },
        { label: "Release Date: ", content: movie?.release_date ?? null },
        { label: "Runtime: ", content: movie?.runtime ?? null },
      ],
      [
        { label: "Budget: ", content: movie?.budget ?? null },
        { label: "Tagline: ", content: movie?.tagline ?? null },
      ],
      [
        { label: "Country: ", content: movie?.production_countries?.[0]?.name ?? null },
      ],
    ];
  } else {
    const tv = data as Tv | null;

    return [
      [
        { label: "Status: ", content: tv?.status ?? null },
        { label: "Release Date: ", content: tv?.first_air_date ?? null },
        { label: "Runtime: ", content: tv?.episode_run_time?.[0] ?? null },
      ],
      [
        { label: "Episodes: ", content: tv?.number_of_episodes ?? null },
        { label: "Seasons: ", content: tv?.number_of_seasons ?? null },
      ],
      [
        { label: "Country: ", content: tv?.origin_country?.[0] ?? null },
      ],
    ];
  }
}

export default uniqData;
