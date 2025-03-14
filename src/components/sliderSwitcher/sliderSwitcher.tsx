"use client";

import Slider from "../slider/Slider";
import styles from "./SliderSwitcher.module.scss";

import {useRef, useState } from "react";
import Switcher from "../ui/Switcher/Switcher";
import useResponse from "@/hooks/useResponse";
import { useResize } from "@/hooks/useResize";
import { getMassiveTitles } from "@/api/response";
import { MassiveMovie, MassiveTv } from "@/api/types";
import Card from "../card/Card";

interface TypeProps {
  NameCategory: string;
}

const parseTypeTitles: { Movies: "movie"; TV: "tv" } = {
  Movies: "movie",
  TV: "tv",
};

const SliderSwitcher = ({ NameCategory }: TypeProps) => {
  const [selectedTypeTitles, setSelectedTypeTitles] = useState<"Movies" | "TV">(
    "Movies"
  );
const containerRef = useRef<HTMLDivElement>(null)
const { isScreenVsm } = useResize(containerRef);
  const [data, isLoad, errors] = useResponse(
    () => getMassiveTitles(NameCategory, parseTypeTitles[selectedTypeTitles]),
    [selectedTypeTitles]
  );

  function changeStateSwitch(switchName: "Movies" | "TV") {
    setSelectedTypeTitles(switchName);
  }
  return (
    <div ref={containerRef} className={styles.sliderContainer}>
      <div className={styles.containerInfo}>

        <div className={styles.nameCategory}>{NameCategory}</div>
        <Switcher
          typeSwitcher={isScreenVsm ? "dropDown" : "default"}
          funcChangeState={changeStateSwitch}
          params={["Movies", "TV" ]}
        />
      </div>
      <Slider<MassiveMovie | MassiveTv>
        key={selectedTypeTitles}
        data={data}
        isLoad={isLoad}
        maxWidthCard={169}
        renderItem={(item, index, widthCard) => (
          <Card key={index} data={item} widthCard={widthCard} />
        )}
      />
    </div>
  );
};
export default SliderSwitcher;
