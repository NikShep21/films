"use client";
import styles from "./MainSlider.module.scss";
import BigCard from "../bigCard/BigCard";
import { useEffect, useRef, useState } from "react";
import ButtonSlider from "../ui/buttonSlider/ButtonSlider";
import { MassiveMovie } from "@/api/types";
import { useResize } from "@/hooks/useResize";
import useIsAnimation from "@/hooks/useIsAnimation";

interface SliderType {
  data: MassiveMovie[] | null;
  speedAnimation?: number;
  isLoad: boolean;
  aspect: string;
  aspectMobile: string;
}

const Slider = ({
  data,
  isLoad,
  speedAnimation = 400,
  aspect,
  aspectMobile,
}: SliderType) => {
  const [activeElem, setActiveElem] = useState<number>(2);
  const [sliderElem, setSliderElem] = useState<(MassiveMovie | undefined)[]>(
    Array(10).fill(undefined)
  );

  const sliderRef = useRef<HTMLDivElement>(null)
  const [flagAnimation, setFlagAnimation] = useState<boolean>(true);
  const isAnimation = useIsAnimation(sliderRef);

  const {widthScreen,isScreenVsm} = useResize()
  const [widthCard,setWidthCard] = useState(900)

  const [startX, setStartX] = useState<number>(0);
  const [isSwiping, setIsSwiping] = useState<boolean>(false);

  const offset = activeElem * -(40 + widthCard);
  //парсинг нового массива
  useEffect(() => {
    if (data) {
      const newSliderElem = [...data];
      newSliderElem.unshift(...data.slice(-3));
      newSliderElem.push(...data.slice(0, 3));
      setSliderElem(newSliderElem);
    }
  }, [isLoad]);
  
  function swipeWidthCard(swipe: number) {
    setWidthCard(swipe);
  }
  //действия слайдера
  function moveLeft() {
    if (isAnimation || !data) {
      return null;
    }
    setFlagAnimation(true);
    setActiveElem(activeElem - 1);

  }

  function moveRight() {
    if (isAnimation || !data) {
      return null;
    }
    setFlagAnimation(true);
    setActiveElem(activeElem + 1);
    
  }
  //переход слайдера на начальную позицию
  useEffect(() => {
    if (isAnimation == false) {
      setFlagAnimation(false);
    }
    if ((activeElem === 1 || activeElem === 24) && isAnimation === false) {
      setActiveElem(activeElem === 1 ? 21 : 4);
    }
  }, [isAnimation]);

  //свайп пальцем
  function handleTouchStart(e: React.TouchEvent) {
    setStartX(e.touches[0].clientX);
    setIsSwiping(true);
  }
  function handleTouchMove(e: React.TouchEvent) {
    if (!isSwiping) {
      return null;
    }

    const moveX = e.touches[0].clientX - startX;

    if (moveX > 60) {
      moveLeft();
      setIsSwiping(false);
    } else if (moveX < -60) {
      moveRight();
      setIsSwiping(false);
    }
  }

  return (
    <div
      className={styles.slider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      style={
        isScreenVsm 
          ? { aspectRatio: aspectMobile }
          : { aspectRatio: aspect }
      }
    >
      {isScreenVsm ? null : (
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
          transition: flagAnimation ? `transform ${speedAnimation}ms` : undefined,
        }}
        className={styles.sliderLine}
        ref = {sliderRef}
      >
        {sliderElem.map((elem, id) => {
          return (
            <BigCard
              typeImage={isScreenVsm ? "poster_path" : "backdrop_path"}
              swipeCard={swipeWidthCard}
              key={id}
              isVisibleLink={id === activeElem ? true : false}
              card={elem}
              aspect={aspect}
              aspectMobile={aspectMobile}
            ></BigCard>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
