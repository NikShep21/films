"use client";
import { headers } from "next/headers";
import styles from "./BigCard.module.scss";
import CustomLink from "../ui/customLink/CustomLink";
import { useEffect, useRef, useState } from "react";
import Genre from "../ui/genre/Genre";
import Score from "../ui/score/Score";
import LoadCard from "../ui/loadCard/LoadCard";
interface Card {
  card: any;
  isVisibleLink?: boolean;
  swipeCard: (swipe: number) => void;
  typeImage: "poster_path" | "backdrop_path";
  aspect: string;
  aspectMobile: string;
}
const imagePath = "https://image.tmdb.org/t/p";

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
      <LoadCard
        ref={cardRef}
        aspect={typeImage === "backdrop_path" ? aspect : aspectMobile}
        width="auto"
      />
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
            {card !== null
              ? card.genre_ids.map((idGenre: number, id: number) => (
                  <Genre idGenre={idGenre} key={id} />
                ))
              : null}
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
      <img
        className={styles.img}
        src={`${imagePath}/w1280/${card ? card[typeImage] : null}`}
        alt=""
      />
    </div>
  );
};

export default bigCard;
