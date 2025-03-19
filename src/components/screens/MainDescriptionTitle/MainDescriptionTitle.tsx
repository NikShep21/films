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
      }
    : {
        title: data.name,
        releaseDate: data.first_air_date, 
        runtime: data.episode_run_time?.[0] || "N/A",
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
              
            
            </div>
        </div>
      </div>
    );
  }


export default MainDescriptionTitle;
