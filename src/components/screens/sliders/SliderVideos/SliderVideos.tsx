"use client";
import { getMassiveTitles } from "@/api/response";
import { MassiveMovie, MassiveTv } from "@/api/types";
import Card from "@/components/CardsSlider/card/Card";
import Slider from "@/components/slider/Slider";
import Switcher from "@/components/ui/Switcher/Switcher";
import { useResize } from "@/hooks/useResize";
import useResponse from "@/hooks/useResponse";
import React, { useRef, useState } from "react";

import styles from "./SliderVideos.module.scss";
const SliderPopular = () => {
  const [typeTitle, setTypeTitle] = useState<"Movie" | "Tv">("Movie");

  const [data, isLoad, errors] = useResponse(
    () => getMassiveTitles("popular", typeTitle == "Movie" ? "movie" : "tv"),
    [typeTitle]
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const { isScreenVsm } = useResize(containerRef);
  function setType(switchName: "Movie" | "Tv") {
    setTypeTitle(switchName);
  }

  return (
    <div className={styles.bg}>
      <div ref={containerRef} className={styles.sliderContainer}>
        <div className={styles.containerInfo}>
          <div className={styles.nameCategory}>Popular</div>
          <Switcher
            typeSwitcher={isScreenVsm ? "dropDown" : "default"}
            funcChangeState={setType}
            params={["Movie", "Tv"]}
          />
        </div>
        <Slider<MassiveMovie | MassiveTv>
          data={data}
          isLoad={isLoad}
          maxWidthCard={169}
          renderItem={(item, index, widthCard) => (
            <Card key={index} data={item} widthCard={widthCard} />
          )}
        />
      </div>
    </div>
  );
};

export default SliderPopular;
