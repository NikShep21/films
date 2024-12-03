"use client";
import styles from "./MainSlider.module.scss";
import { getMovieMassive } from "@/api/response";
import useResponse from "@/hooks/useResponse";
import BigCard from "../bigCard/BigCard";
import { useEffect, useState } from "react";
import ButtonSlider from "../ui/buttonSlider/ButtonSlider";
import { MassiveMovie } from "@/api/types";

interface SliderType {
  typeFilms: "now_playing" | "popular" | "top_rated" | "upcoming";
  speedAnimation?: number;
}

const Slider = ({ typeFilms, speedAnimation = 400 }: SliderType) => {
  const [activeElem, setActiveElem] = useState<number>(2);
  const [isLoad, errors, data] = useResponse<MassiveMovie[]>(
    getMovieMassive,
    typeFilms
  );
  const [isAnimation, setIsAnimation] = useState<boolean>(true);
  const [sliderElem, setSliderElem] = useState<(MassiveMovie | undefined)[]>(
    Array(20).fill(undefined)
  );
  const [flagAnimation, setFlagAnimation] = useState<boolean>(false);
  const [widthCard, setWidthCard] = useState<number>(900);
  const [startX, setStartX] = useState<number>(0)
  const [isSwiping, setIsSwiping] = useState<boolean>(false)
  const offset = activeElem * -(40 + widthCard);

  
  useEffect(() => {
    if (data) {
      const newSliderElem = [...data];
      newSliderElem.unshift(...data.slice(-3));
      newSliderElem.push(...data.slice(0, 3));
      setSliderElem(newSliderElem);
    }
  }, [isLoad]);
  useEffect(() => {
    const slider = document.querySelector(
      `.${styles.sliderLine}`
    ) as HTMLElement | null;
    function turnOff(event: TransitionEvent) {
      if (event.target == slider) {
        console.log('прок')
        setFlagAnimation(false);
      }
    }

    slider?.addEventListener("transitionend", turnOff);
  }, []);
  function swipeWidthCard(swipe: number) {
    setWidthCard(swipe);
  }
  function moveLeft() {
    if (flagAnimation) {
      return null;
    }
    setIsAnimation(true);
    setActiveElem(activeElem - 1);

    setFlagAnimation(true);
  }

  function moveRight() {
    if (flagAnimation) {
      return null;
    }
    setIsAnimation(true);
    setActiveElem(activeElem + 1);
    setFlagAnimation(true);
  }

  useEffect(() => {
    if (flagAnimation == false) {
      setIsAnimation(false);
    }
    if ((activeElem === 1 || activeElem === 24) && flagAnimation === false) {
      setActiveElem(activeElem === 1 ? 21 : 4);
    }
  }, [flagAnimation]);
 function handleTouchStart(e: React.TouchEvent){
  setStartX(e.touches[0].clientX)
  setIsSwiping(true)
  
 }
 function handleTouchMove(e: React.TouchEvent){
  if((!isSwiping)){
    return null
  }
  
  const moveX = e.touches[0].clientX - startX
 
  if(moveX >60){
    
    moveLeft()
  }
  else if(moveX < -60){
    moveRight();
    
  }
  
 }
 const handleTouchEnd = () => {
  setIsSwiping(false); 
};

  return (
    <div
      className={styles.slider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={
        widthCard < 450 ? { aspectRatio: 487 / 731, } : { aspectRatio: 9 / 5 }
      }
    >
      {widthCard < 450 ? null : (
        <>
          <ButtonSlider
            onClick={moveLeft}
            size={`${widthCard / 14 + 10}px`}
            className={styles.arrowLeft}
            type="left"
          />
          <ButtonSlider
            onClick={moveRight}
            size={`${widthCard / 14 + 10}px`}
            className={styles.arrowRight}
            type="right"
          />
        </>
      )}
      <div
        style={{
          transform: `translateX(${offset}px)`,
          transition: isAnimation ? `transform ${speedAnimation}ms` : undefined,
        }}
        className={styles.sliderLine}
      >
        {sliderElem.map((elem, id) => {
          return (
            <BigCard
              typeImage={widthCard < 450 ? "poster_path" : "backdrop_path"}
              swipeCard={swipeWidthCard}
              key={id}
              isVisibleLink={id === activeElem ? true : false}
              card={elem}
            ></BigCard>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
