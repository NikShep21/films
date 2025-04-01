'use client'
import { getMassiveTitles } from '@/api/response'
import { MassiveMovie, MassiveTv } from '@/api/types'
import Card from '@/components/CardsSlider/card/Card'
import Slider from '@/components/slider/Slider'
import Switcher from '@/components/ui/Switcher/Switcher'
import { useResize } from '@/hooks/useResize'
import useResponse from '@/hooks/useResponse'
import { defaultOverrides } from 'next/dist/server/require-hook'
import React, { useRef, useState } from 'react'
import styles from '../baseStyles.module.scss'
const SliderNowPlaying = () => {
    
    
    const [data, isLoad, errors] = useResponse(()=> getMassiveTitles('now_playing','movie'))
    
    
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.containerInfo}>
        <div className={styles.nameCategory}>Now playing</div>
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

export default SliderNowPlaying