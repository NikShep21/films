import { MassiveMovie, MassiveTv } from "@/api/types";
import styles from "./Card.module.scss";
import LoadCard from "../../ui/loadCard/LoadCard";
import { getUrlImage, isMovie } from "@/utils/utils";
import Link from "next/link";
import Score from "../../ui/score/Score";
import Genre from "../../ui/genre/Genre";
import MyImage from "@/components/ui/myImage/MyImage";
interface Props {
  data: MassiveMovie | MassiveTv | null;
  widthCard: number;
}
const Card = ({ data, widthCard }: Props) => {
  if (!data) {
    return (
      <>
        <LoadCard isText={true} aspect="487/731" width={`${widthCard}px`} />
      </>
    );
  } else {
    return (
      <Link
        href={`/${isMovie(data) ? "movie" : "tv"}/${data.id}`}
        className={styles.contentCard}
        onDragStart={(e) => e.preventDefault()}
      >
        <div
          style={{width: `${widthCard}px` }}
          className={styles.card}
        >
          <div className={styles.content}>
            <div className={styles.contentContainer}>
              <Score score={data.vote_average}></Score>
              <div className={styles.genresContainer}>
                {data.genre_ids
                  .slice(0, 2)
                  .map((idGenre: number, id: number) => (
                    <Genre
                      typeGenre={isMovie(data) ? "movie" : "tv"}
                      idGenre={idGenre}
                      key={id}
                    />
                  ))}
              </div>
              <div className={styles.date}>
                {isMovie(data) ? data.release_date : data.first_air_date}
              </div>
            </div>
          </div>
          <MyImage
            className={styles.img}
            width={`${widthCard}px`}
            aspect="487/731"
            src={getUrlImage(data.poster_path, "w500")}
            
          />
        </div>
        <div style={{ width: `${widthCard}px` }} className={styles.nameTitle}>
          {isMovie(data) ? data.title : data.name}
        </div>
      </Link>
    );
  }
};

export default Card;
