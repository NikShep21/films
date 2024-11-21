'use client'
import CustomLink from "@/components/ui/customLink/CustomLink";
import styles from "./MainPoster.module.scss";
import { getMovieMassive } from "@/api/response";
import useResponse from "@/hooks/useResponse";
import Slider from "@/components/mainSlider/MainSlider";

const MainPoster = () => {
  
  
  return (
    
    <section className={styles.mainPoster}>
    <Slider></Slider>
     
    </section>
  );
};

export default MainPoster;
