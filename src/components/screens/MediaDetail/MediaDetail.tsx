import React from "react";
import styles from "./MediaDetail.module.scss";
import { findMediaById} from "@/api/response";
import useResponse from "@/hooks/useResponse";
import { getUrlImage} from "@/utils/utils";
import MainDescriptionTitle from "../MainDescriptionTitle/MainDescriptionTitle";
import SliderCredits from "../sliders/sliderCredits/sliderCredits";
import SliderVideoPeoples from "../sliders/sliderVideoPeoples/SliderVideoPeoples";
import SliderSimilar from "../sliders/SliderSimilar/SliderSimilar";
import Reviews from "@/components/Reviews/Reviews";

interface MediaDetailProps {
  type: "movie" | "tv";
  id: number;
}

const MediaDetail = ({ type, id }: MediaDetailProps) => {
  const [data, isLoad, errors] = useResponse(() => findMediaById(id, type));

  return (
    <>
      <main className={styles.main}>
        <div className={styles.backdropImage}>
          {
            data ? 
            (
              <img
            src={getUrlImage(data.backdrop_path, "original")}
            alt="backdrop"
          />
            )
            :null
          }
          
        </div>
        <div className={styles.content}>
          <MainDescriptionTitle data={data} type={type}/>
          <div className={styles.slidersContainer}>
            <SliderCredits id={id} type={type}/>
            <SliderVideoPeoples id={id} type={type}/>
            <SliderSimilar id={id} type={type}/>
          </div>
          
          
        </div>
        
        
      </main>
    </>
  );
}


export default MediaDetail;
