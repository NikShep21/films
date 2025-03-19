import { getUrlImage, isMovie } from "@/utils/utils";
import styles from "./MainDescriptionTitle.module.scss";
import { Movie, Tv } from "@/api/types";
import Genre from "@/components/ui/genre/Genre";
interface MainDescriptionTitleProps {
  data: Movie | Tv | null;
}

const MainDescriptionTitle = ({ data }: MainDescriptionTitleProps) => {
    console.log(data)
    if (!data) return null;

  const isMovieType = isMovie(data);

  const uniqData = isMovieType
    ? {
        title: data.title,
        releaseDate: data.release_date,
        runtime: data.runtime,
        infoSecondLine1:['111','11'],
        infoSecondLine2:['111','11']
      }
    : {
        title: data.name,
        releaseDate: data.first_air_date, 
        runtime: data.episode_run_time?.[0] || "N/A",
        infoSecondLine1:['Episodes: ',data.number_of_episodes],
        infoSecondLine2: ['Seasons: ',data.number_of_seasons]
      };
    
    
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
                
                {uniqData.title} ({uniqData.releaseDate.slice(0,4)})
            </h1>
            <div className={styles.genres}>
                {
                    data.genres.map((elem,id)=><Genre idGenre={elem.id} typeGenre={isMovie(data) ? 'movie' : 'tv'}/>)
                }
            </div>
            <div className={styles.overviewContainer}>
              <h2>Overview</h2>
              <p className={styles.overview}>
                {data.overview}
              </p>
            </div>
            <div className={styles.statusContainer}>
              <div className={styles.line}>
                <ul>
                  <li>Status: <span>{data.status}</span></li>
                  <li>Release Date: <span>{uniqData.releaseDate}</span></li>
                  <li>Runtime: <span>{uniqData.runtime}</span></li>
                </ul>
                <ul>
                  <li>{uniqData.infoSecondLine1[0]} <span>{uniqData.infoSecondLine1[1]}</span></li>
                  <li>{uniqData.infoSecondLine2[0]} <span>{uniqData.infoSecondLine2[1]}</span></li>
                </ul>
              </div>
                
            </div>
        </div>
      </div>
    );
  }


export default MainDescriptionTitle;
