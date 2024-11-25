import { useEffect, useState } from "react";
import styles from "./MainSlider.module.scss";
import { getMovieMassive } from "@/api/response";
import useResponse from "@/hooks/useResponse";
import BigCard from "../bigCard/BigCard";
import ButtonSlider from "../ui/buttonSlider/ButtonSlider";

interface SliderType {
  typeFilms: "now_playing" | "popular" | "top_rated" | "upcoming";
}

const Slider = ({ typeFilms }: SliderType) => {
  const [isLoad, errors, data] = useResponse(getMovieMassive, typeFilms);
  const [countActiveSlider, setCountActiveSlider] = useState(2);
  const [sliderData, setSliderData] = useState([]);

  const SLIDES_TO_SHOW = 5;
  const SLIDE_WIDTH = 940;

  // Подготовка индекса с учетом цикличности
  const prepareIndex = (index: number) => {
    if (index >= data.length) return index - data.length;
    if (index < 0) return index + data.length;
    return index;
  };

  // Генерация массива для отображения
  const generateSliderData = (activeIndex: number) => {
    const slides = [];
    for (let i = -2; i <= 2; i++) {
      slides.push(data[prepareIndex(activeIndex + i)]);
    }
    return slides;
  };

  // Движение влево
  const moveLeft = () => {
    const newActiveIndex = prepareIndex(countActiveSlider - 1);
    setCountActiveSlider(newActiveIndex);
    setSliderData(generateSliderData(newActiveIndex));
  };

  // Движение вправо
  const moveRight = () => {
    const newActiveIndex = prepareIndex(countActiveSlider + 1);
    setCountActiveSlider(newActiveIndex);
    setSliderData(generateSliderData(newActiveIndex));
  };

  // Инициализация данных
  useEffect(() => {
    if (!isLoad) {
      setSliderData(generateSliderData(countActiveSlider));
    }
  }, [isLoad, countActiveSlider]);

  return (
    <div className={styles.slider}>
      <ButtonSlider onClick={moveLeft} size="70px" className={styles.arrowLeft} type="left" />
      <div
        className={styles.sliderLine}
        style={{
          transform: `translateX(${-SLIDE_WIDTH}px)`,
        }}
      >
        {sliderData.map((elem, index) => (
          <BigCard key={index} card={elem} />
        ))}
      </div>
      <ButtonSlider onClick={moveRight} size="70px" className={styles.arrowRight} type="right" />
    </div>
  );
};

export default Slider;
