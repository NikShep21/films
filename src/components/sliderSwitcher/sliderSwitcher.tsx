"use client";

import Slider from "../slider/Slider";
import styles from "./SliderSwitcher.module.scss";
import { useRef, useState } from "react";
import Switcher from "../ui/Switcher/Switcher";
import useResponse from "@/hooks/useResponse";
import { useResize } from "@/hooks/useResize";

interface TypeProps<T, S extends string> {
  funcResponse:(type:S)=>Promise<T[]>,
  paramsSwitcher:S[],
  nameCategory:string
  renderItem: (item: T | null, index: number, widthCard: number ) => JSX.Element;
}


const SliderSwitcher = <T, S extends string>({ funcResponse, paramsSwitcher,renderItem, nameCategory }: TypeProps<T, S>) => {
  const [selectedTypeTitles, setSelectedTypeTitles] = useState<S>(
    paramsSwitcher[0]
  ); 
  const containerRef = useRef<HTMLDivElement>(null);
  const { isScreenVsm } = useResize(containerRef);
  const [data, isLoad, errors] = useResponse(
    () => funcResponse(selectedTypeTitles),
    [selectedTypeTitles]
  );

  function changeStateSwitch(switchName:S) {
    setSelectedTypeTitles(switchName);
  }
  return (
    <div ref={containerRef} className={styles.sliderContainer}>
      <div className={styles.containerInfo}>
        <div className={styles.nameCategory}>{nameCategory}</div>
        <Switcher
          typeSwitcher={isScreenVsm ? "dropDown" : "default"}
          funcChangeState={changeStateSwitch}
          params={paramsSwitcher}
        />
      </div>
      <Slider<T>
        key={selectedTypeTitles}
        data={data}
        isLoad={isLoad}
        maxWidthCard={169}
        renderItem={renderItem}
      />
    </div>
  );
};
export default SliderSwitcher;
