"use client";

import styles from "./Poster.module.scss";
import { getMassiveTitles } from "@/api/response";
import { MassiveMovie, MassiveTv } from "@/api/types";
import Card from "@/components/CardsSlider/card/Card";
import SliderSwitcher from "@/components/sliderSwitcher/SliderSwitcher";

const Poster = () => {
  return (
    <div className={styles.posterContainer}>
      <SliderSwitcher<MassiveMovie|MassiveTv, 'movie'|'tv'>
        nameCategory="popular"
        paramsSwitcher={['movie','tv']}
        funcResponse={(type) => getMassiveTitles("popular", type)}
        renderItem={(item, index, widthCard) => (
          <Card key={index} data={item} widthCard={widthCard} />
        )}
      />
      <SliderSwitcher<MassiveMovie|MassiveTv, 'movie'|'tv'>
        nameCategory="top_rated"
        paramsSwitcher={['movie','tv']}
        funcResponse={(type) => getMassiveTitles("top_rated", type)}
        renderItem={(item, index, widthCard) => (
          <Card key={index} data={item} widthCard={widthCard} />
        )}
      />
      <SliderSwitcher<MassiveMovie|MassiveTv, 'movie'|'tv'>
        nameCategory="now_playing"
        paramsSwitcher={['movie','tv']}
        funcResponse={(type) => getMassiveTitles("now_playing", type)}
        renderItem={(item, index, widthCard) => (
          <Card key={index} data={item} widthCard={widthCard} />
        )}
      />
    </div>
  );
};

export default Poster;