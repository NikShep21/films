"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Slider.module.scss";
import useIsAnimation from "@/hooks/useIsAnimation";
import ButtonSlider from "../ui/buttonSlider/ButtonSlider";
import { useResize } from "@/hooks/useResize";
import { count } from "console";

interface PropsType<T> {
  data: T[] | null;
  isLoad: boolean;
  maxWidthCard: number;

  renderItem: (item: T | null, index: number, widthCard: number) => JSX.Element;
}
const Slider = <T,>({
  data,
  isLoad,
  maxWidthCard,
  renderItem,
}: PropsType<T>) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const [sliderElems, setSliderElems] = useState<(T | null)[]>(
    Array(10).fill(null)
  );

  const { widthScreen } = useResize(sliderContainerRef);
  
  const [activeElem, setActiveElem] = useState<number>(0);
  const isAnimation = useIsAnimation(sliderRef);
  const countElems = Math.ceil((widthScreen + 14) / (maxWidthCard + 15));
  const [widthCard, setWidthCard] = useState<number>(
    widthScreen / countElems - (15 - 15 / countElems)
  );
  const offset = -(activeElem * (widthCard + 15));
  const [isSwiping, setIsSwiping] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);

  useEffect(() => {
    setWidthCard(widthScreen / countElems - (15 - 15 / countElems));
  }, [widthScreen]);
  function moveLeft() {
    if (isAnimation || !data) {
      return null;
    }
    if (activeElem < countElems) {
      setActiveElem(0);
    } else {
      setActiveElem(activeElem - countElems);
    }
  }

  function moveRight() {
    if (isAnimation || !data) {
      return null;
    }
    if (sliderElems.length - (activeElem + countElems) < countElems) {
      setActiveElem(
        activeElem + sliderElems.length - (activeElem + countElems)
      );
    } else {
      setActiveElem(activeElem + countElems);
    }
  }

  useEffect(() => {
    if (data) {
      setSliderElems(data);
    } else {
      setSliderElems(Array(10).fill(null));
    }
  }, [data]);
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
    <div className={styles.sliderContainer}>
      {activeElem === 0 ? null : (
        <ButtonSlider
          onClick={moveLeft}
          size={`${widthCard / 14 + 10}px`}
          className={styles.arrowLeft}
          type="left"
        />
      )}
      {activeElem + countElems >= sliderElems.length ? null : (
        <ButtonSlider
          onClick={moveRight}
          size={`${widthScreen/75+10 }px`}
          className={styles.arrowRight}
          type="right"
        />
      )}
      <div
        className={styles.slider}
        ref={sliderContainerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div
          style={{ left: offset }}
          className={styles.sliderLine}
          ref={sliderRef}
        >
          {sliderElems.map((elem, id) => renderItem(elem, id, widthCard))}
        </div>
      </div>
    </div>
  );
};
export default Slider;
