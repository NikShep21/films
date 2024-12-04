'use client'
import { headers } from "next/headers";
import styles from "./BigCard.module.scss";
import CustomLink from "../ui/customLink/CustomLink";
import { useEffect, useRef, useState } from "react";
interface Card {
  card: any;
  isVisibleLink?: boolean;
  swipeCard:(swipe:number)=>void;
  typeImage: 'poster_path'|'backdrop_path';
} 
const imagePath = "https://image.tmdb.org/t/p";

const bigCard = ({ swipeCard,card, typeImage, isVisibleLink = true }: Card) => {
  
  const cardRef = useRef<HTMLDivElement | null>(null) 
  
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
    <div style={typeImage==='backdrop_path'? {aspectRatio:9/5}:{aspectRatio:487/731}} className={styles.card} ref={cardRef}>
      {
        isVisibleLink ?
        null
        :
        <div className={styles.unVisibleShadow}></div>
      }
      
      <div className={typeImage ==='backdrop_path' ? styles.contentContainer:styles.contentContainerMobile}>
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
        src={`${imagePath}/w1280/${card ? card[typeImage] : null}`}
        alt=""
      />
    </div>
  );
};

export default bigCard;
