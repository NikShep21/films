import React, { useEffect } from "react";
import styles from "./MediaDetail.module.scss";
import { findMediaById, getCredits, getVideos } from "@/api/response";
import useResponse from "@/hooks/useResponse";
import { getUrlImage} from "@/utils/utils";
import MainDescriptionTitle from "../MainDescriptionTitle/MainDescriptionTitle";
interface MediaDetailProps {
  type: "movie" | "tv";
  id: number;
}

const MediaDetail = ({ type, id }: MediaDetailProps) => {
  const [data, isLoad, errors] = useResponse(() => findMediaById(id, type));
  
  const [credits, isLoadCredits, errorsCredits] = useResponse(()=> getCredits(id,type))
  

  if (data) {
    console.log(credits)

    return (
      <>
        <main className={styles.main}>
          <div className={styles.backdropImage}>
            <img
              src={getUrlImage(data.backdrop_path, "original")}
              alt="backdrop"
            />
          </div>
          <MainDescriptionTitle data={data}/>
          <div>
            
          </div>
        </main>
      </>
    );
  }
};

export default MediaDetail;
