"use client";
import styles from "./MainSlider.module.scss";
import BigCard from "../bigCard/BigCard";
import { useEffect, useState } from "react";
import ButtonSlider from "../ui/buttonSlider/ButtonSlider";
import { MassiveMovie } from "@/api/types";

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
  const [isAnimation, setIsAnimation] = useState<boolean>(true);
  const [sliderElem, setSliderElem] = useState<(MassiveMovie | undefined)[]>(
    Array(10).fill(undefined)
  );
  const [flagAnimation, setFlagAnimation] = useState<boolean>(false);
  const [widthCard, setWidthCard] = useState<number>(900);
  const [startX, setStartX] = useState<number>(0);
  const [isSwiping, setIsSwiping] = useState<boolean>(false);
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
        setFlagAnimation(false);
      }
    }

    slider?.addEventListener("transitionend", turnOff);
  }, []);
  function swipeWidthCard(swipe: number) {
    setWidthCard(swipe);
  }
  function moveLeft() {
    if (flagAnimation || !data) {
      return null;
    }
    setIsAnimation(true);
    setActiveElem(activeElem - 1);

    setFlagAnimation(true);
  }

  function moveRight() {
    if (flagAnimation || !data) {
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
        widthCard < 450
          ? { aspectRatio: aspectMobile }
          : { aspectRatio: aspect }
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
