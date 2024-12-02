'use client'
import styles from './MainSlider.module.scss'
import { getMovieMassive } from "@/api/response";
import useResponse from "@/hooks/useResponse";
import BigCard from '../bigCard/BigCard';
import { useEffect, useState } from 'react';
import ButtonSlider from '../ui/buttonSlider/ButtonSlider';
import { MassiveMovie } from '@/api/types';

interface SliderType{
  typeFilms: "now_playing" | "popular" | "top_rated" | "upcoming",
  speedAnimation?:number,
  
}

const Slider = ({typeFilms, speedAnimation = 400}:SliderType) => {
  
  const [activeElem, setActiveElem] = useState<number>(2)
    const [isLoad, errors, data] = useResponse<MassiveMovie[]>(getMovieMassive, typeFilms);
    const [isAnimation, setIsAnimation] = useState<boolean>(true)
    const [sliderElem, setSliderElem] = useState<(MassiveMovie | undefined)[]>(Array(20).fill(undefined))
    const [flagAnimation, setFlagAnimation] = useState<boolean>(false)
    const [widthCard,setWidthCard] = useState<number>(900)
    
    const offset = activeElem * -(40+widthCard)
    
    
    useEffect(()=>{
      if (data){
        const newSliderElem = [...data]
        newSliderElem.unshift(...data.slice(-3))
        newSliderElem.push(...data.slice(0,3))
        setSliderElem(newSliderElem)
      }
    },[isLoad])
    useEffect(()=>{
      const slider = document.querySelector(`.${styles.sliderLine}`) as HTMLElement | null
      function turnOff(event:TransitionEvent){
        if(event.target == slider){
          setFlagAnimation(false)
        }
      }
      
      slider?.addEventListener('transitionend',turnOff)
     
    },[])
    function swipeWidthCard(swipe:number){
      setWidthCard(swipe)
    }
    function moveLeft(){
      if (flagAnimation){
        return null
      }
      setIsAnimation(true)
      setActiveElem(activeElem-1)

      setFlagAnimation(true)
    }

    function moveRight(){
      if (flagAnimation){
        return null
      }
      setIsAnimation(true)
      setActiveElem(activeElem+1)
      setFlagAnimation(true)
      
    }
    
    useEffect(() => {
      if(flagAnimation == false){
        setIsAnimation(false); 
      }
      if ((activeElem === 1 || activeElem === 24) && flagAnimation === false) {
        setActiveElem(activeElem === 1 ? 21 : 4);
      }
  }, [flagAnimation]);
  
  return (
    
    <div className={styles.sliderContainer}>

    
    <div className={styles.slider}> 
      
    
        <ButtonSlider onClick={moveLeft} size='70px' className={styles.arrowLeft}  type='left'/>
      
      <div style = {{left: offset,  transition: isAnimation ? `left ${speedAnimation}ms` : undefined }} className={styles.sliderLine}>
        {
          sliderElem.map((elem, id)=>{
            return(
              <BigCard swipeCard={swipeWidthCard} key={id} isVisibleLink={id===activeElem ? true:false}  card={elem}></BigCard>
            )
          })
        }
      </div>
      
        <ButtonSlider onClick={moveRight} size='70px' className={styles.arrowRight} type='right'/>
      
    </div>
    </div>
    
  )
}

export default Slider