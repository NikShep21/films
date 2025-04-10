"use client";
import { getMassiveTitles, getVideos } from "@/api/response";
import { MassiveMovie, MassiveTv, VideoType } from "@/api/types";
import Card from "@/components/CardsSlider/card/Card";
import Slider from "@/components/slider/Slider";
import Switcher from "@/components/ui/Switcher/Switcher";
import { useResize } from "@/hooks/useResize";

import React, { useEffect, useRef, useState } from "react";

import styles from "./SliderVideos.module.scss";
import CardVideo from "@/components/CardsSlider/cardVideo/CardVideo";
const SliderPopular = () => {
  const [typeTitle, setTypeTitle] = useState<"Movie" | "Tv">("Movie");
  const [elems, setElems] = useState<null|VideoType[][]>(null)
  console.log(elems)
  const [isLoad, setIsLoad] = useState(false)
  const media:{type:'movie'|'tv', id:number}[] = [
    { type: 'movie', id: 872585 }, // Oppenheimer (2023)
    { type: 'movie', id: 603692 }, // John Wick: Chapter 4 (2023)
    { type: 'movie', id: 346698 }, // Barbie (2023)
    { type: 'movie', id: 693134 }, // Dune: Part Two (2023)
    { type: 'movie', id: 438148 }, // Indiana Jones and the Dial of Destiny (2023)
  ];
  
  useEffect(()=>{
    const fetchVideos = async () => {
      setIsLoad(true);
      try {
        const results = await Promise.all(
          media.map((item) => getVideos(item.id, item.type))
          
        );
        console.log('try')
        setElems(results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoad(false);
      }
    };
  
    fetchVideos();
  },[])
 

 
  const containerRef = useRef<HTMLDivElement>(null);
  const { isScreenVsm } = useResize(containerRef);
  function setType(switchName: "Movie" | "Tv") {
    setTypeTitle(switchName);
  }

  return (
    
    <div className={styles.bg}>
      <div ref={containerRef} className={styles.sliderContainer}>
        <div className={styles.containerInfo}>
          <div className={styles.nameCategory}>Videos</div>
       
        </div>
        <Slider<VideoType[]>
          data={elems}
          isLoad={isLoad}
          maxWidthCard={400}
          renderItem={(item, index, widthCard) => (
            <CardVideo key={index} data={item} widthCard={widthCard} type="Trailer"  />
          )}
        />
      </div>
    </div>
  );
};

export default SliderPopular;
