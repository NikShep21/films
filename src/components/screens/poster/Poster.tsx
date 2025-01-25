"use client";

import styles from "./Poster.module.scss";

import SliderSwitcher from "@/components/sliderSwitcher/sliderSwitcher";

const Poster = () => {
  return (
    <>
    <div className={styles.posterContainer}>
      <SliderSwitcher NameCategory="popular" />
      <SliderSwitcher NameCategory="top_rated" />
      <SliderSwitcher NameCategory="now_playing" />
    </div>
      
    </>
  );
};
export default Poster;
