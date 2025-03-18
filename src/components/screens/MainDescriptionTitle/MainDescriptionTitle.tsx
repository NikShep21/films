import { getUrlImage, isMovie } from "@/utils/utils";
import styles from "./MainDescriptionTitle.module.scss";
import { Movie, Tv } from "@/api/types";
import Genre from "@/components/ui/genre/Genre";
interface MainDescriptionTitleProps {
  data: Movie | Tv | null;
}

const MainDescriptionTitle = ({ data }: MainDescriptionTitleProps) => {
    console.log(data)
  if (data) {
    const title = isMovie(data) ? data.title : data.name;
    const releaseDate = isMovie(data) ? data.release_date : data.first_air_date;
    const runtime = isMovie(data) ? data.runtime : data.episode_run_time[0];
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
                {title} ({releaseDate.slice(0,4)})
            </h1>
            <div className={styles.genres}>
                {
                    data.genres.map((elem,id)=><Genre idGenre={elem.id} typeGenre={isMovie(data) ? 'movie' : 'tv'}/>)
                }
            </div>
        </div>
      </div>
    );
  }
};

export default MainDescriptionTitle;
