'use client'
import { getMassiveTitles, getTrending } from '@/api/response'
import { MassiveMovie, MassiveTv } from '@/api/types'
import Card from '@/components/CardsSlider/card/Card'
import Slider from '@/components/slider/Slider'
import Switcher from '@/components/ui/Switcher/Switcher'
import { useResize } from '@/hooks/useResize'
import useResponse from '@/hooks/useResponse'
import { defaultOverrides } from 'next/dist/server/require-hook'
import React, { useEffect, useRef, useState } from 'react'
import styles from '../baseStyles.module.scss'
const SliderTopRated = () => {
    const [typeTitle, setTypeTitle] = useState<'Day'|'Week'>('Day')
    
    const [data, isLoad, errors] = useResponse(()=> getTrending(typeTitle === 'Day' ? 'day':'week'),[typeTitle])

    const containerRef = useRef<HTMLDivElement>(null);
    const { isScreenVsm } = useResize(containerRef);
    function setType(switchName:'Day'|'Week'){
        setTypeTitle(switchName)
    }
    
  return (
    <div ref={containerRef} className={styles.sliderContainer}>
      <div className={styles.containerInfo}>
        <div className={styles.nameCategory}>Trending</div>
        <Switcher
          typeSwitcher={isScreenVsm ? "dropDown" : "default"}
          funcChangeState={setType}
          params={['Day','Week']}
        />
      </div>
      <Slider<MassiveMovie|MassiveTv>
        
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

export default SliderTopRated