'use client'
import styles from './MainSlider.module.scss'
import { getMovieMassive } from "@/api/response";
import useResponse from "@/hooks/useResponse";
import BigCard from '../bigCard/BigCard';
import { useEffect, useState } from 'react';
import ButtonSlider from '../ui/buttonSlider/ButtonSlider';
interface SliderType{
    typeFilms: "now_playing" | "popular" | "top_rated" | "upcoming",

}

const Slider = ({typeFilms}:SliderType) => {
    const [isLoad, errors, data] = useResponse(getMovieMassive, typeFilms);
    const [sliderData, setSliderData] = useState([])
    console.log(sliderData)
    const [countActiveSlider, setCountActiveSlider] = useState(2)
    const [offset, setOffset] = useState<number>(-1880)
    function prepareCount(count:number){
      if (count > 20){
        return count - 20
      }
      if (count < 0){
        return count + 20
      }
      else{
        return count
      }
    }
    function moveLeft(){
      setOffset(offset+940)
      setCountActiveSlider(countActiveSlider-1)
      setSliderData(sliderData.slice(0,-1))
      setSliderData([data[prepareCount(countActiveSlider-3)], ...sliderData])
    }
    function moveRight(){
      setOffset(offset-940)
      setCountActiveSlider(countActiveSlider+1)
      setSliderData(sliderData.slice(1))
      setSliderData([...sliderData, data[prepareCount(countActiveSlider+3)]])
    }
    useEffect(()=>{
      if (!isLoad){
        setSliderData(data.slice(0,5))
      }
    },[isLoad])
    console.log(sliderData)
  return (
    <div className={styles.slider}>
      <ButtonSlider onClick={moveLeft} size='70px' className={styles.arrowLeft}  type='left'/>
      <div style = {{left: offset}} className={styles.sliderLine}>
        {
          sliderData.map((elem)=>{
            return(
              <BigCard  card={elem}></BigCard>
            )
          })
        }
      </div>
      <ButtonSlider onClick={moveRight} size='70px' className={styles.arrowRight} type='right'/>
    </div>
  )
}

export default Slider