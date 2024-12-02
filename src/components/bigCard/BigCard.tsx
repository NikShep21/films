'use client'
import { headers } from "next/headers";
import styles from "./BigCard.module.scss";
import CustomLink from "../ui/customLink/CustomLink";
import { useEffect, useRef, useState } from "react";
interface Card {
  card: any;
  isVisibleLink?: boolean;
  swipeCard:(swipe:number)=>void
} 
const imagePath = "https://image.tmdb.org/t/p";

const bigCard = ({ swipeCard,card, isVisibleLink = true }: Card) => {
  
  const cardRef = useRef<HTMLElement | null>(null) 
  
  useEffect(()=>{
    if(cardRef.current){
      swipeCard(cardRef.current.getBoundingClientRect().width)
    }
    const handleResize = () =>{
      if(cardRef.current){
        swipeCard(cardRef.current.getBoundingClientRect().width)
      }
    }
    window.addEventListener('resize', handleResize)
  },[])
  if (!card) {
    return <div className={styles.voidCard}></div>;
  }
  return (
    <div className={styles.card} ref={cardRef}>
      {
        isVisibleLink ?
        null
        :
        <div className={styles.unVisibleShadow}></div>
      }
      
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <div className={styles.name}>{card.title}</div>

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
        src={`${imagePath}/w1280/${card ? card.backdrop_path : null}`}
        alt=""
      />
    </div>
  );
};

export default bigCard;
