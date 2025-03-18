"use client";
import CustomLink from "@/components/ui/customLink/CustomLink";
import styles from "./MainPoster.module.scss";

import { getMassiveTitles } from "@/api/response";

import useResponse from "@/hooks/useResponse";
import MainSlider from "@/components/mainSlider/MainSlider";
import { MassiveMovie, MassiveTv } from "@/api/types";

const aspect = "9/5";
const aspectMobile = "487/731";
const MainPoster = () => {
  const [data, isLoad, errors] = useResponse(() =>
    getMassiveTitles("top_rated", "movie")
  );

  return (
    <>
      <section className={styles.mainPoster}>
        <MainSlider
          aspect={aspect}
          aspectMobile={aspectMobile}
          data={data}
          isLoad={isLoad}
        ></MainSlider>
      </section>
    </>
  );
};

export default MainPoster;
