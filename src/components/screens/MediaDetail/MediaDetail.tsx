import React from "react";
import styles from "./MediaDetail.module.scss";
import { findMediaById} from "@/api/response";
import useResponse from "@/hooks/useResponse";
import { getUrlImage} from "@/utils/utils";

import MainDescriptionTitle from "../MainDescriptionTitle/MainDescriptionTitle";
import { CreditsCast, CreditsCrew } from "@/api/types";
import CardCredit from "@/components/CardsSlider/CardCredit/CardCredit";

import SliderCredits from "../sliders/sliderCredits/sliderCredits";

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
          <div className={styles.content}>
            <MainDescriptionTitle data={data}/>
            <div className={styles.slidersContainer}>
              <SliderCredits id={id} type={type}/>
            </div>
          </div>
          
          
        </main>
      </>
    );
  }
};

export default MediaDetail;
