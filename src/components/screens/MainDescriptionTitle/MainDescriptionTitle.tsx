import { getUrlImage, isMovie } from "@/utils/utils";
import styles from "./MainDescriptionTitle.module.scss";
import { Movie, Tv } from "@/api/types";
import Genre from "@/components/ui/genre/Genre";
interface MainDescriptionTitleProps {
  data: Movie | Tv | null;
}

const MainDescriptionTitle = ({ data }: MainDescriptionTitleProps) => {
  
  if (!data) return null;

  const isMovieType = isMovie(data);
  
  const uniqData = [
    [
      { label: "Status: ", content: data.status },
      { label: "Release Date: ", content: isMovieType ? data.release_date : data.first_air_date },
      { label: "Runtime: ", content: isMovieType ? data.runtime : data.episode_run_time?.[0] || "N/A" },
    ],
    [
      { label: isMovieType ? "Budget: " : "Episodes: ", content: isMovieType ? data.budget : data.number_of_episodes },
      { label: isMovieType ? "Tagline: " : "Seasons: ", content: isMovieType ? data.tagline || "N/A" : data.number_of_seasons },
    ],
    [
      { label: "Country: ", content: data.origin_country?.[0] || "N/A" },
    ],
  ];
  

  return (
    <div className={styles.descriptionContainer}>
      <div className={styles.titleImageContainer}>
        {data ? (
          <img
            className={styles.image}
            src={getUrlImage(data.poster_path, "w342")}
            alt="poster"
          />
        ) : null}
      </div>
      <div className={styles.titleInfoContainer}>
        <h1>
          {isMovieType ? data.title : data.name} ({(isMovieType ? data.release_date : data.first_air_date).slice(0, 4)})
        </h1>
        <div className={styles.genres}>
          {data.genres.map((elem, id) => (
            <Genre
              idGenre={elem.id}
              typeGenre={isMovie(data) ? "movie" : "tv"}
            />
          ))}
        </div>
        <div className={styles.overviewContainer}>
          <h2>Overview</h2>
          <p className={styles.overview}>{data.overview}</p>
        </div>
        <div className={styles.statusContainer}>
          <div className={styles.line}>
            {
              uniqData.map((group,id)=>(
                <ul key={id}>
                  {
                    group.map((item,subId)=>(
                      <li key={subId}>
                        {item.label} <span>{item.content}</span>
                      </li>
                    ))
                  }
                </ul>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDescriptionTitle;
