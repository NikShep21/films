import { getVideos } from "@/api/response";
import styles from "./SliderVideoPeoples.module.scss";
import useResponse from "@/hooks/useResponse";
import Switcher from "@/components/ui/Switcher/Switcher";

import { VideoType } from "@/api/types";
import Slider from "@/components/slider/Slider";
import CardVideo from "@/components/CardsSlider/cardVideo/CardVideo";
import { useEffect, useState } from "react";
interface Props {
  id: number;
  type: "movie" | "tv";
}
const SliderVideoPeoples = ({ id, type }: Props) => {
  const [data, isLoad, errors] = useResponse(() => getVideos(id, type));
 
  
  
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.containerInfo}>
        <div className={styles.nameCategory}>Videos</div>
      </div>
      <Slider<VideoType>
        data={data? data.slice(0,10):data}
        isLoad={isLoad}
        maxWidthCard={400}
        renderItem={(item, index, widthCard) => (
          <CardVideo key={index} data={item} widthCard={widthCard} />
        )}
      />
    </div>
  );
};
export default SliderVideoPeoples;
