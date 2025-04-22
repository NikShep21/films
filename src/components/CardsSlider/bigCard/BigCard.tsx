"use client";
import { headers } from "next/headers";
import styles from "./BigCard.module.scss";
import CustomLink from "../../ui/customLink/CustomLink";
import { useEffect, useRef, useState } from "react";
import Genre from "../../ui/genre/Genre";
import Score from "../../ui/score/Score";
import { getUrlImage } from "@/utils/utils";
import LoadCard from "../../ui/loadCard/LoadCard";
import MyImage from "@/components/ui/myImage/MyImage";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder/ImagePlaceholder";
import { DiIe } from "react-icons/di";
interface Card {
  card: any;
  isVisibleLink?: boolean;
  swipeCard: (swipe: number) => void;
  typeImage: "poster_path" | "backdrop_path";
  aspect: string;
  aspectMobile: string;
}


const bigCard = ({
  swipeCard,
  card,
  typeImage,
  isVisibleLink = true,
  aspect,
  aspectMobile,
}: Card) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (cardRef.current) {
      swipeCard(cardRef.current.getBoundingClientRect().width);
    }
    const handleResize = () => {
      if (cardRef.current) {
        swipeCard(cardRef.current.getBoundingClientRect().width);
      }
    };
    window.addEventListener("resize", handleResize);
  }, []);
  if (card === undefined) {
    return (
      <div className={styles.card}>

        <LoadCard
          borderRadius="8px"
          ref={cardRef}
          aspect={typeImage === "backdrop_path" ? aspect : aspectMobile}
          width="100%"
        />
      </div>
    );
  }
  return (
    <div
      style={
        typeImage === "backdrop_path"
          ? { aspectRatio: 9 / 5 }
          : { aspectRatio: 487 / 731 }
      }
      className={styles.card}
      ref={cardRef}
    >
      {isVisibleLink ? null : <div className={styles.unVisibleShadow}></div>}

      <div
        className={
          typeImage === "backdrop_path"
            ? styles.contentContainer
            : styles.contentContainerMobile
        }
      >
        <div className={styles.content}>
          <div className={styles.genresContainer}>
            {card.genre_ids.map((idGenre: number, id: number) => (
              <Genre typeGenre="movie" idGenre={idGenre} key={id} />
            ))}
          </div>
          <div className={styles.name}>
            {card.title}
            <Score className={styles.score} score={card.vote_average} />
          </div>

          <CustomLink
            style={{ visibility: isVisibleLink ? "visible" : "hidden" }}
            className={styles.link}
            href="#"
          >
            watch movie
          </CustomLink>
        </div>
      </div>
      {
        card[typeImage] ? 
        <MyImage
        width="1280px"
        aspect={aspect}
        borderRadius="8px"
        className={styles.img}
        src={getUrlImage(card[typeImage], "w1280")}
        alt=""
      />
      :
      <ImagePlaceholder width={1280} aspectRatio={aspect}>No Image </ImagePlaceholder>
      }
      
    </div>
  );
};

export default bigCard;
