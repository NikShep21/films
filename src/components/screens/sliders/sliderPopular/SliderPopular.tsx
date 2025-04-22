'use client'
import { getMassiveTitles } from '@/api/response'
import { MassiveMovieType, MassiveTvType } from '@/api/types'
import Card from '@/components/CardsSlider/card/Card'
import Slider from '@/components/slider/Slider'
import Switcher from '@/components/ui/Switcher/Switcher'
import { useResize } from '@/hooks/useResize'
import useResponse from '@/hooks/useResponse'
import { defaultOverrides } from 'next/dist/server/require-hook'
import React, { useRef, useState } from 'react'
import styles from '../baseStyles.module.scss'
const SliderPopular = () => {
    const [typeTitle, setTypeTitle] = useState<'Movie'|'Tv'>('Movie')
    
    const [data, isLoad, errors] = useResponse(()=> getMassiveTitles('popular',typeTitle == 'Movie' ? 'movie':'tv'),[typeTitle])
    const containerRef = useRef<HTMLDivElement>(null);
    const { isScreenVsm } = useResize(containerRef);
    function setType(switchName:'Movie'|'Tv'){
        setTypeTitle(switchName)
    }
    
  return (
    <div ref={containerRef} className={styles.sliderContainer}>
      <div className={styles.containerInfo}>
        <div className={styles.nameCategory}>Popular</div>
        <Switcher
          typeSwitcher={isScreenVsm ? "dropDown" : "default"}
          funcChangeState={setType}
          params={['Movie','Tv']}
        />
      </div>
      <Slider<MassiveMovieType|MassiveTvType>
        
        data={data}
        isLoad={isLoad}
        maxWidthCard={169}
        renderItem={(item, index, widthCard) => (
            <Card key={index} data={item} widthCard={widthCard} />
          )}
      />
    </div>
  )
}

export default SliderPopular