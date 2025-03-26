import React, { useEffect } from "react";
import styles from "./MediaDetail.module.scss";
import { findMediaById, getCredits, getGenres, getVideos } from "@/api/response";
import useResponse from "@/hooks/useResponse";
import { getUrlImage} from "@/utils/utils";
import SliderSwitcher from "@/components/sliderSwitcher/SliderSwitcher";
import MainDescriptionTitle from "../MainDescriptionTitle/MainDescriptionTitle";
import { CreditsCast, CreditsCrew } from "@/api/types";
import CardCredit from "@/components/CardsSlider/CardCredit/CardCredit";

interface MediaDetailProps {
  type: "movie" | "tv";
  id: number;
}

const MediaDetail = ({ type, id }: MediaDetailProps) => {
  const [data, isLoad, errors] = useResponse(() => findMediaById(id, type));
  if (data) {
   

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
          <div className={styles.sliderContainer}>
              <SliderSwitcher<CreditsCast|CreditsCrew,'cast'|'crew'>
                nameCategory="Credits"
                paramsSwitcher={['cast','crew']}
               funcResponse={(typeCredits)=>getCredits(id,type,typeCredits)}
              renderItem={(item,index,widthCard) => (
                <CardCredit widthCard={widthCard} key={index} data={item}/>
              )}
              />

          </div>
        </main>
      </>
    );
  }
};

export default MediaDetail;
