"use client";
import CustomLink from "@/components/ui/customLink/CustomLink";
import styles from "./MainPoster.module.scss";
import { getMovieMassive } from "@/api/response";
import useResponse from "@/hooks/useResponse";
import MainSlider from "@/components/mainSlider/MainSlider";

const MainPoster = () => {
  return (
    <section className={styles.mainPoster}>
      <MainSlider typeFilms="top_rated"></MainSlider>
    </section>
  );
};

export default MainPoster;
