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
        newSliderElem.push(...data.slice(0,3))
        setSliderElem(newSliderElem)
      }
    },[isLoad])
    useEffect(()=>{
      const slider = document.querySelector(`.${styles.sliderLine}`)
      slider?.addEventListener('transitionend',()=>setFlagAnimation(false))
      return ()=> slider?.removeEventListener('transitionend',()=>setFlagAnimation(false))
    },[])
    
    function moveLeft(){
      if (flagAnimation){
        return 
      }
      setActiveElem(activeElem-1)
      setIsAnimation(true)
      setFlagAnimation(true)
    }

    function moveRight(){
      if (flagAnimation){
        return 
      }
      setActiveElem(activeElem+1)
      setIsAnimation(true)
      setFlagAnimation(true)
      
    }
    
    useEffect(() => {

      if ((activeElem === 1 || activeElem === 24) && flagAnimation === false) {
    
        setIsAnimation(false); 
        const newElem = activeElem === 1 ? 21 : 4;
        setActiveElem(newElem);

      }
  }, [flagAnimation]);
  
  return (
    
    
    
    <div className={styles.slider}>
      

        <ButtonSlider onClick={moveLeft} size='70px' className={styles.arrowLeft}  type='left'/>
      
      <div style = {{left: offset,  transition: isAnimation ? `all ${speedAnimation}ms` : undefined }} className={styles.sliderLine}>
        {
          sliderElem.map((elem, id)=>{
            return(
              <BigCard key={id}  card={elem}></BigCard>
            )
          })
        }
      </div>
      
        <ButtonSlider onClick={moveRight} size='70px' className={styles.arrowRight} type='right'/>
      
    </div>
    
  )
}

export default Slider