'use client'
import styles from './MainSlider.module.scss'
import { getMovieMassive } from "@/api/response";
import useResponse from "@/hooks/useResponse";
import BigCard from '../bigCard/BigCard';
import { useEffect, useState } from 'react';
import ButtonSlider from '../ui/buttonSlider/ButtonSlider';
interface SliderType{
  typeFilms: "now_playing" | "popular" | "top_rated" | "upcoming",
  speedAnimation:number,
  
}

const Slider = ({typeFilms, speedAnimation = 300}:SliderType) => {
  
  const [activeElem, setActiveElem] = useState<number>(2)
    const [isLoad, errors, data] = useResponse(getMovieMassive, typeFilms);
    const [isAnimation, setIsAnimation] = useState<boolean>(true)
    const [sliderElem, setSliderElem] = useState(Array(20).fill(undefined))
    const [flagAnimation, setFlagAnimation] = useState<boolean>(false)
    const [countELems, setCountElems] = useState<number>()
    const offset = activeElem * -940;
    
    useEffect(()=>{
      if (!isLoad){
        const newSliderElem = [...data]
        newSliderElem.unshift(...data.slice(-3))
        setSliderElem(newSliderElem)
      }
    },[isLoad])
    function swapFlag(){
      setFlagAnimation(true)
      setTimeout(()=>{
        setFlagAnimation(false)
      },300)
    }
    function moveLeft(){
      if (flagAnimation){
        return 
      }
      setActiveElem(activeElem-1)
      setIsAnimation(true)
      swapFlag()
      
    }
    function moveRight(){
      if (flagAnimation){
        return 
      }
      setActiveElem(activeElem+1)
      setIsAnimation(true)
      setFlagAnimation(true)
      swapFlag()
    }
    
    useEffect(() => {

      if (activeElem === 1 || activeElem === 22) {
        
          setTimeout(() => {
            setIsAnimation(false); 
            const newElem = activeElem === 1 ? 21 : 2;
            
            
            setActiveElem(newElem);
            
          }, speedAnimation); 
      }
  }, [activeElem]);
  
  return (
    
    
    
    <div className={styles.slider}>
      <div className={styles.buttonSliderLeftContainer}>

        <ButtonSlider onClick={moveLeft} size='70px' className={styles.arrowLeft}  type='left'/>
      </div>
      <div style = {{left: offset,  transition: isAnimation ? `all ${speedAnimation}ms` : undefined }} className={styles.sliderLine}>
        {
          sliderElem.map((elem, id)=>{
            return(
              <BigCard key={id}  card={elem}></BigCard>
            )
          })
        }
      </div>
      <div className={styles.buttonSliderRightContainer}>
        <ButtonSlider onClick={moveRight} size='70px' className={styles.arrowRight} type='right'/>
      </div>
    </div>
    
  )
}

export default Slider