"use client";
import { getMassiveTitles, getVideos } from "@/api/response";
import {VideoType } from "@/api/types";
import Card from "@/components/CardsSlider/card/Card";
import Slider from "@/components/slider/Slider";
import Switcher from "@/components/ui/Switcher/Switcher";
import { useResize } from "@/hooks/useResize";

import React, { useEffect, useRef, useState } from "react";

import styles from "./SliderVideos.module.scss";
import CardVideo from "@/components/CardsSlider/cardVideo/CardVideo";
import { resourceUsage } from "process";
const SliderPopular = () => {

  const [elems, setElems] = useState<(VideoType | null)[] | null>(null)
  const containerRef = useRef<HTMLDivElement>(null);
  const { widthScreen,isScreenVsm } = useResize(containerRef);
  console.log('screenVid: ' + widthScreen)
  const [isLoad, setIsLoad] = useState(false)
  const media: { type: 'movie' | 'tv'; id: number; original_name: string }[] = [
    { type: 'movie', id: 872585, original_name: 'Oppenheimer' }, 
    { type: 'movie', id: 603692, original_name: 'John Wick: Chapter 4' }, 
    { type: 'movie', id: 866398, original_name: 'The Beekeeper' }, 
    { type: 'movie', id: 787699, original_name: 'Wonka' }, 
    { type: 'movie', id: 1071215, original_name: 'ThanksGiving' }, 
    { type: 'movie', id: 634492, original_name: 'Madame Web' }, 
    { type: 'movie', id: 693134, original_name: 'Dune: Part Two' }, 
    { type: 'movie', id: 438148, original_name: 'Indiana Jones and the Dial of Destiny' }, 
  ];
  
  useEffect(()=>{
    const fetchVideos = async () => {
      setIsLoad(true);
      try {
        const results = await Promise.all(
          media.map(async (item) => { 
            
            const response = await getVideos(item.id, item.type);
            const res = response.find((elem)=> elem.name === 'Official Trailer')
            if(!res){
              return null
            }
            res.name = item.original_name
            return res
          })
          
        );
        
        setElems(results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoad(false);
      }
    };
  
    fetchVideos();
  },[])
 
  
  return (
    
    <div  className={styles.bg}>
      <div ref={containerRef}  className={styles.sliderContainer}>
        <div className={styles.containerInfo}>
          <div className={styles.nameCategory}>Trailers</div>
       
        </div>
        <Slider<VideoType | null>
          data={elems}
          isLoad={isLoad}
          maxWidthCard={400}
          renderItem={(item, index, widthCard) => (
            <CardVideo key={index} data={item} widthCard={widthCard}  />
          )}
        />
      </div>
    </div>
  );
};

export default SliderPopular;
