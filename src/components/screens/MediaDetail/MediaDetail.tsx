import React, { useEffect } from "react";
import styles from "./MediaDetail.module.scss";
import { findMediaById, getCredits, getGenres, getVideos } from "@/api/response";
import useResponse from "@/hooks/useResponse";
import { getUrlImage} from "@/utils/utils";
import SliderSwitcher from "@/components/sliderSwitcher/SliderSwitcher";
import MainDescriptionTitle from "../MainDescriptionTitle/MainDescriptionTitle";
import { CreditsCast, CreditsCrew } from "@/api/types";
import CardCredit from "@/components/CardsSlider/CardCredit/CardCredit";
import SlidersTitle from "../SlidersTitile/SlidersTitle";

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
          <SlidersTitle type={type} id={id}/>
        </main>
      </>
    );
  }
};

export default MediaDetail;
