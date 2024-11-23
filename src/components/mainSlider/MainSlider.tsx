'use client'
import styles from './MainSlider.module.scss'
import { getMovieMassive } from "@/api/response";
import useResponse from "@/hooks/useResponse";
import BigCard from '../bigCard/BigCard';
import { useState } from 'react';
import ButtonSlider from '../ui/buttonSlider/ButtonSlider';
interface SliderType{
    typeFilms: "now_playing" | "popular" | "top_rated" | "upcoming",

}

const Slider = ({typeFilms}:SliderType) => {
    const [isLoad, errors, data] = useResponse(getMovieMassive, typeFilms);
    const [countActiveSlider, setCountActiveSlider] = useState(1)
  return (
    <div className={styles.slider}>
      <ButtonSlider size='70px' className={styles.arrowLeft}  style={{'position':'absolute'}} type='left'/>
      <div className={styles.sliderLine}>
        <BigCard card={isLoad ? null:data[countActiveSlider]}></BigCard>
        <BigCard card={isLoad ? null:data[countActiveSlider+1]}></BigCard>
        <BigCard card={isLoad ? null:data[countActiveSlider+2]}></BigCard>
      </div>
      <ButtonSlider size='70px' className={styles.arrowRight}  style={{'position':'absolute'}} type='right'/>
    </div>
  )
}

export default Slider