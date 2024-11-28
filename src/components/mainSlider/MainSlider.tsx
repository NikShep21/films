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
  
  const [activeElem, setActiveElem] = useState<number>(2)
    const [isLoad, errors, data] = useResponse(getMovieMassive, typeFilms);
    const [isAnimation, setIsAnimation] = useState<boolean>(true)
    const [sliderElem, setSliderElem] = useState(Array(20).fill(undefined))
    const [flagAnimation, setFlagAnimation] = useState<boolean>(false)
    const offset = activeElem * -940;
    useEffect(()=>{
      if (!isLoad){
        const newSliderElem = [...data]
        newSliderElem.unshift(...data.slice(-3))
        setSliderElem(newSliderElem)
      }
    },[isLoad])
    function moveLeft(){
      setActiveElem(activeElem-1)
      setIsAnimation(true)
    }
    function moveRight(){
      setActiveElem(activeElem+1)
      setIsAnimation(true)
    }
    
    useEffect(() => {

      if (activeElem === 1 || activeElem === 22) {
        
          setTimeout(() => {
            setIsAnimation(false); 
            const newElem = activeElem === 1 ? 21 : 2;
            
            
            setActiveElem(newElem);
            
          }, 300); 
      }
  }, [activeElem]);
  
  return (
    
    
    
    <div className={styles.slider}>
      <ButtonSlider onClick={moveLeft} size='70px' className={styles.arrowLeft}  type='left'/>
      <div style = {{left: offset,  transition: isAnimation ? 'all 0.3s' : undefined }} className={styles.sliderLine}>
        {
          sliderElem.map((elem)=>{
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